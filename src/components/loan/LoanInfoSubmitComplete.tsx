/**
 * Step 25. 대출 신청 서류 제출 > 이미지 제출 안내
 * 국민지갑과 마이데이터를 통해 제출이 완료된 서류에요
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import LoanImgSubmitPop from "@components/loan/LoanImgSubmitPop.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import chk_confirm_icon from "@imgs/icons/chk_confirm_icon.png";
import loader_icon from "@imgs/icons/loader_icon.png";
// import img from "@imgs/loan/LoanInfoSubmitComplete_01.png";
import img02 from "@imgs/loan/LoanInfoSubmitComplete_02.png";
import {
  setDocumentImage,
  setLoanInfoSubmitComplete
} from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import LastTrueUserStepLoan from "@src/utils/LastUserStepLoanProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import $style from "./LoanInfoSubmitComplete.module.sass";

const LoanInfoSubmitComplete: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showNextBox, setShowNextBox] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const [chkStep1, setChkStep1] = useState(false);
  const [chkStep2, setChkStep2] = useState(false);
  const [chkStep3, setChkStep3] = useState(false);
  const [chkStep4, setChkStep4] = useState(false);

  // 이미지로 제출 sheet
  const [openImageSubmitGuideSheet, setOpenImageSubmitGuideSheet] =
    useState(false);

  const { nationalPurse, documentImage } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanInfoSimpleSubmit } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  // 이미지로 제출하기 버튼 클릭
  const showImageSubmitGuideSheet = useCallback(() => {
    setOpenImageSubmitGuideSheet(true);
  }, []);

  // 이미지로 제출 sheet 닫기
  const closeImageSubmitGuideSheet = useCallback(() => {
    setOpenImageSubmitGuideSheet(false);
  }, []);

  // 이미지로 제출 팝업시트 - 확인 버튼 클릭
  const goNextTask = useCallback(() => {
    setOpenImageSubmitGuideSheet(false);
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setDocumentImage(true));
    }, 300);
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStepLoan();

  useEffect(() => {
    setIsLastChoice(lastStr === "documentImage");
  }, [lastStr]);

  useEffect(() => {
    if (nationalPurse) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setLoanInfoSubmitComplete(true));
      }, 900);
      setTimeout(() => {
        setChkStep1(true);
      }, 1800);
      setTimeout(() => {
        setChkStep2(true);
      }, 2300);
      setTimeout(() => {
        setChkStep3(true);
      }, 2800);
      setTimeout(() => {
        setChkStep4(true);
      }, 3200);
    } else {
      setChkStep1(false);
      setChkStep2(false);
      setChkStep3(false);
      setChkStep4(false);
    }
  }, [nationalPurse, dispatch]);

  useEffect(() => {
    if (chkStep4) {
      setTimeout(() => {
        setShowNextBox(true);
      }, 300);
    }
  }, [chkStep4]);

  return (
    <>
      {showBotStep && (
        <div>
          <MotionListWrap>
            <BotBox>
              <MotionList aniCondition={loanInfoSimpleSubmit}>
                <BotProfile />
                <KBTalk>
                  <div>
                    <h2>국민지갑과 마이데이터를 통해 제출이 완료된 서류에요</h2>
                  </div>
                  <div className={$style.chkList}>
                    <ul>
                      <li>
                        <p>재직확인서류</p>
                        {chkStep1 ? (
                          <span className={$style.chkBox}>
                            <img src={chk_confirm_icon} alt="" />
                          </span>
                        ) : (
                          <span className={$style.loader}>
                            <img src={loader_icon} alt="" />
                          </span>
                        )}
                      </li>
                      <li>
                        <p>주민등록등본</p>
                        {chkStep2 ? (
                          <span className={$style.chkBox}>
                            <img src={chk_confirm_icon} alt="" />
                          </span>
                        ) : (
                          <span className={$style.loader}>
                            <img src={loader_icon} alt="" />
                          </span>
                        )}
                      </li>
                      <li>
                        <p>계약금영수증 사본</p>
                        {chkStep3 ? (
                          <span className={$style.chkBox}>
                            <img src={chk_confirm_icon} alt="" />
                          </span>
                        ) : (
                          <span className={$style.loader}>
                            <img src={loader_icon} alt="" />
                          </span>
                        )}
                      </li>
                      <li>
                        <p>가족관계증명서</p>
                        {chkStep4 ? (
                          <span className={$style.chkBox}>
                            <img src={chk_confirm_icon} alt="" />
                          </span>
                        ) : (
                          <span className={$style.loader}>
                            <img src={loader_icon} alt="" />
                          </span>
                        )}
                      </li>
                    </ul>
                  </div>
                </KBTalk>
              </MotionList>
              <MotionList aniCondition={showNextBox}>
                <KBTalk>
                  <img src={img02} />
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn
                        bgBtn
                        disabled={documentImage}
                        onClickBtn={showImageSubmitGuideSheet}>
                        이미지로 제출하기
                      </SelectableBtn>
                    </li>
                    <li>
                      <SelectableBtn disabled={documentImage}>
                        나중에 제출하기
                      </SelectableBtn>
                    </li>
                  </SelectableListWrap>
                </KBTalk>
              </MotionList>
            </BotBox>
            <UtilUnderTalkList
              btnList={["발급처별 서류 안내", "서류제출 유의사항"]}
            />
          </MotionListWrap>
        </div>
      )}

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={documentImage}>
            <SelectedUserBox isLastSelect={isLastChoice}>
              서류 이미지로 제출
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}

      <LoanImgSubmitPop
        openSheet={openImageSubmitGuideSheet}
        closeSheet={closeImageSubmitGuideSheet}
        showNextStep={goNextTask}
      />
    </>
  );
};

export default LoanInfoSubmitComplete;
