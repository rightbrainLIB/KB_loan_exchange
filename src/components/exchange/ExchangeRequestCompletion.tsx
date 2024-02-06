/**
 * Step 07. 환전신청완료(Progress bar 7/7)
 * 환전 신청을 완료했어요!
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/ExchangeRequestCompletion.png";
import {
  setCheckExchangeInfo,
  setConfirmRequestInfo
} from "@slices/exchangeSlices.ts";
import {
  setContainerBottomSize,
  setIsCompleteExchange
} from "@slices/globalUISlice.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { KBState } from "@src/store";
import FindLastElement from "@src/utils/FindLastElement.tsx";
// import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ExchangeRequestCompletion: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  // const [isLastChoice, setIsLastChoice] = useState(false);

  const { requestExchange, confirmRequestInfo } = useSelector(
    (state: KBState) => state.exchange.userStep
  );
  const { checkExchangeInfo } = useSelector(
    (state: KBState) => state.exchange.botStep
  );

  const afterBotShow = useCallback(() => {
    const { lastEl } = FindLastElement();
    document.body.scrollTo({
      top: lastEl.offsetTop - 60,
      behavior: "smooth"
    });
  }, []);

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setConfirmRequestInfo(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  // const lastStr = LastTrueUserStep();
  //
  // useEffect(() => {
  //   setIsLastChoice(lastStr === "confirmRequestInfo");
  // }, [lastStr]);

  useEffect(() => {
    if (requestExchange) {
      dispatch(setIsCompleteExchange(true));
      dispatch(setContainerBottomSize(window.innerHeight - 370 - 60));
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setCheckExchangeInfo(true));
      }, 600);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [requestExchange, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionList
            aniCondition={checkExchangeInfo}
            noScroll
            afterAnim={afterBotShow}>
            <BotBox>
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
            </BotBox>
          </MotionList>
        </div>
      )}

      {showUserStep && (
        <MotionList aniCondition={confirmRequestInfo}>
          <SelectedUserBox>환전 신청 내역</SelectedUserBox>
        </MotionList>
      )}
    </>
  );
};

export default ExchangeRequestCompletion;
