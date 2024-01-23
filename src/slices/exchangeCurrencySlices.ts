import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IExchangeCurrencyState {
  openTakenWaySheet: boolean;
  openTakenPlaceSheet: boolean;
  compUserSelect: boolean;
}

const initialState: IExchangeCurrencyState = {
  openTakenWaySheet: false,
  openTakenPlaceSheet: false,
  compUserSelect: false
};

const exchangeCurrencySlice = createSlice({
  name: "exchangeCurrency",
  initialState,
  reducers: {
    setOpenTakenWaySheet: (state, { payload }: PayloadAction<boolean>) => {
      state.openTakenWaySheet = payload;
    },
    setOpenTakenPlaceSheet: (state, { payload }: PayloadAction<boolean>) => {
      state.openTakenPlaceSheet = payload;
    },
    setCompUserSelect: (state, { payload }: PayloadAction<boolean>) => {
      state.compUserSelect = payload;
    }
  }
});

export const {
  setOpenTakenWaySheet,
  setOpenTakenPlaceSheet,
  setCompUserSelect
} = exchangeCurrencySlice.actions;

export default exchangeCurrencySlice.reducer;
