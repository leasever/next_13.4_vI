import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { ItemCart } from "@/models/cart.model";


export default configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
