import {configureStore} from '@reduxjs/toolkit'
import {AuthSlice, DataSlice} from "./api";
import {appStateSlice} from "redux-store/appState";

export const store = configureStore({
    reducer: {
        appState: appStateSlice,
        [AuthSlice.reducerPath]: AuthSlice.reducer,
        [DataSlice.reducerPath]: DataSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: {warnAfter: 128},
        serializableCheck: {warnAfter: 128},
    }).concat(AuthSlice.middleware).concat(DataSlice.middleware)
})
