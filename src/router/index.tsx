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
  }
]);

export default router;
