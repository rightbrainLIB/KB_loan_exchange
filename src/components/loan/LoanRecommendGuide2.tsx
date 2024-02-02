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
  setLoanRecommendGuide2,
  setReKeepGoingLoan
} from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import LastTrueUserStepLoan from "@src/utils/LastUserStepLoanProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoanRecommendGuide2: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const [openRateKnowSheet2, setOpenRateKnowSheet2] = useState(false);

  const { cofix, reKeepGoingLoan } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanRecommendGuide2 } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  const btnUnderList = [
    {
      disabled: reKeepGoingLoan,
      text: "갚는방법 안내"
    },
    {
      disabled: reKeepGoingLoan,
      text: "금리방식 안내",
      onClickBtn: () => {
        setOpenRateKnowSheet2(true);
      }
    }
  ];

  const closeRateKnowSheet = useCallback(() => {
    setOpenRateKnowSheet2(false);
  }, []);

  // 이대로 대출진행 버튼 클릭
  // const onClickOK = useCallback(() => {
  //   // setShowUserStep(true);
  //   setTimeout(() => {
  //     dispatch(setReKeepGoingLoan(true));
  //   }, 300);
  // }, [showUserStep, dispatch]);

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setReKeepGoingLoan(true));
    }, 300);
  }, [dispatch]);

  // 조건 변경하기 버튼
  // const onChangeUserState = useCallback(() => {
  //   setShowUserStepNegative(true);
  //   setTimeout(() => {
  //     dispatch(setChangeUserInput(true));
  //   });
  // }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStepLoan();

  useEffect(() => {
    setIsLastChoice(lastStr === "reKeepGoingLoan");
  }, [lastStr]);

  useEffect(() => {
    if (cofix) {
      setShowBotStep(true);
      dispatch(setContainerBottomSize(window.innerHeight - 648 - 60));
      setTimeout(() => {
        dispatch(setLoanRecommendGuide2(true));
      }, 900);
    }
  }, [cofix, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionListWrap>
            <MotionList aniCondition={loanRecommendGuide2}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  <img src={img} />
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn
                        bgBtn
                        disabled={reKeepGoingLoan}
                        onClickBtn={goNextTask}>
                        이대로 대출진행
                      </SelectableBtn>
                    </li>
                    <li>
                      <SelectableBtn disabled={reKeepGoingLoan}>
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

      <LoanRateKnowSheet
        openSheet={openRateKnowSheet2}
        closeSheet={closeRateKnowSheet}
      />

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={reKeepGoingLoan}>
            <SelectedUserBox isLastSelect={isLastChoice}>
              이대로 대출진행
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default LoanRecommendGuide2;
