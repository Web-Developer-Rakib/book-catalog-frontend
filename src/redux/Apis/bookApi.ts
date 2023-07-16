import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/constants";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/books` }),
  tagTypes: ["books"],
  endpoints: (builder) => ({
    createBook: builder.mutation({
      query: (book) => ({
        url: "/",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["books"],
    }),
    getAllBooks: builder.query({
      query: () => "/",
      providesTags: ["books"],
    }),
    getSingleBook: builder.query({
      query: (bookId) => `/${bookId}`,
    }),
    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: `/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useCreateBookMutation,
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useDeleteBookMutation,
} = bookApi;
