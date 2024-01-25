/**
 * 원하는 환율일 때 알림받기
 * 원하는 환율일 때 알림을 드릴게요
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC } from "react";

const CompletionNotificationExchangeRate: FC = () => {
  return (
    <> 
    <MotionList>
      <BotProfile />
      <KBTalk>
				<h2>원하는 환율일 때 알림을 드릴게요</h2>
				<SelectableListWrap>
					<li>
            <SelectableBtn bgBtn>
							알림 내역 보기
						</SelectableBtn>
          </li>
					<li>
            <SelectableBtn>
							홈으로 가기
						</SelectableBtn>
          </li>
        </SelectableListWrap>
      </KBTalk>
    </MotionList>
    </>
  );
};

export default CompletionNotificationExchangeRate;
