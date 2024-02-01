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
    receiveKeepGoing: boolean; // 바로 진행
    joinInsurancePlace: boolean; // 여의도종합금융센터
    skipGuidePlace: boolean; // 안내 생략
    userTakenDate: boolean; // 2024.01.22
    checkUserPhoneNumber: boolean; // 번호 확인 완료
    exchangeReason: boolean; // 관광, 친지방문 등 일반해외여행경비
    checkUserAccount: boolean; // 출금계좌 확인
    recommendStaff: boolean; // 권유직원: 없음
    requestExchange: boolean; // 환전 신청
    confirmRequestInfo: boolean; // 환전 신청 내역
    totalRequestInfo: boolean; // 전체 환전 내역
    eachRequestInfo: boolean; // 건별 조회
    requestedDate: boolean; // 조회기간 설정
    selectOneMonth: boolean; // 1개월
    showMoreDetailInfo: boolean; // 자세히 보기
  };
  lastUserStep: string | null; // 마지막 선택 값
  // 챗봇 progreses
  botStep: {
    prsExchangeRate: boolean; // 지금 바로 환전을 도와드릴까요?
    prsTermsAgreeForExchange: boolean; // 은행지점에서 받기 위해 외화거래에 대한 약관동의가 필요해요
    prsInputCurrencyValue: boolean; // 환전 신청 금액을 입력해주세요
    prsNeedfulExchangeMoney: boolean; // 환전에 필요한 금액을 알려드릴게요
    notificationUSD: boolean; // 미국달러로 계속 진행할까요?
    notifyWhenExchangeRate: boolean; // 환율이 얼마일때 알려드릴까요?
    checkNotificationExchangeRate: boolean; // 환율이 1,300.8원 이하 일때 알림을 드릴까요?
    completionNotificationExchangeRate: boolean; // 원하는 환율일 때 알림을 드릴게요
    travelInsurance: boolean; // 여행자 보험에 가입하실 수 있어요!
    receiveBankBranch: boolean; // 어느 지점에서 받으시겠어요?
    selectReceiveDate: boolean; // 받고자 하는 날짜를 알려주세요
    checkPhoneNumber: boolean; // 휴대폰 번호가 맞는지 확인해주세요
    reasonExchangeSelect: boolean; // 환전 사유를 알려주세요
    checkAccount: boolean; // 출금계좌가 맞는지 확인해주세요
    recommendedEmployee: boolean; // 권유한 직원이 있나요?
    checkExchangeInfo: boolean; // 환전을 신청할게요
    exchangeRequestHistory: boolean; // 환전 신청 내역을 확인해주세요
    allExchangeInquiry: boolean; // 김국민님의 전체 환전 내역을 알려드릴게요
    threeMonthExchangeList: boolean; // 최근 3개월 내 환전 내역이에요
    exchangeListPeriodSelect: boolean; // 환전 내역 기간을 설정해주세요
    oneMonthExchangeList: boolean; // 김국민님의 1개월 환전 내역이에요
    waitingReceive: boolean; // 자세히 보기 - 수령대기
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
    receiveKeepGoing: false,
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
    requestedDate: false,
    selectOneMonth: false,
    showMoreDetailInfo: false
  },
  lastUserStep: null,
  botStep: {
    prsExchangeRate: false,
    prsTermsAgreeForExchange: false,
    prsInputCurrencyValue: false,
    prsNeedfulExchangeMoney: false,
    notificationUSD: false,
    notifyWhenExchangeRate: false,
    checkNotificationExchangeRate: false,
    completionNotificationExchangeRate: false,
    travelInsurance: false,
    receiveBankBranch: false,
    selectReceiveDate: false,
    checkPhoneNumber: false,
    reasonExchangeSelect: false,
    checkAccount: false,
    recommendedEmployee: false,
    checkExchangeInfo: false,
    exchangeRequestHistory: false,
    allExchangeInquiry: false,
    threeMonthExchangeList: false,
    exchangeListPeriodSelect: false,
    oneMonthExchangeList: false,
    waitingReceive: false
  }
};

