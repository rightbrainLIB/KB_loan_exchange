/**
 * Step 18. 대출 신청 정보 기준 최저금리, 최대한도 제시 > 조건변경하기 step02
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanPaybackSelectStep01.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC } from "react";

const LoanPaybackSelectStep01: FC = () => {
  return (
    <>
      <MotionListWrap>
        <BotBox>
          <BotProfile />
          <KBTalk>
            <img src={img} />
            <SelectableListWrap>
              <li>
                <SelectableBtn>원리금균등상환</SelectableBtn>
              </li>
              <li>
                <SelectableBtn>원금균등분할상환</SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
          <UtilUnderTalkList btnList={["상환 방법 안내"]} />
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanPaybackSelectStep01;
