/**
 * Step 04. 수령정보입력(Progress bar 4/7)
 * 받고자 하는 날짜를 알려주세요
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/SelectReceiveDate.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC } from "react";

const SelectReceiveDate: FC = () => {
  return (
    <>
    <MotionList>
      <BotProfile />
      <KBTalk>
				<img src={img} />
				<SelectableListWrap>
					<li>
            <SelectableBtn bgBtn>
							날짜 선택
						</SelectableBtn>
          </li>
        </SelectableListWrap>
      </KBTalk>
    </MotionList>
    </>
  );
};

export default SelectReceiveDate;
