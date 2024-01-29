/**
 * 대출 채팅 영역 확인용
 */
import KBContainer from "@components/common/KBContainer.tsx";
import KBHeader from "@components/common/KBHeader.tsx";
// import LoanApplicationAmount from "@components/loan/LoanApplicationAmount.tsx";
// import LoanHouseAddComfirm from "@components/loan/LoanHouseAddComfirm.tsx";
// import LoanHouseAddComfirmStep01 from "@components/loan/LoanHouseAddComfirmStep01.tsx";
// import LoanHouseAddComfirmStep02 from "@components/loan/LoanHouseAddComfirmStep02.tsx";
// import LoanHouseAddComfirmStep03 from "@components/loan/LoanHouseAddComfirmStep03.tsx";
// import LoanHouseAddComfirmStep04 from "@components/loan/LoanHouseAddComfirmStep04.tsx";
// import LoanHouseAddComfirmStep05 from "@components/loan/LoanHouseAddComfirmStep05.tsx";
// import LoanHouseAddComfirmStep06 from "@components/loan/LoanHouseAddComfirmStep06.tsx";
// import LoanHouseComfirm from "@components/loan/LoanHouseComfirm.tsx";
// import LoanIdentityCheck from "@components/loan/LoanIdentityCheck.tsx";
// import LoanInfoComfirm from "@components/loan/LoanInfoComfirm.tsx";
// import LoanInfoSimpleSubmit from "@components/loan/LoanInfoSimpleSubmit.tsx";
// import LoanInfoSubmitComplete from "@components/loan/LoanInfoSubmitComplete.tsx";
import LoanLimitCurrency from "@components/loan/LoanLimitCurrency.tsx";
// import LoanPaybackSelectStep01 from "@components/loan/LoanPaybackSelectStep01.tsx";
// import LoanPaybackSelectStep02 from "@components/loan/LoanPaybackSelectStep02.tsx";
// import LoanPaybackSelectStep03 from "@components/loan/LoanPaybackSelectStep03.tsx";
// import LoanPeriodSelect from "@components/loan/LoanPeriodSelect.tsx";
// import LoanRecommendGuide from "@components/loan/LoanRecommendGuide.tsx";
// import LoanSearchHouse from "@components/loan/LoanSearchHouse.tsx";
// import LoanSelectCalendar from "@components/loan/LoanSelectCalendar.tsx";
// import LoanSubmitComplete from "@components/loan/LoanSubmitComplete.tsx";
// import LoanSubmitInfo from "@components/loan/LoanSubmitInfo.tsx";
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
        {/*<LoanIdentityCheck />*/}
        {/* E: 부동산담보대출 본인인증 */}

        {/* S: 부동산담보대출 주택 시세정보 */}
        {/*<LoanSearchHouse />*/}
        {/* E: 부동산담보대출 주택 시세정보 */}

        {/* S: 부동산담보대출 주택 시세확인 */}
        {/*<LoanHouseComfirm />*/}
        {/* E: 부동산담보대출 주택 시세확인 */}

        {/* S: 부동산담보대출 주택 대출 목적 질문 */}
        {/*<LoanHouseAddComfirm />*/}
        {/* E: 부동산담보대출 주택 대출 목적 질문 */}

        {/* S: 부동산담보대출 주택 지정할 명의 */}
        {/*<LoanHouseAddComfirmStep01 />*/}
        {/* E: 부동산담보대출 주택 지정할 명의 */}

        {/* S: 부동산담보대출 보유한 주택 수*/}
        {/*<LoanHouseAddComfirmStep02 />*/}
        {/* E: 부동산담보대출 보유한 주택 수 */}

        {/* S: 부동산담보대출 직업정보*/}
        {/*<LoanHouseAddComfirmStep03 />*/}
        {/* E: 부동산담보대출 직업정보 */}

        {/* S: 부동산담보대출 입력한 정보 요약*/}
        {/*<LoanHouseAddComfirmStep04 />*/}
        {/* E: 부동산담보대출 입력한 정보 요약 */}

        {/* S: 부동산담보대출 대출 추천*/}
        {/*<LoanHouseAddComfirmStep05 />*/}
        {/* E: 부동산담보대출 대출 추천 */}

        {/* S: 부동산담보대출 대출 신청 진행*/}
        {/*<LoanHouseAddComfirmStep06 />*/}
        {/* E: 부동산담보대출 대출 신청 진행 */}

        {/* S: 부동산담보대출 신청정보로 최대 한도 제시*/}
        {/*<LoanRecommendGuide />*/}
        {/* E: 부동산담보대출 신청정보로 최대 한도 제시 */}

        {/* S: 부동산담보대출 대출 받고자 하는 날짜*/}
        {/*<LoanSelectCalendar />*/}
        {/* E: 부동산담보대출 대출 받고자 하는 날짜*/}

        {/* S: 부동산담보대출 대출 신청금액 입력*/}
        {/*<LoanApplicationAmount />*/}
        {/* E: 부동산담보대출 대출 신청금액 입력*/}

        {/* S: 부동산담보대출 대출 신청 정보 확인*/}
        {/*<LoanInfoComfirm />*/}
        {/* E: 부동산담보대출 대출 신청 정보 확인*/}

        {/* S: 부동산담보대출 대출 신청 간편제출*/}
        {/*<LoanInfoSimpleSubmit />*/}
        {/* E: 부동산담보대출 대출 신청 간편제출*/}

        {/* S: 부동산담보대출 대출 서류 이미지로 제출하기*/}
        {/*<LoanInfoSubmitComplete />*/}
        {/* E: 부동산담보대출 대출 서류 이미지로 제출하기*/}

        {/* S: 부동산담보대출 신청 완료*/}
        {/*<LoanSubmitComplete />*/}
        {/* E: 부동산담보대출 신청 완료*/}

        {/* S: 부동산담보대출 신청 완료 내역*/}
        {/*<LoanSubmitInfo />*/}
        {/* E: 부동산담보대출 신청 완료 내역*/}

        {/* S: 부동산담보대출 조건 변경하기*/}

        {/* S: 부동산담보대출 대출기간 선택*/}
        {/*<LoanPeriodSelect />*/}
        {/* E: 부동산담보대출 대출기간 선택*/}

        {/* S: 부동산담보대출 대출 상황방법 step01*/}
        {/*<LoanPaybackSelectStep01 />*/}
        {/* E: 부동산담보대출 대출 상황방법 step01*/}

        {/* S: 부동산담보대출 대출 금리방식 step02*/}
        {/*<LoanPaybackSelectStep02 />*/}
        {/* E: 부동산담보대출 대출 금리방식 step02*/}

        {/* S: 부동산담보대출 대출 금리방식 step03*/}
        {/*<LoanPaybackSelectStep03 />*/}
        {/* E: 부동산담보대출 대출 금리방식 step03*/}

        {/* E: 부동산담보대출 조건 변경하기*/}
      </KBContainer>
    </>
  );
};
export default LoanChat;
