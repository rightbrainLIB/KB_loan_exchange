import LoanCreditLimitProduct from "@components/loan/LoanCreditLimitProduct.tsx";
import LoanFacePop from "@components/loan/LoanFacePop.tsx";
import LoanImportCheck from "@components/loan/LoanImportCheck.tsx";
import LoanSuitableConfirm from "@components/loan/LoanSuitableConfirm.tsx";
import ExchangeChatBot from "@pages/exchange/ChatBot.tsx";
import ExchangeMain from "@pages/loan/Main.tsx";
import LoanMain from "@pages/loan/Main.tsx";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/ExchangeChatBot" element={<ExchangeChatBot />} />
        <Route path="/Loan" element={<LoanMain />} />
        <Route
          path="/LoanCreditLimitProduct"
          element={<LoanCreditLimitProduct />}
        />
        <Route path="/LoanImportCheck" element={<LoanImportCheck />} />
        <Route path="/LoanSuitableConfirm" element={<LoanSuitableConfirm />} />
        <Route path="/LoanFacePop" element={<LoanFacePop />} />
        <Route path="/" element={<ExchangeMain />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
