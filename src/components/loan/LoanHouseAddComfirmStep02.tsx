/**
 * Step 12. 보유한 주택 수
 * 다음으로 보유한 주택 수를 알려주세요
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanHouseAddComfirmStep02.png";
import {
  setLoanHouseAddConfirm02,
  setOneHouseOwner
} from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import LastTrueUserStepLoan from "@src/utils/LastUserStepLoanProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoanHouseAddComfirmStep02: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { houseOwner, oneHouseOwner } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanHouseAddConfirm02 } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setOneHouseOwner(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStepLoan();

  useEffect(() => {
    setIsLastChoice(lastStr === "oneHouseOwner");
  }, [lastStr]);

  useEffect(() => {
    if (houseOwner) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setLoanHouseAddConfirm02(true));
      }, 600);
    }
  }, [houseOwner, dispatch]);

  return (
    <>
      {showBotStep && (
        <div style={{ marginTop: 46 }}>
          <MotionListWrap>
            <MotionList showHeight={336} aniCondition={loanHouseAddConfirm02}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  <img src={img} />
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn disabled={oneHouseOwner}>
                        무주택
                      </SelectableBtn>
                    </li>
                    <li>
                      <SelectableBtn
                        disabled={oneHouseOwner}
                        onClickBtn={goNextTask}>
                        1주택
                      </SelectableBtn>
                    </li>
                    <li>
                      <SelectableBtn disabled={oneHouseOwner}>
                        2주택 이상
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
          <MotionList aniCondition={oneHouseOwner}>
            <SelectedUserBox isLastSelect={isLastChoice}>1주택</SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default LoanHouseAddComfirmStep02;
