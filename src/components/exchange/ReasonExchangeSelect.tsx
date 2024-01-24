/**
 * Step 05. 출금정보입력(Progress bar 5/7)
 * 환전사유 선택 / 바텀시트 아닌 경우
 * 환전 사유를 알려주세요
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/ReasonExchangeSelect.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC } from "react";

const ReasonExchangeSelect: FC = () => {
  return (
    <>
    <MotionList>
      <BotProfile />
      <KBTalk>
				<img src={img} /> 
				<SelectableListWrap>
					<li>
            <SelectableBtn>
							관광 등 일반해외여행경비
						</SelectableBtn>
          </li>
          <li>
            <SelectableBtn>
              보유목적
						</SelectableBtn>
          </li>
          <li>
            <SelectableBtn>
              유학경비
						</SelectableBtn>
          </li>
					<li>
            <SelectableBtn>
              해외체재비
						</SelectableBtn>
          </li>
				</SelectableListWrap>
      </KBTalk>
    </MotionList>
    </>
  );
};

export default ReasonExchangeSelect;
