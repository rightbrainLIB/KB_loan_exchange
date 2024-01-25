/**
 * Step 07. 부동산 담보대출 본인확인을 위한 인증
 */
import BotBox from "@components/box/BotBox.tsx";
import EmphasisContent from "@components/box/EmphasisContent.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoanIdentityCheck: FC = () => {
  const navigate = useNavigate();
  const [choiceCurrency, setChoiceCurrency] = useState(false);
  const clickNextPop = () => {
    navigate("/KB_loan_exchange/LoanTelecomSelectPop");
  };

  return (
    <>
      <MotionListWrap>
        <BotBox>
          <MotionList
            aniCondition={true}
            afterAnim={() => setChoiceCurrency(true)}>
            <BotProfile />
          </MotionList>
          <MotionList aniCondition={choiceCurrency}>
            <KBTalk>
              <h2>본인확인을 위해 인증이 필요해요</h2>
              <EmphasisContent>
                <p>010 1234 1234</p>
              </EmphasisContent>
              <SelectableListWrap>
                <li>
                  <SelectableBtn bgBtn onClickBtn={clickNextPop}>
                    휴대폰 본인인증
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn>휴대폰번호 수정</SelectableBtn>
                </li>
              </SelectableListWrap>
            </KBTalk>
          </MotionList>
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanIdentityCheck;
