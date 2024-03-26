import BrandsRepository from "../stores.repository";

describe("BrandsRepository", () => {
  it("should fetch brands successfully", async () => {
    // Prepare
    const fetch = jest.fn();
    const repository = new BrandsRepository(fetch);

    // Execute
    await repository.getBrands();

    // Validate
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("api.stores/v1/brands");
  });
});
