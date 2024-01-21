import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IExchangeState {
  userStep: {
    isCurrencySelected: boolean;
  };
}

const initialState: IExchangeState = {
  userStep: {
    isCurrencySelected: false
  }
};

const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    setCurrencySelection: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.isCurrencySelected = payload;
    }
  }
});

export const { setCurrencySelection } = exchangeSlice.actions;

export default exchangeSlice.reducer;
