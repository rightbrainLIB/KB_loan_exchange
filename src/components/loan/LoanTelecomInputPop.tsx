/**
 * Step 09. 본인인증 번호 입력
 */
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import img01 from "@imgs/loan/LoanTelecomInputPop_01.png";
import { Button, Drawer, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import $style from "./LoanTelecomInputPop.module.scss";

const LoanTelecomInputPop = () => {
  const navigate = useNavigate();
  const [sheetImgOpen, setsheetImgOpen] = useState(true);

  const closeImgSheet = () => {
    setsheetImgOpen(false);
  };

  const clickBtnPop = () => {
    navigate("/LoanTelecomInputPop");
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
        open={sheetImgOpen}
        onClose={closeImgSheet}
        closeIcon={false}
        height={427}
        title={
          <DrawerTitle
            title={"인증번호 입력"}
            subText={""}
            useCloseBtn
            closeDrawerBtn={closeImgSheet}
          />
        }
        placement={"bottom"}
        key={"LoanTelecomInputPop"}
        footer={
          <Button className={$style.btn} onClick={clickBtnPop}>
            다음
          </Button>
        }
        className={$style.LoanTelecomInputPop}>
        <div className={$style.inputbox}>
          <Input placeholder="숫자 6자리 입력" />
        </div>
        <div className={$style.img}>
          <img src={img01} width="100%" />
        </div>
      </Drawer>
    </>
  );
};

export default LoanTelecomInputPop;
