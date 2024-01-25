/**
 * Step 27. 대출 신청 완료
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanSubmitComplete.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const LoanSubmitComplete: FC = () => {
  const navigate = useNavigate();
  const clickNextPop = () => {
    navigate("/LoanImgSubmitPop");
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
                <SelectableBtn bgBtn onClickBtn={clickNextPop}>
                  대출 신청내역 확인
                </SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
          <UtilUnderTalkList btnList={["신청완료 안내사항"]} />
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanSubmitComplete;
