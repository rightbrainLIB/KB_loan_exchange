/**
 * Step 11. 주택 구입 시 지정할 명의
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanHouseAddComfirmStep01.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC } from "react";

const LoanHouseAddComfirmStep01: FC = () => {
  return (
    <>
      <MotionListWrap>
        <BotBox>
          <BotProfile />
          <KBTalk>
            <img src={img} />
            <SelectableListWrap>
              <li>
                <SelectableBtn>공동명의</SelectableBtn>
              </li>
              <li>
                <SelectableBtn>단독명의</SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
          <UtilUnderTalkList btnList={["담보물 명의 안내"]} />
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanHouseAddComfirmStep01;
