import { NextRequest, NextResponse } from "next/server";
import {
  RequestCookies,
  ResponseCookies,
} from "next/dist/compiled/@edge-runtime/cookies";

/**
 * Copy cookies from the Set-Cookie header of the response to the Cookie header of the request,
 * so that it will appear to SSR/RSC as if the user already has the new cookies.
 */
const applySetCookie = (req: NextRequest, res: NextResponse) => {
  const setCookies = new ResponseCookies(res.headers);

  const newReqHeaders = new Headers(req.headers);
  const newReqCookies = new RequestCookies(newReqHeaders);
  setCookies.getAll().forEach((cookie) => newReqCookies.set(cookie));

  const dummyRes = NextResponse.next({ request: { headers: newReqHeaders } });

  dummyRes.headers.forEach((value, key) => {
    if (
      key === "x-middleware-override-headers" ||
      key.startsWith("x-middleware-request-")
    ) {
      res.headers.set(key, value);
    }
  });
};

export async function middleware(request: NextRequest) {
  // Ask for the `accessToken` cookie on the request using the `RequestCookies` API
  const params = {
    userName: process.env.NEXT_PUBLIC_USER_LOGIN,
    password: process.env.NEXT_PUBLIC_USER_PASSWORD,
  };
  const options = {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  let token = "";
  let error = { status: false, message: "" };
  const response = NextResponse.next();

  try {
    const data = await (
      await fetch(
        `${process.env.NEXT_PUBLIC_BASE_SERVICE}/api.security/v1/authenticate/login`,
        options
      )
    ).json();
    token = data.accessToken || "";
    error = { status: true, message: data.message };
  } catch (err) {
    token = "";
  }

  const keyCookie = process.env.NEXT_PUBLIC_ACCESSTOKENKEY || "accessToken";
  response.cookies.set(keyCookie, token);
  response.cookies.set("authErrors", JSON.stringify(error));
  applySetCookie(request, response);

  return response;
}
