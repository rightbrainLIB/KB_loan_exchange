/**
 * Step 11. 주택 구입 시 지정할 명의
 * 주택 구입 시 지정할 명의를 알려주세요
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanHouseAddComfirmStep01.png";
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
import { setHouseOwner, setLoanHouseAddConfirm01 } from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import LastTrueUserStepLoan from "@src/utils/LastUserStepLoanProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoanHouseAddComfirmStep01: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { buyHouse, houseOwner } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanHouseAddConfirm01 } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setHouseOwner(true));
    }, 300);
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStepLoan();

  useEffect(() => {
    setIsLastChoice(lastStr === "houseOwner");
  }, [lastStr]);

  useEffect(() => {
    if (buyHouse) {
      setShowBotStep(true);
      dispatch(setContainerBottomSize(window.innerHeight - 313 - 60));
      setTimeout(() => {
        dispatch(setLoanHouseAddConfirm01(true));
      }, 600);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [buyHouse, dispatch]);

  // reverse, 주택 구입 에서 수정하기
  useEffect(() => {
    if (!loanHouseAddConfirm01) {
      setTimeout(() => {
        setShowBotStep(false);
      }, 600);
    }
  }, [loanHouseAddConfirm01]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionListWrap>
            <MotionList aniCondition={loanHouseAddConfirm01}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  <img src={img} />
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn disabled={houseOwner}>
                        공동명의
                      </SelectableBtn>
                    </li>
                    <li>
                      <SelectableBtn
                        disabled={houseOwner}
                        onClickBtn={goNextTask}>
                        단독명의
                      </SelectableBtn>
                    </li>
                  </SelectableListWrap>
                </KBTalk>
              </BotBox>
              <UtilUnderTalkList btnList={["담보물 명의 안내"]} />
            </MotionList>
          </MotionListWrap>
        </div>
      )}

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={houseOwner}>
            <SelectedUserBox isLastSelect={isLastChoice}>
              단독 명의
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default LoanHouseAddComfirmStep01;
