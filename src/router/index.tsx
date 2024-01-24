import LoanAgreeCheck from "@components/loan/LoanAgreeCheck.tsx";
import LoanChat from "@components/loan/LoanChat.tsx";
import LoanCreditLimitProduct from "@components/loan/LoanCreditLimitProduct.tsx";
import LoanFacePop from "@components/loan/LoanFacePop.tsx";
import LoanImportCheck from "@components/loan/LoanImportCheck.tsx";
import LoanSuitableConfirm from "@components/loan/LoanSuitableConfirm.tsx";
import ExchangeChatBot from "@pages/exchange/ChatBot.tsx";
import ExchangeMain from "@pages/exchange/Main.tsx";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExchangeMain />
  },
  {
    path: "/ExchangeChatBot",
    element: <ExchangeChatBot />
  },
  // 대출
  {
    path: "/Loan",
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
  }
]);

export default router;
