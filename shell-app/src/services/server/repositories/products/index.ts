import { fetcher } from "@/services/server/fetch";
import ProductsRepository from "./products.repository";

const productsRepository = new ProductsRepository(fetcher);

export { productsRepository };
