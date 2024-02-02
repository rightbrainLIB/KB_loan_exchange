/**
 * Step 18. 대출 신청 정보 기준 최저금리, 최대한도 제시 > 조건변경하기 step02
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import {
  setLoanPaybackSelectStep02,
  setVariableInterestRate
} from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import LastTrueUserStepLoan from "@src/utils/LastUserStepLoanProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoanPaybackSelectStep02: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { fullyAmortized, variableInterestRate } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanPaybackSelectStep02 } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  // 변동금리 버튼 클릭
  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setVariableInterestRate(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStepLoan();

  useEffect(() => {
    setIsLastChoice(lastStr === "variableInterestRate");
  }, [lastStr]);

  useEffect(() => {
    if (fullyAmortized) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setLoanPaybackSelectStep02(true));
      }, 600);
    }
  }, [fullyAmortized, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionListWrap>
            <MotionList aniCondition={loanPaybackSelectStep02}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  <h2>금리방식을 선택해주세요</h2>
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn disabled={variableInterestRate}>
                        혼합금리
                      </SelectableBtn>
                    </li>
                    <li>
                      <SelectableBtn
                        disabled={variableInterestRate}
                        onClickBtn={goNextTask}>
                        변동금리
                      </SelectableBtn>
                    </li>
                  </SelectableListWrap>
                </KBTalk>
              </BotBox>
              <UtilUnderTalkList btnList={["금리방식 안내"]} />
            </MotionList>
          </MotionListWrap>
        </div>
      )}

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={variableInterestRate}>
            <SelectedUserBox isLastSelect={isLastChoice}>
              변동금리
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default LoanPaybackSelectStep02;
