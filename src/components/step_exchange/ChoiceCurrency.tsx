import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import SelectableBtn from "@components/buttons/SelectableBtn.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import iconArrow20 from "@imgs/icons/icon_arrow_20.png";
import eur from "@imgs/logo/eur.png";
import eur_disabled from "@imgs/logo/eur_disabled.png";
import jpy from "@imgs/logo/jpy.png";
import jpy_disabled from "@imgs/logo/jpy_disabled.png";
import usa from "@imgs/logo/usa.png";
import usa_disabled from "@imgs/logo/usa_disabled.png";
import {
  setCurrencySelection,
  setPrsExchangeRate
} from "@slices/exchangeSlices.ts";
import { setIsCompleteExchange } from "@slices/globalUISlice.ts";
import { AppDispatch, KBState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
// import { Input } from "antd";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ChoiceCurrency: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [choiceCurrency, setChoiceCurrency] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);
  const [usaFlag, setUsaFlag] = useState(usa);
  const [jpFlag, setJpFlag] = useState(jpy);
  const [eurFlag, setEurFlag] = useState(eur);

  const { isCurrencySelected } = useSelector(
    (state: KBState) => state.exchange.userStep
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

  // const onKeyPressInput = useCallback(
  //   (e: React.KeyboardEvent<HTMLInputElement>) => {
  //     // if (e.code === "Enter") {
  //     alert(e.code);
  //     // }
  //   },
  //   []
  // );

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "isCurrencySelected");
  }, [lastStr]);

  useEffect(() => {
    dispatch(setIsCompleteExchange(false));
    if (isCurrencySelected) {
      setUsaFlag(usa_disabled);
      setJpFlag(jpy_disabled);
      setEurFlag(eur_disabled);
    } else {
      setUsaFlag(usa);
      setJpFlag(jpy);
      setEurFlag(eur);
    }
  }, [isCurrencySelected]);

  return (
    <>
      <MotionListWrap>
        <BotBox>
          <MotionList
            aniCondition={true}
            afterAnim={() => setChoiceCurrency(true)}
            noScroll>
            <BotProfile />
            {/*<Input value={"대치동 은마아파트"} onPressEnter={onKeyPressInput} />*/}
            <KBTalk>
              <p>
                안녕하세요, 김국민님!
                <br />
                쉽고 편한 환전을 위해 도와드릴게요
              </p>
            </KBTalk>
          </MotionList>
          <MotionList aniCondition={choiceCurrency} noScroll>
            <KBTalk>
              <h2>환전을 원하는 통화를 선택해주세요</h2>
              <SelectableListWrap>
                <li>
                  <SelectableBtn
                    useImg={true}
                    imgSrc={usaFlag}
                    onClickBtn={onClickCurrencyBtn}
                    disabled={isCurrencySelected}>
                    USD (미국 달러)
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn
                    useImg={true}
                    imgSrc={jpFlag}
                    disabled={isCurrencySelected}>
                    JPY (일본 엔)
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn
                    useImg={true}
                    imgSrc={eurFlag}
                    disabled={isCurrencySelected}>
                    EUR (유럽연합 유로)
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn disabled={isCurrencySelected}>
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
              USD (미국달러)
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default ChoiceCurrency;
