import CurrencySelectSheet from "@components/bottomSheet/CurrencySelectSheet.tsx";
import CurrencyTakenPlaceSheet from "@components/bottomSheet/CurrencyTakenPlaceSheet.tsx";
import EmphasisContent from "@components/box/EmphasisContent.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import SelectableBtn from "@components/buttons/SelectableBtn.tsx";
import WonExchangeToDollar from "@components/contents/WonExchangeToDollar.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import {
  setCompUserSelect,
  setOpenTakenWaySheet
} from "@slices/exchangeCurrencySlices.ts";
import {
  setPrsTermsAgreeForExchange,
  setSaveAlarm,
  setTakenPlace
} from "@slices/exchangeSlices.ts";
import { AppDispatch, ExchangeState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import $style from "./ExecuteCurrency.module.sass";

const ExecuteCurrency: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // const [sheetOpen, setSheetOpen] = useState(false);

  const [showBotStep, setShowBotStep] = useState(false);

  const [isLastChoiceNegative, setIsLastChoiceNegative] = useState(false);
  const [isLastChoicePositive, setIsLastChoicePositive] = useState(false);

  const [showUserStepPositive, setShowUserStepPositive] = useState(false);

  const [showUserStepNegative, setShowUserStepNegative] = useState(false);

  const { isCurrencySelected, isTakenPlace, saveAlarm } = useSelector(
    (state: ExchangeState) => state.exchange.userStep
  );

  const { prsExchangeRate } = useSelector(
    (state: ExchangeState) => state.exchange.botStep
  );

  const { openTakenWaySheet, openTakenPlaceSheet, compUserSelect } =
    useSelector((state: ExchangeState) => state.exchangeCurrency);

  const onClickExecute = useCallback(() => {
    if (showUserStepPositive || showUserStepNegative) return;
    dispatch(setCompUserSelect(false));
    dispatch(setOpenTakenWaySheet(true));
  }, [showUserStepPositive, showUserStepNegative, dispatch]);

  const openAlarmSheet = useCallback(() => {
    if (showUserStepPositive || showUserStepNegative) return;
    setShowUserStepNegative(true);
    setTimeout(() => {
      dispatch(setSaveAlarm(true));
    });
  }, [showUserStepPositive, showUserStepNegative, dispatch]);

  // const modifySaveAlarm = useCallback(() => {
  //   dispatch(setSaveAlarm(false));
  //   setTimeout(() => {
  //     setShowUserStepNegative(false);
  //   }, 500);
  // }, [dispatch]);
  //
  // const modifyTakenPlace = useCallback(() => {
  //   dispatch(setPrsTermsAgreeForExchange(false));
  //   setTimeout(() => {
  //     dispatch(setTakenPlace(false));
  //   }, 500);
  //   setTimeout(() => {
  //     setShowUserStepPositive(false); // 은행지점에서 받기 감추기
  //   }, 800);
  // }, [dispatch]);

  const wrapperStyle = {
    marginTop: 53
    // ...(!prsTermsAgreeForExchange ? { paddingBottom: 200 } : {})
  };

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoiceNegative(lastStr === "saveAlarm");
    setIsLastChoicePositive(lastStr === "isTakenPlace");
  }, [lastStr]);

  useEffect(() => {
    if (compUserSelect) {
      setShowUserStepPositive(true); // 은행지점에서 받기 보이기
      setTimeout(() => {
        dispatch(setTakenPlace(true));
      }, 500); // 은행지점에서 받기 애니메이션
      setTimeout(() => {
        dispatch(setPrsTermsAgreeForExchange(true)); // 동의하기 내용
      }, 800);
    } else {
      setShowUserStepPositive(false);
    }
  }, [compUserSelect]);

  useEffect(() => {
    isCurrencySelected
      ? setShowBotStep(true)
      : setTimeout(() => {
          setShowBotStep(false);
        }, 500);
  }, [isCurrencySelected]);

  return (
    <>
      {showBotStep && (
        <div style={wrapperStyle}>
          <MotionListWrap>
            <MotionList aniCondition={prsExchangeRate}>
              <BotProfile />
              <KBTalk>
                <h2>지금 바로 환전을 도와드릴까요?</h2>
                <p className={$style.subText}>현재 환율을 알려드려요</p>
                <EmphasisContent>
                  <WonExchangeToDollar>
                    <p>지금 환전한다면</p>
                    <p>
                      <span>USD 1달러 = </span>
                      <strong>
                        1,344.5 <span>원</span>
                      </strong>
                    </p>
                  </WonExchangeToDollar>
                </EmphasisContent>
                <SelectableListWrap>
                  <li>
                    <SelectableBtn onClickBtn={onClickExecute}>
                      지금 바로 환전
                    </SelectableBtn>
                  </li>
                  <li>
                    <SelectableBtn onClickBtn={openAlarmSheet}>
                      원하는 환율일 때 알림받기
                    </SelectableBtn>
                  </li>
                </SelectableListWrap>
              </KBTalk>
              <UtilUnderTalkList btnList={["환율 차트", "환율 계산기"]} />
            </MotionList>
          </MotionListWrap>

          {showUserStepPositive && (
            <MotionListWrap>
              <MotionList aniCondition={isTakenPlace} showHeight={45}>
                <SelectedUserBox
                  // modifyUserSelect={modifyTakenPlace}
                  isLastSelect={isLastChoicePositive}>
                  은행지점에서 받기
                </SelectedUserBox>
              </MotionList>
            </MotionListWrap>
          )}

          {showUserStepNegative && (
            <MotionListWrap>
              <MotionList aniCondition={saveAlarm}>
                <SelectedUserBox
                  // modifyUserSelect={modifySaveAlarm}
                  isLastSelect={isLastChoiceNegative}>
                  원하는 환율일 때 알림받기
                </SelectedUserBox>
              </MotionList>
            </MotionListWrap>
          )}

          <CurrencySelectSheet sheetOpen={openTakenWaySheet} />
          <CurrencyTakenPlaceSheet sheetOpen={openTakenPlaceSheet} />
        </div>
      )}
    </>
  );
};

export default ExecuteCurrency;
