/**
 * Step 04. 수령정보입력(Progress bar 4/7)
 * 어느 지점에서 받으시겠어요?
 */
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/ReceiveBankBranch.png";
import {
  setReceiveBankBranch,
  setReceiveKeepGoing
} from "@slices/exchangeSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { ExchangeState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ReceiveBankBranch: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { joinInsurance, receiveKeepGoing } = useSelector(
    (state: ExchangeState) => state.exchange.userStep
  );
  const { receiveBankBranch } = useSelector(
    (state: ExchangeState) => state.exchange.botStep
  );

  // 바로 진행 버튼
  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setReceiveKeepGoing(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "receiveKeepGoing");
  }, [lastStr]);

  useEffect(() => {
    if (joinInsurance) {
      setTimeout(() => {
        setShowBotStep(true);
      }, 300);
      setTimeout(() => {
        dispatch(setReceiveBankBranch(true));
      }, 600);
    }
  }, [joinInsurance]);

  return (
    <>
      {showBotStep && (
        <div style={{ marginTop: 10 }}>
          <MotionList aniCondition={receiveBankBranch} showHeight={452}>
            <BotProfile />
            <KBTalk>
              <img src={img} />
              <SelectableListWrap>
                <li>
                  <SelectableBtn
                    bgBtn
                    disabled={receiveKeepGoing}
                    onClickBtn={goNextTask}>
                    바로 진행
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn disabled={receiveKeepGoing}>
                    다른 지점 검색
                  </SelectableBtn>
                </li>
              </SelectableListWrap>
            </KBTalk>
            <UtilUnderTalkList btnList={["지점 위치 안내"]} />
          </MotionList>
        </div>
      )}

      {showUserStep && (
        <MotionList aniCondition={receiveKeepGoing} showHeight={54}>
          <SelectedUserBox isLastSelect={isLastChoice}>
            바로 진행
          </SelectedUserBox>
        </MotionList>
      )}
    </>
  );
};

export default ReceiveBankBranch;
