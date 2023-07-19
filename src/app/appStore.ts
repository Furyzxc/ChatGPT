import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer.ts";
import { api } from "../shared/api/api.ts";

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => (
        getDefaultMiddleware().concat(api.middleware)
    )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch