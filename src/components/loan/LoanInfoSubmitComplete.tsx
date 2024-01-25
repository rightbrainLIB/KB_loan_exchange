/**
 * Step 25. 대출 신청 서류 제출 > 이미지 제출 안내
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanInfoSubmitComplete_01.png";
import img02 from "@imgs/loan/LoanInfoSubmitComplete_02.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const LoanInfoSubmitComplete: FC = () => {
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
          </KBTalk>
          <KBTalk>
            <img src={img02} />
            <SelectableListWrap>
              <li>
                <SelectableBtn bgBtn onClickBtn={clickNextPop}>
                  이미지로 제출하기
                </SelectableBtn>
              </li>
              <li>
                <SelectableBtn>나중에 제출하기</SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
          <UtilUnderTalkList
            btnList={["발급처별 서류 안내", "서류제출 유의사항"]}
          />
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanInfoSubmitComplete;
