import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IGlobalUI {
  containerBootmSize: number | null;
  exchangeProgressStep: number;
  exchangeTotalStep: number;
  loanProgressStep: number;
  loanTotalStep: number;
  isCompleteExchange: boolean;
  isCompleteLoan: boolean;
  lastElHeight: number; // 마지막 요소 높이값
  reachedScrollPos: number; // 마지막 스크롤 위치
}

const initialState: IGlobalUI = {
  containerBootmSize: null,
  exchangeProgressStep: 0,
  exchangeTotalStep: 0,
  loanProgressStep: 0,
  loanTotalStep: 0,
  isCompleteExchange: false,
  isCompleteLoan: false,
  lastElHeight: 0,
  reachedScrollPos: 0
};

const globalUISlice = createSlice({
  name: "containerBottom",
  initialState,
  reducers: {
    setContainerBottomSize: (
      state,
      { payload }: PayloadAction<number | null>
    ) => {
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
    },
    setIsCompleteExchange: (state, { payload }: PayloadAction<boolean>) => {
      state.isCompleteExchange = payload;
    },
    setIsCompleteLoan: (state, { payload }: PayloadAction<boolean>) => {
      state.isCompleteLoan = payload;
    },
    setLastElHeight: (state, { payload }: PayloadAction<number>) => {
      state.lastElHeight = payload;
    },
    setReachedScrollPos: (state, { payload }: PayloadAction<number>) => {
      state.reachedScrollPos = payload;
    }
  }
});

export const {
  setContainerBottomSize,
  setExchangeProgressStep,
  setExchangeTotalStep,
  setLoanProgressStep,
  setLoanTotalStep,
  setIsCompleteExchange,
  setIsCompleteLoan,
  setLastElHeight,
  setReachedScrollPos
} = globalUISlice.actions;

export default globalUISlice.reducer;
