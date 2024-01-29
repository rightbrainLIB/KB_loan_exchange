/**
 * Step 05. 출금정보입력(Progress bar 5/7)
 * 권유한 직원이 있나요?
 */
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import {
  setRecommendedEmployee,
  setRecommendStaff
} from "@slices/exchangeSlices.ts";
import { setIsCompleteExchange } from "@slices/globalUISlice.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { ExchangeState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const RecommendedEmployee: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { checkUserAccount, recommendStaff } = useSelector(
    (state: ExchangeState) => state.exchange.userStep
  );
  const { recommendedEmployee } = useSelector(
    (state: ExchangeState) => state.exchange.botStep
  );
  const { isCompleteExchange } = useSelector(
    (state: ExchangeState) => state.globalUI
  );

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setRecommendStaff(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "recommendStaff");
  }, [lastStr]);

  useEffect(() => {
    if (checkUserAccount) {
      if (isCompleteExchange) dispatch(setIsCompleteExchange(false));
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setRecommendedEmployee(true));
      }, 600);
    }
  }, [checkUserAccount, dispatch]);

  return (
    <>
      {showBotStep && (
        <div style={{ marginTop: 22 }}>
          <MotionList aniCondition={recommendedEmployee} showHeight={322}>
            <BotProfile />
            <KBTalk>
              <h2>권유한 직원이 있나요?</h2>
              <SelectableListWrap>
                <li>
                  <SelectableBtn disabled={recommendStaff}>
                    지점명 검색
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn disabled={recommendStaff}>
                    직원이름 검색
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn disabled={recommendStaff}>
                    직원번호 검색
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn
                    disabled={recommendStaff}
                    onClickBtn={goNextTask}>
                    없음
                  </SelectableBtn>
                </li>
              </SelectableListWrap>
            </KBTalk>
          </MotionList>
        </div>
      )}

      {showUserStep && (
        <MotionList aniCondition={recommendStaff} showHeight={54}>
          <SelectedUserBox isLastSelect={isLastChoice}>없음</SelectedUserBox>
        </MotionList>
      )}
    </>
  );
};

export default RecommendedEmployee;
