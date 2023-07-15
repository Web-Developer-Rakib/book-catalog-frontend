import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./Apis/authApi";
import { rootReducer } from "./rootReducer";
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
