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
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
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
  const { selectOneMonth, showMoreDetailInfo } = useSelector(
    (state: KBState) => state.exchange.userStep
  );
  const { oneMonthExchangeList } = useSelector(
    (state: KBState) => state.exchange.botStep
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
      setShowBotStep(true);
      dispatch(setContainerBottomSize(window.innerHeight - 380 - 60));
      setTimeout(() => {
        dispatch(setOneMonthExchangeList(true));
      }, 600);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [selectOneMonth, dispatch]);

  return (
    <>
      {showBotStep && (
        <MotionListWrap>
          <MotionList
            aniCondition={oneMonthExchangeList}
            afterAnim={() => setShowDetailList(true)}>
            <BotProfile />
            <KBTalk>
              <h2>김국민님의 1개월 내 환전 내역이에요</h2>
              <p className={$style.subText}>2023.12.05~2024.01.05</p>
            </KBTalk>
          </MotionList>
          <div style={{ marginTop: 10 }}>
            <MotionList aniCondition={showDetailList}>
              <div className={$style.exchangeListWrap}>
                <div className={$style.exchangeList}>
                  <img src={OneMonthExchange_list} alt="" />
                  <SelectableBtn
                    size="small"
                    disabled={showMoreDetailInfo}
                    onClickBtn={goDetailContent}>
                    자세히 보기
                  </SelectableBtn>
                </div>
                <div className={$style.exchangeList}>
                  <img src={OneMonthExchange_list} alt="" />
                  <SelectableBtn size="small" disabled={showMoreDetailInfo}>
                    자세히 보기
                  </SelectableBtn>
                </div>
                <div className={$style.exchangeList}>
                  <img src={OneMonthExchange_list} alt="" />
                  <SelectableBtn size="small" disabled={showMoreDetailInfo}>
                    자세히 보기
                  </SelectableBtn>
                </div>
                <div className={$style.exchangeList}>
                  <img src={OneMonthExchange_list} alt="" />
                  <SelectableBtn size="small" disabled={showMoreDetailInfo}>
                    자세히 보기
                  </SelectableBtn>
                </div>
                <div className={$style.MoreBtn}>
                  <img src={MoreBtn} alt="" />
                </div>
              </div>
              <div className={$style.pagination}>
                <div className={`${$style.dot} ${$style.active}`}></div>
                <div className={$style.dot}></div>
                <div className={$style.dot}></div>
                <div className={$style.dot}></div>
              </div>
            </MotionList>
          </div>
        </MotionListWrap>
      )}

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={showMoreDetailInfo}>
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
