/**
 * Step 07. 부동산 담보대출 본인확인을 위한 인증
 */
import BotBox from "@components/box/BotBox.tsx";
import EmphasisContent from "@components/box/EmphasisContent.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import LoanTelecomInputPop from "@components/loan/LoanTelecomInputPop.tsx";
import LoanTelecomSelectPop from "@components/loan/LoanTelecomSelectPop.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import { setLoanLimitCurrency, setUserPhoneVarif } from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoanIdentityCheck: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [openTelSheet, setOpenTelSheet] = useState(false);
  const [openTelInputSheet, setOpenTelInputSheet] = useState(false);

  const { consentToTermsCond, userPhoneVarif } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanLimitCurrency } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  const goNextTask = useCallback(() => {
    setOpenTelInputSheet(false);
    setShowUserStep(true);
    dispatch(setUserPhoneVarif(true));
  }, [dispatch]);

  // 휴대폰 본인인증 버튼
  const clickNextPop = useCallback(() => {
    setOpenTelSheet(true);
  }, [openTelSheet]);

  // 통신사 선택 시트 닫기
  const closeTelSheet = useCallback(() => {
    setOpenTelSheet(false);
  }, [openTelSheet]);
  // 인증번호 입력 시트 닫기
  const closeTelInputSheet = useCallback(() => {
    setOpenTelInputSheet(false);
  }, []);
  // 인증번호 전송
  const showVarifNumSheet = useCallback(() => {
    closeTelSheet();
    setTimeout(() => {
      setOpenTelInputSheet(true);
    });
  }, []);

  useEffect(() => {
    if (consentToTermsCond) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setLoanLimitCurrency(true));
      }, 600);
    }
  }, [consentToTermsCond, dispatch]);

  return (
    <>
      {showBotStep && (
        <div style={{ marginTop: 13 }}>
          <MotionListWrap>
            <BotBox>
              <MotionList aniCondition={loanLimitCurrency}>
                <BotProfile />
                <KBTalk>
                  <h2>본인확인을 위해 인증이 필요해요</h2>
                  <EmphasisContent>
                    <p>010 1234 1234</p>
                  </EmphasisContent>
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn
                        bgBtn
                        disabled={userPhoneVarif}
                        onClickBtn={clickNextPop}>
                        휴대폰 본인인증
                      </SelectableBtn>
                    </li>
                    <li>
                      <SelectableBtn disabled={userPhoneVarif}>
                        휴대폰번호 수정
                      </SelectableBtn>
                    </li>
                  </SelectableListWrap>
                </KBTalk>
              </MotionList>
            </BotBox>
          </MotionListWrap>
        </div>
      )}

      {/* 통신사 선택 */}
      <LoanTelecomSelectPop
        openSheet={openTelSheet}
        closeSheet={closeTelSheet}
        showNextTask={showVarifNumSheet}
      />

      <LoanTelecomInputPop
        openSheet={openTelInputSheet}
        closeSheet={closeTelInputSheet}
        showNextStep={goNextTask}
      />

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={userPhoneVarif}>
            <SelectedUserBox>휴대폰 본인인증</SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default LoanIdentityCheck;
