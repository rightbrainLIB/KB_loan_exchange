/**
 * Step 18. 대출 신청 정보 기준 최저금리, 최대한도 제시 > 조건변경하기 step03
 * 기준금리종류를 선택해주세요
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
import { setCofix, setLoanPaybackSelectStep03 } from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import LastTrueUserStepLoan from "@src/utils/LastUserStepLoanProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoanPaybackSelectStep03: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { variableInterestRate, cofix } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanPaybackSelectStep03 } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  // 변동금리 버튼 클릭
  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setCofix(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStepLoan();

  useEffect(() => {
    setIsLastChoice(lastStr === "cofix");
  }, [lastStr]);

  useEffect(() => {
    if (variableInterestRate) {
      setShowBotStep(true);
      dispatch(setContainerBottomSize(window.innerHeight - 252 - 60));
      setTimeout(() => {
        dispatch(setLoanPaybackSelectStep03(true));
      }, 600);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [variableInterestRate, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionListWrap>
            <MotionList aniCondition={loanPaybackSelectStep03}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  <h2>기준금리종류를 선택해주세요</h2>
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn disabled={cofix} onClickBtn={goNextTask}>
                        신잔액기준 COFIX
                      </SelectableBtn>
                    </li>
                    <li>
                      <SelectableBtn disabled={cofix}>MOR</SelectableBtn>
                    </li>
                  </SelectableListWrap>
                </KBTalk>
              </BotBox>
              <UtilUnderTalkList btnList={["기준금리종류"]} />
            </MotionList>
          </MotionListWrap>
        </div>
      )}

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={cofix}>
            <SelectedUserBox isLastSelect={isLastChoice}>
              신잔액기준 COFIX
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default LoanPaybackSelectStep03;
