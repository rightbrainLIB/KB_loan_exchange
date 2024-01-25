/**
 * Step 21. 대출 신청금액 입력
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanApplicationAmount.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const LoanApplicationAmount: FC = () => {
  const navigate = useNavigate();
  const clickNextPop = () => {
    navigate("/LoanApplicationAmountPop");
  };
  return (
    <>
      <MotionListWrap>
        <BotBox>
          <BotProfile />
          <KBTalk>
            <img src={img} />
            <SelectableListWrap>
              <li>
                <SelectableBtn bgBtn onClickBtn={clickNextPop}>
                  신청금액 입력
                </SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanApplicationAmount;
