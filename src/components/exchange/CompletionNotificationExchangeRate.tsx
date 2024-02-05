/**
 * 원하는 환율일 때 알림받기
 * 원하는 환율일 때 알림을 드릴게요
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import { setCompletionNotificationExchangeRate } from "@slices/exchangeSlices.ts";
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { KBState } from "@src/store";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CompletionNotificationExchangeRate: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);

  const { completionNotificationExchangeRate } = useSelector(
    (state: KBState) => state.exchange.botStep
  );
  const { confirmAlarm } = useSelector(
    (state: KBState) => state.exchange.userStep
  );

  useEffect(() => {
    if (confirmAlarm) {
      setShowBotStep(true);
      dispatch(setContainerBottomSize(window.innerHeight - 221 - 60));
      setTimeout(() => {
        dispatch(setCompletionNotificationExchangeRate(true));
      }, 600);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [confirmAlarm, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionList
            aniCondition={completionNotificationExchangeRate}
            showHeight={221}>
            <BotBox>
              <BotProfile />
              <KBTalk>
                <h2>원하는 환율일 때 알림을 드릴게요</h2>
                <SelectableListWrap>
                  <li>
                    <SelectableBtn bgBtn>알림 내역 보기</SelectableBtn>
                  </li>
                  <li>
                    <SelectableBtn>홈으로 가기</SelectableBtn>
                  </li>
                </SelectableListWrap>
              </KBTalk>
            </BotBox>
          </MotionList>
        </div>
      )}
    </>
  );
};

export default CompletionNotificationExchangeRate;
