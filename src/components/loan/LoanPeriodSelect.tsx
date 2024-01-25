/**
 * Step 18. 대출 신청 정보 기준 최저금리, 최대한도 제시 > 조건변경하기 step01
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC } from "react";

const LoanPeriodSelect: FC = () => {
  return (
    <>
      <MotionListWrap>
        <BotBox>
          <BotProfile />
          <KBTalk>신청정보를 확인하기 위해 몇가지 질문을 할게요</KBTalk>
          <KBTalk>
            <h2>대출 기간을 정해주세요</h2>
            <SelectableListWrap>
              <li>
                <SelectableBtn bgBtn> 대출기간 선택</SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanPeriodSelect;
