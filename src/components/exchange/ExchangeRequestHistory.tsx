/**
 * Step 07. 환전신청완료(Progress bar 7/7)
 * 환전 신청 내역을 확인해주세요
 */
import BotBox from "@components/box/BotBox.tsx";
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
import { KBState } from "@src/store";
import FindLastElement from "@src/utils/FindLastElement.tsx";
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
    (state: KBState) => state.exchange.userStep
  );
  const { exchangeRequestHistory } = useSelector(
    (state: KBState) => state.exchange.botStep
  );

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setTotalRequestInfo(true));
    });
  }, [dispatch]);

  const afterBotShow = useCallback(() => {
    const { lastEl } = FindLastElement();
    document.body.scrollTo({
      top: lastEl.offsetTop - 60,
      behavior: "smooth"
    });
  }, []);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "totalRequestInfo");
  }, [lastStr]);

  useEffect(() => {
    if (confirmRequestInfo) {
      setShowBotStep(true);
      dispatch(setContainerBottomSize(1));
      setTimeout(() => {
        dispatch(setExchangeRequestHistory(true));
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
          <MotionList
            aniCondition={exchangeRequestHistory}
            noScroll
            afterAnim={afterBotShow}>
            <BotBox>
              <BotProfile />
              <KBTalk>
                <h2>환전 신청 내역을 확인해주세요</h2>
                <div className={$style.img}>
                  <img src={img} alt="" />
                </div>
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
            </BotBox>
          </MotionList>
        </div>
      )}

      {showUserStep && (
        <MotionList aniCondition={totalRequestInfo}>
          <SelectedUserBox isLastSelect={isLastChoice}>
            전체 환전 내역
          </SelectedUserBox>
        </MotionList>
      )}
    </>
  );
};

export default ExchangeRequestHistory;
