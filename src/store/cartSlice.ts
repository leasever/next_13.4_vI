import { ItemCart } from "@/models/cart.model";
import { createSlice } from "@reduxjs/toolkit";

export const CartItem = {
  selectedSize: "",
  oneQuantityPrice: 0,
  quantity: 0,
  id: 0,
  attributes: {
    name: "",
    subtitle: "",
    price: 0,
    description: "",
    size: {
      data: [],
    },
    original_price: 0,
    slug: "",
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
    image: {
      data: [],
    },
    thumbnail: {
      data: {
        id: 0,
        attributes: {
          name: "",
          width: 0,
          height: 0,
          formats: {
            small: {
              ext: "",
              url: "",
              hash: "",
              mime: "",
              name: "",
              size: 0,
              width: 0,
              height: 0,
              provider_metadata: {
                public_id: "",
                resource_type: "",
              },
            },
            thumbnail: {
              ext: "",
              url: "",
              hash: "",
              mime: "",
              name: "",
              size: 0,
              width: 0,
              height: 0,
              provider_metadata: {
                public_id: "",
                resource_type: "",
              },
            },
          },
          hash: "",
          ext: "",
          mime: "",
          size: 0,
          url: "",
          provider: "",
          provider_metadata: {
            public_id: "",
            resource_type: "",
          },
          createdAt: "",
          updatedAt: "",
        },
      },
    },
    categories: {
      data: [],
    },
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [CartItem],
  },
  reducers: {
    addToCart: (state, action) => {
      const item: any = state.cartItems.find(
        (p: any) => p.id === action.payload.id
      );
      if (item) {
        item.quantity++;
        item.attributes.price = item.oneQuantityPrice * item.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    // updateCart: (state, action) => {
    //   state.cartItems = state.cartItems.map((p) => {
    //     if (p.id === action.payload.id) {
    //       if (action.payload.key === "quantity") {
    //         p.attributes.price = p.oneQuantityPrice * action.payload.val;
    //       }
    //       return { ...p, [action.payload.key]: action.payload.val };
    //     }
    //     return p;
    //   });
    // },
    // removeFromCart: (state, action) => {
    //   state.cartItems = state.cartItems.filter(
    //     (p) => p.id !== action.payload.id
    //   );
    // },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
