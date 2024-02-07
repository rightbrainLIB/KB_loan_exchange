import CurrencyPriceInput from "@components/bottomSheet/CurrencyPriceInput.tsx";
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import SelectableBtn from "@components/buttons/SelectableBtn.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import {
  setPrsInputCurrencyValue,
  setPrsNeedfulExchangeMoney,
  setRequestCurrencyValue
} from "@slices/exchangeSlices.ts";
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
import { KBState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import $style from "./WriteCurrency.module.sass";

const WriteCurrency: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);
  // const [isRollBack, setIsRollBack] = useState(false);

  const { requestCurrencyValue, agreeForeignCurrency } = useSelector(
    (state: KBState) => state.exchange.userStep
  );

  const { prsInputCurrencyValue, prsNeedfulExchangeMoney } = useSelector(
    (state: KBState) => state.exchange.botStep
  );

  // 환전 신청금액 입력 버튼
  const onClickCTABtn = useCallback(() => {
    if (!requestCurrencyValue) {
      setSheetOpen(true);
    }
  }, [requestCurrencyValue]);

  const onClickCloseSheet = useCallback(() => {
    setSheetOpen(false);
    if (requestCurrencyValue) {
      setTimeout(() => {
        setShowUserStep(true); // 사용자의 USD 1,000 표시
      }); // 환전 신청금액 입력 바텀시트 닫히고
    }
  }, [requestCurrencyValue]);

  // 금액 입력 후 확인
  const onClickConfirmSheet = useCallback(() => {
    setSheetOpen(false); // 팝업 닫기
    setShowUserStep(true);
    // setIsRollBack(false);
    setTimeout(() => {
      dispatch(setRequestCurrencyValue(true));
    }, 500);
  }, [dispatch]);

  // 수정 버튼
  const modifyTask = useCallback(() => {
    dispatch(setPrsNeedfulExchangeMoney(false));
    setTimeout(() => {
      dispatch(setRequestCurrencyValue(false)); // NeedfulExchangeMoney 컴포넌트에서 useEffect로 requestCurrencyValue를 감시
    }, 500);
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "requestCurrencyValue");
  }, [lastStr]);

  useEffect(() => {
    if (agreeForeignCurrency) {
      setShowBotStep(true);
      // setIsRollBack(false);
      dispatch(setContainerBottomSize(window.innerHeight - 259 - 60));
      setTimeout(() => {
        dispatch(setPrsInputCurrencyValue(true));
      }, 600);
    } else {
      setTimeout(() => {
        setShowBotStep(false);
      });
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [agreeForeignCurrency, dispatch]);

  useEffect(() => {
    if (!prsNeedfulExchangeMoney) {
      if (showBotStep) {
        setTimeout(() => {
          setShowUserStep(false);
        }, 600);
        // setTimeout(() => {
        //   setIsRollBack(true);
        // }, 900);
        setTimeout(() => {
          setSheetOpen(true);
        }, 1000);
      }
    }
  }, [prsNeedfulExchangeMoney]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionListWrap>
            <MotionList aniCondition={prsInputCurrencyValue}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  <h2>환전 신청 금액을 입력해주세요</h2>
                  <p className={$style.subTitle}>최소 환전 금액은 10달러예요</p>
                  <p className={$style.subText}>
                    * KB여행자 보험을 가입하려면 대미환산 300달러 이상
                    환전신청을 해야합니다.
                  </p>
                  <div style={{ marginTop: 23 }}>
                    <SelectableBtn
                      bgBtn
                      onClickBtn={onClickCTABtn}
                      disabled={requestCurrencyValue}>
                      환전 신청금액 입력
                    </SelectableBtn>
                  </div>
                </KBTalk>
              </BotBox>
            </MotionList>
          </MotionListWrap>
        </div>
      )}

      {showUserStep && (
        <MotionList aniCondition={requestCurrencyValue}>
          <SelectedUserBox
            isLastSelect={isLastChoice}
            useTaskModify
            modifyUserSelect={modifyTask}>
            USD 1,000
          </SelectedUserBox>
        </MotionList>
      )}

      {/* S: 환전 신청금액 입력-modal */}
      <CurrencyPriceInput
        sheetOpen={sheetOpen}
        onClickClose={onClickCloseSheet}
        onClickConfirm={onClickConfirmSheet}
      />
      {/* E: 환전 신청금액 입력-modal */}
    </>
  );
};

export default WriteCurrency;
