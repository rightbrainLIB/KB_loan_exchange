/**
 * Step 18. 대출 신청 정보 기준 최저금리, 최대한도 제시 > 조건변경하기 step03
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC } from "react";

const LoanPaybackSelectStep03: FC = () => {
  return (
    <>
      <MotionListWrap>
        <BotBox>
          <BotProfile />
          <KBTalk>
            <h2>기준금리종류를 선택해주세요</h2>
            <SelectableListWrap>
              <li>
                <SelectableBtn>신잔액기준 COFIX</SelectableBtn>
              </li>
              <li>
                <SelectableBtn>MOR</SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
          <UtilUnderTalkList btnList={["기준금리종류"]} />
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanPaybackSelectStep03;
