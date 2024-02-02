/**
 * Step 21. 대출 신청금액 입력
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import LoanApplicationAmountPop from "@components/loan/LoanApplicationAmountPop.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanApplicationAmount.png";
import {
  setLoanApplicationAmount,
  setSelectedUserLoanPrice
} from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import LastTrueUserStepLoan from "@src/utils/LastUserStepLoanProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoanApplicationAmount: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);
  const [openPriceInputSheet, setOpenPriceInputSheet] = useState(false);

  const { selectedUserDate, selectedUserLoanPrice } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanApplicationAmount } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  // 신청금액 입력 버튼 클릭
  const showPriceInputSheet = useCallback(() => {
    setOpenPriceInputSheet(true);
  }, []);
  // 신청금액 입력 바텀시트 닫기
  const closePriceInputSheet = useCallback(() => {
    setOpenPriceInputSheet(false);
  }, []);
  // 신청금액 입력 확인 버튼
  const goNextTask = useCallback(() => {
    setOpenPriceInputSheet(false);
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setSelectedUserLoanPrice(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStepLoan();

  useEffect(() => {
    setIsLastChoice(lastStr === "selectedUserLoanPrice");
  }, [lastStr]);

  useEffect(() => {
    if (selectedUserDate) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setLoanApplicationAmount(true));
      }, 600);
    }
  }, [selectedUserDate, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionListWrap>
            <MotionList aniCondition={loanApplicationAmount}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  <img src={img} width="263" />
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn
                        bgBtn
                        disabled={selectedUserLoanPrice}
                        onClickBtn={showPriceInputSheet}>
                        신청금액 입력
                      </SelectableBtn>
                    </li>
                  </SelectableListWrap>
                </KBTalk>
              </BotBox>
            </MotionList>
          </MotionListWrap>
        </div>
      )}

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={selectedUserLoanPrice}>
            <SelectedUserBox isLastSelect={isLastChoice}>
              77,000,000
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}

      <LoanApplicationAmountPop
        openSheet={openPriceInputSheet}
        closeSheet={closePriceInputSheet}
        showNextStep={goNextTask}
      />
    </>
  );
};

export default LoanApplicationAmount;
