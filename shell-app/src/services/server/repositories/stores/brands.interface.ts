export interface IBrands {
  id: string;
  brandId?: number;
  brandCode?: string;
  name: string;
  slug: string;
  image: string;
  urlImage: string;
  urlImageDisabled: string;
  order?: number;
  statusId?: string;
  metaDescription?: string;
  metaKeywords?: string;
  urlBannerDesktop?: string;
  urlBannerMobile?: string;
  slugBrand?: string;
  enabled: boolean;
}

export interface IBrandsResponse {
  data: IBrands[];
}
