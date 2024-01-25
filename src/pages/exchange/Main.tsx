import KBContainer from "@components/common/KBContainer.tsx";
import KBHeader from "@components/common/KBHeader.tsx";
import CheckNotificationExchangeRate from "@components/exchange/CheckNotificationExchangeRate.tsx";
import CompletionNotificationExchangeRate from "@components/exchange/CompletionNotificationExchangeRate.tsx";
import NeedfulExchangeMoney from "@components/exchange/NeedfulExchangeMoney.tsx";
import NotificationUSD from "@components/exchange/NotificationUSD.tsx";
import NotifyWhenExchangeRate from "@components/exchange/NotifyWhenExchangeRate.tsx";
import TermsAgree from "@components/exchange/TermsAgree.tsx";
import TravelInsurance from "@components/exchange/TravelInsurance.tsx";
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

        {/* S: 미국달러로 계속 진행할까요? */}
        <NotificationUSD />
        {/* E: 미국달러로 계속 진행할까요? */}

        {/* S: 환율이 얼마일때 알려드릴까요? */}
        <NotifyWhenExchangeRate />
        {/* E: 환율이 얼마일때 알려드릴까요? */}

        {/* S: 은행지점에서 받기 위해 외화거래에 대한 약관동의가 필요해요 */}
        <TermsAgree />
        {/* E: 은행지점에서 받기 위해 외화거래에 대한 약관동의가 필요해요 */}

        {/* S: 환전 신청 금액을 입력해주세요 */}
        <WriteCurrency />
        {/* E: 환전 신청 금액을 입력해주세요 */}

        {/* S: 환전에 필요한 금액을 알려드릴게요 */}
        <NeedfulExchangeMoney />
        {/* E: 환전에 필요한 금액을 알려드릴게요 */}

        {/* S: 여행자 보험에 가입하실 수 있어요! */}
        <TravelInsurance />
        {/* E: 여행자 보험에 가입하실 수 있어요! */}

        {/* S: 환율이 1,300.8원 이하 일때 알림을 드릴까요? */}
        <CheckNotificationExchangeRate />
        {/* E: 환율이 1,300.8원 이하 일때 알림을 드릴까요? */}

        {/* S: 원하는 환율일 때 알림을 드릴게요 */}
        <CompletionNotificationExchangeRate />
        {/* E: 원하는 환율일 때 알림을 드릴게요 */}
      </KBContainer>
    </>
  );
};
export default ExchangeMain;
