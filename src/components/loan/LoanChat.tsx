/**
 * 대출 채팅 영역
 */
import KBContainer from "@components/common/KBContainer.tsx";
import KBHeader from "@components/common/KBHeader.tsx";
import LoanIdentityCheck from "@components/loan/LoanIdentityCheck.tsx";
import LoanLimitCurrency from "@components/loan/LoanLimitCurrency.tsx";
import LoanSearchHouse from "@components/loan/LoanSearchHouse.tsx";
import { FC } from "react";

const LoanChat: FC = () => {
  return (
    <>
      <KBHeader>부동산담보대출</KBHeader>
      <KBContainer>
        {/* S: 부동산담보대출 조회하기 위한 동의 */}
        <LoanLimitCurrency />
        {/* E: 부동산담보대출 조회하기 위한 동의 */}

        {/* S: 부동산담보대출 본인인증 */}
        <LoanIdentityCheck />
        {/* E: 부동산담보대출 본인인증 */}

        {/* S: 부동산담보대출 주택 시세정보 */}
        <LoanSearchHouse />
        {/* E: 부동산담보대출 주택 시세정보 */}
      </KBContainer>
    </>
  );
};
export default LoanChat;
