import KBContainer from "@components/common/KBContainer.tsx";
import KBHeader from "@components/common/KBHeader.tsx";
import NeedfulExchangeMoney from "@components/exchange/NeedfulExchangeMoney.tsx";
import TermsAgree from "@components/exchange/TermsAgree.tsx";
import WriteCurrency from "@components/exchange/WriteCurrency.tsx";
import ChoiceCurrency from "@components/step_exchange/ChoiceCurrency.tsx";
import ExecuteCurrency from "@components/step_exchange/ExecuteCurrency.tsx";

const ExchangeMain = () => {
  return (
    <>
      <KBHeader>환전신청</KBHeader>
      <KBContainer>
        {/* S: 환전을 원하는 통화 선택 */}
        <ChoiceCurrency />
        {/* E: 환전을 원하는 통화 선택 */}

        {/* S: 지금 바로 환전을 도와드릴까요? */}
        <ExecuteCurrency />
        {/* E: 지금 바로 환전을 도와드릴까요? */}

        {/* S: 은행지점에서 받기 위해 외화거래에 대한 약관동의가 필요해요 */}
        <TermsAgree />
        {/* E: 은행지점에서 받기 위해 외화거래에 대한 약관동의가 필요해요 */}

        {/* S: 환전 신청 금액을 입력해주세요 */}
        <WriteCurrency />
        {/* E: 환전 신청 금액을 입력해주세요 */}

        {/* S: 환전에 필요한 금액을 알려드릴게요 */}
        <NeedfulExchangeMoney />
        {/* E: 환전에 필요한 금액을 알려드릴게요 */}
      </KBContainer>
    </>
  );
};
export default ExchangeMain;
