/**
 * 환전미수령내역 : 3개월 내 환전 내역
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MoreBtn from "@imgs/exchange/MonthExchange_list_more_btn.png";
import ThreeMonthExchange_list from "@imgs/exchange/ThreeMonthExchange_list.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC, useCallback, useEffect, useState } from "react";

import $style from "./MonthExchangeList.module.scss";

const ThreeMonthExchangeList: FC = () => {
  return (
    <>
    <MotionList>
      <BotProfile />
      <KBTalk>
        <h2>최근 3개월 내 환전 내역이에요</h2>
				<p className={$style.subText}>2023.11.05~2024.01.05</p>
				<SelectableListWrap>
          <li>
            <SelectableBtn>조회기간 설정</SelectableBtn>
          </li>
        </SelectableListWrap>
      </KBTalk>
			<div className={$style.exchangeListWrap}>
				<div className={$style.exchangeList}>
					<img src={ThreeMonthExchange_list} />
					<SelectableBtn size="small">자세히 보기</SelectableBtn>
				</div>
				<div className={$style.exchangeList}>
					<img src={ThreeMonthExchange_list} />
					<SelectableBtn size="small">자세히 보기</SelectableBtn>
				</div>
				<div className={$style.MoreBtn}>
					<img src={MoreBtn} />
				</div>
			</div>
			<div className={$style.pagination}>
				<div className={`${$style.dot} ${$style.active}`}></div>
				<div className={$style.dot}></div>
				<div className={$style.dot}></div>
				<div className={$style.dot}></div>
			</div>
    </MotionList>
    </>
  );
};

export default ThreeMonthExchangeList;
