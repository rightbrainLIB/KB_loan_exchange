/**
 * Step 09. 주택시세를 확인해주세요
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanHouseComfirm_01.png";
import { setLoanHouseConfirm } from "@slices/loanSlices.ts";
import { KBState } from "@src/store";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoanHouseComfirm: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);

  const { userSearchedAPT } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanHouseConfirm } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  useEffect(() => {
    if (userSearchedAPT) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setLoanHouseConfirm(true));
      }, 600);
    }
  }, [userSearchedAPT]);

  return (
    <>
      {showBotStep && (
        <div style={{ marginTop: 30 }}>
          <MotionListWrap>
            <MotionList aniCondition={loanHouseConfirm} showHeight={180}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  <img src={img} />
                </KBTalk>
              </BotBox>
            </MotionList>
          </MotionListWrap>
        </div>
      )}
    </>
  );
};

export default LoanHouseComfirm;
