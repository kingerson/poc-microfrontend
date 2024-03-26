import { HTTPMethod } from '@/models/httpMethod.enum';
import responseHandler from '../responseHandler/defaultResponse';
import { IMenuByRoleResponse } from './menu.interface';
import { api } from '..';

export const menuApi = api.injectEndpoints({
  endpoints: builder => ({
    getMenuByRole: builder.query<IMenuByRoleResponse[], void>({
      query: data => ({
        url: `/api.manager/v1/menu/get-menu-by-rol`,
        method: HTTPMethod.Get,
        body: data,
        responseHandler
      })
    })
  })
});

export const { useGetMenuByRoleQuery } = menuApi;
