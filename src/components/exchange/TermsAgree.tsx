import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import StandardTerms from "@components/fullPopup/StandardTerms.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import termsContent from "@imgs/terms/exchange_standard.png";
import { setAgreeForeignCurrency } from "@slices/exchangeSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { KBState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TermsAgree: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const { isTakenPlace, agreeForeignCurrency } = useSelector(
    (state: KBState) => state.exchange.userStep
  );

  const { prsTermsAgreeForExchange } = useSelector(
    (state: KBState) => state.exchange.botStep
  );

  // 동의
  const termsConfirm = useCallback(() => {
    setOpenTerms(false); // 팝업 닫기
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setAgreeForeignCurrency(true)); // 외화 약관 동의
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "agreeForeignCurrency");
  }, [lastStr]);

  useEffect(() => {
    if (isTakenPlace) {
      setTimeout(() => {
        setShowBotStep(true);
      }, 500);
    } else {
      setTimeout(() => {
        setShowBotStep(false);
      });
    }
  }, [isTakenPlace]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionListWrap>
            <MotionList aniCondition={prsTermsAgreeForExchange}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  <h2>
                    은행지점에서 받기 위해 외화거래에
                    <br />
                    대한 약관동의가 필요해요
                  </h2>
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn
                        bgBtn
                        onClickBtn={() => setOpenTerms(true)}
                        disabled={agreeForeignCurrency}>
                        외화 약관 동의
                      </SelectableBtn>
                    </li>
                  </SelectableListWrap>
                </KBTalk>
              </BotBox>
              <UtilUnderTalkList btnList={["외화거래기본약관 확인"]} />
            </MotionList>

            {showUserStep && (
              <MotionList aniCondition={agreeForeignCurrency}>
                <SelectedUserBox isLastSelect={isLastChoice}>
                  외화 약관 동의
                </SelectedUserBox>
              </MotionList>
            )}
          </MotionListWrap>

          <StandardTerms
            sheetOpen={openTerms}
            closeSheet={() => setOpenTerms(false)}
            onClickConfirm={termsConfirm}>
            <img src={`${termsContent}`} alt="" />
          </StandardTerms>
        </div>
      )}
    </>
  );
};

export default TermsAgree;
