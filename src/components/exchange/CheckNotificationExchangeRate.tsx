/**
 * 원하는 환율일 때 알림받기
 * 환율이 xxx원 이하 일때 알림을 드릴까요?
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/CheckNotificationExchangeRate.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC } from "react";

const CheckNotificationExchangeRate: FC = () => {
  return (
    <> 
    <MotionList>
      <BotProfile />
      <KBTalk>
				<img src={img} /> 
				<SelectableListWrap>
					<li>
            <SelectableBtn bgBtn>
							이대로 알림 설정
						</SelectableBtn>
          </li>
					<li>
            <SelectableBtn>
							다시 설정
						</SelectableBtn>
          </li>
        </SelectableListWrap>
      </KBTalk>
    </MotionList>
    </>
  );
};

export default CheckNotificationExchangeRate;
