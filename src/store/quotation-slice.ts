import { QuotationItemInterface } from "@/models/quotation.model";
import { createSlice } from "@reduxjs/toolkit";

const initialState: QuotationItemInterface[] = [];
export const quotationSlice = createSlice({
  name: "quotation",
  initialState: {
    quotationItems: initialState,
  },
  reducers: {
    addToQuotation: (state, action) => {
      state.quotationItems.push({
        ...action.payload,
        quantity: 1,
      });
    },

    updateQuotation: (state, action) => {
      state.quotationItems = state.quotationItems.map((p) => {
        if (p.productId === action.payload.id) {
          return { ...p, [action.payload.key]: action.payload.val };
        }
        return p;
      });
    },

    removeFromQuotation: (state, action) => {
      state.quotationItems = state.quotationItems.filter(
        (p) => p.productId !== action.payload.id
      );
    },

    clearQuotation: (state) => {
      state.quotationItems = initialState;
    },
  },
});

export const {
  addToQuotation,
  updateQuotation,
  removeFromQuotation,
  clearQuotation,
} = quotationSlice.actions;

export default quotationSlice.reducer;
