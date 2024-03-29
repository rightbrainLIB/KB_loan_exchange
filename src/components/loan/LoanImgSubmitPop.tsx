/**
 * Step 26. 이미지로 제출 팝업
 */
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import galleryChk from "@imgs/loan/gallery_checked.png";
import img04 from "@imgs/loan/LoanImgSelectSubmitPop_01.png";
import img05 from "@imgs/loan/LoanImgSelectSubmitPop_02.png";
import img01 from "@imgs/loan/LoanImgSubmitPop_01.png";
import img02 from "@imgs/loan/LoanImgSubmitPop_02.png";
import img03 from "@imgs/loan/LoanImgSubmitPop_03.png";
import { Button, Drawer } from "antd";
import { FC, useState } from "react";

import $style from "./LoanImgSubmitPop.module.scss";

interface ILoanImgSubmitPop {
  openSheet: boolean;
  closeSheet: () => void;
  showNextStep: () => void;
}

const LoanImgSubmitPop: FC<ILoanImgSubmitPop> = ({
  openSheet,
  closeSheet,
  showNextStep
}) => {
  // const [sheetImgOpen, setsheetImgOpen] = useState(true);
  const [imgSelectOpen, setImgSelectOpen] = useState(false);
  const [imgSelectCheck, setimgSelectCheck] = useState(false);
  const [imgSubmitCheck, setimgSubmitCheck] = useState(false);

  const closeImgSheet = () => {
    // setsheetImgOpen(false);
    closeSheet();
    setTimeout(() => {
      setimgSubmitCheck(false);
    }, 300);
  };

  const imgClickSelectOpen = () => {
    // setsheetImgOpen(false);
    setImgSelectOpen(true);
  };

  const imgClickCheck = () => {
    setimgSelectCheck(true);
  };

  const imgSelectClose = () => {
    // setsheetImgOpen(true);
    setimgSubmitCheck(true);
    setImgSelectOpen(false);
    setimgSelectCheck(false);
  };

  const closeImgSelectSheet = () => {
    setImgSelectOpen(false);
  };

  return (
    <>
      {/* S: 이미지로 제출 팝업 */}
      <Drawer
        style={{ borderRadius: "12px 12px 0 0" }}
        styles={{
          header: { borderBottom: 0, paddingTop: 32, paddingBottom: 0 },
          body: { padding: 24 },
          footer: { borderTop: 0, padding: 0 }
        }}
        forceRender
        open={openSheet}
        onClose={closeSheet}
        closeIcon={false}
        height={420}
        title={
          <DrawerTitle
            title={"이미지로 제출"}
            subText={""}
            useCloseBtn
            closeDrawerBtn={closeImgSheet}
          />
        }
        placement={"bottom"}
        key={"LoanImgSubmitPop"}
        footer={
          <Button
            className={$style.btn}
            onClick={showNextStep}
            disabled={imgSubmitCheck ? false : true}>
            확인
          </Button>
        }
        className={$style.LoanImgSubmitPop}>
        <div className={$style.submitList}>
          <ul>
            <li>
              <img src={img01} width="100%" />
              <span
                className={imgSubmitCheck ? $style.on : ""}
                onClick={imgClickSelectOpen}></span>
            </li>
            <li>
              <img src={img02} width="100%" />
              <span className={imgSubmitCheck ? $style.on : ""}></span>
            </li>
            <li>
              <img src={img03} width="100%" />
              <span className={imgSubmitCheck ? $style.on : ""}></span>
            </li>
          </ul>
        </div>
      </Drawer>
      {/* S: 이미지로 제출 팝업 */}

      {/* S: 이미지 선택 팝업 LoanImgSelectSubmitPop */}
      <Drawer
        style={{ borderRadius: "12px 12px 0 0" }}
        styles={{
          header: { borderBottom: 0, paddingTop: 26, paddingBottom: 0 },
          body: { padding: 24, paddingTop: 50 },
          footer: { borderTop: 0, padding: 0 }
        }}
        open={imgSelectOpen}
        onClose={closeImgSheet}
        closeIcon={false}
        height={530}
        title={
          <DrawerTitle
            title={
              <>
                <div className={$style.title}>
                  <img src={img04} width="100%" />
                </div>
              </>
            }
            subText={""}
            useCloseBtn
            closeDrawerBtn={closeImgSelectSheet}
          />
        }
        placement={"bottom"}
        key={"LoanImgSelectSubmitPop"}
        footer={
          <Button
            className={$style.btn}
            onClick={imgSelectClose}
            disabled={imgSelectCheck ? false : true}>
            확인
          </Button>
        }
        className={$style.LoanImgSubmitPop}>
        <div className={$style.img} onClick={imgClickCheck}>
          <img src={img05} width="100%" />
          {imgSelectCheck && (
            <span className={$style.chkBox}>
              <img src={galleryChk} width="100%" />
            </span>
          )}
        </div>
      </Drawer>
      {/* S: 이미지 선택 팝업 */}
    </>
  );
};

export default LoanImgSubmitPop;
