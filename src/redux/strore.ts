import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./Apis/authApi";
import { bookApi } from "./Apis/bookApi";
import { rootReducer } from "./rootReducer";
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, bookApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
