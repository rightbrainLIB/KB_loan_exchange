/**
 * 원하는 환율일 때 알림받기
 * 미국달러로 계속 진행할까요?
 */
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/NotificationUSD.png";
import { setAlarmCurrency, setSaveAlarm } from "@slices/exchangeSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { ExchangeState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const NotificationUSD: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { notificationUSD } = useSelector(
    (state: ExchangeState) => state.exchange.botStep
  );
  const { saveAlarm, alarmCurrency } = useSelector(
    (state: ExchangeState) => state.exchange.userStep
  );

  // 계속 진행 클릭
  const onClickNext = useCallback(() => {
    setShowUserStep(true);
    dispatch(setAlarmCurrency(true));
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "alarmCurrency");
  }, [lastStr]);

  useEffect(() => {
    if (saveAlarm) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setSaveAlarm(true));
      });
    } else {
      setShowBotStep(false);
    }
  }, [saveAlarm, dispatch]);

  return (
    <>
      {showBotStep && (
        <div style={{ marginTop: 37 }}>
          <MotionList aniCondition={notificationUSD} showHeight={327}>
            <BotProfile />
            <KBTalk>
              <img src={img} alt="" />
              <SelectableListWrap>
                <li>
                  <SelectableBtn
                    bgBtn
                    disabled={alarmCurrency}
                    onClickBtn={onClickNext}>
                    계속 진행
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn disabled={alarmCurrency}>
                    통화 종류 변경
                  </SelectableBtn>
                </li>
              </SelectableListWrap>
            </KBTalk>
          </MotionList>

          {showUserStep && (
            <MotionList aniCondition={alarmCurrency}>
              <SelectedUserBox isLastSelect={isLastChoice}>
                계속 진행
              </SelectedUserBox>
            </MotionList>
          )}
        </div>
      )}
    </>
  );
};

export default NotificationUSD;
