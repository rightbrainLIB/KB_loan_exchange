/**
 * Step 03. 환전정보입력(Progress bar 3/7)
 * 환전에 필요한 금액을 알려드릴게요
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/NeedfulExchangeMoney.png";
import {
  setCheckRequestValue,
  setPrsNeedfulExchangeMoney,
  setRequestCurrencyValue
} from "@slices/exchangeSlices.ts";
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
// import { setContainerBottomSize } from "@slices/globalUISlice.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { KBState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const NeedfulExchangeMoney: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { requestCurrencyValue, checkRequestValue } = useSelector(
    (state: KBState) => state.exchange.userStep
  );

  const { prsNeedfulExchangeMoney } = useSelector(
    (state: KBState) => state.exchange.botStep
  );

  // 환전 바로 진행
  const onClickNext = useCallback(() => {
    setShowUserStep(true);
    dispatch(setCheckRequestValue(true));
  }, [dispatch, showUserStep]);

  const onClickModifyTask = useCallback(() => {
    dispatch(setPrsNeedfulExchangeMoney(false)); // wrapper 감추기
    setTimeout(() => {
      dispatch(setRequestCurrencyValue(false)); // USD 1,000 (userStep)을 false로 돌림 - 렌더 삭제됨!
    }, 500);
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "checkRequestValue");
  }, [lastStr]);

  useEffect(() => {
    if (requestCurrencyValue) {
      setShowBotStep(true);
      // dispatch(setContainerBottomSize(812 - 466 - 68));
      dispatch(setContainerBottomSize(80));
      setTimeout(() => {
        dispatch(setPrsNeedfulExchangeMoney(true));
      }, 600);
    } else {
      setShowBotStep(false);
    }
  }, [requestCurrencyValue, dispatch]);

  return (
    <>
      {showBotStep && (
        <MotionList aniCondition={prsNeedfulExchangeMoney}>
          <BotBox>
            <BotProfile />
            <KBTalk>
              <img src={img} />
              <SelectableListWrap>
                <li>
                  <SelectableBtn
                    bgBtn
                    onClickBtn={onClickNext}
                    disabled={checkRequestValue}>
                    환전 바로 진행
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn
                    onClickBtn={onClickModifyTask}
                    disabled={checkRequestValue}>
                    환전 금액 수정
                  </SelectableBtn>
                </li>
              </SelectableListWrap>
            </KBTalk>
          </BotBox>
        </MotionList>
      )}

      {showUserStep && (
        <MotionList aniCondition={checkRequestValue}>
          <SelectedUserBox isLastSelect={isLastChoice}>
            환전 바로 진행
          </SelectedUserBox>
        </MotionList>
      )}
    </>
  );
};

export default NeedfulExchangeMoney;
