/**
 * Step 22. 대출 신청금액 입력
 */
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import { Button, Drawer, Input } from "antd";
import { useState } from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import $style from "./LoanApplicationAmountPop.module.scss";

const LoanApplicationAmountPop: FC = () => {
  const navigate = useNavigate();
  const [sheetImgOpen, setsheetImgOpen] = useState(true);

  const closeImgSheet = () => {
    setsheetImgOpen(false);
  };

  const clickBtnPop = () => {
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
        height={455}
        title={
          <DrawerTitle
            title={"신청금액 입력"}
            subText={""}
            useCloseBtn
            closeDrawerBtn={closeImgSheet}
          />
        }
        placement={"bottom"}
        key={"LoanTelecomInputPop"}
        footer={
          <Button className={$style.btn} onClick={clickBtnPop}>
            확인
          </Button>
        }
        className={$style.LoanApplicationAmountPop}>
        <div className={$style.inputbox}>
          <Input placeholder="100만~6억 5,000만원" suffix="원" />
        </div>
        <div className={$style.btnBox}>
          <div>
            <span>
              +1<span>만</span>
            </span>
          </div>
          <div>
            <span>
              +10<span>만</span>
            </span>
          </div>
          <div>
            <span>
              +100<span>만</span>
            </span>
          </div>
          <div>
            <span>
              +1000<span>만</span>
            </span>
          </div>
          <div>
            <span>
              +1<span>만</span>
            </span>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default LoanApplicationAmountPop;
