/**
 * Step 15. 맞춤정보 추천
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import chk_confirm_icon from "@imgs/icons/chk_confirm_icon.png";
// import img04 from "@imgs/loan/LoanHouseAddComfirmStep05_04.png";
import linkImg from "@imgs/icons/link.png";
import loader_icon from "@imgs/icons/loader_icon.png";
import img02 from "@imgs/loan/LoanHouseAddComfirmStep05_02.png";
import img03 from "@imgs/loan/LoanHouseAddComfirmStep05_03.png";
import loanHouseAddConfirmStep5_1 from "@imgs/loan/loanHouseAddConfirmStep5_1.png";
import {
  setLoanHouseAddConfirm05,
  setRequestLoan
} from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import LastTrueUserStepLoan from "@src/utils/LastUserStepLoanProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import $style from "./LoanHouseAddConfirmStep05.module.sass";

const LoanHouseAddComfirmStep05: FC = () => {
  const dispatch = useDispatch();

  const [chkStep1, setChkStep1] = useState(false);
  const [chkStep2, setChkStep2] = useState(false);
  const [chkStep3, setChkStep3] = useState(false);

  const [showBotStep1, setShowBotStep1] = useState(false);
  const [showBotStep2, setShowBotStep2] = useState(false);
  const [showBotStep3, setShowBotStep3] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const [loanInfo, setLoanInfo] = useState(false); // 심사결과 대출이 가능해요
  const [recommendInfo, setRecommendInfo] = useState(false); // KB 맞춤상품을 추천드려요

  const { interestRateAndLimit, requestLoan } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanHouseAddConfirm05 } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  const showLoanInfo = useCallback(() => {
    // 로딩 - 확인 완료 이후 실행
    setTimeout(() => {
      setShowBotStep2(true);
    }, 1600);
    setTimeout(() => {
      setLoanInfo(true);
    }, 1900);
  }, []);

  const showRecommend = useCallback(() => {
    // 심사결과 대출이 가능해요 이후
    setTimeout(() => {
      setShowBotStep3(true);
    }, 300);
    setTimeout(() => {
      setRecommendInfo(true);
    }, 400);
  }, []);

  const goNextTask = useCallback(() => {
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setRequestLoan(true));
    });
  }, [dispatch]);

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStepLoan();

  useEffect(() => {
    setIsLastChoice(lastStr === "requestLoan");
  }, [lastStr]);

  // 로딩중 - 확인 완료 애니메이션 처리
  useEffect(() => {
    if (loanHouseAddConfirm05) {
      setTimeout(() => {
        setChkStep1(true);
      }, 1600);
      setTimeout(() => {
        setChkStep2(true);
      }, 2000);
      setTimeout(() => {
        setChkStep3(true);
      }, 2200);
    } else {
      setChkStep1(false);
      setChkStep2(false);
      setChkStep3(false);
    }
  }, [loanHouseAddConfirm05]);

  useEffect(() => {
    if (interestRateAndLimit) {
      setShowBotStep1(true);
      setTimeout(() => {
        dispatch(setLoanHouseAddConfirm05(true));
      }, 600);
    }
  }, [interestRateAndLimit, dispatch, loanHouseAddConfirm05]);

  return (
    <>
      {showBotStep1 && (
        <div>
          <MotionListWrap>
            <MotionList
              aniCondition={loanHouseAddConfirm05}
              afterAnim={showLoanInfo}>
              <BotProfile />
              <KBTalk>
                <div>
                  <h2>심사정보를 기반으로 금리와 한도를 알아볼게요</h2>
                  <div className={$style.upperImg}>
                    <div className={$style.iconImgBox}>
                      <img src={loanHouseAddConfirmStep5_1} alt="" />
                    </div>
                  </div>
                  <div className={$style.chkList}>
                    <ul>
                      <li>
                        <p>주택 시세정보를 확인했어요</p>
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
                        <p>공공기관에서 소득정보를 불러왔어요</p>
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
                        <p>주택보유 수를 확인했어요</p>
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
                    </ul>
                  </div>
                </div>
              </KBTalk>
            </MotionList>
          </MotionListWrap>
        </div>
      )}

      {/* 심사결과 대출이 가능해요 */}
      {showBotStep2 && (
        <div>
          <MotionListWrap>
            <MotionList aniCondition={loanInfo} afterAnim={showRecommend}>
              <div style={{ marginTop: 17 }}>
                <KBTalk>
                  <img src={img02} />
                </KBTalk>
              </div>
            </MotionList>
          </MotionListWrap>
        </div>
      )}
      {showBotStep3 && (
        <div>
          <MotionListWrap>
            {/* KB 맞춤상품을 추천드려요 */}
            <MotionList aniCondition={recommendInfo}>
              <div style={{ marginTop: 17 }}>
                <BotBox>
                  <KBTalk>
                    <img src={img03} />
                    <SelectableListWrap>
                      <li>
                        <SelectableBtn
                          bgBtn
                          disabled={requestLoan}
                          onClickBtn={goNextTask}>
                          대출 신청
                        </SelectableBtn>
                      </li>
                      <li>
                        <SelectableBtn disabled={requestLoan}>
                          자세히 보기
                          <img
                            src={linkImg}
                            width="15"
                            style={{ marginLeft: 5 }}
                          />
                        </SelectableBtn>
                      </li>
                      <li>
                        <SelectableBtn disabled={requestLoan}>
                          처음부터 다시 조회
                        </SelectableBtn>
                      </li>
                    </SelectableListWrap>
                  </KBTalk>
                </BotBox>
                <UtilUnderTalkList btnList={["한도금리 유의사항"]} />
              </div>
            </MotionList>
          </MotionListWrap>
        </div>
      )}

      {showUserStep && (
        <MotionListWrap>
          <MotionList aniCondition={requestLoan}>
            <SelectedUserBox isLastSelect={isLastChoice}>
              대출신청
            </SelectedUserBox>
          </MotionList>
        </MotionListWrap>
      )}
    </>
  );
};

export default LoanHouseAddComfirmStep05;
