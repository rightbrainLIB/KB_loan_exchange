/**
 * 환전 미수령 내역 : 전체 환전내역 조회
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import {
  setAllExchangeInquiry,
  setEachRequestInfo
} from "@slices/exchangeSlices.ts";
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { KBState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import $style from "./AllExchangeInquiry.module.sass";

const AllExchangeInquiry: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { totalRequestInfo, eachRequestInfo } = useSelector(
    (state: KBState) => state.exchange.userStep
  );
  const { allExchangeInquiry } = useSelector(
    (state: KBState) => state.exchange.botStep
  );

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setEachRequestInfo(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "eachRequestInfo");
  }, [lastStr]);

  useEffect(() => {
    if (totalRequestInfo) {
      setTimeout(() => {
        setShowBotStep(true);
        dispatch(setContainerBottomSize(window.innerHeight - 220 - 60));
      }, 300);
      setTimeout(() => {
        dispatch(setAllExchangeInquiry(true));
      }, 600);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [totalRequestInfo, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionList aniCondition={allExchangeInquiry}>
            <BotBox>
              <BotProfile />
              <KBTalk>
                <h2>김국민님의 전체 환전 내역을 알려드릴게요</h2>
                {/*<p className={$style.subText}>*/}
                {/*  환전신청 또는 맞춤환전 체결 후 지점에서 찾아가지 않은 환전내역이에요*/}
                {/*</p>*/}
                <SelectableListWrap>
                  <li>
                    <SelectableBtn
                      disabled={eachRequestInfo}
                      onClickBtn={goNextTask}>
                      건별 조회
                    </SelectableBtn>
                  </li>
                  <li>
                    <SelectableBtn disabled={eachRequestInfo}>
                      통화별 조회
                    </SelectableBtn>
                  </li>
                </SelectableListWrap>
              </KBTalk>
            </BotBox>
          </MotionList>
        </div>
      )}

      {showUserStep && (
        <MotionList aniCondition={eachRequestInfo}>
          <SelectedUserBox isLastSelect={isLastChoice}>
            건별 조회
          </SelectedUserBox>
        </MotionList>
      )}
    </>
  );
};

export default AllExchangeInquiry;
