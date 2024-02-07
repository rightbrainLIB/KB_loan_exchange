import { setResetCurrencySheet } from "@slices/exchangeCurrencySlices.ts";
import {
  setResetExchangeBotSteps,
  setResetExchangeUserStep
} from "@slices/exchangeSlices.ts";
import {
  setContainerBottomSize,
  setIsCompleteExchange,
  setIsCompleteLoan
} from "@slices/globalUISlice.ts";
import {
  setResetLoanBotStep,
  setResetLoanUserStep
} from "@slices/loanSlices.ts";
import { Button } from "antd";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import $style from "./index.module.sass";

const Index = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onClickTask = useCallback(
    (val: string) => {
      navigate(val);
    },
    [navigate]
  );

  useEffect(() => {
    dispatch(setResetExchangeUserStep());
    dispatch(setResetExchangeBotSteps());
    dispatch(setResetCurrencySheet());
    dispatch(setResetLoanUserStep());
    dispatch(setResetLoanBotStep());
    dispatch(setContainerBottomSize(null));
    dispatch(setIsCompleteLoan(false));
    dispatch(setIsCompleteExchange(false));
  }, [dispatch]);

  return (
    <>
      <div className={$style.taskContainer}>
        <ul className={$style.taskListWrap}>
          <li>
            <Button onClick={() => onClickTask("exchange")}>환전</Button>
          </li>
          <li>
            <Button onClick={() => onClickTask("loan")}>대출</Button>
            {/*<Button onClick={() => onClickTask("loanChat")}>대출</Button>*/}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Index;
