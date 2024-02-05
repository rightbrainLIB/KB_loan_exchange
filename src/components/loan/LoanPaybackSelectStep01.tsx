/**
 * Step 18. 대출 신청 정보 기준 최저금리, 최대한도 제시 > 조건변경하기 step02
 * 어떤 방법으로 갚으실 예정인가요?
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanPaybackSelectStep01.png";
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
import {
  setFullyAmortized,
  setLoanPaybackSelectStep01
} from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import LastTrueUserStepLoan from "@src/utils/LastUserStepLoanProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoanPaybackSelectStep01: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { selected10Years, fullyAmortized } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanPaybackSelectStep01 } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  // 원리금균등상환 버튼 클릭
  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setFullyAmortized(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStepLoan();

  useEffect(() => {
    setIsLastChoice(lastStr === "fullyAmortized");
  }, [lastStr]);

  useEffect(() => {
    if (selected10Years) {
      setShowBotStep(true);
      dispatch(setContainerBottomSize(window.innerHeight - 316 - 60));
      setTimeout(() => {
        dispatch(setLoanPaybackSelectStep01(true));
      }, 600);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [selected10Years, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionListWrap>
            <MotionList aniCondition={loanPaybackSelectStep01}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  <img src={img} />
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn
                        disabled={fullyAmortized}
                        onClickBtn={goNextTask}>
                        원리금균등상환
                      </SelectableBtn>
                    </li>
                    <li>
                      <SelectableBtn disabled={fullyAmortized}>
                        원금균등분할상환
                      </SelectableBtn>
                    </li>
                  </SelectableListWrap>
                </KBTalk>
              </BotBox>
              <UtilUnderTalkList btnList={["상환 방법 안내"]} />
            </MotionList>
          </MotionListWrap>
        </div>
      )}

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={fullyAmortized}>
            <SelectedUserBox isLastSelect={isLastChoice}>
              원리금균등상환
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default LoanPaybackSelectStep01;
