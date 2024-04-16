import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./authslice/authslice"


export const store = configureStore({
    reducer: {
      auth: authReducer
    },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});