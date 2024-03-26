import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import cookie from "react-cookies";

const ReadCookie = (name: string) => {
  if (cookie.load(name) !== undefined) {
    const data = cookie.load(name);
    return data;
  } else {
    return false;
  }
};

const baseQuery = (
  token: string,
  executionId: string
): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> => {
  return fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_SERVICE,
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/json");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        headers.set("ExecutionId", executionId);
      }
      return headers;
    },
  });
};

const dynamicBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  console.log('b')
  const token = await ReadCookie(process.env.NEXT_PUBLIC_ACCESSTOKENKEY || "");
  // const executionId = await GetExecutionIdCookie();
  const result = await baseQuery(token || "", "")(
    args as any,
    api,
    extraOptions
  );
  return result;
};

export const api = createApi({
  baseQuery: dynamicBaseQuery,
  reducerPath: "api",
  tagTypes: [],
  endpoints: () => ({}),
});
