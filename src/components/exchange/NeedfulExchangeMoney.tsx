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
} from "@slices/exchangeSlices.ts";
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
// import { setContainerBottomSize } from "@slices/globalUISlice.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { KBState } from "@src/store";
import FindLastElement from "@src/utils/FindLastElement.tsx";
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
  }, [dispatch]);

  // 환전 금액 수정 버튼
  const onClickModifyTask = useCallback(() => {
    document.body.scrollTo({ top: 1387, behavior: "smooth" });
    dispatch(setPrsNeedfulExchangeMoney(false));
    dispatch(setContainerBottomSize(window.innerHeight - 375 - 60));
    setTimeout(() => {
      setShowBotStep(false);
    }, 900);
  }, [dispatch]);

  const afterBotShow = useCallback(() => {
    const { lastEl } = FindLastElement();
    document.body.scrollTo({ top: lastEl.offsetTop - 60, behavior: "smooth" });
  }, []);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "checkRequestValue");
  }, [lastStr]);

  useEffect(() => {
    if (requestCurrencyValue) {
      setShowBotStep(true);
      dispatch(setContainerBottomSize(window.innerHeight - 467 - 60));
      setTimeout(() => {
        dispatch(setPrsNeedfulExchangeMoney(true));
      }, 600);
    } else {
      setTimeout(() => {
        setShowBotStep(false);
      }, 600);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [requestCurrencyValue, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionList
            aniCondition={prsNeedfulExchangeMoney}
            noScroll
            afterAnim={afterBotShow}>
            <BotBox>
              <BotProfile />
              <KBTalk>
                <img src={img} alt="" />
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
        </div>
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
