/**
 * Step 03. 환전정보입력(Progress bar 3/7)
 * 환전에 필요한 금액을 알려드릴게요
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/NeedfulExchangeMoney.png";
import {
  setPrsNeedfulExchangeMoney,
  setRequestCurrencyValue
} from "@slices/exchangeSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { ExchangeState } from "@src/store";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const NeedfulExchangeMoney: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);

  const { requestCurrencyValue } = useSelector(
    (state: ExchangeState) => state.exchange.userStep
  );

  const { prsNeedfulExchangeMoney } = useSelector(
    (state: ExchangeState) => state.exchange.botStep
  );

  const onClickModifyTask = useCallback(() => {
    dispatch(setPrsNeedfulExchangeMoney(false)); // wrapper 감추기
    setTimeout(() => {
      dispatch(setRequestCurrencyValue(false)); // USD 1,000 (userStep)을 false로 돌림 - 렌더 삭제됨!
    }, 500);
  }, [dispatch]);

  useEffect(() => {
    if (requestCurrencyValue) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setPrsNeedfulExchangeMoney(true));
      }, 600);
    } else {
      setShowBotStep(false);
    }
  }, [requestCurrencyValue]);

  return (
    <>
      {showBotStep && (
        <MotionList aniCondition={prsNeedfulExchangeMoney} showHeight={430}>
          <BotProfile />
          <KBTalk>
            <img src={img} />
            <SelectableListWrap>
              <li>
                <SelectableBtn bgBtn>환전 바로 진행</SelectableBtn>
              </li>
              <li>
                <SelectableBtn onClickBtn={onClickModifyTask}>
                  환전 금액 수정
                </SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
        </MotionList>
      )}
    </>
  );
};

export default NeedfulExchangeMoney;
