/**
 * Step 03. 대출 적합성 확인서, 피성년, 피한정 후견인 여부 팝업
 */
import KBHeader from "@components/common/KBHeader.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import img01 from "@imgs/loan/LoanSuitableConfirm_01.png";
import img02 from "@imgs/loan/LoanSuitableConfirm_02.png";
import { Button, Checkbox, Drawer } from "antd";
import { FC, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import $style from "./LoanSuitableConfirm.module.scss";

const LoanSuitableConfirm: FC = () => {
  const navigate = useNavigate();
  const [sheetOpen, setsheetOpen] = useState(false);
  const [sheetValue, setsheetValue] = useState(false);
  const [checkAll, setcheckAll] = useState(false);
  const [chkEmail, setChkEmail] = useState(false);

  const onChange = () => {
    if (!checkAll) {
      setcheckAll(true);
    } else {
      setcheckAll(false);
      setChkEmail(false);
    }
  };

  const bottomSheetOpen = () => {
    if (!sheetOpen) {
      setsheetOpen(true);
    } else {
      setsheetOpen(false);
    }
  };
  const closeSheet = () => {
    setsheetOpen(false);
  };
  const selectCloseSheet = () => {
    setsheetOpen(false);
    setsheetValue(true);
  };
  const confirmClick = () => {
    navigate("/LoanFacePop");
  };

  const onClickEmail = useCallback(() => {
    setChkEmail((prevState) => !prevState);
  }, []);

  return (
    <>
      <KBHeader type={"loan"}>대출 적합성 확인서</KBHeader>
      {/* S: LoanConfirmWrap */}
      <div className={$style.LoanConfirmWrap}>
        <h4>
          <p>KB대출상품이</p>고객님께 적합한지 확인할게요
        </h4>
        <ul className={$style.list}>
          <li>
            <div className={$style.left}>
              피성년·피한정
              <br />
              후견인
            </div>
            <div className={$style.right} onClick={bottomSheetOpen}>
              <span
                className={$style.before}
                style={{ display: sheetValue ? "none" : "block" }}>
                선택
              </span>
              <span
                className={$style.after}
                style={{ display: sheetValue ? "block" : "none" }}>
                아니요
              </span>
            </div>
          </li>
          <li>
            <div className={$style.left}>대출용도</div>
            <div className={$style.right}>
              <span
                className={$style.before}
                style={{ display: sheetValue ? "none" : "block" }}>
                선택
              </span>
              <span
                className={$style.after}
                style={{ display: sheetValue ? "block" : "none" }}>
                생활자금
              </span>
            </div>
          </li>
          <li>
            <div className={$style.left}>보유자산</div>
            <div className={$style.right}>
              <span
                className={$style.before}
                style={{ display: sheetValue ? "none" : "block" }}>
                선택
              </span>
              <span
                className={$style.after}
                style={{ display: sheetValue ? "block" : "none" }}>
                10억원 이상
              </span>
            </div>
          </li>
          <li>
            <div className={$style.left}>연소득</div>
            <div className={$style.right}>
              <span
                className={$style.before}
                style={{ display: sheetValue ? "none" : "block" }}>
                선택
              </span>
              <span
                className={$style.after}
                style={{ display: sheetValue ? "block" : "none" }}>
                1억원 이상
              </span>
            </div>
          </li>
          <li>
            <div className={$style.left}>부채규모</div>
            <div className={$style.right}>
              <span
                className={$style.before}
                style={{ display: sheetValue ? "none" : "block" }}>
                선택
              </span>
              <span
                className={$style.after}
                style={{ display: sheetValue ? "block" : "none" }}>
                5천만원 미만
              </span>
            </div>
          </li>
          <li>
            <div className={$style.left}>고정지출</div>
            <div className={$style.right}>
              <span
                className={$style.before}
                style={{ display: sheetValue ? "none" : "block" }}>
                선택
              </span>
              <span
                className={$style.after}
                style={{ display: sheetValue ? "block" : "none" }}>
                연간소득의 30% 미만
              </span>
            </div>
          </li>
          <li>
            <div className={$style.left}>갚는방법</div>
            <div className={$style.right}>
              <span
                className={$style.before}
                style={{ display: sheetValue ? "none" : "block" }}>
                선택
              </span>
              <span
                className={$style.after}
                style={{ display: sheetValue ? "block" : "none" }}>
                근로소득
              </span>
            </div>
          </li>
        </ul>
        <div className={$style.img}>
          <img src={img01} width="100%" />
        </div>
        <div className={$style.bottomList}>
          <Checkbox className={$style.checkAll} onChange={onChange}>
            대출 신청 및 적합성 확인 결과 안내 받기
          </Checkbox>
          <ul className={$style.innerList}>
            <li
              className={chkEmail ? $style.imgChange : ""}
              onClick={onClickEmail}>
              <span>이메일</span>
              <span>sdsfsd@naver.com</span>
            </li>
            <li>
              <span>모바일</span>
              <span>010-3023-2123</span>
            </li>
          </ul>
        </div>
        <div className={$style.img}>
          <img src={img02} width="100%" />
        </div>
        <div className={$style.btn}>
          <Button
            disabled={!(sheetValue && checkAll && chkEmail)}
            onClick={confirmClick}>
            확인
          </Button>
        </div>
      </div>
      {/* E: LoanConfirmWrap */}

      {/* S: LoanConfirmWrap PopUp */}
      <Drawer
        style={{ borderRadius: "12px 12px 0 0" }}
        styles={{
          header: { borderBottom: 0, paddingTop: 32, paddingBottom: 0 },
          body: { padding: 24 },
          footer: { borderTop: 0, padding: 0 }
        }}
        open={sheetOpen}
        onClose={closeSheet}
        closeIcon={false}
        height={182}
        title={
          <DrawerTitle
            title={"피성년·피한정 후견인 여부"}
            useCloseBtn
            closeDrawerBtn={closeSheet}
          />
        }
        placement={"bottom"}
        key={"CurrencySelectSheet"}
        footer={null}
        className={$style.LoanConfirmPop}>
        <ul>
          <li>예</li>
          <li onClick={selectCloseSheet}>아니요</li>
        </ul>
      </Drawer>
      {/* E: LoanConfirmWrap PopUp */}
    </>
  );
};

export default LoanSuitableConfirm;
