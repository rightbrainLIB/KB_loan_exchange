import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IExchangeState {
  userStep: {
    choiceCurrency: boolean;
    isCurrencySelected: boolean;
  };
}

const initialState: IExchangeState = {
  userStep: {
    choiceCurrency: false,
    isCurrencySelected: false
  }
};

const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    setChoiceCurrency: (state, { payload }: PayloadAction<boolean>) => {
      console.log("here = ", payload);
      state.userStep.choiceCurrency = payload;
    },
    setCurrencySelection: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.isCurrencySelected = payload;
    }
  }
});

export const { setChoiceCurrency, setCurrencySelection } =
  exchangeSlice.actions;

export default exchangeSlice.reducer;
