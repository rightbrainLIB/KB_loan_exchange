/**
 * Step 12. 보유한 주택 수
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanHouseAddComfirmStep02.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC } from "react";

const LoanHouseAddComfirmStep02: FC = () => {
  return (
    <>
      <MotionListWrap>
        <BotBox>
          <BotProfile />
          <KBTalk>
            <img src={img} />
            <SelectableListWrap>
              <li>
                <SelectableBtn>무주택</SelectableBtn>
              </li>
              <li>
                <SelectableBtn>1주택</SelectableBtn>
              </li>
              <li>
                <SelectableBtn>2주택 이상</SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanHouseAddComfirmStep02;
