/**
 * Step 10. 주택시세 정보 검색 채팅
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import ExclaminationList from "@components/list/ExclaminationList.tsx";
import LoanSearchAddressPop from "@components/loan/LoanSearchAddressPop.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import {
  setLoanIdentityCheck,
  setUserSearchedAPT
} from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { KBState } from "@src/store";
import LastTrueUserStepLoan from "@src/utils/LastUserStepLoanProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import $style from "./LoanSearchHouse.module.sass";

const LoanSearchHouse: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);
  const [openPriceValueSheet, setOpenPriceValueSheet] = useState(false);

  const exclaList = [
    { text: "KB시세가 없는 주택은 대출을 신청할 수 없습니다." },
    {
      text: "입력한 정보가 실제와 다를 경우 금리·한도 조건이 변동될 수 있습니다."
    }
  ];

  const showPriceValueSheet = useCallback(() => {
    setOpenPriceValueSheet(true);
  }, [openPriceValueSheet]);

  const closePriceValueSheet = useCallback(() => {
    setOpenPriceValueSheet(false);
  }, []);

  const goNextTask = useCallback(() => {
    closePriceValueSheet();
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setUserSearchedAPT(true));
    }, 600);
  }, [dispatch]);

  const { userPhoneVarif, userSearchedAPT } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanIdentityCheck } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStepLoan();

  useEffect(() => {
    setIsLastChoice(lastStr === "userSearchedAPT");
  }, [lastStr]);

  useEffect(() => {
    if (userPhoneVarif) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setLoanIdentityCheck(true));
      }, 600);
    }
  }, [userPhoneVarif, dispatch]);

  return (
    <>
      {showBotStep && (
        <div style={{ marginTop: 24 }}>
          <MotionListWrap>
            <MotionList aniCondition={loanIdentityCheck}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  <h2>주택 시세정보 검을 위해 주소를 입력해주세요</h2>
                  <ExclaminationList exclaList={exclaList} />
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn
                        bgBtn
                        disabled={userSearchedAPT}
                        onClickBtn={showPriceValueSheet}>
                        주택 시세정보 검색
                      </SelectableBtn>
                    </li>
                  </SelectableListWrap>
                </KBTalk>
              </BotBox>
            </MotionList>
          </MotionListWrap>
        </div>
      )}

      <LoanSearchAddressPop
        openSheet={openPriceValueSheet}
        closeSheet={closePriceValueSheet}
        showNextTask={goNextTask}
      />

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={userSearchedAPT}>
            <SelectedUserBox marginTop={10} isLastSelect={isLastChoice}>
              <div className={$style.userSelectedValue}>
                <ul>
                  <li>
                    <p>주소</p>
                    <p>서울시 강남구 삼성로 212</p>
                  </li>
                  <li className={$style.postNumber}>
                    <p>07320</p>
                  </li>
                  <li className={$style.ratioValue}>
                    <p>전용면적</p>
                    <p>52.95㎡(19평)</p>
                  </li>
                  <li className={$style.floorStair}>
                    <p>층수</p>
                    <p>1층</p>
                  </li>
                </ul>
              </div>
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default LoanSearchHouse;
