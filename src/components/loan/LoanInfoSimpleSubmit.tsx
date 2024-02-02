/**
 * Step 24. 대출 신청 서류 제출 > 국민지갑으로 간편제출
 * 대출신청에 필요한 서류를 제출해주세요
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanInfoSimpleSubmit.png";
import {
  setLoanInfoSimpleSubmit,
  setNationalPurse
} from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
// import LastTrueUserStepLoan from "@src/utils/LastUserStepLoanProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoanInfoSimpleSubmit: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  // const [isLastChoice, setIsLastChoice] = useState(false);

  const { callRequestLoan, nationalPurse } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanInfoSimpleSubmit } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setNationalPurse(true));
    });
  }, [dispatch]);

  // // 마지막 step 체크하기
  // const lastStr = LastTrueUserStepLoan();
  //
  // useEffect(() => {
  //   setIsLastChoice(lastStr === "nationalPurse");
  // }, [lastStr]);

  useEffect(() => {
    if (callRequestLoan) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setLoanInfoSimpleSubmit(true));
      }, 600);
    }
  }, [callRequestLoan, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionListWrap>
            <MotionList aniCondition={loanInfoSimpleSubmit}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  <img src={img} />
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn
                        bgBtn
                        disabled={nationalPurse}
                        onClickBtn={goNextTask}>
                        국민지갑으로 간편제출
                      </SelectableBtn>
                    </li>
                  </SelectableListWrap>
                </KBTalk>
              </BotBox>
              <UtilUnderTalkList btnList={["국민지갑 안내"]} />
            </MotionList>
          </MotionListWrap>
        </div>
      )}

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={nationalPurse}>
            <SelectedUserBox>국민지갑 간편제출</SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default LoanInfoSimpleSubmit;
