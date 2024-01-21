import CurrencySelectSheet from "@components/bottomSheet/CurrencySelectSheet.tsx";
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import SelectableBtn from "@components/buttons/SelectableBtn.tsx";
import KBContainer from "@components/common/KBContainer.tsx";
import KBHeader from "@components/common/KBHeader.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import CurrencyList from "@components/list/CurrencyList.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import iconArrow20 from "@imgs/icons/icon_arrow_20.png";
import {
  setChoiceCurrency,
  setCurrencySelection
} from "@slices/exchangeSlices.ts";
import { AppDispatch, ExchangeState } from "@src/store";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const ExchangeMain = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { choiceCurrency, isCurrencySelected } = useSelector(
    (state: ExchangeState) => state.exchange.userStep
  );

  const onSetChoiceCurrency = useCallback(() => {
    dispatch(setChoiceCurrency(true));
  }, [dispatch]);

  const onClickCurrencyBtn = useCallback(() => {
    dispatch(setCurrencySelection(true));
  }, [dispatch]);

  const modifyUserCurrency = useCallback(() => {
    dispatch(setCurrencySelection(false));
  }, [dispatch]);

  return (
    <>
      <KBHeader>환전신청</KBHeader>
      <KBContainer>
        {/* S: 환전을 원하는 통화 선택 */}
        <MotionListWrap>
          <BotBox>
            <MotionList
              aniCondition={true}
              afterAnim={() => onSetChoiceCurrency()}>
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
                <CurrencyList>
                  <li>
                    <SelectableBtn
                      useImg={true}
                      onClickBtn={onClickCurrencyBtn}>
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
                </CurrencyList>
              </KBTalk>
            </MotionList>
          </BotBox>
        </MotionListWrap>

        <MotionListWrap>
          <MotionList aniCondition={isCurrencySelected}>
            <SelectedUserBox modifyUserSelect={modifyUserCurrency}>
              USD (미국달러)
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
        {/* E: 환전을 원하는 통화 선택 */}
      </KBContainer>

      <CurrencySelectSheet />
    </>
  );
};
export default ExchangeMain;
