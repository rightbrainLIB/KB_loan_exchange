import KBContainer from "@components/common/KBContainer.tsx";
import KBHeader from "@components/common/KBHeader.tsx";
import AllExchangeInquiry from "@components/exchange/AllExchangeInquiry.tsx";
import CheckAccount from "@components/exchange/CheckAccount.tsx";
import CheckExchangeInfo from "@components/exchange/CheckExchangeInfo.tsx";
import CheckNotificationExchangeRate from "@components/exchange/CheckNotificationExchangeRate.tsx";
import CheckPhoneNumber from "@components/exchange/CheckPhoneNumber.tsx";
import CompletionNotificationExchangeRate from "@components/exchange/CompletionNotificationExchangeRate.tsx";
import ExchangeListPeriodSelect from "@components/exchange/ExchangeListPeriodSelect.tsx";
import ExchangeRequestCompletion from "@components/exchange/ExchangeRequestCompletion.tsx";
import ExchangeRequestHistory from "@components/exchange/ExchangeRequestHistory.tsx";
import NeedfulExchangeMoney from "@components/exchange/NeedfulExchangeMoney.tsx";
import NotificationUSD from "@components/exchange/NotificationUSD.tsx";
import NotifyWhenExchangeRate from "@components/exchange/NotifyWhenExchangeRate.tsx";
import OneMonthExchangeList from "@components/exchange/OneMonthExchangeList.tsx";
import ReasonExchangeSelect from "@components/exchange/ReasonExchangeSelect.tsx";
import ReceiveBankBranch from "@components/exchange/ReceiveBankBranch.tsx";
import RecommendedEmployee from "@components/exchange/RecommendedEmployee.tsx";
import SelectReceiveDate from "@components/exchange/SelectReceiveDate.tsx";
import TermsAgree from "@components/exchange/TermsAgree.tsx";
import ThreeMonthExchangeList from "@components/exchange/ThreeMonthExchangeList.tsx";
import TravelInsurance from "@components/exchange/TravelInsurance.tsx";
import WaitingReceive from "@components/exchange/WaitingReceive.tsx";
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

        {/* S: 어느 지점에서 받으시겠어요? */}
        <ReceiveBankBranch />
        {/* E: 어느 지점에서 받으시겠어요? */}

        {/* S: 받고자 하는 날짜를 알려주세요 */}
        <SelectReceiveDate />
        {/* E: 받고자 하는 날짜를 알려주세요 */}

        {/* S: 휴대폰 번호가 맞는지 확인해주세요 */}
        <CheckPhoneNumber />
        {/* E: 휴대폰 번호가 맞는지 확인해주세요 */}

        {/* S: 환전 사유를 알려주세요 */}
        <ReasonExchangeSelect />
        {/* E: 환전 사유를 알려주세요 */}

        {/* S: 출금계좌가 맞는지 확인해주세요 */}
        <CheckAccount />
        {/* E: 출금계좌가 맞는지 확인해주세요 */}

        {/* S: 권유한 직원이 있나요? */}
        <RecommendedEmployee />
        {/* E: 권유한 직원이 있나요? */}

        {/* S: 환전을 신청할게요 */}
        <CheckExchangeInfo />
        {/* E: 환전을 신청할게요 */}

        {/* S: 환전 신청을 완료했어요! */}
        <ExchangeRequestCompletion />
        {/* E: 환전 신청을 완료했어요! */}

        {/* S: 환전 신청 내역을 확인해주세요 */}
        <ExchangeRequestHistory />
        {/* E: 환전 신청 내역을 확인해주세요 */}

        {/* S: 김국민님의 전체 환전 내역을 알려드릴게요 */}
        <AllExchangeInquiry />
        {/* E: 김국민님의 전체 환전 내역을 알려드릴게요 */}

        {/* S: 최근 3개월 내 환전 내역이에요 */}
        <ThreeMonthExchangeList />
        {/* E: 최근 3개월 내 환전 내역이에요 */}

        {/* S: 환전 내역 기간을 설정해주세요 */}
        <ExchangeListPeriodSelect />
        {/* E: 환전 내역 기간을 설정해주세요 */}

        {/* S: 김국민님의 1개월 내 환전 내역이에요 */}
        <OneMonthExchangeList />
        {/* E: 김국민님의 1개월 내 환전 내역이에요 */}

        {/* S: 자세히보기 - 수령대기 */}
        <WaitingReceive />
        {/* E: 자세히보기 - 수령대기 */}

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
