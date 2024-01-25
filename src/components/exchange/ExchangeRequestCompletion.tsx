/**
 * Step 07. 환전신청완료(Progress bar 7/7)
 * 환전 신청을 완료했어요!
 */
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/ExchangeRequestCompletion.png";
import {
  setCheckExchangeInfo,
  setConfirmRequestInfo
} from "@slices/exchangeSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { ExchangeState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ExchangeRequestCompletion: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { requestExchange, confirmRequestInfo } = useSelector(
    (state: ExchangeState) => state.exchange.userStep
  );
  const { checkExchangeInfo } = useSelector(
    (state: ExchangeState) => state.exchange.botStep
  );

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setConfirmRequestInfo(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "confirmRequestInfo");
  }, [lastStr]);

  useEffect(() => {
    if (requestExchange) {
      setTimeout(() => {
        setShowBotStep(true);
      }, 300);
      setTimeout(() => {
        dispatch(setCheckExchangeInfo(true));
      }, 600);
    }
  }, [requestExchange, dispatch]);

  return (
    <>
      {showBotStep && (
        <div style={{ marginTop: 27 }}>
          <MotionList aniCondition={checkExchangeInfo} showHeight={368}>
            <BotProfile />
            <KBTalk>
              <div style={{ marginBottom: 16 }}>
                <img src={img} style={{ width: "100%", height: "100%" }} />
              </div>
              <SelectableListWrap>
                <li>
                  <SelectableBtn
                    bgBtn
                    disabled={confirmRequestInfo}
                    onClickBtn={goNextTask}>
                    환전 신청 내역
                  </SelectableBtn>
                </li>
              </SelectableListWrap>
            </KBTalk>
          </MotionList>
        </div>
      )}

      {showUserStep && (
        <MotionList aniCondition={confirmRequestInfo} showHeight={54}>
          <SelectedUserBox isLastSelect={isLastChoice}>
            환전 신청 내역
          </SelectedUserBox>
        </MotionList>
      )}
    </>
  );
};

export default ExchangeRequestCompletion;
