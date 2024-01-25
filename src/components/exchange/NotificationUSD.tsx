/**
 * 원하는 환율일 때 알림받기
 * 미국달러로 계속 진행할까요?
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/NotificationUSD.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC } from "react";

const NotificationUSD: FC = () => {
  return (
    <> 
    <MotionList>
      <BotProfile />
      <KBTalk>
				<img src={img} />
				<SelectableListWrap>
					<li>
            <SelectableBtn bgBtn>
							계속 진행
						</SelectableBtn>
          </li>
					<li>
            <SelectableBtn>
							통화 종류 변경
						</SelectableBtn>
          </li>
        </SelectableListWrap>
      </KBTalk>
    </MotionList>
    </>
  );
};

export default NotificationUSD;
