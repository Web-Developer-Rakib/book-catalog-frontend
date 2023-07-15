import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/constants";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/books` }),
  endpoints: (builder) => ({
    createBook: builder.mutation({
      query: (book) => ({
        url: "/",
        method: "POST",
        body: book,
      }),
    }),
    getAllBooks: builder.query({
      query: () => "/",
    }),
  }),
});

export const { useCreateBookMutation, useGetAllBooksQuery } = bookApi;
