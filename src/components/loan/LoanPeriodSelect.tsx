/**
 * Step 18. 대출 신청 정보 기준 최저금리, 최대한도 제시 > 조건변경하기 step01
 */
import SelectLoanPeriodSheet from "@components/bottomSheet/SelectLoanPeriodSheet.tsx";
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
import { setLoanPeriodSelect, setSelected10Years } from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import LastTrueUserStepLoan from "@src/utils/LastUserStepLoanProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoanPeriodSelect: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep1, setShowBotStep1] = useState(false);
  const [showBotStep2, setShowBotStep2] = useState(false);
  const [chapter2, setChapter2] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const [openPeriodSheet, setOpenPeriodSheet] = useState(false);

  const { changeUserInput, selected10Years } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanPeriodSelect } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  const showNextChapter = useCallback(() => {
    setShowBotStep2(true);
    setTimeout(() => {
      setChapter2(true);
    }, 300);
  }, []);

  // 대출기간 선택 바텀시트
  const showPeriodSheet = useCallback(() => {
    setOpenPeriodSheet(true);
  }, []);

  // 대출기간 선택 바텀시트 닫기
  const closePeriodSheet = useCallback(() => {
    setOpenPeriodSheet(false);
  }, []);

  // 대출기간 선택 바텀시트 - 10년 선택
  const goNextTask = useCallback(() => {
    setOpenPeriodSheet(false);
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setSelected10Years(true));
    }, 300);
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStepLoan();

  useEffect(() => {
    setIsLastChoice(lastStr === "selected10Years");
  }, [lastStr]);

  useEffect(() => {
    if (changeUserInput) {
      setShowBotStep1(true);
      dispatch(setContainerBottomSize(window.innerHeight - 275 - 60));
      setTimeout(() => {
        dispatch(setLoanPeriodSelect(true));
      }, 600);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [changeUserInput, dispatch]);

  return (
    <>
      {showBotStep1 && (
        <div>
          <MotionListWrap>
            <MotionList
              aniCondition={loanPeriodSelect}
              afterAnim={showNextChapter}>
              <BotBox>
                <BotProfile />
                <KBTalk>신청정보를 확인하기 위해 몇가지 질문을 할게요</KBTalk>
              </BotBox>
            </MotionList>
          </MotionListWrap>
        </div>
      )}

      {showBotStep2 && (
        <div>
          <MotionListWrap>
            <MotionList aniCondition={chapter2} showHeight={130}>
              <KBTalk>
                <h2>대출 기간을 정해주세요</h2>
                <SelectableListWrap>
                  <li>
                    <SelectableBtn
                      bgBtn
                      disabled={selected10Years}
                      onClickBtn={showPeriodSheet}>
                      대출기간 선택
                    </SelectableBtn>
                  </li>
                </SelectableListWrap>
              </KBTalk>
            </MotionList>
          </MotionListWrap>
        </div>
      )}

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={selected10Years}>
            <SelectedUserBox isLastSelect={isLastChoice}>10년</SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}

      <SelectLoanPeriodSheet
        openSheet={openPeriodSheet}
        closeSheet={closePeriodSheet}
        showNextStep={goNextTask}
      />
    </>
  );
};

export default LoanPeriodSelect;
