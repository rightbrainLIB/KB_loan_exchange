/**
 * Step 09. 주택 시세 확인
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanHouseComfirm_01.png";
import { FC } from "react";

const LoanHouseComfirm: FC = () => {
  return (
    <>
      <MotionListWrap>
        <BotBox>
          <BotProfile />
          <KBTalk>
            <img src={img} />
          </KBTalk>
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanHouseComfirm;
