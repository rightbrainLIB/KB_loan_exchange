/**
 * Step 03. 환전정보입력(Progress bar 3/7)
 * 여행자보험에 가입하실 수 있어요!
 */
import AdditionalServicesSheet from "@components/bottomSheet/AdditionalServicesSheet.tsx";
import EssentialConfirmationSheet from "@components/bottomSheet/EssentialConfirmationSheet.tsx";
import TravelInsuranceAgreeSheet from "@components/bottomSheet/TravelInsuranceAgreeSheet.tsx";
import TravelInsuranceNoticeSheet from "@components/bottomSheet/TravelInsuranceNoticeSheet.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import SelectedUserBox from "@components/box/SelectedUserBox.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/TravelInsurance.png";
import {
  setJoinInsurance,
  setTravelInsurance
} from "@slices/exchangeSlices.ts";
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { KBState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TravelInsurance: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);
  const [showUserStep, setShowUserStep] = useState(false);
  const [isLastChoice, setIsLastChoice] = useState(false);

  const [openEssentialSheet, setOpenEssentialSheet] = useState(false); // 꼭 확인해주세요! 팝업
  const [showRegister, setShowRegister] = useState(false); // KB 외화 환전/송금 부가서비스 신청서 팝업
  const [showAgree, setShowAgree] = useState(false); // 개인정보 제3자 제공 동의서(여행자 보험) 팝업
  const [openNoticeSheet, setOpenNoticeSheet] = useState(false); // 여행자보험 안내 팝업

  const { checkRequestValue, joinInsurance } = useSelector(
    (state: KBState) => state.exchange.userStep
  );
  const { travelInsurance } = useSelector(
    (state: KBState) => state.exchange.botStep
  );

  // 꼭 확인해주세요! open
  const activeEssentialSheet = useCallback(() => {
    setOpenEssentialSheet(true);
  }, []);

  // 꼭 확인해주세요! close
  const inActiveEssentialSheet = useCallback(() => {
    setOpenEssentialSheet(false);
  }, []);

  // KB 외화 환전/송금 부가서비스 신청서 open
  const showRegisterSheet = useCallback(() => {
    setOpenEssentialSheet(false);
    setTimeout(() => {
      setShowRegister(true);
    });
  }, [showRegister]);

  // KB 외화 환전/송금 부가서비스 신청서 close
  const hideRegisterSheet = useCallback(() => {
    setShowRegister(false);
  }, [showRegister]);

  // [선택] 개인(신용)정보 제3자 제공 동의서(여행자보험) open
  const showAgreeSheet = useCallback(() => {
    setShowRegister(false);
    setTimeout(() => {
      setShowAgree(true);
    });
  }, [showAgree]);

  // [선택] 개인(신용)정보 제3자 제공 동의서(여행자보험) close
  const hideAgreeSheet = useCallback(() => {
    setShowAgree(false);
  }, [showAgree]);

  // 환전 진행 최종 확인 - 개인(신용)정보 제3자 제공 동의서 동의 버튼
  const goNextTask = useCallback(() => {
    setShowAgree(false);
    setShowUserStep(true);
    setTimeout(() => {
      dispatch(setJoinInsurance(true)); // 여행자 보험 가입 활성화
      dispatch(setContainerBottomSize(null)); // container paddingBottom값 삭제
    });
  }, [showAgree]);

  // 여행자보험 안내 open
  const openGuideSheet = useCallback(() => {
    setOpenNoticeSheet(true);
  }, []);

  // 여행자보험 안내 close
  const closeNoticeSheet = useCallback(() => {
    setOpenNoticeSheet(false);
  }, [openNoticeSheet]);

  const utilUnderBtnList = [
    {
      disabled: joinInsurance,
      text: "여행자보험 안내",
      onClickBtn: () => {
        openGuideSheet();
      }
    }
  ];

  // 마지막 step 체크하기
  const lastStr = LastTrueUserStep();

  useEffect(() => {
    setIsLastChoice(lastStr === "joinInsurance");
  }, [lastStr]);

  // 초기 렌더링 조건, 이전 userStep이 true가 되면 진행
  useEffect(() => {
    if (checkRequestValue) {
      dispatch(setContainerBottomSize(100));
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setTravelInsurance(true));
      }, 600);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [dispatch, checkRequestValue]);

  return (
    <>
      {showBotStep && (
        <div style={{ marginTop: 10 }}>
          <MotionList
            aniCondition={travelInsurance}
            showHeight={613}
            moveScroll={70}>
            <BotProfile />
            <KBTalk>
              <img src={img} />
              <SelectableListWrap>
                <li>
                  <SelectableBtn bgBtn disabled={joinInsurance}>
                    환전만 진행
                  </SelectableBtn>
                </li>
                <li>
                  <SelectableBtn
                    disabled={joinInsurance}
                    onClickBtn={activeEssentialSheet}>
                    여행자 보험 가입
                  </SelectableBtn>
                </li>
              </SelectableListWrap>
            </KBTalk>
            <UtilUnderTalkList btnUnderList={utilUnderBtnList} />
          </MotionList>
        </div>
      )}

      {showUserStep && (
        <MotionList aniCondition={joinInsurance} showHeight={54}>
          <SelectedUserBox isLastSelect={isLastChoice}>
            여행자 보험 가입
          </SelectedUserBox>
        </MotionList>
      )}

      {/* 환전만 진행 버튼 선택시 꼭 확인해주세요! 바텀시트 */}
      <EssentialConfirmationSheet
        sheetOpen={openEssentialSheet}
        closeSheet={inActiveEssentialSheet}
        clickNext={showRegisterSheet}
      />

      {/* KB 외화 환전/송금 부가서비스 신청서 */}
      <AdditionalServicesSheet
        sheetOpen={showRegister}
        closeSheet={hideRegisterSheet}
        clickNext={showAgreeSheet}
      />

      {/* [선택] 개인(신용)정보 제3자 제공 동의서(여행자보험) */}
      <TravelInsuranceAgreeSheet
        sheetOpen={showAgree}
        closeSheet={hideAgreeSheet}
        clickNext={goNextTask}
      />

      {/* 여행자보험 안내 바텀시트 */}
      <TravelInsuranceNoticeSheet
        openSheet={openNoticeSheet}
        closeSheet={closeNoticeSheet}
      />
    </>
  );
};

export default TravelInsurance;
