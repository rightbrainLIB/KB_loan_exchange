import CurrencySelectSheet from "@components/bottomSheet/CurrencySelectSheet.tsx";
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import SelectableBtn from "@components/buttons/SelectableBtn.tsx";
import KBContainer from "@components/common/KBContainer.tsx";
import KBHeader from "@components/common/KBHeader.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import CurrencyList from "@components/list/CurrencyList.tsx";
import iconArrow20 from "@imgs/icons/icon_arrow_20.png";
import { setCurrencySelection } from "@slices/exchangeSlices.ts";
import { AppDispatch } from "@src/store";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const ExchangeMain = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const { isCurrencySelected } = useSelector(
  //   (state: ExchangeState) => state.exchange.userStep
  // );

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
        {/* S: bot-box */}
        <BotBox>
          <BotProfile />
          <KBTalk>
            <p>
              안녕하세요, 김국민님!
              <br />
              쉽고 편한 환전을 위해 도와드릴게요
            </p>
          </KBTalk>
          <KBTalk>
            <h2>환전을 원하는 통화를 선택해주세요</h2>
            <CurrencyList>
              <li>
                <SelectableBtn useImg={true} onClickBtn={onClickCurrencyBtn}>
                  USD (미국 달러)
                </SelectableBtn>
              </li>
              <li>
                <SelectableBtn useImg={true}>JPY (일본 엔)</SelectableBtn>
              </li>
              <li>
                <SelectableBtn useImg={true}>EUR (유럽연합 유로)</SelectableBtn>
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
        </BotBox>
        {/* E: bot-box */}

        {/* S: bot-box */}
        <SelectedUserBox modifyUserSelect={modifyUserCurrency}>
          USD (미국달러)
        </SelectedUserBox>
        {/* E: bot-box */}
      </KBContainer>

      <CurrencySelectSheet />
    </>
  );
};
export default ExchangeMain;
