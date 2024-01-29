/**
 * 원하는 환율일 때 알림받기
 * 환율이 얼마일때 알려드릴까요?
 */
import ExchangeRateInputSheet from "@components/bottomSheet/ExchangeRateInputSheet.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/NotifyWhenExchangeRate.png";
import {
  setNotifyWhenExchangeRate,
  setWriteExchangeRate
} from "@slices/exchangeSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { KBState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import $style from "./NotifyWhenExchangeRate.module.sass";

const NotifyWhenExchangeRate: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);
  const [openSheet, setOpenSheet] = useState(false);

  const { notifyWhenExchangeRate } = useSelector(
    (state: KBState) => state.exchange.botStep
  );
  const { alarmCurrency, writeExchangeRate } = useSelector(
    (state: KBState) => state.exchange.userStep
  );

  const openCurrencySheet = useCallback(() => {
    setOpenSheet(true);
  }, []);

  const confirmAlarmPrice = useCallback(() => {
    setOpenSheet(false);
    setTimeout(() => {
      dispatch(setWriteExchangeRate(true));
    });
  }, []);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "writeExchangeRate");
  }, [lastStr]);

  useEffect(() => {
    if (alarmCurrency) {
      setShowBotStep(true);
      setShowUserStep(true);
      setTimeout(() => {
        dispatch(setNotifyWhenExchangeRate(true));
      });
    }
  }, [alarmCurrency, dispatch]);

  return (
    <>
      {showBotStep && (
        <div style={{ marginTop: 46 }}>
          <MotionList aniCondition={notifyWhenExchangeRate} showHeight={444}>
            <BotProfile />
            <KBTalk>
              <img src={img} />
              <SelectableListWrap>
                <li>
                  <SelectableBtn
                    bgBtn
                    onClickBtn={openCurrencySheet}
                    disabled={writeExchangeRate}>
                    원하는 환율 지정
                  </SelectableBtn>
                </li>
              </SelectableListWrap>
            </KBTalk>
          </MotionList>

          {showUserStep && (
            <MotionList aniCondition={writeExchangeRate}>
              <SelectedUserBox isLastSelect={isLastChoice}>
                <div className={$style.userStep}>
                  <div className={$style.priceStr}>
                    <span>1,300</span>
                    <span className={$style.dot}></span>
                    <span>8</span>
                  </div>
                  <div className={$style.won}>원</div>
                </div>
              </SelectedUserBox>
            </MotionList>
          )}
        </div>
      )}

      <ExchangeRateInputSheet
        sheetOpen={openSheet}
        confirmAlarmPrice={confirmAlarmPrice}
      />
    </>
  );
};

export default NotifyWhenExchangeRate;
