/**
 * Step 08. 통신사 선택 팝업
 */
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import img01 from "@imgs/loan/LoanTelecomSelectPop_01.png";
import { Button, Drawer } from "antd";
import { useState } from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import $style from "./LoanTelecomSelectPop.module.scss";

const LoanTelecomSelectPop: FC = () => {
  const navigate = useNavigate();
  const [sheetImgOpen, setsheetImgOpen] = useState(true);

  const closeImgSheet = () => {
    setsheetImgOpen(false);
  };
  const clickNextPop = () => {
    navigate("/KB_loan_exchange/LoanTelecomInputPop");
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
        height={417}
        title={
          <DrawerTitle
            title={"통신사 선택"}
            subText={""}
            useCloseBtn
            closeDrawerBtn={closeImgSheet}
          />
        }
        placement={"bottom"}
        key={"CurrencySelectSheet"}
        footer={
          <Button className={$style.btn} onClick={clickNextPop}>
            인증번호 전송
          </Button>
        }
        className={$style.LoanTelecomSelectPop}>
        <div className={$style.img}>
          <img src={img01} width="100%" />
        </div>
      </Drawer>
    </>
  );
};

export default LoanTelecomSelectPop;
