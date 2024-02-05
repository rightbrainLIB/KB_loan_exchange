/**
 * Step 14. 입력한 정보 요약
 * 지금까지의 정보를 요약할게요
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanHouseAddComfirmStep04.png";
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
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
      dispatch(setContainerBottomSize(window.innerHeight - 444 - 60));
      setTimeout(() => {
        dispatch(setLoanHouseAddConfirm04(true));
      }, 600);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [incomeByWork]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionListWrap>
            <MotionList aniCondition={loanHouseAddConfirm04}>
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
