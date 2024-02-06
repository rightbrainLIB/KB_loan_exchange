/**
 * Step 18. 대출 신청 정보 기준 최저금리, 최대한도 제시
 * 입력해주신 신청정보에 맞는 최저금리와 최대한도로 제시해드려요
 */
import LoanRateKnowSheet from "@components/bottomSheet/LoanRateKnowSheet.tsx";
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanRecommendGuide.png";
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
import {
  setChangeUserInput,
  setKeepGoingLoan,
  setLoanRecommendGuide
} from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import FindLastElement from "@src/utils/FindLastElement.tsx";
import LastTrueUserStepLoan from "@src/utils/LastUserStepLoanProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoanRecommendGuide: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStepPositive, setShowUserStepPositive] = useState(false);
  const [showUserStepNegative, setShowUserStepNegative] = useState(false);
  const [isLastChoiceNegative, setIsLastChoiceNegative] = useState(false);
  const [isLastChoicePositive, setIsLastChoicePositive] = useState(false);

  const [openRateKnowSheet, setOpenRateKnowSheet] = useState(false);

  const { primeRate, keepGoingLoan, changeUserInput } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanRecommendGuide } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  const btnUnderList = [
    {
      disabled: keepGoingLoan || changeUserInput,
      text: "갚는방법 안내"
    },
    {
      disabled: keepGoingLoan || changeUserInput,
      text: "금리방식 안내",
      onClickBtn: () => {
        setOpenRateKnowSheet(true);
      }
    }
  ];

  const afterBotShow = useCallback(() => {
    const { lastEl } = FindLastElement();
    document.body.scrollTo({
      top: lastEl.offsetTop - 60,
      behavior: "smooth"
    });
  }, []);

  const closeRateKnowSheet = useCallback(() => {
    setOpenRateKnowSheet(false);
  }, []);

  const onClickOK = useCallback(() => {
    setShowUserStepPositive(true);
    setTimeout(() => {
      dispatch(setKeepGoingLoan(true));
    });
  }, [dispatch]);

  // 조건 변경하기 버튼
  const onChangeUserState = useCallback(() => {
    setShowUserStepNegative(true);
    setTimeout(() => {
      dispatch(setChangeUserInput(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStepLoan();

  useEffect(() => {
    setIsLastChoicePositive(lastStr === "keepGoingLoan");
    setIsLastChoiceNegative(lastStr === "changeUserInput");
  }, [lastStr]);

  useEffect(() => {
    if (primeRate) {
      setTimeout(() => {
        dispatch(setKeepGoingLoan(false));
        dispatch(setChangeUserInput(false));
        setShowBotStep(true);
        // dispatch(setContainerBottomSize(window.innerHeight - 648 - 60));
      }, 1200);
      setTimeout(() => {
        dispatch(setLoanRecommendGuide(true));
      }, 1800);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [primeRate, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionListWrap>
            <MotionList
              aniCondition={loanRecommendGuide}
              noScroll
              afterAnim={afterBotShow}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  <img src={img} />
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn
                        bgBtn
                        disabled={keepGoingLoan || changeUserInput}
                        onClickBtn={onClickOK}>
                        이대로 대출진행
                      </SelectableBtn>
                    </li>
                    <li>
                      <SelectableBtn
                        onClickBtn={onChangeUserState}
                        disabled={keepGoingLoan || changeUserInput}>
                        조건 변경하기
                      </SelectableBtn>
                    </li>
                  </SelectableListWrap>
                </KBTalk>
              </BotBox>
              <UtilUnderTalkList btnUnderList={btnUnderList} />
            </MotionList>
          </MotionListWrap>
        </div>
      )}

      {showUserStepPositive && (
        <MotionListWrap>
          <MotionList aniCondition={keepGoingLoan}>
            <SelectedUserBox isLastSelect={isLastChoicePositive}>
              이대로 대출진행
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}

      {showUserStepNegative && (
        <MotionListWrap>
          <MotionList aniCondition={changeUserInput}>
            <SelectedUserBox isLastSelect={isLastChoiceNegative}>
              조건 변경하기
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}

      <LoanRateKnowSheet
        openSheet={openRateKnowSheet}
        closeSheet={closeRateKnowSheet}
      />
    </>
  );
};

export default LoanRecommendGuide;
