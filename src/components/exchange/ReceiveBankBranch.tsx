/**
 * Step 04. 수령정보입력(Progress bar 4/7)
 * 어느 지점에서 받으시겠어요?
 */
import BotBox from "@components/box/BotBox.tsx";
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
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { KBState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ReceiveBankBranch: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { joinInsurance, receiveKeepGoing } = useSelector(
    (state: KBState) => state.exchange.userStep
  );
  const { receiveBankBranch } = useSelector(
    (state: KBState) => state.exchange.botStep
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
      setShowBotStep(true);
      dispatch(setContainerBottomSize(200));
      setTimeout(() => {
        dispatch(setReceiveBankBranch(true));
      }, 600);
    }
  }, [joinInsurance, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionList aniCondition={receiveBankBranch}>
            <BotBox>
              <BotProfile />
              <KBTalk>
                <img src={img} alt="" />
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
            </BotBox>
            <UtilUnderTalkList btnList={["지점 위치 안내"]} />
          </MotionList>
        </div>
      )}

      {showUserStep && (
        <MotionList aniCondition={receiveKeepGoing}>
          <SelectedUserBox isLastSelect={isLastChoice}>
            바로 진행
          </SelectedUserBox>
        </MotionList>
      )}
    </>
  );
};

export default ReceiveBankBranch;
