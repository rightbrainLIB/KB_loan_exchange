import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ILoanState {
  // 사용자 progress
  userStep: {
    consentToTermsCond: boolean; // 심사 약관 동의
    userPhoneVarif: boolean; // 휴대폰 본인인증
    userSearchedAPT: boolean; // 주소, 전용면적, 층수
    buyHouse: boolean; // 주택 구입
    houseOwner: boolean; // 단독 명의
    oneHouseOwner: boolean; // 1주택
    incomeByWork: boolean; // 근로소득자
    interestRateAndLimit: boolean; // 금리와 한도
    requestLoan: boolean; // 대출신청
    primeRate: boolean; // 우대금리 -0.3%p 적용했어요
    keepGoingLoan: boolean; // 이대로 대출진행
    changeUserInput: boolean; // 조건 변경하기
    reKeepGoingLoan: boolean; // 이대로 대출진행 - 조건 변경하기 이후
  };
  lastUserSte: string | null; // 마지막 선택 값
  botStep: {
    loanLimitCurrency: boolean; // 본인확인을 위해 인증이 필요해요
    loanIdentityCheck: boolean; // 주택 시세정보 검색을 위해 주소를 입력해주세요
    loanHouseConfirm: boolean; // 주택시세를 확인하세요
    loanHouseAddConfirm: boolean; // 먼저 어던 목적으로 대출을 받으시나요?
    loanHouseAddConfirm01: boolean; // 주택 구입 시 지정할 명의를 알려주세요.
    loanHouseAddConfirm02: boolean; // 다음으로 보유한 주택 수를 알려주세요
    loanHouseAddConfirm03: boolean; // 직업정보를 알려주세요
    loanHouseAddConfirm04: boolean; // 지금까지의 정보를 요약할게요
    loanHouseAddConfirm05: boolean; // 심사정보를 기반으로 금리와 한도를 알아볼게요
    loanHouseAddConfirm06: boolean; // 네, KB 주택담보대출을 진행해드릴게요!
    loanRecommendGuide: boolean; // 입력해주신 신청정보에 맞는 최저금리와 최대한도로 제시해드려요
    questionForChange1: boolean; // 신청정보를 확인하기 위해 몇가지 질문을 할게요. 대출 기간을 정해주세요
  };
}

const initialState: ILoanState = {
  userStep: {
    consentToTermsCond: false,
    userPhoneVarif: false,
    userSearchedAPT: false,
    buyHouse: false,
    houseOwner: false,
    oneHouseOwner: false,
    incomeByWork: false,
    interestRateAndLimit: false,
    requestLoan: false,
    primeRate: false,
    keepGoingLoan: false,
    changeUserInput: false,
    reKeepGoingLoan: false
  },
  lastUserSte: "",
  botStep: {
    loanLimitCurrency: false,
    loanIdentityCheck: false,
    loanHouseConfirm: false,
    loanHouseAddConfirm: false,
    loanHouseAddConfirm01: false,
    loanHouseAddConfirm02: false,
    loanHouseAddConfirm03: false,
    loanHouseAddConfirm04: false,
    loanHouseAddConfirm05: false,
    loanHouseAddConfirm06: false,
    loanRecommendGuide: false,
    questionForChange1: false
  }
};

const loanSlice = createSlice({
  name: "loan",
  initialState,
  reducers: {
    // userStep
    setConsentToTermsCond: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.consentToTermsCond = payload;
    },
    setUserPhoneVarif: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.userPhoneVarif = payload;
    },
    setUserSearchedAPT: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.userSearchedAPT = payload;
    },
    setBuyHouse: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.buyHouse = payload;
    },
    setHouseOwner: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.houseOwner = payload;
    },
    setOneHouseOwner: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.oneHouseOwner = payload;
    },
    setIncomeByWork: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.incomeByWork = payload;
    },
    setInterestRateAndLimit: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.interestRateAndLimit = payload;
    },
    setRequestLoan: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.requestLoan = payload;
    },
    setPrimeRate: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.primeRate = payload;
    },
    setKeepGoingLoan: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.keepGoingLoan = payload;
    },
    setChangeUserInput: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.changeUserInput = payload;
    },
    setReKeepGoingLoan: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.reKeepGoingLoan = payload;
    },

    // botStep
    setLoanLimitCurrency: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanLimitCurrency = payload;
    },
    setLoanIdentityCheck: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanIdentityCheck = payload;
    },
    setLoanHouseConfirm: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanHouseConfirm = payload;
    },
    setLoanHouseAddConfirm: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanHouseAddConfirm = payload;
    },
    setLoanHouseAddConfirm01: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanHouseAddConfirm01 = payload;
    },
    setLoanHouseAddConfirm02: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanHouseAddConfirm02 = payload;
    },
    setLoanHouseAddConfirm03: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanHouseAddConfirm03 = payload;
    },
    setLoanHouseAddConfirm04: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanHouseAddConfirm04 = payload;
    },
    setLoanHouseAddConfirm05: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanHouseAddConfirm05 = payload;
    },
    setLoanHouseAddConfirm06: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanHouseAddConfirm06 = payload;
    },
    setLoanRecommendGuide: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanRecommendGuide = payload;
    },
    setQuestionForChange1: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.questionForChange1 = payload;
    }
  }
});

export const {
  // userStep
  setConsentToTermsCond,
  setUserPhoneVarif,
  setUserSearchedAPT,
  setBuyHouse,
  setHouseOwner,
  setOneHouseOwner,
  setIncomeByWork,
  setInterestRateAndLimit,
  setRequestLoan,
  setPrimeRate,
  setKeepGoingLoan,
  setChangeUserInput,
  setReKeepGoingLoan,

  // botStep
  setLoanLimitCurrency,
  setLoanIdentityCheck,
  setLoanHouseConfirm,
  setLoanHouseAddConfirm,
  setLoanHouseAddConfirm01,
  setLoanHouseAddConfirm02,
  setLoanHouseAddConfirm03,
  setLoanHouseAddConfirm04,
  setLoanHouseAddConfirm05,
  setLoanHouseAddConfirm06,
  setLoanRecommendGuide,
  setQuestionForChange1
} = loanSlice.actions;

export default loanSlice.reducer;
