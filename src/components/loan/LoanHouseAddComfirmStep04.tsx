/**
 * Step 14. 입력한 정보 요약
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanHouseAddComfirmStep04.png";
import {
  setInterestRateAndLimit,
  setLoanHouseAddConfirm04
} from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoanHouseAddComfirmStep04: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);

  const { incomeByWork, interestRateAndLimit } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanHouseAddConfirm04 } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setInterestRateAndLimit(true));
    });
  }, [dispatch]);

  useEffect(() => {
    if (incomeByWork) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setLoanHouseAddConfirm04(true));
      }, 600);
    }
  }, [incomeByWork]);

  return (
    <>
      {showBotStep && (
        <div style={{ marginTop: 56 }}>
          <MotionListWrap>
            <MotionList
              aniCondition={loanHouseAddConfirm04}
              showHeight={448}
              moveScroll={160}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  <img src={img} />
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn
                        bgBtn
                        disabled={interestRateAndLimit}
                        onClickBtn={goNextTask}>
                        금리 한도 알아보기
                      </SelectableBtn>
                    </li>
                  </SelectableListWrap>
                </KBTalk>
              </BotBox>
            </MotionList>
          </MotionListWrap>
        </div>
      )}

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={interestRateAndLimit}>
            <SelectedUserBox>금리와 한도 알아보기</SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default LoanHouseAddComfirmStep04;
