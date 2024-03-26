import ProductsRepository from "../products.repository";

describe("ProductsRepository", () => {
  it("should fetch all products by brand successfully", async () => {
    // Prepare
    const fetch = jest.fn();
    const repository = new ProductsRepository(fetch);
    const params = {
      brandSlug: "example-brand",
      menuTypeId: "example-menu-type",
      storeId: "example-store",
    };

    // Execute
    const result = await repository.getAllProductsByBrand(params);

    // Validate
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "api.products/v1/sections/get-sections-with-all-products-by-brand",
      {
        brandSlug: params.brandSlug,
        menuTypeId: params.menuTypeId,
        storeId: params.storeId,
      }
    );
  });
});
