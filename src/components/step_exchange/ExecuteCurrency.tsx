import CurrencySelectSheet from "@components/bottomSheet/CurrencySelectSheet.tsx";
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
import { setSaveAlarm } from "@slices/exchangeSlices.ts";
import { AppDispatch, ExchangeState } from "@src/store";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import $style from "./ExecuteCurrency.module.sass";

const ExecuteCurrency: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [sheetOpen, setSheetOpen] = useState(false);

  const [showBotStep, setShowBotStep] = useState(false);

  // const { isCurrencySelected } = useSelector(
  //   (state: ExchangeState) => state.exchange.userStep
  // );

  const onClickExecute = useCallback(() => {
    setSheetOpen(true);
  }, [sheetOpen]);

  const openAlarmSheet = useCallback(() => {
    dispatch(setSaveAlarm(true));
  }, []);

  const { isCurrencySelected, saveAlarm } = useSelector(
    (state: ExchangeState) => state.exchange.userStep
  );

  const { prsExchangeRate } = useSelector(
    (state: ExchangeState) => state.exchange.botStep
  );

  const modifySaveAlarm = useCallback(() => {
    dispatch(setSaveAlarm(false));
  }, [dispatch]);

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
        <div style={{ marginTop: 53, paddingBottom: 90 }}>
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
            <MotionList aniCondition={saveAlarm}>
              <SelectedUserBox modifyUserSelect={modifySaveAlarm}>
                원하는 환율일 때 알림받기
              </SelectedUserBox>
            </MotionList>
          </MotionListWrap>

          <CurrencySelectSheet
            sheetOpen={sheetOpen}
            onClickCloseSheet={() => setSheetOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default ExecuteCurrency;
