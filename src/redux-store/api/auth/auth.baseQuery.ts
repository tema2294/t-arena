import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from "../api.constants";

export const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
        headers.set('Content-Type', 'application/json')

        return headers;
    },
});
