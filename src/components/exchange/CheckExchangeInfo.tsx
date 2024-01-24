/**
 * Step 06. 환전정보확인
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/CheckExchangeInfo.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC } from "react";

import $style from "./CheckExchangeInfo.module.scss";

const CheckExchangeInfo: FC = () => {
  return (
    <>
    <MotionList>
      <BotProfile />
      <KBTalk>
				<img className={$style.img} src={img} />
				<SelectableListWrap>
					<li>
            <SelectableBtn bgBtn>
							환전 신청
						</SelectableBtn>
          </li>
				</SelectableListWrap>
      </KBTalk>
    </MotionList>
    </>
  );
};

export default CheckExchangeInfo;
