/**
 * Step 2. 심사정보입력1,2,3(Progress bar 2/6)
 * 주택 시세 정보 검색 바텀시트
 */
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import { Drawer, Input } from "antd";
import { FC, useRef, useState } from "react";

import $style from "./LoanSearchAddressPop.module.scss"

interface ILoanSearchAddressPop {
  sheetOpen: boolean;
}

const LoanSearchAddressPop: FC<ILoanSearchAddressPop> = ({
  sheetOpen
}) => {
  const inputRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const [resultVisible, setResultVisible] = useState(false);
  const [clickResultVisible, setClickResultVisible] = useState(false);

  const InputSetValue = () => {
    setSearchValue("대치동 은마아파트");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const onKeyPressInput = () => {
    setResultVisible(true);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const resultClick = () => {
    setResultVisible(false);
    setClickResultVisible(true);
  };

  const clearValue = () => {
    setSearchValue("");
    setResultVisible(false);
    setClickResultVisible(false);
  };

  return (
    <>
      <Drawer
        style={{ borderRadius: "12px 12px 0 0" }}
        styles={{
          header: { borderBottom: 0, paddingTop: 32, paddingBottom: 0 },
          body: { padding: 24 },
          footer: { borderTop: 0, padding: 0 }
        }}
        open={sheetOpen}
        closeIcon={false}
        height={"95vh"}
        title={
          <DrawerTitle
            title={"주택 시세정보 검색"}
            subText={""}
            useCloseBtn
          />
        }
        placement={"bottom"}
        key={"LoanTelecomInputPop"}
        className={$style.LoanSearchAddressPop}>
        <div className={$style.inputbox}>
          <Input 
            className={$style.fakeInput} 
            ref={inputRef}
            value={""}
            onPressEnter={onKeyPressInput} 
          />
          <Input 
            className={$style.input} 
            placeholder="예) 대치동 은마아파트 입력" 
            // inputMode="none"
            readOnly
            value={searchValue}
          />
          <button type="button" className={`${$style.clearBtn} ${searchValue === "대치동 은마아파트" && $style.visible}`} onClick={clearValue}></button>
          <button type="button" className={$style.searchBtn} onClick={InputSetValue}></button>
        </div>
        {
          !resultVisible && !clickResultVisible ?
            // 검색 전
            <div className={$style.beforeSearch}>
              <p>지역명&#40;읍/면/동&#41; 또는 지역명+건물명&#40;주택, 아파트 등&#41;을 입력해주세요</p>
            </div>
          : searchValue === "대치동 은마아파트" && resultVisible ? 
            // 검색 후 결과
            <div className={$style.afterSearch}>
              <div className={$style.searchKeyword}>
                <p><strong>서울특별시 강남구 대치동 은마아파트</strong>&#40;으&#41;로 검색한 결과</p>
                <div className={$style.beforeBtn}>이전</div>
              </div>
              <p className={$style.desc}>전용면적을 선택해주세요</p>
              <ul className={$style.resultListWrap}>
                <li className={$style.resultList} onClick={resultClick}>52.95㎡&#40;19평&#41;</li>
                <li className={$style.resultList}>49.29㎡&#40;22평&#41;</li>
                <li className={$style.resultList}>59.96㎡&#40;25평&#41;</li>
                <li className={$style.resultList}>84.99㎡&#40;33평&#41;</li>
                <li className={$style.resultList}>99.6㎡&#40;38평&#41;</li>
              </ul>
            </div>
          : searchValue === "대치동 은마아파트" && clickResultVisible ?
            // 검색결과 클릭 시
            <div className={$style.clickResult}>
              <div className={$style.searchKeyword}>
                <p><strong>대치동 은마아파트 61.37 / 52.95㎡ &#40;19평&#41;</strong>&#40;으&#41;로 검색한 결과</p>
                <div className={$style.beforeBtn}>이전</div>
              </div>
              <p className={$style.desc}>층을 선택해주세요</p>
              <ul className={$style.resultListWrap}>
                <li className={$style.resultList}>
                  1층
                  <div className={$style.price}>
                    <div>180,000,000 원</div>
                    <p>일억팔천만원</p>
                  </div>
                </li>
                <li className={$style.resultList}>
                  2층 이상
                  <div className={$style.price}>
                    <div>100,000,000 원</div>
                    <p>일억원</p>
                  </div>
                </li>
              </ul>
            </div>
          : ""
        }
      </Drawer>
    </>
  );
};

export default LoanSearchAddressPop;
