/**
 * Step 03. 환전정보입력(Progress bar 3/7)
 * 여행자 보험에 가입하실 수 있어요!
 */
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/TravelInsurance.png";
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { ExchangeState } from "@src/store";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TravelInsurance: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(true);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { joinInsurance } = useSelector(
    (state: ExchangeState) => state.exchange.userStep
  );

  useEffect(() => {
    dispatch(setContainerBottomSize(10));

    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [dispatch]);

  return (
    <>
      {showBotStep && (
        <MotionList aniCondition={true} showHeight={613}>
          <BotProfile />
          <KBTalk>
            <img src={img} />
            <SelectableListWrap>
              <li>
                <SelectableBtn bgBtn>환전만 진행</SelectableBtn>
              </li>
              <li>
                <SelectableBtn>여행자 보험 가입</SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
          <UtilUnderTalkList btnList={["여행자보험 안내"]} />
        </MotionList>
      )}

      {showUserStep && (
        <MotionList aniCondition={joinInsurance}>
          <SelectedUserBox isLastSelect={isLastChoice}>
            여행자 보험 가입
          </SelectedUserBox>
        </MotionList>
      )}
    </>
  );
};

export default TravelInsurance;
