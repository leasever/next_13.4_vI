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
      const item = state.quotationItems.find(
        (p: QuotationItemInterface) => p.id === action.payload.id
      );
      if (item && item.quantity > 0) {
        item.quantity++;        
      } else {
        state.quotationItems.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuotation: (state, action) => {
      state.quotationItems = state.quotationItems.map((p) => {
        if (p.id === action.payload.id) {          
          return { ...p, [action.payload.key]: action.payload.val };
        }
        return p;
      });
    },
    removeFromQuotation: (state, action) => {
      state.quotationItems = state.quotationItems.filter(
        (p) => p.id !== action.payload.id
      );
    },
  },
});

export const { addToQuotation, updateQuotation, removeFromQuotation } = quotationSlice.actions;

export default quotationSlice.reducer;
