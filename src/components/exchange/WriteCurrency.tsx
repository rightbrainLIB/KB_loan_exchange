import CurrencyPriceInput from "@components/bottomSheet/CurrencyPriceInput.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import SelectableBtn from "@components/buttons/SelectableBtn.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import { ExchangeState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import $style from "./WriteCurrency.module.sass";

const WriteCurrency: FC = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  const [showUserStep, setShowUserStep] = useState(false);

  const [isLastChoice, setIsLastChoice] = useState(false);

  const { requestCurrencyValue } = useSelector(
    (state: ExchangeState) => state.exchange.userStep
  );

  const onClickCloseSheet = useCallback(() => {
    setSheetOpen(false);
    if (requestCurrencyValue) {
      setShowUserStep(true);
    }
  }, [showUserStep, sheetOpen]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "requestCurrencyValue");
  }, [lastStr]);

  return (
    <>
      <div style={{ marginTop: 36 }}>
        <MotionListWrap>
          <MotionList aniCondition={true}>
            <BotProfile />
            <KBTalk>
              <h2>환전 신청 금액을 입력해주세요</h2>
              <p className={$style.subTitle}>최소 환전 금액은 10달러예요</p>
              <p className={$style.subText}>
                * KB여행자 보험을 가입하려면 대미환산 300달러 이상 환전신청을
                해야합니다.
              </p>
              <div style={{ marginTop: 23 }}>
                <SelectableBtn bgBtn onClickBtn={() => setSheetOpen(true)}>
                  환전 신청금액 입력
                </SelectableBtn>
              </div>
            </KBTalk>
          </MotionList>

          {showUserStep && (
            <MotionList aniCondition={requestCurrencyValue}>
              <SelectedUserBox isLastSelect={isLastChoice}>
                USD 1,000
              </SelectedUserBox>
            </MotionList>
          )}
        </MotionListWrap>
      </div>

      <CurrencyPriceInput
        sheetOpen={sheetOpen}
        onClickClose={onClickCloseSheet}
      />
    </>
  );
};

export default WriteCurrency;
