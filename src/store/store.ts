import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";
import { quotationSlice } from "./quotation-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    quotation: quotationSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
