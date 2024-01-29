/**
 * 환전미수령내역 : 최근 3개월 내 환전 내역
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import MoreBtn from "@imgs/exchange/MonthExchange_list_more_btn.png";
import ThreeMonthExchange_list from "@imgs/exchange/ThreeMonthExchange_list.png";
import img from "@imgs/exchange/ThreeMonthExchangeList.png";
import {
  setRequestedDate,
  setShowMoreDetailInfo,
  setThreeMonthExchangeList
} from "@slices/exchangeSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { KBState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import $style from "./MonthExchangeList.module.scss";

const ThreeMonthExchangeList: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);
  const [isLastChoiceDetail, setIsLastChoiceDetail] = useState(false);
  const [showDetailList, setShowDetailList] = useState(false);

  const { eachRequestInfo, requestedDate, showMoreDetailInfo } = useSelector(
    (state: KBState) => state.exchange.userStep
  );
  const { threeMonthExchangeList } = useSelector(
    (state: KBState) => state.exchange.botStep
  );

  // 조회기간 설정
  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setRequestedDate(true));
    });
  }, [dispatch]);

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
    setIsLastChoice(lastStr === "requestedDate");
    setIsLastChoiceDetail(lastStr === "showMoreDetailInfo");
  }, [lastStr]);

  useEffect(() => {
    if (eachRequestInfo) {
      setTimeout(() => {
        setShowBotStep(true);
      }, 300);
      setTimeout(() => {
        dispatch(setThreeMonthExchangeList(true));
      }, 600);
    }
  }, [eachRequestInfo, dispatch]);

  return (
    <>
      {showBotStep && (
        <div style={{ marginTop: 31 }}>
          <MotionListWrap>
            <BotBox>
              <MotionList
                aniCondition={threeMonthExchangeList}
                afterAnim={() => setShowDetailList(true)}
                showHeight={227}>
                <BotProfile />
                <KBTalk>
                  <img src={img} />
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn
                        onClickBtn={goNextTask}
                        disabled={showMoreDetailInfo || requestedDate}>
                        조회기간 설정
                      </SelectableBtn>
                    </li>
                  </SelectableListWrap>
                </KBTalk>
              </MotionList>
              <MotionList aniCondition={showDetailList} showHeight={264}>
                <div className={$style.exchangeListWrap}>
                  <div className={$style.exchangeList}>
                    <img src={ThreeMonthExchange_list} />
                    <SelectableBtn
                      size="small"
                      disabled={showMoreDetailInfo || requestedDate}
                      onClickBtn={goDetailContent}>
                      자세히 보기
                    </SelectableBtn>
                  </div>
                  <div className={$style.exchangeList}>
                    <img src={ThreeMonthExchange_list} />
                    <SelectableBtn
                      size="small"
                      disabled={showMoreDetailInfo || requestedDate}>
                      자세히 보기
                    </SelectableBtn>
                  </div>
                  <div className={$style.exchangeList}>
                    <img src={ThreeMonthExchange_list} />
                    <SelectableBtn
                      size="small"
                      disabled={showMoreDetailInfo || requestedDate}>
                      자세히 보기
                    </SelectableBtn>
                  </div>
                  <div className={$style.exchangeList}>
                    <img src={ThreeMonthExchange_list} />
                    <SelectableBtn
                      size="small"
                      disabled={showMoreDetailInfo || requestedDate}>
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
            </BotBox>
          </MotionListWrap>
        </div>
      )}

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={requestedDate} showHeight={54}>
            <SelectedUserBox isLastSelect={isLastChoice}>
              조회기간 설정
            </SelectedUserBox>
          </MotionList>
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

export default ThreeMonthExchangeList;
