/**
 * Step 13. 직업 정보
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC } from "react";

const LoanHouseAddComfirmStep03: FC = () => {
  return (
    <>
      <MotionListWrap>
        <BotBox>
          <BotProfile />
          <KBTalk>
            <h2>직업정보를 알려주세요</h2>
            <SelectableListWrap>
              <li>
                <SelectableBtn>근로소득자</SelectableBtn>
              </li>
              <li>
                <SelectableBtn>사업소득자</SelectableBtn>
              </li>
              <li>
                <SelectableBtn>연금소득자</SelectableBtn>
              </li>
              <li>
                <SelectableBtn>기타(무직 등)</SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
          <UtilUnderTalkList btnList={["소득구분 안내"]} />
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanHouseAddComfirmStep03;
