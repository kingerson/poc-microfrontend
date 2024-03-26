import { api } from "..";
import responseHandler from "../responseHandler/defaultResponse";
import { GetBannersResponseInterface } from "./banner.interface";
export const bannerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBanners: builder.query<GetBannersResponseInterface[], void>({
      query: () => ({
        url: "/api.generic/v1/banner/get-banners",
        method: "GET",
        responseHandler,
      }),
    }),
  }),
});

export const { useGetBannersQuery } = bannerApi;
