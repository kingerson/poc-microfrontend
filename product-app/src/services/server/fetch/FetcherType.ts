import { HTTPMethod } from '@/models/httpMethod.enum';

export type FetcherType = <T>(endpoint: string, params?: any, method?: HTTPMethod) => Promise<T>;
