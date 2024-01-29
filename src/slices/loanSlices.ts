import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ILoanState {
  // 사용자 progress
  userStep: {
    consentToTermsCond: boolean; // 심사 약관 동의
    userPhoneVarif: boolean; // 휴대폰 본인인증
  };
  lastUserSte: string | null; // 마지막 선택 값
  botStep: {
    loanLimitCurrency: boolean; // 본인확인을 위해 인증이 필요해요
    loanIdentityCheck: boolean; // 주택 시세정보 검색을 위해 주소를 입력해주세요
  };
}

const initialState: ILoanState = {
  userStep: {
    consentToTermsCond: false,
    userPhoneVarif: false
  },
  lastUserSte: "",
  botStep: {
    loanLimitCurrency: false,
    loanIdentityCheck: false
  }
};

const loanSlice = createSlice({
  name: "loan",
  initialState,
  reducers: {
    setConsentToTermsCond: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.consentToTermsCond = payload;
    },
    setUserPhoneVarif: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.userPhoneVarif = payload;
    },
    setLoanLimitCurrency: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanLimitCurrency = payload;
    },
    setLoanIdentityCheck: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanIdentityCheck = payload;
    }
  }
});

export const {
  setConsentToTermsCond,
  setUserPhoneVarif,
  setLoanLimitCurrency,
  setLoanIdentityCheck
} = loanSlice.actions;

export default loanSlice.reducer;
