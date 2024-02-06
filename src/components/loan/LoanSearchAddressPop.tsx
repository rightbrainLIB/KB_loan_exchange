/**
 * Step 2. 심사정보입력1,2,3(Progress bar 2/6)
 * 주택 시세 정보 검색 (바텀시트)
 */
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import iosKeypadImg from "@imgs/iosKeypad.png";
// import { Drawer, InputRef } from "antd";
import { Drawer } from "antd";
import cx from "classnames";
import { FC, useCallback, useState } from "react";

import $style from "./LoanSearchAddressPop.module.scss";

interface ILoanSearchAddressPop {
  openSheet: boolean;
  closeSheet: () => void;
  showNextTask: () => void;
}

const LoanSearchAddressPop: FC<ILoanSearchAddressPop> = ({
  openSheet,
  closeSheet,
  showNextTask
}) => {
  // const inputRef = useRef<InputRef>(null);
  const [searchValue, setSearchValue] = useState("예) 대치동 은마아파트 입력");
  const [resultVisible, setResultVisible] = useState(false);
  const [clickResultVisible, setClickResultVisible] = useState(false);
  const [showKeypadSheet, setShowKeypadSheet] = useState(false);

  // 검색창 클릭
  const InputSetValue = useCallback(() => {
    if (!resultVisible) setShowKeypadSheet(true);
    // const inputEl = inputRef.current;
    // if (inputEl) {
    //   inputEl.focus();
    // }
    // if (searchValue.length < 1) {
    //   setSearchValue("대치동 은마아파트");
    // } else {
    //   setResultVisible(true);
    // }
  }, [resultVisible]);

  // x 버튼 클릭
  const clearSearchValue = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      clearValue();
    },
    []
  );

  const onClickKeypad = useCallback(() => {
    setResultVisible(true);
    setSearchValue("대치동 은마아파트");
    setShowKeypadSheet(false);
  }, []);

  // const onKeyPressInput = () => {
  //   setResultVisible(true);
  //   // setSearchValue("대치동 은마아파트");
  //   if (inputRef.current) {
  //     inputRef.current.blur();
  //   }
  // };

  const resultClick = () => {
    setResultVisible(false);
    setClickResultVisible(true);
  };

  const clearValue = () => {
    setSearchValue("예) 대치동 은마아파트 입력");
    setResultVisible(false);
    setClickResultVisible(false);
  };

  const closeClearSheet = useCallback(() => {
    clearValue();
    setShowKeypadSheet(false);
    closeSheet && closeSheet();
  }, [closeSheet]);

  // 1층 선택
  const onClickEndStep = useCallback(() => {
    setSearchValue("");
    setResultVisible(false);
    setClickResultVisible(false);
    showNextTask && showNextTask();
  }, [showNextTask]);

  return (
    <>
      <Drawer
        style={{ borderRadius: "12px 12px 0 0" }}
        styles={{
          header: { borderBottom: 0, paddingTop: 32, paddingBottom: 0 },
          body: { padding: 24 },
          footer: { borderTop: 0, padding: 0 }
        }}
        open={openSheet}
        closeIcon={false}
        height={"calc(100vh - 30px)"}
        title={
          <DrawerTitle
            title={"주택 시세정보 검색"}
            useCloseBtn
            closeDrawerBtn={closeClearSheet}
          />
        }
        placement={"bottom"}
        key={"LoanTelecomInputPop"}
        className={$style.LoanSearchAddressPop}>
        <div className={$style.inputbox} onClick={InputSetValue}>
          {/*<Input*/}
          {/*  className={$style.fakeInput}*/}
          {/*  ref={inputRef}*/}
          {/*  value={""}*/}
          {/*  onPressEnter={onKeyPressInput}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*  className={$style.input}*/}
          {/*  placeholder="예) 대치동 은마아파트 입력"*/}
          {/*  value={searchValue}*/}
          {/*  onPressEnter={onKeyPressInput}*/}
          {/*/>*/}
          <div
            className={cx(
              $style.input,
              searchValue !== "대치동 은마아파트" && $style.emptyInput
            )}>
            {searchValue}
          </div>
          <button
            type="button"
            className={`${$style.clearBtn} ${searchValue === "대치동 은마아파트" && $style.visible}`}
            onClick={(e) => clearSearchValue(e)}></button>
          <button type="button" className={$style.searchBtn}></button>
        </div>
        {!resultVisible && !clickResultVisible ? (
          // 검색 전
          <div className={$style.beforeSearch}>
            <p>
              지역명&#40;읍/면/동&#41; 또는 지역명+건물명&#40;주택, 아파트
              등&#41;을 입력해주세요
            </p>
          </div>
        ) : searchValue === "대치동 은마아파트" && resultVisible ? (
          // 검색 후 결과
          <div className={$style.afterSearch}>
            <div className={$style.searchKeyword}>
              <p>
                <strong>서울특별시 강남구 대치동 은마아파트</strong>
                &#40;으&#41;로 검색한 결과
              </p>
              <div className={$style.beforeBtn}>이전</div>
            </div>
            <p className={$style.desc}>전용면적을 선택해주세요</p>
            <ul className={$style.resultListWrap}>
              <li className={$style.resultList} onClick={resultClick}>
                52.95㎡&#40;19평&#41;
              </li>
              <li className={$style.resultList}>49.29㎡&#40;22평&#41;</li>
              <li className={$style.resultList}>59.96㎡&#40;25평&#41;</li>
              <li className={$style.resultList}>84.99㎡&#40;33평&#41;</li>
              <li className={$style.resultList}>99.6㎡&#40;38평&#41;</li>
            </ul>
          </div>
        ) : searchValue === "대치동 은마아파트" && clickResultVisible ? (
          // 검색결과 클릭 시
          <div className={$style.clickResult}>
            <div className={$style.searchKeyword}>
              <p>
                <strong>
                  대치동 은마아파트 61.37 / 52.95㎡ &#40;19평&#41;
                </strong>
                &#40;으&#41;로 검색한 결과
              </p>
              <div className={$style.beforeBtn}>이전</div>
            </div>
            <p className={$style.desc}>층을 선택해주세요</p>
            <ul className={$style.resultListWrap}>
              <li className={$style.resultList} onClick={onClickEndStep}>
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
        ) : (
          ""
        )}
      </Drawer>

      <Drawer
        styles={{
          wrapper: { boxShadow: "none" },
          header: { borderBottom: 0, padding: 0 },
          body: { padding: 0 },
          footer: { borderTop: 0, padding: 0 }
        }}
        className={$style.keypadSheet}
        open={showKeypadSheet}
        onClose={() => setShowKeypadSheet(false)}
        mask={false}
        maskClosable={true}
        closeIcon={false}
        placement={"bottom"}
        height={295}>
        <div className={$style.keypadImg} onClick={onClickKeypad}>
          <img src={iosKeypadImg} alt="" />
        </div>
      </Drawer>
    </>
  );
};

export default LoanSearchAddressPop;
