"use server";

import { cookies } from "next/headers";
import { HTTPMethod } from "@/models/httpMethod.enum";
import { FetcherType } from "./FetcherType";
import { stringify } from "querystring";

const buildUrl = (
  baseUrl: string,
  endpoint: string,
  params: any,
  method: HTTPMethod
) => {
  if (method === HTTPMethod.Get) {
    const url = new URL(`${baseUrl}/${endpoint}`);
    if (params) {
      url.search = stringify(params);
    }
    return url.toString();
  }
  return `${baseUrl}/${endpoint}`;
};

const fetcher: FetcherType = async (
  endpoint,
  params,
  method = HTTPMethod.Get
) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_SERVICE || "";
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");
  const url = buildUrl(baseUrl, endpoint, params, method);
  let body;
  if (params && method !== HTTPMethod.Get) {
    body = JSON.stringify(params);
  }
  const options = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken?.value}`,
    },
    ...(body && { body }),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response?.json();
  } catch (error) {
    return {
      data: {},
    };
  }
};

export default fetcher;
