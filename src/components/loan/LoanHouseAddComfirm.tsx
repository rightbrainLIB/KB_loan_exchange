/**
 * Step 10. 주택 시세 대출 목적
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC } from "react";

const LoanHouseAddComfirm: FC = () => {
  return (
    <>
      <MotionListWrap>
        <BotBox>
          <BotProfile />
          <KBTalk>다음으로 대출에 필요한 몇 가지 필수질문을 드릴게요</KBTalk>
          <KBTalk>
            <h2>먼저 어떤 목적으로 대출을 받으시나요?</h2>
            <SelectableListWrap>
              <li>
                <SelectableBtn>주택 구입</SelectableBtn>
              </li>
              <li>
                <SelectableBtn>생활안전자금</SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanHouseAddComfirm;
