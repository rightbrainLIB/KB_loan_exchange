import LoanAgreeCheck from "@components/loan/LoanAgreeCheck.tsx";
import LoanChat from "@components/loan/LoanChat.tsx";
import LoanCreditLimitProduct from "@components/loan/LoanCreditLimitProduct.tsx";
import LoanFacePop from "@components/loan/LoanFacePop.tsx";
import LoanImportCheck from "@components/loan/LoanImportCheck.tsx";
import LoanSuitableConfirm from "@components/loan/LoanSuitableConfirm.tsx";
import LoanTelecomInputPop from "@components/loan/LoanTelecomInputPop.tsx";
import LoanTelecomSelectPop from "@components/loan/LoanTelecomSelectPop.tsx";
import ExchangeChatBot from "@pages/exchange/ChatBot.tsx";
import ExchangeMain from "@pages/exchange/Main.tsx";
import LoanSearchAddressPop from "@src/components/loan/LoanSearchAddressPop";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/KB_loan_exchange",
    element: <ExchangeMain />
  },
  {
    path: "/ExchangeChatBot",
    element: <ExchangeChatBot />
  },
  // 대출
  {
    path: "/KB_loan_exchange/Loan",
    element: <LoanCreditLimitProduct />
  },
  {
    path: "/KB_loan_exchange/LoanImportCheck",
    element: <LoanImportCheck />
  },
  {
    path: "/KB_loan_exchange/LoanSuitableConfirm",
    element: <LoanSuitableConfirm />
  },
  {
    path: "/KB_loan_exchange/LoanFacePop",
    element: <LoanFacePop />
  },
  {
    path: "/KB_loan_exchange/LoanChat",
    element: <LoanChat />
  },
  {
    path: "/KB_loan_exchange/LoanAgreeCheck",
    element: <LoanAgreeCheck />
  },
  {
    path: "/KB_loan_exchange/LoanTelecomSelectPop",
    element: <LoanTelecomSelectPop />
  },
  {
    path: "/KB_loan_exchange/LoanTelecomInputPop",
    element: <LoanTelecomInputPop />
  },
  {
    path: "/KB_loan_exchange/LoanSearchAddressPop",
    element: <LoanSearchAddressPop />
  }
]);

export default router;
