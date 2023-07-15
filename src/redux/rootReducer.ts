import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./Apis/authApi";

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
});
