/**
 * 원하는 환율일 때 알림받기
 * 환율이 얼마일때 알려드릴까요?
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/NotifyWhenExchangeRate.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC } from "react";

const NotifyWhenExchangeRate: FC = () => {
  return (
    <> 
    <MotionList>
      <BotProfile />
      <KBTalk>
				<img src={img} /> 
				<SelectableListWrap>
					<li>
            <SelectableBtn bgBtn>
							원하는 환율 지정
						</SelectableBtn>
          </li>
        </SelectableListWrap>
      </KBTalk>
    </MotionList>
    </>
  );
};

export default NotifyWhenExchangeRate;
