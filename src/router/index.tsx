import LoanCreditLimitProduct from "@components/loan/LoanCreditLimitProduct.tsx";
import LoanFacePop from "@components/loan/LoanFacePop.tsx";
import LoanImportCheck from "@components/loan/LoanImportCheck.tsx";
import LoanSuitableConfirm from "@components/loan/LoanSuitableConfirm.tsx";
import ExchangeChatBot from "@pages/exchange/ChatBot.tsx";
import ExchangeMain from "@pages/exchange/Main.tsx";
import LoanMain from "@pages/loan/Main.tsx";
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
    path: "/Loan",
    element: <LoanMain />
  },
  {
    path: "/LoanCreditLimitProduct",
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
  }
]);

export default router;