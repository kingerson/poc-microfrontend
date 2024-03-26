import { FetcherType } from "@/services/server/fetch/FetcherType";
import {
  IGetAllProductsByBrandRequest,
  IGetAllProductsByBrandResponse,
  ISectionsByBrands,
} from "./productsByBrand.interface";

export default class ProductsRepository {
  private fetcher: FetcherType;

  constructor(fetcher: FetcherType) {
    this.fetcher = fetcher;
  }

  async getAllProductsByBrand(
    params: IGetAllProductsByBrandRequest
  ): Promise<ISectionsByBrands> {
    let menuTypeIdCookie = params?.menuTypeId;

    const products = await this.fetcher<IGetAllProductsByBrandResponse>(
      "api.products/v1/sections/get-sections-with-all-products-by-brand",
      {
        brandSlug: params?.brandSlug,
        menuTypeId: menuTypeIdCookie,
        storeId: params?.storeId,
      }
    );

    return products?.data?.[0] || [];
  }
}
