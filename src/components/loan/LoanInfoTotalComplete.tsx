/**
 * Step 30. 대출 진행현황조회/실행/예약
 */
import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import img01 from "@imgs/loan/LoanInfoTotalComplete_01.png";
import img02 from "@imgs/loan/LoanInfoTotalComplete_02.png";
import { FC } from "react";

import $style from "./LoanInfoTotalComplete.module.scss";

const LoanInfoTotalComplete: FC = () => {
  return (
    <>
      <div className={$style.LoanInfoTotalComplete}>
        <div className={$style.header}>
          <img src={img01} width="100%" />
        </div>
        <div className={$style.cont}>
          <img src={img02} width="100%" />
        </div>
        <KBConfirmBtn disabled>취소하기</KBConfirmBtn>
      </div>
    </>
  );
};

export default LoanInfoTotalComplete;
