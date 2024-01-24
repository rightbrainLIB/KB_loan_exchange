/**
 * 대출 채팅 영역
 */
import KBContainer from "@components/common/KBContainer.tsx";
import KBHeader from "@components/common/KBHeader.tsx";
import LoanLimitCurrency from "@components/loan/LoanLimitCurrency.tsx";

const LoanChat = () => {
  return (
    <>
      <KBHeader>부동산담보대출</KBHeader>
      <KBContainer>
        {/* S: 부동산담보대출 조회하기 위한 동의 */}
        <LoanLimitCurrency />
        {/* E: 부동산담보대출 조회하기 위한 동의 */}
      </KBContainer>
    </>
  );
};
export default LoanChat;
