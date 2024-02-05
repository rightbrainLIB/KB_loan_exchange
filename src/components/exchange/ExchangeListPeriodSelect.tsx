/**
 * 환전 미수령 내역 : 환전 내역 기간을 설정해주세요
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import {
  setExchangeListPeriodSelect,
  setSelectOneMonth
} from "@slices/exchangeSlices.ts";
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
// import iconArrow20 from "@imgs/icons/icon_arrow_20.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { KBState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ExchangeListPeriodSelect: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { requestedDate, selectOneMonth } = useSelector(
    (state: KBState) => state.exchange.userStep
  );
  const { exchangeListPeriodSelect } = useSelector(
    (state: KBState) => state.exchange.botStep
  );

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setSelectOneMonth(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "selectOneMonth");
  }, [lastStr]);

  useEffect(() => {
    if (requestedDate) {
      setShowBotStep(true);
      dispatch(setContainerBottomSize(window.innerHeight - 379 - 60));
      setTimeout(() => {
        dispatch(setExchangeListPeriodSelect(true));
      }, 600);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [requestedDate, dispatch]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionList aniCondition={exchangeListPeriodSelect}>
            <BotBox>
              <BotProfile />
              <KBTalk>
                <h2>환전 내역 기간을 설정해주세요</h2>
                <SelectableListWrap>
                  <li>
                    <SelectableBtn
                      disabled={selectOneMonth}
                      onClickBtn={goNextTask}>
                      1개월
                    </SelectableBtn>
                  </li>
                  <li>
                    <SelectableBtn disabled={selectOneMonth}>
                      6개월
                    </SelectableBtn>
                  </li>
                  <li>
                    <SelectableBtn disabled={selectOneMonth}>1년</SelectableBtn>
                  </li>
                  <li>
                    <SelectableBtn disabled={selectOneMonth}>5년</SelectableBtn>
                  </li>
                  <li>
                    <SelectableBtn disabled={selectOneMonth}>
                      날짜 선택 &gt;
                      {/*<span>*/}
                      {/*  <img src={`${iconArrow20}`} alt="" />*/}
                      {/*</span>*/}
                    </SelectableBtn>
                  </li>
                </SelectableListWrap>
              </KBTalk>
            </BotBox>
          </MotionList>
        </div>
      )}

      {showUserStep && (
        <MotionList aniCondition={selectOneMonth}>
          <SelectedUserBox isLastSelect={isLastChoice}>1개월</SelectedUserBox>
        </MotionList>
      )}
    </>
  );
};

export default ExchangeListPeriodSelect;
