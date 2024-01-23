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
  setCurrencySelection,
  setUserStep3,
  setUserStep4,
  setUserStep5
} from "@slices/exchangeSlices.ts";
import { AppDispatch, ExchangeState } from "@src/store";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const ExchangeMain = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    choiceCurrency,
    isCurrencySelected,
    userStep3,
    userStep4,
    userStep5
  } = useSelector((state: ExchangeState) => state.exchange.userStep);

  const onSetChoiceCurrency = useCallback(() => {
    dispatch(setChoiceCurrency(true));
  }, [dispatch]);

  const onClickCurrencyBtn = useCallback(() => {
    dispatch(setCurrencySelection(true));
  }, [dispatch]);

  const onClickJPYBtnm = useCallback(() => {
    dispatch(setUserStep3(true));
  }, [dispatch]);

  const onClickEURBtnm = useCallback(() => {
    dispatch(setUserStep4(true));
  }, [dispatch]);

  const onClickOtherBtnm = useCallback(() => {
    dispatch(setUserStep5(true));
  }, [dispatch]);

  const modifyUserCurrency = useCallback(() => {
    dispatch(setCurrencySelection(false));
  }, [dispatch]);

  const modifyUserCurrency1 = useCallback(() => {
    dispatch(setUserStep3(false));
  }, [dispatch]);

  const modifyUserCurrency2 = useCallback(() => {
    dispatch(setUserStep4(false));
  }, [dispatch]);

  const modifyUserCurrency3 = useCallback(() => {
    dispatch(setUserStep5(false));
  }, [dispatch]);

  const handleModifyButtonClick = useCallback(() => {
    modifyUserCurrency(); // modifyUserCurrency 호출
  }, [modifyUserCurrency]);

  const handleModify1ButtonClick = useCallback(() => {
    modifyUserCurrency1(); // modifyUserCurrency1 호출
  }, [modifyUserCurrency1]);

  const handleModify2ButtonClick = useCallback(() => {
    modifyUserCurrency2(); // modifyUserCurrency2 호출
  }, [modifyUserCurrency2]);

  const handleModify3ButtonClick = useCallback(() => {
    modifyUserCurrency3(); // modifyUserCurrency3 호출
  }, [modifyUserCurrency3]);

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
                    <SelectableBtn useImg={true} onClickBtn={onClickJPYBtnm}>
                      JPY (일본 엔)
                    </SelectableBtn>
                  </li>
                  <li>
                    <SelectableBtn useImg={true} onClickBtn={onClickEURBtnm}>
                      EUR (유럽연합 유로)
                    </SelectableBtn>
                  </li>
                  <li>
                    <SelectableBtn onClickBtn={onClickOtherBtnm}>
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
            <SelectedUserBox modifyUserSelect={handleModifyButtonClick}>
              USD (미국달러)
            </SelectedUserBox>
          </MotionList>
          <MotionList aniCondition={userStep3}>
            <SelectedUserBox modifyUserSelect={handleModify1ButtonClick}>
              JPY (일본 엔)
            </SelectedUserBox>
          </MotionList>
          <MotionList aniCondition={userStep4}>
            <SelectedUserBox modifyUserSelect={handleModify2ButtonClick}>
              EUR (유럽연합 유로)
            </SelectedUserBox>
          </MotionList>
          <MotionList aniCondition={userStep5}>
            <SelectedUserBox modifyUserSelect={handleModify3ButtonClick}>
              다른 통화 보기
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
