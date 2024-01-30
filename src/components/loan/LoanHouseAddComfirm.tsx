/**
 * Step 10. 주택 시세 대출 목적
 * 다음으로 대출에 필요한 몇 가지 필수질문을 드릴게요
 * 먼저 어던 목적으로 대출을 받으시나요?
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import {
  setBuyHouse,
  setLoanHouseAddConfirm,
  setLoanHouseAddConfirm01
} from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import LastTrueUserStepLoan from "@src/utils/LastUserStepLoanProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoanHouseAddComfirm: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);
  const [showNextBotStep, setShowNextBotStep] = useState(false);

  const { buyHouse } = useSelector((state: KBState) => state.loan.userStep);
  const { loanHouseConfirm, loanHouseAddConfirm } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  // 주택 구입 수정 - 다시 선택하시겠어요? > 예 버튼
  const modifyUserSelect = useCallback(() => {
    dispatch(setLoanHouseAddConfirm01(false)); // 공동명의, 단독명의 제거
    dispatch(setBuyHouse(false)); // 주택구입 - 사용자 선택 제거
    setTimeout(() => {
      setShowUserStep(false); // 주택구입 - 사용자 선택 제거 영역 제거
    }, 900);
    setTimeout(() => {}, 1200);
  }, [dispatch]);

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setBuyHouse(true));
    }, 300);
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStepLoan();

  useEffect(() => {
    setIsLastChoice(lastStr === "buyHouse");
  }, [lastStr]);

  useEffect(() => {
    if (loanHouseConfirm) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setLoanHouseAddConfirm(true));
      }, 900);
    }
  }, [loanHouseConfirm, dispatch]);

  return (
    <>
      {showBotStep && (
        <div style={{ marginTop: 41 }}>
          <MotionListWrap>
            <MotionList
              aniCondition={loanHouseAddConfirm}
              afterAnim={() => setShowNextBotStep(true)}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  다음으로 대출에 필요한 몇 가지 필수질문을 드릴게요
                </KBTalk>
              </BotBox>
            </MotionList>
          </MotionListWrap>
        </div>
      )}

      {showNextBotStep && (
        <div style={{ marginTop: 10 }}>
          <MotionList aniCondition={showNextBotStep}>
            <KBTalk>
              <h2>먼저 어떤 목적으로 대출을 받으시나요?</h2>
              <SelectableListWrap>
                <li>
                  <SelectableBtn disabled={buyHouse} onClickBtn={goNextTask}>
                    주택 구입
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn disabled={buyHouse}>
                    생활안전자금
                  </SelectableBtn>
                </li>
              </SelectableListWrap>
            </KBTalk>
          </MotionList>
        </div>
      )}

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={buyHouse}>
            <SelectedUserBox
              isLastSelect={isLastChoice}
              modifyUserSelect={modifyUserSelect}
              useTaskModify>
              주택 구입
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default LoanHouseAddComfirm;
