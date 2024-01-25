/**
 * Step 15. 맞춤정보 추천
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanHouseAddComfirmStep05_01.png";
import img02 from "@imgs/loan/LoanHouseAddComfirmStep05_02.png";
import img03 from "@imgs/loan/LoanHouseAddComfirmStep05_03.png";
import img04 from "@imgs/loan/LoanHouseAddComfirmStep05_04.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC } from "react";

const LoanHouseAddComfirmStep05: FC = () => {
  return (
    <>
      <MotionListWrap>
        <BotBox>
          <BotProfile />
          <KBTalk>
            <img src={img} />
          </KBTalk>
          <KBTalk>
            <img src={img02} />
          </KBTalk>
          <KBTalk>
            <img src={img03} />
            <SelectableListWrap>
              <li>
                <SelectableBtn bgBtn>대출 신청</SelectableBtn>
              </li>
              <li>
                <SelectableBtn>
                  <img src={img04} width="95" />
                </SelectableBtn>
              </li>
              <li>
                <SelectableBtn>처음부터 다시 조회</SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
          <UtilUnderTalkList btnList={["한도금리 유의사항"]} />
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanHouseAddComfirmStep05;
