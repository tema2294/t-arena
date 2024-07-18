import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {EApiVersions, PROXY_BASE_URL} from "../api.constants";

export const baseQuery = fetchBaseQuery({
    baseUrl: `${PROXY_BASE_URL}/${EApiVersions.V1}`,
    prepareHeaders: (headers) => {
        headers.set('Content-Type', 'application/json')

        return headers;
    },
});
