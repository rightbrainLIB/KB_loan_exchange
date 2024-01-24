/**
 * Step 06. 부동산 담보대출 심사 약관 동의, 대출 신청인 이미지 팝업
 */

import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import img01 from "@imgs/loan/arrow_up.png";
import img02 from "@imgs/loan/LoanAgreeCheck_01.png";
import { Button, Checkbox, CheckboxProps, Drawer } from "antd";
import { useState } from "react";

import $style from "./LoanAgreeCheck.module.scss";

const LoanAgreeCheck = () => {
  const [sheetOpen, setsheetOpen] = useState(true);
  const [sheetImgOpen, setsheetImgOpen] = useState(false);

  const [popCheck, setpopCheck] = useState(false);

  const onCheckAllChange: CheckboxProps["onChange"] = () => {
    setsheetOpen(false);
    setsheetImgOpen(true);
  };

  const closeSheet = () => {
    setsheetOpen(false);
  };
  const closeImgSheet = () => {
    setsheetImgOpen(false);
    setpopCheck(true);
  };
  const imgCloseClick = () => {
    setsheetOpen(true);
    setsheetImgOpen(false);
    setpopCheck(true);
  };
  return (
    <>
      {/* S: LoanAgreeCheckList PopUp */}
      <Drawer
        style={{ borderRadius: "12px 12px 0 0" }}
        styles={{
          header: { borderBottom: 0, paddingTop: 32, paddingBottom: 0 },
          body: { padding: 24, paddingBottom: 110 },
          footer: { borderTop: 0, padding: 0 }
        }}
        open={sheetOpen}
        onClose={closeSheet}
        closeIcon={false}
        height={"90%"}
        title={
          <DrawerTitle
            title={"심사 약관 동의"}
            subText={"부동산담보대출 조회에 동의가 필요해요"}
            useCloseBtn
            closeDrawerBtn={closeSheet}
          />
        }
        placement={"bottom"}
        key={"LoanAgreeCheckList"}
        footer={
          <Button className={$style.btn} disabled={popCheck ? false : true}>
            동의
          </Button>
        }
        className={$style.LoanAgreeCheckPop}>
        <Checkbox
          onChange={onCheckAllChange}
          checked={popCheck ? true : false}
          className={$style.checkAll}>
          &#91;필수&#93; 약관 전체동의
          <div className={$style.arrowUp}>
            <img src={img01} width="100%" />
          </div>
        </Checkbox>
        <ul className={$style.checkList}>
          <li className={popCheck ? $style.on : ""}>[필수] 대출(상담)신청서</li>
          <li className={popCheck ? $style.on : ""}>
            [필수] 공공마이데이터 개인(신용)정보
            <br /> 수집·이용·조회 제공동의서
          </li>
          <li className={popCheck ? $style.on : ""}>
            [필수] KB마이데이터 서비스 이용약관
          </li>
          <li className={popCheck ? $style.on : ""}>
            [필수] 은행여신거래기본약관(가계용)
          </li>
          <li className={popCheck ? $style.on : ""}>
            [필수] 휴대폰 본인 인증 전체동의
          </li>
          <li className={popCheck ? $style.on : ""}>
            [필수] 개인(신용)정보수집·이용·제공 관련 고객권리 안내문
          </li>
          <li className={popCheck ? $style.on : ""}>
            [필수] 개인(신용)정보 수집·이용·제공 관련 고객 권리 안내문
          </li>
          <li className={popCheck ? $style.on : ""}>
            [필수] 개인(신용)정보 조회 수집 이용 제공
            통합동의서(부동산담보대출용)
          </li>
          <li className={popCheck ? $style.on : ""}>
            [필수] 행정기관 개인(신용)정보 수집_이용 동의서 (여신 금융거래)
            [부동산담보대출용]
          </li>
          <li className={popCheck ? $style.on : ""}>
            [필수] 비대면용 행정기관 개인(신용)정보 조회 위임동의서
          </li>
        </ul>
      </Drawer>
      {/* E: LoanAgreeCheckList PopUp */}

      {/* S: LoanAgreeCheckImage PopUp */}
      <Drawer
        style={{ borderRadius: "12px 12px 0 0" }}
        styles={{
          header: { borderBottom: 0, paddingTop: 12, paddingBottom: 0 },
          body: { padding: 24 },
          footer: { borderTop: 0, padding: 0 }
        }}
        open={sheetImgOpen}
        onClose={closeImgSheet}
        closeIcon={false}
        height={596}
        title={
          <DrawerTitle
            title={""}
            subText={""}
            useCloseBtn
            closeDrawerBtn={closeImgSheet}
          />
        }
        placement={"bottom"}
        key={"CurrencySelectSheet"}
        footer={
          <Button className={$style.btn} onClick={imgCloseClick}>
            동의
          </Button>
        }
        className={$style.LoanAgreeCheckPop}>
        <div className={$style.img}>
          <img src={img02} width="100%" />
        </div>
      </Drawer>
      {/* E: LoanAgreeCheckImage PopUp */}
    </>
  );
};

export default LoanAgreeCheck;
