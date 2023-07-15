import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./Apis/authApi";
import { bookApi } from "./Apis/bookApi";

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [bookApi.reducerPath]: bookApi.reducer,
});
