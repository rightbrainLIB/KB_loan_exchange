/**
 * Step 16. 대출 신청 진행 안내
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanHouseAddComfirmStep06.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const LoanHouseAddComfirmStep06: FC = () => {
  const navigate = useNavigate();
  const clickBtnPop = () => {
    navigate("/LoanFirstRatePop");
  };
  return (
    <>
      <MotionListWrap>
        <BotBox>
          <BotProfile />
          <KBTalk>
            <img src={img} />
            <SelectableListWrap>
              <li>
                <SelectableBtn bgBtn onClickBtn={clickBtnPop}>
                  우대금리 적용
                </SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
          <UtilUnderTalkList btnList={["KB 납부 실적 우대금리"]} />
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanHouseAddComfirmStep06;
