import { fetcher } from "@/services/server/fetch";
import BrandsRepository from "./stores.repository";

const storeRepository = new BrandsRepository(fetcher);

export { storeRepository };
