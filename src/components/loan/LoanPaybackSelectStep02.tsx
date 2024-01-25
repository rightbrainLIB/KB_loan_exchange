/**
 * Step 18. 대출 신청 정보 기준 최저금리, 최대한도 제시 > 조건변경하기 step02
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC } from "react";

const LoanPaybackSelectStep02: FC = () => {
  return (
    <>
      <MotionListWrap>
        <BotBox>
          <BotProfile />
          <KBTalk>
            <h2>금리방식을 선택해주세요</h2>
            <SelectableListWrap>
              <li>
                <SelectableBtn>혼합금리</SelectableBtn>
              </li>
              <li>
                <SelectableBtn>변동금리</SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
          <UtilUnderTalkList btnList={["금리방식 안내"]} />
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanPaybackSelectStep02;
