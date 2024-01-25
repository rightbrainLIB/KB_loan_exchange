/**
 * Step 05. 부동산 담보대출 심사 약관 동의 채팅
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoanLimitCurrency: FC = () => {
  const navigate = useNavigate();
  const [choiceCurrency, setChoiceCurrency] = useState(false);
  const clickCurrencyPop = () => {
    navigate("/LoanAgreeCheck");
  };

  return (
    <>
      <MotionListWrap>
        <BotBox>
          <MotionList
            aniCondition={true}
            afterAnim={() => setChoiceCurrency(true)}>
            <BotProfile />
            <KBTalk>
              <p>
                안녕하세요, 김국민님!
                <br />
                쉽고 편한 신규 부동산담보대출을 받으실 수있도록 도와드릴게요
              </p>
            </KBTalk>
          </MotionList>
          <MotionList aniCondition={choiceCurrency}>
            <KBTalk>
              <h2>금리와 한도를 조회하기 위해 심사약관에 동의가 필요해요</h2>
              <SelectableListWrap>
                <li>
                  <SelectableBtn bgBtn onClickBtn={clickCurrencyPop}>
                    심사 약관 동의
                  </SelectableBtn>
                </li>
              </SelectableListWrap>
            </KBTalk>
          </MotionList>
        </BotBox>
      </MotionListWrap>
    </>
  );
};

export default LoanLimitCurrency;
