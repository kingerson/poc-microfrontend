import { productsRepository } from "./repositories/products";
import { storeRepository } from "./repositories/stores";

const services = {
  stores: storeRepository,
  products: productsRepository,
};

export default services;
