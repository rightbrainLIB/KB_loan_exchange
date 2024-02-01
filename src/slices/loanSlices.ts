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
    selected10Years: boolean; // 10년
    fullyAmortized: boolean; // 원리금균등상환
    variableInterestRate: boolean; // 변동금리
    cofix: boolean; // 신잔액기준 COFIX
    selectedUserDate: boolean; // 2024.02.28,
    selectedUserLoanPrice: boolean; // 77,000,000
    callRequestLoan: boolean; // 대출 신청
    nationalPurse: boolean; // 국민지갑 간편제출
    documentImage: boolean; // 서류 이미지로 제출
    confirmUserRequest: boolean; // 대출 신청내역 확인
  };
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
    loanPeriodSelect: boolean; // 신청정보를 확인하기 위해 몇가지 질문을 할게요, 대출 기간을 정해주세요
    loanPaybackSelectStep01: boolean; // 어떤 방법으로 갚으실 예정인가요?
    loanPaybackSelectStep02: boolean; // 금리방식을 선택해주세요
    loanPaybackSelectStep03: boolean; // 기준금리종류를 선택해주세요
    loanRecommendGuide2: boolean; // 입력해주신 신청정보에 맞는 최저금리와 최대한도로 제시해드려요
    loanSelectCalendar: boolean; // 대출 받고자 하는 날짜를 선택해주세요
    loanApplicationAmount: boolean; // 대출 신청금액을 알려주세요
    loanInfoConfirm: boolean; // 대출 신청정보를 확인해주세요
    loanInfoSimpleSubmit: boolean; // 대출신청에 필요한 서류를 제출해주세요
    loanInfoSubmitComplete: boolean; // 국민지갑과 마이데이터를 통해 제출이 완료된 서류예요, 나머지 서류는 이미지로 제출해주세요
    loanSubmitComplete: boolean; // 대출 신청을 완료했어요!
    loanSubmitInfo: boolean; // 대출 신청 내역을 확인해주세요
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
    selected10Years: false,
    fullyAmortized: false,
    variableInterestRate: false,
    cofix: false,
    reKeepGoingLoan: false,
    selectedUserDate: false,
    selectedUserLoanPrice: false,
    callRequestLoan: false,
    nationalPurse: false,
    documentImage: false,
    confirmUserRequest: false
  },
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
    questionForChange1: false,
    loanPeriodSelect: false,
    loanPaybackSelectStep01: false,
    loanPaybackSelectStep02: false,
    loanPaybackSelectStep03: false,
    loanRecommendGuide2: false,
    loanSelectCalendar: false,
    loanApplicationAmount: false,
    loanInfoConfirm: false,
    loanInfoSimpleSubmit: false,
    loanInfoSubmitComplete: false,
    loanSubmitComplete: false,
    loanSubmitInfo: false
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
    setSelected10Years: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.selected10Years = payload;
    },
    setFullyAmortized: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.fullyAmortized = payload;
    },
    setVariableInterestRate: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.variableInterestRate = payload;
    },
    setCofix: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.cofix = payload;
    },
    setReKeepGoingLoan: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.reKeepGoingLoan = payload;
    },
    setSelectedUserDate: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.selectedUserDate = payload;
    },
    setSelectedUserLoanPrice: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.selectedUserLoanPrice = payload;
    },
    setCallRequestLoan: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.callRequestLoan = payload;
    },
    setNationalPurse: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.nationalPurse = payload;
    },
    setDocumentImage: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.documentImage = payload;
    },
    setConfirmUserRequest: (state, { payload }: PayloadAction<boolean>) => {
      state.userStep.confirmUserRequest = payload;
    },
    setResetLoanUserStep: (state) => {
      state.userStep.consentToTermsCond = false; // 심사 약관 동의
      state.userStep.userPhoneVarif = false; // 휴대폰 본인인증
      state.userStep.userSearchedAPT = false; // 주소, 전용면적, 층수
      state.userStep.buyHouse = false; // 주택 구입
      state.userStep.houseOwner = false; // 단독 명의
      state.userStep.oneHouseOwner = false; // 1주택
      state.userStep.incomeByWork = false; // 근로소득자
      state.userStep.interestRateAndLimit = false; // 금리와 한도
      state.userStep.requestLoan = false; // 대출신청
      state.userStep.primeRate = false; // 우대금리 -0.3%p 적용했어요
      state.userStep.keepGoingLoan = false; // 이대로 대출진행
      state.userStep.changeUserInput = false; // 조건 변경하기
      state.userStep.reKeepGoingLoan = false; // 이대로 대출진행 - 조건 변경하기 이후
      state.userStep.selected10Years = false; // 10년
      state.userStep.fullyAmortized = false; // 원리금균등상환
      state.userStep.variableInterestRate = false; // 변동금리
      state.userStep.cofix = false; // 신잔액기준 COFIX
      state.userStep.selectedUserDate = false; // 2024.02.28,
      state.userStep.selectedUserLoanPrice = false; // 77,000,000
      state.userStep.callRequestLoan = false; // 대출 신청
      state.userStep.nationalPurse = false; // 국민지갑 간편제출
      state.userStep.documentImage = false; // 서류 이미지로 제출
      state.userStep.confirmUserRequest = false; // 대출 신청내역 확인
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
    },
    setLoanPeriodSelect: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanPeriodSelect = payload;
    },
    setLoanPaybackSelectStep01: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.botStep.loanPaybackSelectStep01 = payload;
    },
    setLoanPaybackSelectStep02: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.botStep.loanPaybackSelectStep02 = payload;
    },
    setLoanPaybackSelectStep03: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.botStep.loanPaybackSelectStep03 = payload;
    },
    setLoanRecommendGuide2: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanRecommendGuide2 = payload;
    },
    setLoanSelectCalendar: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanSelectCalendar = payload;
    },
    setLoanApplicationAmount: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanApplicationAmount = payload;
    },
    setLoanInfoConfirm: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanInfoConfirm = payload;
    },
    setLoanInfoSimpleSubmit: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanInfoSimpleSubmit = payload;
    },
    setLoanInfoSubmitComplete: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanInfoSubmitComplete = payload;
    },
    setLoanSubmitComplete: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanSubmitComplete = payload;
    },
    setLoanSubmitInfo: (state, { payload }: PayloadAction<boolean>) => {
      state.botStep.loanSubmitInfo = payload;
    },
    setResetLoanBotStep: (state) => {
      state.botStep.loanLimitCurrency = false; // 본인확인을 위해 인증이 필요해요
      state.botStep.loanIdentityCheck = false; // 주택 시세정보 검색을 위해 주소를 입력해주세요
      state.botStep.loanHouseConfirm = false; // 주택시세를 확인하세요
      state.botStep.loanHouseAddConfirm = false; // 먼저 어던 목적으로 대출을 받으시나요?
      state.botStep.loanHouseAddConfirm01 = false; // 주택 구입 시 지정할 명의를 알려주세요.
      state.botStep.loanHouseAddConfirm02 = false; // 다음으로 보유한 주택 수를 알려주세요
      state.botStep.loanHouseAddConfirm03 = false; // 직업정보를 알려주세요
      state.botStep.loanHouseAddConfirm04 = false; // 지금까지의 정보를 요약할게요
      state.botStep.loanHouseAddConfirm05 = false; // 심사정보를 기반으로 금리와 한도를 알아볼게요
      state.botStep.loanHouseAddConfirm06 = false; // 네, KB 주택담보대출을 진행해드릴게요!
      state.botStep.loanRecommendGuide = false; // 입력해주신 신청정보에 맞는 최저금리와 최대한도로 제시해드려요
      state.botStep.questionForChange1 = false; // 신청정보를 확인하기 위해 몇가지 질문을 할게요. 대출 기간을 정해주세요
      state.botStep.loanPeriodSelect = false; // 신청정보를 확인하기 위해 몇가지 질문을 할게요, 대출 기간을 정해주세요
      state.botStep.loanPaybackSelectStep01 = false; // 어떤 방법으로 갚으실 예정인가요?
      state.botStep.loanPaybackSelectStep02 = false; // 금리방식을 선택해주세요
      state.botStep.loanPaybackSelectStep03 = false; // 기준금리종류를 선택해주세요
      state.botStep.loanRecommendGuide2 = false; // 입력해주신 신청정보에 맞는 최저금리와 최대한도로 제시해드려요
      state.botStep.loanSelectCalendar = false; // 대출 받고자 하는 날짜를 선택해주세요
      state.botStep.loanApplicationAmount = false; // 대출 신청금액을 알려주세요
      state.botStep.loanInfoConfirm = false; // 대출 신청정보를 확인해주세요
      state.botStep.loanInfoSimpleSubmit = false; // 대출신청에 필요한 서류를 제출해주세요
      state.botStep.loanInfoSubmitComplete = false; // 국민지갑과 마이데이터를 통해 제출이 완료된 서류예요, 나머지 서류는 이미지로 제출해주세요
      state.botStep.loanSubmitComplete = false; // 대출 신청을 완료했어요!
      state.botStep.loanSubmitInfo = false; // 대출 신청 내역을 확인해주세요
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
  setSelected10Years,
  setFullyAmortized,
  setVariableInterestRate,
  setReKeepGoingLoan,
  setCofix,
  setSelectedUserDate,
  setSelectedUserLoanPrice,
  setCallRequestLoan,
  setNationalPurse,
  setDocumentImage,
  setConfirmUserRequest,
  setResetLoanUserStep,

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
  setQuestionForChange1,
  setLoanPeriodSelect,
  setLoanPaybackSelectStep01,
  setLoanPaybackSelectStep02,
  setLoanPaybackSelectStep03,
  setLoanRecommendGuide2,
  setLoanSelectCalendar,
  setLoanApplicationAmount,
  setLoanInfoConfirm,
  setLoanInfoSimpleSubmit,
  setLoanInfoSubmitComplete,
  setLoanSubmitComplete,
  setLoanSubmitInfo,
  setResetLoanBotStep
} = loanSlice.actions;

export default loanSlice.reducer;
