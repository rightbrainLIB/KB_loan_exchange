/**
 * Step 03. 환전정보입력(Progress bar 3/7)
 * 여행자 보험에 가입하실 수 있어요!
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/TravelInsurance.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC } from "react";

const TravelInsurance: FC = () => {
  return (
    <>
    <MotionList>
      <BotProfile />
      <KBTalk>
				<img src={img} /> 
				<SelectableListWrap>
					<li>
            <SelectableBtn bgBtn>
							환전만 진행
						</SelectableBtn>
          </li>
          <li>
            <SelectableBtn>
							여행자 보험 가입
						</SelectableBtn>
          </li>
				</SelectableListWrap>
      </KBTalk>
			<UtilUnderTalkList btnList={["여행자보험 안내"]} />
    </MotionList>
    </>
  );
};

export default TravelInsurance;
