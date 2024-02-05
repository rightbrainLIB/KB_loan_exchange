/**
 * Step 13. 직업 정보
 * 직업정보를 알려주세요
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
import {
  setIncomeByWork,
  setLoanHouseAddConfirm03
} from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import LastTrueUserStepLoan from "@src/utils/LastUserStepLoanProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoanHouseAddComfirmStep03: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { oneHouseOwner, incomeByWork } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanHouseAddConfirm03 } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setIncomeByWork(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStepLoan();

  useEffect(() => {
    setIsLastChoice(lastStr === "incomeByWork");
  }, [lastStr]);

  useEffect(() => {
    if (oneHouseOwner) {
      setShowBotStep(true);
      dispatch(setContainerBottomSize(window.innerHeight - 358 - 60));
      setTimeout(() => {
        dispatch(setLoanHouseAddConfirm03(true));
      }, 600);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [oneHouseOwner, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionListWrap>
            <MotionList aniCondition={loanHouseAddConfirm03}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  <h2>직업정보를 알려주세요</h2>
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn
                        disabled={incomeByWork}
                        onClickBtn={goNextTask}>
                        근로소득자
                      </SelectableBtn>
                    </li>
                    <li>
                      <SelectableBtn disabled={incomeByWork}>
                        사업소득자
                      </SelectableBtn>
                    </li>
                    <li>
                      <SelectableBtn disabled={incomeByWork}>
                        연금소득자
                      </SelectableBtn>
                    </li>
                    <li>
                      <SelectableBtn disabled={incomeByWork}>
                        기타(무직 등)
                      </SelectableBtn>
                    </li>
                  </SelectableListWrap>
                </KBTalk>
              </BotBox>
              <UtilUnderTalkList btnList={["소득구분 안내"]} />
            </MotionList>
          </MotionListWrap>
        </div>
      )}
      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={incomeByWork}>
            <SelectedUserBox isLastSelect={isLastChoice}>
              근로소득자
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default LoanHouseAddComfirmStep03;
