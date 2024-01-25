/**
 * Step 14. 입력한 정보 요약
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanHouseAddComfirmStep04.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC } from "react";

const LoanHouseAddComfirmStep04: FC = () => {
  return (
    <>
      <MotionListWrap>
        <BotBox>
          <BotProfile />
          <KBTalk>
            <img src={img} />
            <SelectableListWrap>
              <li>
                <SelectableBtn bgBtn>금리 한도 알아보기</SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanHouseAddComfirmStep04;
