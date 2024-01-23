import { configureStore } from "@reduxjs/toolkit";
import exchangeCurrencySlice from "@slices/exchangeCurrencySlices.ts";
import exchangeSlice from "@slices/exchangeSlices.ts";

const store = configureStore({
  reducer: {
    exchange: exchangeSlice,
    exchangeCurrency: exchangeCurrencySlice
  }
});

export type ExchangeState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
