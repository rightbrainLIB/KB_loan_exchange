/**
 * Step 23. 대출 신청정보 확인
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanInfoComfirm.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC } from "react";

const LoanInfoComfirm: FC = () => {
  return (
    <>
      <MotionListWrap>
        <BotBox>
          <BotProfile />
          <KBTalk>
            <img src={img} />
            <SelectableListWrap>
              <li>
                <SelectableBtn bgBtn>대출 신청</SelectableBtn>
              </li>
              <li>
                <SelectableBtn>신청정보 재입력</SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanInfoComfirm;
