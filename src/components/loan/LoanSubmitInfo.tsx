/**
 * Step 28. 대출 신청 완료 내역 확인
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import SelectableListWrap from "@components/list/SelectableListWrap.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import img from "@imgs/loan/LoanSubmitInfo.png";
import { setContainerBottomSize } from "@slices/globalUISlice.ts";
import { setLoanSubmitInfo } from "@slices/loanSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import { KBState } from "@src/store";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoanSubmitInfo: FC = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [showBotStep, setShowBotStep] = useState(false);

  const { confirmUserRequest } = useSelector(
    (state: KBState) => state.loan.userStep
  );
  const { loanSubmitInfo } = useSelector(
    (state: KBState) => state.loan.botStep
  );

  const goNextTask = useCallback(() => {
    navigate("/LoanInfoTotalComplete");
  }, []);

  useEffect(() => {
    dispatch(setContainerBottomSize(80));
    if (confirmUserRequest) {
      setShowBotStep(true);
      setTimeout(() => {
        dispatch(setLoanSubmitInfo(true));
      }, 600);
    }
    return () => {
      dispatch(setContainerBottomSize(null));
    };
  }, [confirmUserRequest, dispatch]);

  return (
    <>
      {showBotStep && (
        <div style={{ marginTop: 30 }}>
          <MotionListWrap>
            <MotionList showHeight={643} aniCondition={loanSubmitInfo}>
              <BotBox>
                <BotProfile />
                <KBTalk>
                  <img src={img} />
                  <SelectableListWrap>
                    <li>
                      <SelectableBtn bgBtn onClickBtn={goNextTask}>
                        대출 진행현황조회
                      </SelectableBtn>
                    </li>
                    <li>
                      <SelectableBtn>홈으로 가기</SelectableBtn>
                    </li>
                  </SelectableListWrap>
                </KBTalk>
              </BotBox>
            </MotionList>
          </MotionListWrap>
        </div>
      )}
    </>
  );
};

export default LoanSubmitInfo;
