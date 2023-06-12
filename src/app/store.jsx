import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import filterSliceReducer from "../features/darkMode/darkMode";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    darkMode: filterSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});