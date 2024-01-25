import StopExchangeProcessSheet from "@components/bottomSheet/StopExchangeProcessSheet.tsx";
import StopExchangeSheet from "@components/bottomSheet/StopExchangeSheet.tsx";
import headerBackBtn from "@imgs/icons/icon_back_24.png";
import { FC, ReactNode, useCallback, useState } from "react";

import $style from "./KBHeader.module.sass";

interface IKBHeader {
  children?: ReactNode;
}

const KBHeader: FC<IKBHeader> = ({ children }) => {
  const [stopExchange, setStopExchange] = useState(false); // 환전 신청 취소 (step6 전까지)
  const [stopExchangeProcess, setStopExchangeProcess] = useState(false); // 환전 진행 취소 (step6 부터)

  const closeStopExchange = useCallback(() => {
    setStopExchange(false);
  }, [stopExchange]);

  const closeStopExchangeProcess = useCallback(() => {
    setStopExchangeProcess(false);
  }, [stopExchangeProcess]);

  const gotoProcess = useCallback(() => {
    setStopExchange(false);
  }, []);

  // 취소 버튼 클릭
  const callCancelSheet = useCallback(() => {
    // 조건분기 필요
    setStopExchange(true);
    // setStopExchangeProcess(true);
  }, [stopExchange]);

  return (
    <>
      <div className={$style.KBHeader}>
        {/* S: leftSide */}
        <div className={$style.leftSide}>
          {/* S: backBtn */}
          <button type="button" className={$style.backBtn}>
            <div className={$style.imgBox}>
              <img src={`${headerBackBtn}`} alt="뒤로가기" />
            </div>
          </button>
          {/* E: backBtn */}
          {/* S: pageTitle */}
          <div className={$style.pageTitle}>
            <h1>{children}</h1>
          </div>
          {/* E: pageTitle */}
        </div>
        {/* E: leftSide */}

        {/* S: rightSide */}
        <div className={$style.rightSide}>
          <button
            type="button"
            className={$style.cancelBtn}
            onClick={callCancelSheet}>
            취소
          </button>
        </div>
        {/* E: rightSide */}
      </div>

      <StopExchangeSheet
        sheetOpen={stopExchange}
        closeSheet={closeStopExchange}
        execConfirm={gotoProcess}
      />
      <StopExchangeProcessSheet
        sheetOpen={stopExchangeProcess}
        closeSheet={closeStopExchangeProcess}
        execConfirm={gotoProcess}
      />
    </>
  );
};

export default KBHeader;
