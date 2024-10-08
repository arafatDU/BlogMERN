import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./features/blogs/blogApi";
import authApi from "./features/auth/authApi";
import authReducer from "./features/auth/authSlice"


const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware, authApi.middleware),
});

export default store;