const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    // userStep
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
    setReceiveKeepGoing: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.receiveKeepGoing = payload;
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
    setSelectOneMonth: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.selectOneMonth = payload;
    },
    setShowMoreDetailInfo: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.showMoreDetailInfo = payload;
    },
    // 마지막 선택값 추적
    setLastUserStep: (state, { payload }: PayloadAction<string | null>) => {
      state.lastUserStep = payload;
    },
    setResetExchangeUserStep: (state) => {
      state.userStep.isCurrencySelected = false;
      state.userStep.isTakenPlace = false;
      state.userStep.agreeForeignCurrency = false;
      state.userStep.requestCurrencyValue = false;
      state.userStep.saveAlarm = false;
      state.userStep.alarmCurrency = false;
      state.userStep.writeExchangeRate = false;
      state.userStep.confirmAlarm = false;
      state.userStep.checkRequestValue = false;
      state.userStep.joinInsurance = false;
      state.userStep.receiveKeepGoing = false;
      state.userStep.joinInsurancePlace = false;
      state.userStep.skipGuidePlace = false;
      state.userStep.userTakenDate = false;
      state.userStep.checkUserPhoneNumber = false;
      state.userStep.exchangeReason = false;
      state.userStep.checkUserAccount = false;
      state.userStep.recommendStaff = false;
      state.userStep.requestExchange = false;
      state.userStep.confirmRequestInfo = false;
      state.userStep.totalRequestInfo = false;
      state.userStep.eachRequestInfo = false;
      state.userStep.requestedDate = false;
      state.userStep.selectOneMonth = false;
      state.userStep.showMoreDetailInfo = false;
      state.lastUserStep = ""; // 마지막 선택값 reset
    },

    // botStep
    setPrsExchangeRate: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.prsExchangeRate = payload;
    },
    setPrsTermsAgreeForExchange: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.botStep.prsTermsAgreeForExchange = payload;
    },
    setPrsInputCurrencyValue: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.prsInputCurrencyValue = payload;
    },
    setPrsNeedfulExchangeMoney: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.botStep.prsNeedfulExchangeMoney = payload;
    },
    setNotificationUSD: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.notificationUSD = payload;
    },
    setNotifyWhenExchangeRate: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.notifyWhenExchangeRate = payload;
    },
    setCheckNotificationExchangeRate: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.botStep.checkNotificationExchangeRate = payload;
    },
    setCompletionNotificationExchangeRate: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.botStep.completionNotificationExchangeRate = payload;
    },
    setTravelInsurance: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.travelInsurance = payload;
    },
    setReceiveBankBranch: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.receiveBankBranch = payload;
    },
    setSelectReceiveDate: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.selectReceiveDate = payload;
    },
    setCheckPhoneNumber: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.checkPhoneNumber = payload;
    },
    setReasonExchangeSelect: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.reasonExchangeSelect = payload;
    },
    setCheckAccount: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.checkAccount = payload;
    },
    setRecommendedEmployee: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.recommendedEmployee = payload;
    },
    setCheckExchangeInfo: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.checkExchangeInfo = payload;
    },
    setExchangeRequestHistory: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.exchangeRequestHistory = payload;
    },
    setAllExchangeInquiry: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.allExchangeInquiry = payload;
    },
    setThreeMonthExchangeList: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.threeMonthExchangeList = payload;
    },
    setExchangeListPeriodSelect: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.botStep.exchangeListPeriodSelect = payload;
    },
    setOneMonthExchangeList: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.oneMonthExchangeList = payload;
    },
    setWaitingReceive: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.waitingReceive = payload;
    },
    setResetExchangeBotSteps: (state) => {
      state.botStep.prsExchangeRate = false;
      state.botStep.prsTermsAgreeForExchange = false;
      state.botStep.prsInputCurrencyValue = false;
      state.botStep.prsNeedfulExchangeMoney = false;
      state.botStep.notificationUSD = false;
      state.botStep.notifyWhenExchangeRate = false;
      state.botStep.checkNotificationExchangeRate = false;
      state.botStep.completionNotificationExchangeRate = false;
      state.botStep.travelInsurance = false;
      state.botStep.receiveBankBranch = false;
      state.botStep.selectReceiveDate = false;
      state.botStep.checkPhoneNumber = false;
      state.botStep.reasonExchangeSelect = false;
      state.botStep.checkAccount = false;
      state.botStep.recommendedEmployee = false;
      state.botStep.checkExchangeInfo = false;
      state.botStep.exchangeRequestHistory = false;
      state.botStep.allExchangeInquiry = false;
      state.botStep.threeMonthExchangeList = false;
      state.botStep.exchangeListPeriodSelect = false;
      state.botStep.oneMonthExchangeList = false;
      state.botStep.waitingReceive = false;
    }
  }
});

export const {
  // userStep
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
  setReceiveKeepGoing,
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
  setSelectOneMonth,
  setShowMoreDetailInfo,
  setLastUserStep,
  // userStep reset
  setResetExchangeUserStep,

  // botStep
  setPrsExchangeRate,
  setPrsTermsAgreeForExchange,
  setPrsInputCurrencyValue,
  setPrsNeedfulExchangeMoney,
  setNotificationUSD,
  setNotifyWhenExchangeRate,
  setCheckNotificationExchangeRate,
  setCompletionNotificationExchangeRate,
  setTravelInsurance,
  setReceiveBankBranch,
  setSelectReceiveDate,
  setCheckPhoneNumber,
  setReasonExchangeSelect,
  setCheckAccount,
  setRecommendedEmployee,
  setCheckExchangeInfo,
  setExchangeRequestHistory,
  setAllExchangeInquiry,
  setThreeMonthExchangeList,
  setExchangeListPeriodSelect,
  setOneMonthExchangeList,
  setWaitingReceive,
  // botStep reset
  setResetExchangeBotSteps
} = exchangeSlice.actions;

export default exchangeSlice.reducer;
