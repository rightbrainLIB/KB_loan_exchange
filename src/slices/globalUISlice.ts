import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IGlobalUI {
  containerBootmSize: number;
  exchangeProgressStep: number;
  exchangeTotalStep: number;
  loanProgressStep: number;
  loanTotalStep: number;
}

const initialState: IGlobalUI = {
  containerBootmSize: 0,
  exchangeProgressStep: 0,
  exchangeTotalStep: 0,
  loanProgressStep: 0,
  loanTotalStep: 0
};

const globalUISlice = createSlice({
  name: "containerBottom",
  initialState,
  reducers: {
    setContainerBottomSize: (state, { payload }: PayloadAction<number>) => {
      state.containerBootmSize = payload;
    },
    setExchangeProgressStep: (state, { payload }: PayloadAction<number>) => {
      state.exchangeProgressStep = payload;
    },
    setExchangeTotalStep: (state, { payload }: PayloadAction<number>) => {
      state.exchangeTotalStep = payload;
    },
    setLoanProgressStep: (state, { payload }: PayloadAction<number>) => {
      state.loanProgressStep = payload;
    },
    setLoanTotalStep: (state, { payload }: PayloadAction<number>) => {
      state.loanTotalStep = payload;
    }
  }
});

export const {
  setContainerBottomSize,
  setExchangeProgressStep,
  setExchangeTotalStep,
  setLoanProgressStep,
  setLoanTotalStep
} = globalUISlice.actions;

export default globalUISlice.reducer;
