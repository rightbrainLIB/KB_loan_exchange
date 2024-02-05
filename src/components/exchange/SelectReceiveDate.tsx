/**
 * Step 04. 수령정보입력(Progress bar 4/7)
 * 받고자 하는 날짜를 알려주세요
 */
import SelectReceiveDateSheet from "@components/bottomSheet/SelectReceiveDateSheet.tsx";
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/SelectReceiveDate.png";
import {
  setSelectReceiveDate,
  setUserTakenDate
} from "@slices/exchangeSlices.ts";
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
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
      dispatch(setContainerBottomSize(window.innerHeight - 318 - 60));
      setTimeout(() => {
        dispatch(setSelectReceiveDate(true));
      }, 600);
    }
  }, [receiveKeepGoing, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionList aniCondition={selectReceiveDate}>
            <BotBox>
              <BotProfile />
              <KBTalk>
                <img src={img} alt="" />
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
            </BotBox>
          </MotionList>
        </div>
      )}

      {showUserStep && (
        <MotionList aniCondition={userTakenDate}>
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
