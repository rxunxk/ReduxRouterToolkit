import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import apiReducer from "./slices/callAPISlice";
import titleReducer from "./slices/titleSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    api: apiReducer,
    title: titleReducer,
  },
  devTools: true,
});
