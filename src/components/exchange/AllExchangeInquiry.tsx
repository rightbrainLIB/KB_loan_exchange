/**
 * 환전 미수령 내역 : 전체 환전내역 조회
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC, useCallback, useEffect, useState } from "react";

import $style from "./AllExchangeInquiry.module.scss";

const AllExchangeInquiry: FC = () => {
  return (
    <> 
    <MotionList>
      <BotProfile />
      <KBTalk>
        <h2>김국민님의 전체 환전 내역을 알려드릴게요</h2>
        <p className={$style.subText}>환전신청 또는 맞춤환전 체결 후 지점에서 찾아가지 않은 환전내역이에요</p>
				<SelectableListWrap>
          <li>
            <SelectableBtn>건별 조회</SelectableBtn>
          </li>
					<li>
            <SelectableBtn>통화별 조회</SelectableBtn>
          </li>
        </SelectableListWrap>
      </KBTalk>
    </MotionList>
    </>
  );
};

export default AllExchangeInquiry;
