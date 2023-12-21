import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apis/apiSlice";
import filterSliceReducer from "./features/darkMode/darkMode";


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    darkMode: filterSliceReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
