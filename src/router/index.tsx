import LoanAgreeCheck from "@components/loan/LoanAgreeCheck.tsx";
import LoanApplicationAmountPop from "@components/loan/LoanApplicationAmountPop.tsx";
import LoanChat from "@components/loan/LoanChat.tsx";
import LoanCreditLimitProduct from "@components/loan/LoanCreditLimitProduct.tsx";
import LoanFacePop from "@components/loan/LoanFacePop.tsx";
import LoanFirstRatePop from "@components/loan/LoanFirstRatePop.tsx";
import LoanImgSubmitPop from "@components/loan/LoanImgSubmitPop.tsx";
import LoanImportCheck from "@components/loan/LoanImportCheck.tsx";
import LoanInfoTotalComplete from "@components/loan/LoanInfoTotalComplete.tsx";
import LoanSelectCalendarPop from "@components/loan/LoanSelectCalendarPop.tsx";
import LoanSubmitComplete from "@components/loan/LoanSubmitComplete.tsx";
import LoanSuitableConfirm from "@components/loan/LoanSuitableConfirm.tsx";
import LoanTelecomInputPop from "@components/loan/LoanTelecomInputPop.tsx";
import LoanTelecomSelectPop from "@components/loan/LoanTelecomSelectPop.tsx";
import ExchangeMain from "@pages/exchange/Main.tsx";
import Index from "@src/pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
    // index - page select
    {
      path: "/",
      element: <Index />
    },

    // 환전
    {
      path: "/exchange",
      element: <ExchangeMain />
    },
    // 대출
    {
      path: "/loan",
      element: <LoanCreditLimitProduct />
    },
    {
      path: "/LoanImportCheck",
      element: <LoanImportCheck />
    },
    {
      path: "/LoanSuitableConfirm",
      element: <LoanSuitableConfirm />
    },
    {
      path: "/LoanFacePop",
      element: <LoanFacePop />
    },
    {
      path: "/LoanChat",
      element: <LoanChat />
    },
    {
      path: "/LoanAgreeCheck",
      element: <LoanAgreeCheck />
    },
    {
      path: "/LoanTelecomSelectPop",
      element: <LoanTelecomSelectPop />
    },
    {
      path: "/LoanTelecomInputPop",
      element: <LoanTelecomInputPop />
    },
    {
      path: "/LoanFirstRatePop",
      element: <LoanFirstRatePop />
    },
    {
      path: "/LoanSelectCalendarPop",
      element: <LoanSelectCalendarPop />
    },
    {
      path: "/LoanApplicationAmountPop",
      element: <LoanApplicationAmountPop />
    },
    {
      path: "/LoanImgSubmitPop",
      element: <LoanImgSubmitPop />
    },
    {
      path: "/LoanSubmitComplete",
      element: <LoanSubmitComplete />
    },
    {
      path: "/LoanInfoTotalComplete",
      element: <LoanInfoTotalComplete />
    }
  ],
  { basename: "/KB_loan_exchange" }
);

export default router;
