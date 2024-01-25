/**
 * Step 05. 출금정보입력(Progress bar 5/7)
 * 출금계좌가 맞는지 확인해주세요
 */
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/CheckAccount.png";
import {
  setCheckAccount,
  setCheckUserAccount
} from "@slices/exchangeSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { ExchangeState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CheckAccount: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { exchangeReason, checkUserAccount } = useSelector(
    (state: ExchangeState) => state.exchange.userStep
  );
  const { checkAccount } = useSelector(
    (state: ExchangeState) => state.exchange.botStep
  );

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setCheckUserAccount(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "checkUserAccount");
  }, [lastStr]);

  useEffect(() => {
    if (exchangeReason) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setCheckAccount(true));
      }, 600);
    }
  }, [exchangeReason, dispatch]);

  return (
    <>
      {showBotStep && (
        <div style={{ marginTop: 22 }}>
          <MotionList aniCondition={checkAccount} showHeight={356}>
            <BotProfile />
            <KBTalk>
              <img src={img} />
              <SelectableListWrap>
                <li>
                  <SelectableBtn
                    bgBtn={!checkUserAccount}
                    disabled={checkUserAccount}
                    onClickBtn={goNextTask}>
                    출금계좌 확인
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn disabled={checkUserAccount}>
                    출금계좌 변경
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn disabled={checkUserAccount}>
                    부족한 금액 모으기
                  </SelectableBtn>
                </li>
              </SelectableListWrap>
            </KBTalk>
          </MotionList>
        </div>
      )}

      {showUserStep && (
        <MotionList aniCondition={checkUserAccount} showHeight={54}>
          <SelectedUserBox isLastSelect={isLastChoice}>
            출금계좌 확인
          </SelectedUserBox>
        </MotionList>
      )}
    </>
  );
};

export default CheckAccount;
