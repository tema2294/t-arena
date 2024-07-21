import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {BaseQueryFn} from "@reduxjs/toolkit/src/query/baseQueryTypes";
import {LOCAL_STORAGE_KEYS} from "constants/localStorageKeys";
import {constructLSItem} from "tools/local-storage";
import {setLoginMode} from "../appState";
import {BASE_URL, EApiVersions} from "./api.constants";
import {TBaseQueryReturnType} from "./api.types";
import {updateToken} from "./auth/auth.slice";
import {IRefreshTokenResult} from "./auth/auth.types";

export const getBaseQuery = (token: string) =>
    fetchBaseQuery({
        baseUrl: `${BASE_URL}/${EApiVersions.V1}`,
        prepareHeaders: (headers) => {
            headers.set("Authorization", `Bearer ${token}`);
            headers.set('Content-Type', 'application/json')

            return headers;
        },
    });


let refreshTokenRequest: Promise<IRefreshTokenResult> | null = null;

export const baseQueryWithReauth: BaseQueryFn = async (args, api, extra): Promise<any> => {
    const {
        getItemData: getAccessToken,
        getIsValueDefined: getIsAccessTokenDefined,
    } = constructLSItem(LOCAL_STORAGE_KEYS.access_token);
    const {
        getItemData: getRefreshToken,
        getIsValueDefined: getIsRefreshTokenDefined,
    } = constructLSItem(LOCAL_STORAGE_KEYS.refresh_token);

    let token = getAccessToken() as string;
    const refreshToken = getRefreshToken() as string;

    const hasToken = getIsAccessTokenDefined();
    const hasRefreshToken = getIsRefreshTokenDefined();

    if (!hasToken && !hasRefreshToken) {
        api.dispatch(setLoginMode(false));
        return;
    }

    if (!hasToken && hasRefreshToken) {
        if (!refreshTokenRequest) {
            refreshTokenRequest = api.dispatch(updateToken.initiate({refresh: refreshToken}))
                .unwrap()
                .finally(() => {
                    refreshTokenRequest = null;
                });
        }

        await refreshTokenRequest;
        token = getAccessToken() as string;
    }

    const response = await getBaseQuery(token)(args, api, extra);
    const {error} = response;

    const isAuthorizationError = !!error && error.status === 401;
    const isNeedUpdateTokenWithReCall = isAuthorizationError && hasRefreshToken;


    if (isNeedUpdateTokenWithReCall) {
        if (!refreshTokenRequest) {
            refreshTokenRequest = api.dispatch(updateToken.initiate({refresh: refreshToken}))
                .unwrap()
                .finally(() => {
                    refreshTokenRequest = null;
                });
        }

        try {
            await refreshTokenRequest;
        } catch (e) {
            api.dispatch(setLoginMode(false));
            return {error: {}};
        }

        const newToken = getAccessToken() as string;
        const repeatedResponse = await getBaseQuery(newToken)(args, api, extra) as TBaseQueryReturnType;
        const {error: repeatedResponseError} = repeatedResponse;
        const isRepeatedResponseAuthorizationError = !!repeatedResponseError && repeatedResponseError.status === 401;

        if (isRepeatedResponseAuthorizationError) {
            api.dispatch(setLoginMode(false));
            return;
        }

        return repeatedResponse;
    }

    return response;
};