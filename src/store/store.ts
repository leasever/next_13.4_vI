import { configureStore } from "@reduxjs/toolkit";
import { quotationSlice } from "./quotation-slice";

const store = configureStore({
  reducer: {
    quotation: quotationSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
