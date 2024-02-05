/**
 * Step 06. 환전정보확인(Progress bar 6/7)
 * 환전을 신청할게요
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/CheckExchangeInfo.png";
import {
  setExchangeRequestCompletion,
  setRequestExchange
} from "@slices/exchangeSlices.ts";
import {
  setContainerBottomSize,
  setIsCompleteExchange
} from "@slices/globalUISlice.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { KBState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import $style from "./CheckExchangeInfo.module.scss";

const CheckExchangeInfo: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { recommendStaff, requestExchange } = useSelector(
    (state: KBState) => state.exchange.userStep
  );
  const { exchangeRequestCompletion } = useSelector(
    (state: KBState) => state.exchange.botStep
  );

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setRequestExchange(true));
    }, 300);
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "requestExchange");
  }, [lastStr]);

  useEffect(() => {
    if (recommendStaff) {
      dispatch(setIsCompleteExchange(true));
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setContainerBottomSize(window.innerHeight - 658 - 60));
      }, 300);
      setTimeout(() => {
        dispatch(setExchangeRequestCompletion(true));
      }, 600);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [recommendStaff, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionList aniCondition={exchangeRequestCompletion}>
            <BotBox>
              <BotProfile />
              <KBTalk>
                <img className={$style.img} src={img} />
                <SelectableListWrap>
                  <li>
                    <SelectableBtn
                      bgBtn
                      disabled={requestExchange}
                      onClickBtn={goNextTask}>
                      환전 신청
                    </SelectableBtn>
                  </li>
                </SelectableListWrap>
              </KBTalk>
            </BotBox>
          </MotionList>
        </div>
      )}

      {showUserStep && (
        <MotionList aniCondition={requestExchange}>
          <SelectedUserBox isLastSelect={isLastChoice}>
            환전 신청
          </SelectedUserBox>
        </MotionList>
      )}
    </>
  );
};

export default CheckExchangeInfo;
