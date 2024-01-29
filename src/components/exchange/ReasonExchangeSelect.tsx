/**
 * Step 05. 출금정보입력(Progress bar 5/7)
 * 환전사유 선택 / 바텀시트 아닌 경우
 * 환전 사유를 알려주세요
 */
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/ReasonExchangeSelect.png";
import {
  setExchangeReason,
  setReasonExchangeSelect
} from "@slices/exchangeSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { KBState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ReasonExchangeSelect: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { checkUserPhoneNumber, exchangeReason } = useSelector(
    (state: KBState) => state.exchange.userStep
  );
  const { reasonExchangeSelect } = useSelector(
    (state: KBState) => state.exchange.botStep
  );

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    dispatch(setExchangeReason(true));
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "exchangeReason");
  }, [lastStr]);

  useEffect(() => {
    if (checkUserPhoneNumber) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setReasonExchangeSelect(true));
      }, 600);
    }
  }, [checkUserPhoneNumber, dispatch]);

  return (
    <>
      {showBotStep && (
        <div style={{ marginTop: 19 }}>
          <MotionList aniCondition={reasonExchangeSelect} showHeight={418}>
            <BotProfile />
            <KBTalk>
              <img src={img} />
              <SelectableListWrap>
                <li>
                  <SelectableBtn
                    onClickBtn={goNextTask}
                    disabled={exchangeReason}>
                    관광 등 일반해외여행경비
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn disabled={exchangeReason}>
                    보유목적
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn disabled={exchangeReason}>
                    유학경비
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn disabled={exchangeReason}>
                    해외체재비
                  </SelectableBtn>
                </li>
              </SelectableListWrap>
            </KBTalk>
          </MotionList>
        </div>
      )}

      {showUserStep && (
        <MotionList aniCondition={exchangeReason} showHeight={54}>
          <SelectedUserBox isLastSelect={isLastChoice}>
            관광, 친지방문 등 일반해외여행경비
          </SelectedUserBox>
        </MotionList>
      )}
    </>
  );
};

export default ReasonExchangeSelect;
