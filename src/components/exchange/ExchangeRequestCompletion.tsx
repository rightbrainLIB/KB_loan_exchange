/**
 * Step 07. 환전신청완료(Progress bar 7/7)
 * 환전 신청을 완료했어요!
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/ExchangeRequestCompletion.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC } from "react";

const ExchangeRequestCompletion: FC = () => {
  return (
    <> 
    <MotionList>
      <BotProfile />
      <KBTalk>
				<img src={img} />
				<SelectableListWrap>
					<li>
            <SelectableBtn bgBtn>
							환전 신청 내역
						</SelectableBtn>
          </li>
				</SelectableListWrap>
      </KBTalk>
    </MotionList>
    </>
  );
};

export default ExchangeRequestCompletion;
