import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IExchangeState {
  // 사용자 progress
  userStep: {
    isCurrencySelected: boolean; // USD (미국 달러)
    isTakenPlace: boolean; // 은행지점에서 받기
    agreeForeignCurrency: boolean; // 외화 약관 동의
    requestCurrencyValue: boolean; // USD 1,000
    saveAlarm: boolean; // 원하는 환율일 때 알림받기
    alarmCurrency: boolean; // 계속 진행
    writeExchangeRate: boolean; // 1,300.8원
    confirmAlarm: boolean; // 이대로 알림 설정
    checkRequestValue: boolean; // 환전 바로 진행
    joinInsurance: boolean; // 여행자 보험 가입
    joinInsurancePlace: boolean; // 여의도종합금융센터
    skipGuidePlace: boolean; // 안내 생략
    userTakenDate: boolean; // 2024.01.22
    checkUserPhoneNumber: boolean; // 번호 확인 완료
    exchangeReason: boolean; // 관광, 친지방문 등 일반해외여행경비
    checkUserAccount: boolean; // 출금계좌 확인 완료
    recommendStaff: boolean; // 권유직원: 없음
    requestExchange: boolean; // 환전 신청
    confirmRequestInfo: boolean; // 환전 신청 내역
    totalRequestInfo: boolean; // 전체 환전 내역
    eachRequestInfo: boolean; // 건별 조회
    requestedDate: boolean; // 조회기간 설정
  };
  lastUserStep: string | null; // 마지막 선택 값
  // 챗봇 progreses
  botStep: {
    prsExchangeRate: boolean; // 지금 바로 환전을 도와드릴까요?
    prsTermsAgreeForExchange: boolean; // 은행지점에서 받기 위해 외화거래에 대한 약관동의가 필요해요
  };
}

const initialState: IExchangeState = {
  userStep: {
    isCurrencySelected: false,
    isTakenPlace: false,
    agreeForeignCurrency: false,
    requestCurrencyValue: false,
    saveAlarm: false,
    alarmCurrency: false,
    writeExchangeRate: false,
    confirmAlarm: false,
    checkRequestValue: false,
    joinInsurance: false,
    joinInsurancePlace: false,
    skipGuidePlace: false,
    userTakenDate: false,
    checkUserPhoneNumber: false,
    exchangeReason: false,
    checkUserAccount: false,
    recommendStaff: false,
    requestExchange: false,
    confirmRequestInfo: false,
    totalRequestInfo: false,
    eachRequestInfo: false,
    requestedDate: false
  },
  lastUserStep: null,
  botStep: {
    prsExchangeRate: false,
    prsTermsAgreeForExchange: false
  }
};

const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    setCurrencySelection: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.isCurrencySelected = payload;
    },
    setTakenPlace: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.isTakenPlace = payload;
    },
    setAgreeForeignCurrency: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.agreeForeignCurrency = payload;
    },
    setRequestCurrencyValue: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.requestCurrencyValue = payload;
    },
    setSaveAlarm: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.saveAlarm = payload;
    },
    setAlarmCurrency: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.alarmCurrency = payload;
    },
    setWriteExchangeRate: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.writeExchangeRate = payload;
    },
    setConfirmAlarm: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.confirmAlarm = payload;
    },
    setCheckRequestValue: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.checkRequestValue = payload;
    },
    setJoinInsurance: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.joinInsurance = payload;
    },
    setJoinInsurancePlace: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.joinInsurancePlace = payload;
    },
    setSkipGuidePlace: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.skipGuidePlace = payload;
    },
    setUserTakenDate: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.userTakenDate = payload;
    },
    setCheckUserPhoneNumber: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.checkUserPhoneNumber = payload;
    },
    setExchangeReason: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.exchangeReason = payload;
    },
    setCheckUserAccount: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.checkUserAccount = payload;
    },
    setRecommendStaff: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.recommendStaff = payload;
    },
    setRequestExchange: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.requestExchange = payload;
    },
    setConfirmRequestInfo: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.confirmRequestInfo = payload;
    },
    setTotalRequestInfo: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.totalRequestInfo = payload;
    },
    setEachRequestInfo: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.eachRequestInfo = payload;
    },
    setRequestedDate: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.requestedDate = payload;
    },

    setLastUserStep: (state, { payload }: PayloadAction<string | null>) => {
      state.lastUserStep = payload;
    },

    setPrsExchangeRate: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.prsExchangeRate = payload;
    },
    setPrsTermsAgreeForExchange: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.botStep.prsTermsAgreeForExchange = payload;
    }
  }
});

export const {
  setCurrencySelection,
  setTakenPlace,
  setAgreeForeignCurrency,
  setRequestCurrencyValue,
  setSaveAlarm,
  setAlarmCurrency,
  setWriteExchangeRate,
  setConfirmAlarm,
  setCheckRequestValue,
  setJoinInsurance,
  setJoinInsurancePlace,
  setSkipGuidePlace,
  setUserTakenDate,
  setCheckUserPhoneNumber,
  setExchangeReason,
  setCheckUserAccount,
  setRecommendStaff,
  setRequestExchange,
  setConfirmRequestInfo,
  setTotalRequestInfo,
  setEachRequestInfo,
  setRequestedDate,
  setLastUserStep,
  setPrsExchangeRate,
  setPrsTermsAgreeForExchange
} = exchangeSlice.actions;

export default exchangeSlice.reducer;
