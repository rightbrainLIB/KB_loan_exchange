/**
 * Step 27. 대출 신청 완료
 * 대출 신청을 완료했어요!
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanSubmitComplete.png";
import {
  setContainerBottomSize,
  setIsCompleteLoan
} from "@slices/globalUISlice.ts";
import {
  setConfirmUserRequest,
  setLoanSubmitComplete
} from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import LastTrueUserStepLoan from "@src/utils/LastUserStepLoanProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoanSubmitComplete: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { documentImage, confirmUserRequest } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanSubmitComplete } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setConfirmUserRequest(true));
    }, 300);
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStepLoan();

  useEffect(() => {
    setIsLastChoice(lastStr === "confirmUserRequest");
  }, [lastStr]);

  useEffect(() => {
    if (documentImage) {
      dispatch(setIsCompleteLoan(true));
      setShowBotStep(true);
      dispatch(setContainerBottomSize(window.innerHeight - 473 - 60));
      setTimeout(() => {
        dispatch(setLoanSubmitComplete(true));
      }, 600);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [documentImage, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionListWrap>
            <MotionList aniCondition={loanSubmitComplete}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  <img src={img} />
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn
                        bgBtn
                        disabled={confirmUserRequest}
                        onClickBtn={goNextTask}>
                        대출 신청내역 확인
                      </SelectableBtn>
                    </li>
                  </SelectableListWrap>
                </KBTalk>
              </BotBox>
              <UtilUnderTalkList btnList={["신청완료 안내사항"]} />
            </MotionList>
          </MotionListWrap>
        </div>
      )}

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={confirmUserRequest}>
            <SelectedUserBox isLastSelect={isLastChoice}>
              대출 신청내역 확인
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default LoanSubmitComplete;
