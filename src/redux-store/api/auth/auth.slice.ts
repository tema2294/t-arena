import {createApi} from '@reduxjs/toolkit/query/react';
import {LOCAL_STORAGE_KEYS} from "constants/localStorageKeys";
import {constructLSItem} from "tools/local-storage";

import {BACKEND_REGISTER_AUTH_KEY, EApiMethods} from "../api.constants";
import {baseQuery} from "./auth.baseQuery";
import {
    IGetTokenQueryParams,
    IGetTokenResult,
    ILoginRequest,
    ILoginResponse,
    IRefreshTokenQueryParams,
    IRefreshTokenResult,
    IRegisterQueryParams,
    IRegisterQueryResult
} from "./auth.types";

const AuthSlice = createApi({
    reducerPath: 'authApi',
    baseQuery: baseQuery,
    endpoints: builder => ({
        getToken: builder.mutation<IGetTokenResult, IGetTokenQueryParams>({
            query: (body) => ({
                body,
                url: '/token',
                method: EApiMethods.Post,
            }),
            onQueryStarted: async (arg, {dispatch, queryFulfilled}): Promise<void> => {
                try {
                    const {data} = await queryFulfilled;
                    const {access, refresh} = data;

                    const {setItemData: setAccessToken} = constructLSItem(LOCAL_STORAGE_KEYS.access_token);
                    const {setItemData: setRefreshToken} = constructLSItem(LOCAL_STORAGE_KEYS.refresh_token);

                    setRefreshToken(refresh);
                    setAccessToken(access);
                } catch (err) {
                }
            }
        }),
        register: builder.mutation<IRegisterQueryResult, IRegisterQueryParams>({
            query: (body) => {
                return {
                    body,
                    headers: {
                        'Authorization': `Basic ${BACKEND_REGISTER_AUTH_KEY}`
                    },
                    url: '/api/register',
                    method: EApiMethods.Post,
                }
            },
        }),
        login: builder.mutation<ILoginResponse, ILoginRequest>({
            query: ({login, pass}) => {
                const authKey = btoa(`${login}:${pass}`)

                return {
                    body: {},
                    url: '/api/token',
                    headers: {
                        'Authorization': `Basic ${authKey}`
                    },
                    method: EApiMethods.Post,
                }
            },
        }),
        updateToken: builder.mutation<IRefreshTokenResult, IRefreshTokenQueryParams>({
            query: (body) => {
                return {
                    body,
                    url: '/token/refresh',
                    method: EApiMethods.Post,
                }
            },
            onQueryStarted: async (arg, {dispatch, queryFulfilled}): Promise<void> => {
                try {
                    const {data} = await queryFulfilled;
                    const {access} = data;

                    const {setItemData: setAccessToken} = constructLSItem(LOCAL_STORAGE_KEYS.access_token);
                    setAccessToken(access);
                } catch (err) {
                }
            }
        }),

    })
});

export const {useGetTokenMutation, useLoginMutation, useUpdateTokenMutation, useRegisterMutation} = AuthSlice;
export const {getToken, updateToken, login} = AuthSlice.endpoints;
export default AuthSlice;
