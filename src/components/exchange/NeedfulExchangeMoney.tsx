/**
 * Step 03. 환전정보입력(Progress bar 3/7)
 * 환전에 필요한 금액을 알려드릴게요
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/NeedfulExchangeMoney.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC } from "react";

const NeedfulExchangeMoney: FC = () => {
  return (
    <>
    <MotionList>
      <BotProfile />
      <KBTalk>
				<img src={img} /> 
				<SelectableListWrap>
					<li>
            <SelectableBtn bgBtn>
							환전 바로 진행
						</SelectableBtn>
          </li>
          <li>
            <SelectableBtn>
							환전 금액 수정
						</SelectableBtn>
          </li>
				</SelectableListWrap>
      </KBTalk>
    </MotionList>
    </>
  );
};

export default NeedfulExchangeMoney;
