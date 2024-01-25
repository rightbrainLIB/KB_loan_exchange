/**
 * Step 18. 대출 신청 정보 기준 최저금리, 최대한도 제시
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanRecommendGuide.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC } from "react";

const LoanRecommendGuide: FC = () => {
  return (
    <>
      <MotionListWrap>
        <BotBox>
          <BotProfile />
          <KBTalk>
            <img src={img} />
            <SelectableListWrap>
              <li>
                <SelectableBtn bgBtn>이대로 대출진행</SelectableBtn>
              </li>
              <li>
                <SelectableBtn>조건 변경하기</SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
          <UtilUnderTalkList btnList={["금리 상세 안내", "갚는방법 안내"]} />
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanRecommendGuide;
