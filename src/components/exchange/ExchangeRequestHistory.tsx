/**
 * Step 07. 환전신청완료(Progress bar 7/7)
 * 환전 신청 내역을 확인해주세요
 */
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/ExchangeRequestHistory.png";
import {
  setExchangeRequestHistory,
  setTotalRequestInfo
} from "@slices/exchangeSlices.ts";
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { ExchangeState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import $style from "./ExchangeRequestHistory.module.scss";

const ExchangeRequestHistory: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { confirmRequestInfo, totalRequestInfo } = useSelector(
    (state: ExchangeState) => state.exchange.userStep
  );
  const { exchangeRequestHistory } = useSelector(
    (state: ExchangeState) => state.exchange.botStep
  );

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setTotalRequestInfo(true));
      dispatch(setContainerBottomSize(null));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "totalRequestInfo");
  }, [lastStr]);

  useEffect(() => {
    if (confirmRequestInfo) {
      setTimeout(() => {
        setShowBotStep(true);
      }, 300);
      setTimeout(() => {
        dispatch(setExchangeRequestHistory(true));
        dispatch(setContainerBottomSize(10));
      }, 600);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [confirmRequestInfo, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionList aniCondition={exchangeRequestHistory} showHeight={780}>
            <BotProfile />
            <KBTalk>
              <h2>환전 신청 내역을 확인해주세요</h2>
              <img className={$style.img} src={img} />
              <SelectableListWrap>
                <li>
                  <SelectableBtn
                    bgBtn
                    disabled={totalRequestInfo}
                    onClickBtn={goNextTask}>
                    전체 환전 내역
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn disabled={totalRequestInfo}>
                    홈으로 가기
                  </SelectableBtn>
                </li>
              </SelectableListWrap>
            </KBTalk>
          </MotionList>
        </div>
      )}

      {showUserStep && (
        <MotionList aniCondition={totalRequestInfo} showHeight={54}>
          <SelectedUserBox isLastSelect={isLastChoice}>
            전체 환전 내역
          </SelectedUserBox>
        </MotionList>
      )}
    </>
  );
};

export default ExchangeRequestHistory;
