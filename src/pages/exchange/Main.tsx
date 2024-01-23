import KBContainer from "@components/common/KBContainer.tsx";
import KBHeader from "@components/common/KBHeader.tsx";
import ChoiceCurrency from "@components/step_exchange/ChoiceCurrency.tsx";
import ExecuteCurrency from "@components/step_exchange/ExecuteCurrency.tsx";
import AllExchangeInquiry from "@src/components/exchange/AllExchangeInquiry";
import ExchangeListPeriodSelect from "@src/components/exchange/ExchangeListPeriodSelect";
import OneMonthExchangeList from "@src/components/exchange/OneMonthExchangeList";
import ThreeMonthExchangeList from "@src/components/exchange/ThreeMonthExchangeList";
import WaitingReceive from "@src/components/exchange/WaitingReceive";

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
        <AllExchangeInquiry />
        <ExchangeListPeriodSelect />
        <OneMonthExchangeList />
        <ThreeMonthExchangeList />
        <WaitingReceive />
        
      </KBContainer>
    </>
  );
};
export default ExchangeMain;
