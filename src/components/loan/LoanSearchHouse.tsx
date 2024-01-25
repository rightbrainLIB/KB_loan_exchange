/**
 * Step 10. 주택시세 정보 검색 채팅
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanSearchHouse_01.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const LoanSearchHouse: FC = () => {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate("/KB_loan_exchange/LoanSearchAddressPop");
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
            <h2>주소를 입력해주세요</h2>
            <SelectableListWrap>
              <li>
                <SelectableBtn bgBtn onClickBtn={onClickBtn}>
                  주택 시세정보 검색
                </SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanSearchHouse;
