import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IExchangeState {
  userStep: {
    choiceCurrency: boolean;
    isCurrencySelected: boolean;
    userStep3: boolean;
    userStep4: boolean;
    userStep5: boolean;
    userStep6: boolean;
  };
}

const initialState: IExchangeState = {
  userStep: {
    choiceCurrency: false,
    isCurrencySelected: false,
    userStep3: false,
    userStep4: false,
    userStep5: false,
    userStep6: false
  }
};

const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    setChoiceCurrency: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.choiceCurrency = payload;
    },
    setCurrencySelection: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.isCurrencySelected = payload;
    },
    setUserStep3: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.userStep3 = payload;
    },
    setUserStep4: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.userStep4 = payload;
    },
    setUserStep5: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.userStep5 = payload;
    },
    setUserStep6: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.userStep6 = payload;
    }
  }
});

export const {
  setChoiceCurrency,
  setCurrencySelection,
  setUserStep3,
  setUserStep4,
  setUserStep5,
  setUserStep6
} = exchangeSlice.actions;

export default exchangeSlice.reducer;
