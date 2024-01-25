/**
 * 환전미수령내역 : 김국민님의 1개월 내 환전 내역이에요
 */
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import MoreBtn from "@imgs/exchange/MonthExchange_list_more_btn.png";
import OneMonthExchange_list from "@imgs/exchange/OneMonthExchange_list.png";
import {
  setOneMonthExchangeList,
  setShowMoreDetailInfo
} from "@slices/exchangeSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { ExchangeState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import $style from "./MonthExchangeList.module.scss";

const OneMonthExchangeList: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoiceDetail, setIsLastChoiceDetail] = useState(false);

  const [showDetailList, setShowDetailList] = useState(false);
  const { selectOneMonth, requestedDate, showMoreDetailInfo } = useSelector(
    (state: ExchangeState) => state.exchange.userStep
  );
  const { oneMonthExchangeList } = useSelector(
    (state: ExchangeState) => state.exchange.botStep
  );

  // 자세히 보기
  const goDetailContent = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setShowMoreDetailInfo(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoiceDetail(lastStr === "showMoreDetailInfo");
  }, [lastStr]);

  useEffect(() => {
    if (selectOneMonth) {
      setTimeout(() => {
        setShowBotStep(true);
      }, 300);
      setTimeout(() => {
        dispatch(setOneMonthExchangeList(true));
      }, 600);
    }
  }, [selectOneMonth, dispatch]);

  return (
    <>
      {showBotStep && (
        <MotionListWrap>
          <MotionList
            showHeight={113}
            aniCondition={oneMonthExchangeList}
            afterAnim={() => setShowDetailList(true)}>
            <BotProfile />
            <KBTalk>
              <h2>김국민님의 1개월 내 환전 내역이에요</h2>
              <p className={$style.subText}>2023.12.05~2024.01.05</p>
            </KBTalk>
          </MotionList>
          <MotionList showHeight={264} aniCondition={showDetailList}>
            <div className={$style.exchangeListWrap}>
              <div className={$style.exchangeList}>
                <img src={OneMonthExchange_list} />
                <SelectableBtn
                  size="small"
                  disabled={requestedDate}
                  onClickBtn={goDetailContent}>
                  자세히 보기
                </SelectableBtn>
              </div>
              <div className={$style.exchangeList}>
                <img src={OneMonthExchange_list} />
                <SelectableBtn size="small" disabled={requestedDate}>
                  자세히 보기
                </SelectableBtn>
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
        </MotionListWrap>
      )}

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={showMoreDetailInfo} showHeight={54}>
            <SelectedUserBox isLastSelect={isLastChoiceDetail}>
              자세히 보기
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default OneMonthExchangeList;
