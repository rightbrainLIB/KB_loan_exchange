/**
 * Step 19. 대출 받고자 하는 날짜 선택
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import LoanSelectCalendarPop from "@components/loan/LoanSelectCalendarPop.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanSelectCalendar.png";
import {
  setLoanSelectCalendar,
  setSelectedUserDate
} from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import LastTrueUserStepLoan from "@src/utils/LastUserStepLoanProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoanSelectCalendar: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);
  const [openCalendarSheet, setOpenCalendarSheet] = useState(false);

  // 대출희망일 선택 버튼 클릭
  const showCalendarSheet = useCallback(() => {
    setOpenCalendarSheet(true);
  }, []);
  // 대출희망 선택 캘린더 바텀시트 닫기
  const closeCalendarSheet = useCallback(() => {
    setOpenCalendarSheet(false);
  }, []);
  // 대출희망 선택 캘린더 바텀시트에서 확인 버튼 클릭
  const goNextTask = useCallback(() => {
    setOpenCalendarSheet(false);
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setSelectedUserDate(true));
    });
  }, [dispatch]);

  const { keepGoingLoan, reKeepGoingLoan, selectedUserDate } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanSelectCalendar } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStepLoan();

  useEffect(() => {
    setIsLastChoice(lastStr === "selectedUserDate");
  }, [lastStr]);

  useEffect(() => {
    if (keepGoingLoan) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setLoanSelectCalendar(true));
      }, 600);
    } else if (reKeepGoingLoan) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setLoanSelectCalendar(true));
      }, 600);
    }
  }, [keepGoingLoan, reKeepGoingLoan, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionListWrap>
            <MotionList aniCondition={loanSelectCalendar}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  <img src={img} width="247" />
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn
                        bgBtn
                        disabled={selectedUserDate}
                        onClickBtn={showCalendarSheet}>
                        대출희망일 선택
                      </SelectableBtn>
                    </li>
                  </SelectableListWrap>
                </KBTalk>
              </BotBox>
            </MotionList>
          </MotionListWrap>
        </div>
      )}

      <LoanSelectCalendarPop
        openSheet={openCalendarSheet}
        closeSheet={closeCalendarSheet}
        showNextStep={goNextTask}
      />

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={selectedUserDate}>
            <SelectedUserBox isLastSelect={isLastChoice}>
              2024.02.08
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default LoanSelectCalendar;
