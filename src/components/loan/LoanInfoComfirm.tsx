/**
 * Step 23. 대출 신청정보 확인
 * 대출 신청정보를 확인해주세요
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanInfoComfirm.png";
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
import { setCallRequestLoan, setLoanInfoConfirm } from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import LastTrueUserStepLoan from "@src/utils/LastUserStepLoanProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoanInfoComfirm: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { selectedUserLoanPrice, callRequestLoan } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanInfoConfirm } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setCallRequestLoan(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStepLoan();

  useEffect(() => {
    setIsLastChoice(lastStr === "callRequestLoan");
  }, [lastStr]);

  useEffect(() => {
    if (selectedUserLoanPrice) {
      setShowBotStep(true);
      dispatch(setContainerBottomSize(window.innerHeight - 464 - 60));
      setTimeout(() => {
        dispatch(setLoanInfoConfirm(true));
      }, 600);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [selectedUserLoanPrice, dispatch]);

  return (
    <>
      {showBotStep && (
        <MotionListWrap>
          <MotionList aniCondition={loanInfoConfirm}>
            <BotBox>
              <BotProfile />
              <KBTalk>
                <img src={img} />
                <SelectableListWrap>
                  <li>
                    <SelectableBtn
                      bgBtn
                      disabled={callRequestLoan}
                      onClickBtn={goNextTask}>
                      대출 신청
                    </SelectableBtn>
                  </li>
                  <li>
                    <SelectableBtn disabled={callRequestLoan}>
                      신청정보 재입력
                    </SelectableBtn>
                  </li>
                </SelectableListWrap>
              </KBTalk>
            </BotBox>
          </MotionList>
        </MotionListWrap>
      )}

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={callRequestLoan}>
            <SelectedUserBox isLastSelect={isLastChoice}>
              대출 신청
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default LoanInfoComfirm;
