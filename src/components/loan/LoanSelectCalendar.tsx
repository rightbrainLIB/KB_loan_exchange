/**
 * Step 19. 대출 받고자 하는 날짜 선택
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanSelectCalendar.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const LoanSelectCalendar: FC = () => {
  const navigate = useNavigate();
  const clickNextPop = () => {
    navigate("/LoanSelectCalendarPop");
  };
  return (
    <>
      <MotionListWrap>
        <BotBox>
          <BotProfile />
          <KBTalk>
            <img src={img} width="247" />
            <SelectableListWrap>
              <li>
                <SelectableBtn bgBtn onClickBtn={clickNextPop}>
                  대출희망일 선택
                </SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanSelectCalendar;
