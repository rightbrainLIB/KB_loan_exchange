/**
 * Step 16. 대출 신청 진행 안내
 * 네, KB 주택담보대출을 진행해드릴게요!
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import LoanFirstRatePop from "@components/loan/LoanFirstRatePop.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import chkIcon from "@imgs/icons/chk_confirm_icon.png";
import img from "@imgs/loan/LoanHouseAddComfirmStep06.png";
import { setLoanHouseAddConfirm06, setPrimeRate } from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import LastTrueUserStepLoan from "@src/utils/LastUserStepLoanProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import $style from "./LoanHouseAddComfirmStep06.module.sass";

const LoanHouseAddComfirmStep06: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);
  const [showRateSheet, setShowRateSheet] = useState(false);

  const { requestLoan, primeRate } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanHouseAddConfirm06 } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  // 우대금리 적용 버튼
  const showInteresetRateSheet = useCallback(() => {
    setShowRateSheet(true);
  }, [showRateSheet]);

  const closeRateSheet = useCallback(() => {
    setShowRateSheet(false);
  }, [showRateSheet]);

  // 우댁금리 적용 바텀시트 - 확인 버튼
  const goNextTask = useCallback(() => {
    setShowRateSheet(false);
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setPrimeRate(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStepLoan();

  useEffect(() => {
    setIsLastChoice(lastStr === "primeRate");
  }, [lastStr]);

  useEffect(() => {
    if (requestLoan) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setLoanHouseAddConfirm06(true));
      }, 1200);
    }
  }, [requestLoan, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionListWrap>
            <MotionList aniCondition={loanHouseAddConfirm06}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  <img src={img} />
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn
                        bgBtn
                        disabled={primeRate}
                        onClickBtn={showInteresetRateSheet}>
                        우대금리 적용
                      </SelectableBtn>
                    </li>
                  </SelectableListWrap>
                </KBTalk>
              </BotBox>
              <UtilUnderTalkList btnList={["KB 납부 실적 우대금리"]} />
            </MotionList>
          </MotionListWrap>
        </div>
      )}

      {showUserStep && (
        <div>
          <MotionListWrap>
            <MotionList aniCondition={primeRate}>
              <SelectedUserBox isLastSelect={isLastChoice} type={"primeRate"}>
                <div className={$style.primeRateInfo}>
                  <h2>
                    우대금리 <span className={$style.value}>-0.3%p</span>
                    적용했어요
                  </h2>
                  <div className={$style.chkList}>
                    <ul>
                      <li>
                        <div className={$style.iconBox}>
                          <img src={chkIcon} alt="" />
                        </div>
                        <div className={$style.textBox}>
                          <p>
                            KB국민은행으로 급여 또는 연금 이체 시 연
                            <span className={$style.value}>-0.3%p</span> 적용
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className={$style.iconBox}>
                          <img src={chkIcon} alt="" />
                        </div>
                        <div className={$style.textBox}>
                          <p>
                            KB국민카드 이용실적에 따라 연
                            <span className={$style.value}>-0.3%p</span> 적용
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className={$style.iconBox}>
                          <img src={chkIcon} alt="" />
                        </div>
                        <div className={$style.textBox}>
                          <p>
                            매월 KB스타뱅킹으로 송금 시 연
                            <span className={$style.value}>-0.1%p</span> 적용
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </SelectedUserBox>
            </MotionList>
          </MotionListWrap>
        </div>
      )}

      <LoanFirstRatePop
        openSheet={showRateSheet}
        closeSheet={closeRateSheet}
        showNextStep={goNextTask}
      />
    </>
  );
};

export default LoanHouseAddComfirmStep06;
