import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./Apis/authApi";
import { bookApi } from "./Apis/bookApi";
import searchReducer from "./Slices/searchSlice";
import userReducer from "./Slices/userSlice";

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [bookApi.reducerPath]: bookApi.reducer,
  user: userReducer,
  search: searchReducer,
});
