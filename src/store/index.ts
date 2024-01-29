import { configureStore } from "@reduxjs/toolkit";
import exchangeCurrencySlice from "@slices/exchangeCurrencySlices.ts";
import exchangeSlice from "@slices/exchangeSlices.ts";
import globalUISlice from "@slices/globalUISlice.ts";
import loanSlice from "@slices/loanSlices.ts";

const store = configureStore({
  reducer: {
    exchange: exchangeSlice,
    exchangeCurrency: exchangeCurrencySlice,
    globalUI: globalUISlice,
    loan: loanSlice
  }
});

export type KBState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
