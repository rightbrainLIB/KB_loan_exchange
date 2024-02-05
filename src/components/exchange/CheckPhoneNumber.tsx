/**
 * Step 05. 출금정보입력(Progress bar 5/7)
 * 휴대폰 번호가 맞는지 확인해주세요
 */
import BotBox from "@components/box/BotBox.tsx";
import EmphasisContent from "@components/box/EmphasisContent.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import {
  setCheckPhoneNumber,
  setCheckUserPhoneNumber
} from "@slices/exchangeSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { KBState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CheckPhoneNumber: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { userTakenDate, checkUserPhoneNumber } = useSelector(
    (state: KBState) => state.exchange.userStep
  );
  const { checkPhoneNumber } = useSelector(
    (state: KBState) => state.exchange.botStep
  );

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setCheckUserPhoneNumber(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "checkUserPhoneNumber");
  }, [lastStr]);

  useEffect(() => {
    if (userTakenDate) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setCheckPhoneNumber(true));
      }, 600);
    }
  }, [userTakenDate, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionList aniCondition={checkPhoneNumber}>
            <BotBox>
              <BotProfile />
              <KBTalk>
                <h2>휴대폰 번호가 맞는지 확인해주세요</h2>
                <EmphasisContent>
                  <p>010 1234 1234</p>
                </EmphasisContent>
                <SelectableListWrap>
                  <li>
                    <SelectableBtn
                      bgBtn={!checkUserPhoneNumber}
                      disabled={checkUserPhoneNumber}
                      onClickBtn={goNextTask}>
                      번호 확인 완료
                    </SelectableBtn>
                  </li>
                  <li>
                    <SelectableBtn disabled={checkUserPhoneNumber}>
                      번호 수정
                    </SelectableBtn>
                  </li>
                </SelectableListWrap>
              </KBTalk>
            </BotBox>
          </MotionList>
        </div>
      )}

      {showUserStep && (
        <MotionList aniCondition={checkUserPhoneNumber}>
          <SelectedUserBox isLastSelect={isLastChoice}>
            번호 확인 완료
          </SelectedUserBox>
        </MotionList>
      )}
    </>
  );
};

export default CheckPhoneNumber;
