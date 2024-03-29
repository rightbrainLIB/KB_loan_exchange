/**
 * 원하는 환율일 때 알림받기
 * 환율이 xxx원 이하 일때 알림을 드릴까요?
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/CheckNotificationExchangeRate.png";
import {
  setCheckNotificationExchangeRate,
  setConfirmAlarm
} from "@slices/exchangeSlices.ts";
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { KBState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CheckNotificationExchangeRate: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { checkNotificationExchangeRate } = useSelector(
    (state: KBState) => state.exchange.botStep
  );
  const { writeExchangeRate, confirmAlarm } = useSelector(
    (state: KBState) => state.exchange.userStep
  );

  // 이대로 알림 설정하기
  const onClickNext = useCallback(() => {
    setShowUserStep(true);
    dispatch(setConfirmAlarm(true));
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();
  useEffect(() => {
    setIsLastChoice(lastStr === "confirmAlarm");
  }, [lastStr]);

  useEffect(() => {
    if (writeExchangeRate) {
      setShowBotStep(true);
      dispatch(setContainerBottomSize(window.innerHeight - 354 - 60));
      setTimeout(() => {
        dispatch(setCheckNotificationExchangeRate(true));
      }, 600);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [writeExchangeRate, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionList aniCondition={checkNotificationExchangeRate}>
            <BotBox>
              <BotProfile />
              <KBTalk>
                <img src={img} />
                <SelectableListWrap>
                  <li>
                    <SelectableBtn bgBtn onClickBtn={onClickNext}>
                      이대로 알림 설정
                    </SelectableBtn>
                  </li>
                  <li>
                    <SelectableBtn>다시 설정</SelectableBtn>
                  </li>
                </SelectableListWrap>
              </KBTalk>
            </BotBox>
          </MotionList>
        </div>
      )}

      {showUserStep && (
        <MotionList aniCondition={confirmAlarm}>
          <SelectedUserBox isLastSelect={isLastChoice}>
            이대로 알림 설정
          </SelectedUserBox>
        </MotionList>
      )}
    </>
  );
};

export default CheckNotificationExchangeRate;
