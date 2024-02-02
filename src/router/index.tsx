import LoanSubmitComplete from "@components/loan/LoanSubmitComplete.tsx";
import ExchangeMain from "@pages/exchange/Main.tsx";
import LoanChat from "@pages/loan/LoanChat.tsx";
import LoanCreditLimitProduct from "@pages/loan/LoanCreditLimitProduct.tsx";
import LoanFacePop from "@pages/loan/LoanFacePop.tsx";
import LoanImportCheck from "@pages/loan/LoanImportCheck.tsx";
import LoanInfoTotalComplete from "@pages/loan/LoanInfoTotalComplete.tsx";
import LoanSuitableConfirm from "@pages/loan/LoanSuitableConfirm.tsx";
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
