import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import SelectableBtn from "@components/buttons/SelectableBtn.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import iconArrow20 from "@imgs/icons/icon_arrow_20.png";
import {
  setCurrencySelection,
  setPrsExchangeRate
} from "@slices/exchangeSlices.ts";
import { AppDispatch, ExchangeState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ChoiceCurrency: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [choiceCurrency, setChoiceCurrency] = useState(false);

  const [isLastChoice, setIsLastChoice] = useState(false);

  const { isCurrencySelected } = useSelector(
    (state: ExchangeState) => state.exchange.userStep
  );

  const [showUserStep, setShowUserStep] = useState(false);

  const onClickCurrencyBtn = useCallback(() => {
    if (showUserStep) return;
    setShowUserStep(true);
    dispatch(setCurrencySelection(true));
  }, [showUserStep, dispatch]);

  const modifyUserCurrency = useCallback(() => {
    dispatch(setPrsExchangeRate(false)); // 지금 바로 환전을 도와드릴까요 감추기
    setTimeout(() => {
      dispatch(setCurrencySelection(false)); // USD (미국 달러) 감추기
    }, 500);
    setTimeout(() => {
      setShowUserStep(false);
    }, 600);
  }, [dispatch]);

  const execNextStep = useCallback(() => {
    dispatch(setPrsExchangeRate(true));
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "isCurrencySelected");
  }, [lastStr]);

  return (
    <>
      <MotionListWrap>
        <BotBox>
          <MotionList
            aniCondition={true}
            afterAnim={() => setChoiceCurrency(true)}>
            <BotProfile />
            <KBTalk>
              <p>
                안녕하세요, 김국민님!
                <br />
                쉽고 편한 환전을 위해 도와드릴게요
              </p>
            </KBTalk>
          </MotionList>
          <MotionList aniCondition={choiceCurrency}>
            <KBTalk>
              <h2>환전을 원하는 통화를 선택해주세요</h2>
              <SelectableListWrap>
                <li>
                  <SelectableBtn useImg={true} onClickBtn={onClickCurrencyBtn}>
                    USD (미국 달러)
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn useImg={true}>JPY (일본 엔)</SelectableBtn>
                </li>
                <li>
                  <SelectableBtn useImg={true}>
                    EUR (유럽연합 유로)
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn>
                    다른 통화 보기
                    <span>
                      <img src={`${iconArrow20}`} alt="" />
                    </span>
                  </SelectableBtn>
                </li>
              </SelectableListWrap>
            </KBTalk>
          </MotionList>
        </BotBox>
      </MotionListWrap>

      {showUserStep && (
        <MotionListWrap>
          <MotionList
            aniCondition={isCurrencySelected}
            afterAnim={execNextStep}>
            <SelectedUserBox
              modifyUserSelect={modifyUserCurrency}
              isLastSelect={isLastChoice}>
              USD (미국달러) 123
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default ChoiceCurrency;
