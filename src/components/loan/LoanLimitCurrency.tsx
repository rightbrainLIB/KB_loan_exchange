/**
 * Step 05. 부동산 담보대출 심사 약관 동의 채팅
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import LoanAgreeCheck from "@components/loan/LoanAgreeCheck.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import { setIsCompleteLoan } from "@slices/globalUISlice.ts";
import { setConsentToTermsCond } from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoanLimitCurrency: FC = () => {
  const dispatch = useDispatch();

  const [showUserStep, setShowUserStep] = useState(false);

  const [choiceCurrency, setChoiceCurrency] = useState(false);
  const [openAgreeChk, setOpenAgreeChk] = useState(false);

  const { consentToTermsCond } = useSelector(
    (state: KBState) => state.loan.userStep
  );

  // 심사 약관 동의 팝업 열기
  const clickCurrencyPop = useCallback(() => {
    setOpenAgreeChk(true);
  }, []);

  // 심사 약관 동의 팝업 닫기
  const closeAgreeChkSheet = useCallback(() => {
    setOpenAgreeChk(false);
  }, []);

  const goNextTask = useCallback(() => {
    closeAgreeChkSheet();
    setShowUserStep(true);
    dispatch(setConsentToTermsCond(true));
  }, [closeAgreeChkSheet, dispatch]);

  useEffect(() => {
    dispatch(setIsCompleteLoan(false));
  }, [dispatch]);

  return (
    <>
      <MotionListWrap>
        <BotBox>
          <MotionList
            aniCondition={true}
            afterAnim={() => setChoiceCurrency(true)}>
            <BotProfile />
            <KBTalk>
              <p>
                안녕하세요, 김국민님!
                <br />
                쉽고 편한 신규 부동산담보대출을 받으실 수있도록 도와드릴게요
              </p>
            </KBTalk>
          </MotionList>
          <MotionList aniCondition={choiceCurrency}>
            <KBTalk>
              <h2>금리와 한도를 조회하기 위해 심사약관에 동의가 필요해요</h2>
              <SelectableListWrap>
                <li>
                  <SelectableBtn
                    bgBtn
                    disabled={consentToTermsCond}
                    onClickBtn={clickCurrencyPop}>
                    심사 약관 동의
                  </SelectableBtn>
                </li>
              </SelectableListWrap>
            </KBTalk>
          </MotionList>
        </BotBox>
      </MotionListWrap>

      <LoanAgreeCheck
        openSheet={openAgreeChk}
        openAgreeSheet={clickCurrencyPop}
        closeAgreeSheet={closeAgreeChkSheet}
        clickPositiveAgree={goNextTask}
      />

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={consentToTermsCond}>
            <SelectedUserBox>심사 약관 동의</SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default LoanLimitCurrency;
