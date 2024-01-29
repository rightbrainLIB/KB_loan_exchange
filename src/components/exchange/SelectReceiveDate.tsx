/**
 * Step 04. 수령정보입력(Progress bar 4/7)
 * 받고자 하는 날짜를 알려주세요
 */
import SelectReceiveDateSheet from "@components/bottomSheet/SelectReceiveDateSheet.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/SelectReceiveDate.png";
import {
  setSelectReceiveDate,
  setUserTakenDate
} from "@slices/exchangeSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { KBState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SelectReceiveDate: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);
  const [openCalendarSheet, setOpenCalendarSheet] = useState(false);

  const { receiveKeepGoing, userTakenDate } = useSelector(
    (state: KBState) => state.exchange.userStep
  );
  const { selectReceiveDate } = useSelector(
    (state: KBState) => state.exchange.botStep
  );

  const showCalendar = useCallback(() => {
    setOpenCalendarSheet(true);
  }, []);

  const goNextTask = useCallback(() => {
    setOpenCalendarSheet(false);
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setUserTakenDate(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "userTakenDate");
  }, [lastStr]);

  useEffect(() => {
    if (receiveKeepGoing) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setSelectReceiveDate(true));
      }, 600);
    }
  }, [receiveKeepGoing]);

  return (
    <>
      {showBotStep && (
        <div style={{ marginTop: 51 }}>
          <MotionList aniCondition={selectReceiveDate} showHeight={309}>
            <BotProfile />
            <KBTalk>
              <img src={img} />
              <SelectableListWrap>
                <li>
                  <SelectableBtn
                    bgBtn
                    onClickBtn={showCalendar}
                    disabled={userTakenDate}>
                    날짜 선택
                  </SelectableBtn>
                </li>
              </SelectableListWrap>
            </KBTalk>
          </MotionList>
        </div>
      )}

      {showUserStep && (
        <MotionList aniCondition={userTakenDate} showHeight={54}>
          <SelectedUserBox isLastSelect={isLastChoice}>
            2024.01.22
          </SelectedUserBox>
        </MotionList>
      )}

      <SelectReceiveDateSheet
        sheetOpen={openCalendarSheet}
        closeSheet={() => setOpenCalendarSheet(false)}
        clickNext={goNextTask}
      />
    </>
  );
};

export default SelectReceiveDate;
