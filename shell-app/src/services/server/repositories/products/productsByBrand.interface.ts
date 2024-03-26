import { IProduct } from "./products.interface";

export interface IGetAllProductsByBrandRequest {
  menuTypeId?: string;
  brandSlug?: string;
  storeId?: string;
}

interface ISection {
  name: string;
  products: IProduct[];
}

export interface ISectionsByBrands {
  name: string;
  slug: string;
  alt: string;
  title: string;
  metaDescription: string;
  urlImage?: string;
  urlImageDisabled?: string;
  sectionAll: boolean;
  sections: ISection[];
}

export interface IGetAllProductsByBrandResponse {
  data: ISectionsByBrands[];
}
