import { FetcherType } from "@/services/server/fetch/FetcherType";
import { IBrandsResponse } from "./brands.interface";

export default class BrandsRepository {
  private fetcher: FetcherType;

  constructor(fetcher: FetcherType) {
    this.fetcher = fetcher;
  }

  async getBrands() {
    const brands = await this.fetcher<IBrandsResponse>("api.stores/v1/brands");
    return brands;
  }
}
