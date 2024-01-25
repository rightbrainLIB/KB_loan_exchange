/**
 * Step 28. 대출 신청 완료 내역 확인
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanSubmitInfo.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const LoanSubmitInfo: FC = () => {
  const navigate = useNavigate();
  const clickNextPop = () => {
    navigate("/LoanInfoTotalComplete");
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
                  대출 진행현황조회
                </SelectableBtn>
              </li>
              <li>
                <SelectableBtn>홈으로 가기</SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanSubmitInfo;
