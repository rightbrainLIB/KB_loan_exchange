/**
 * Step 17. 우대금리 적용
 */
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import img01 from "@imgs/loan/LoanFirstRatePop.png";
import { Button, Drawer } from "antd";
import { useState } from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import $style from "./LoanFirstRatePop.module.scss";

const LoanFirstRatePop: FC = () => {
  const [sheetImgOpen, setsheetImgOpen] = useState(true);

  const closeImgSheet = () => {
    setsheetImgOpen(false);
  };

  const navigate = useNavigate();
  const clickNextPop = () => {
    navigate("/LoanChat");
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
        height={487}
        title={
          <DrawerTitle
            title={"우대금리 적용"}
            subText={""}
            useCloseBtn
            closeDrawerBtn={closeImgSheet}
          />
        }
        placement={"bottom"}
        key={"LoanTelecomInputPop"}
        footer={
          <Button className={$style.btn} onClick={clickNextPop}>
            확인
          </Button>
        }
        className={$style.LoanFirstRatePop}>
        <div className={$style.img}>
          <img src={img01} width="100%" />
        </div>
      </Drawer>
    </>
  );
};

export default LoanFirstRatePop;
