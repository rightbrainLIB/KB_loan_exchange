/**
 * Step 07. 환전신청완료(Progress bar 7/7)
 * 환전 신청 내역을 확인해주세요
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/ExchangeRequestHistory.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC } from "react";

import $style from "./ExchangeRequestHistory.module.scss";

const ExchangeRequestHistory: FC = () => {
  return (
    <>
    <MotionList>
      <BotProfile />
      <KBTalk>
				<h2>환전 신청 내역을 확인해주세요</h2>
				<img className={$style.img} src={img} />
				<SelectableListWrap>
					<li>
            <SelectableBtn>
							전체 환전 내역
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

export default ExchangeRequestHistory;
