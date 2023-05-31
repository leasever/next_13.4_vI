import { CartItemInterface } from "@/models/cart.model";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartItemInterface[] = [];
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: initialState,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (p: CartItemInterface) => p.productId === action.payload.id
      );
      if (item && item.quantity > 0) {
        item.quantity++;
        item.attributes.price = item.oneQuantityPrice * item.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((p) => {
        if (p.productId === action.payload.id) {
          if (action.payload.key === "quantity") {
            p.attributes.price = p.oneQuantityPrice * action.payload.val;
          }
          return { ...p, [action.payload.key]: action.payload.val };
        }
        return p;
      });
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (p) => p.productId !== action.payload.id
      );
    },
  },
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
