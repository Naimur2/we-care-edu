import queryString from "query-string";
import { apiSlice } from "../apiSlice";

export const photosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: (args) => ({
        url: `/files/get-images?${queryString.stringify(args)}`,
        method: "GET",
      }),
    }),
    getMorePhotos: builder.query({
      query: (args) => ({
        url: `/files/get-images?${queryString.stringify(args)}`,
        method: "GET",
      }),
    }),
  }),
});

const { useGetPhotosQuery } = photosApiSlice;

export { useGetPhotosQuery };
