/**
 * Step 09. 본인인증 번호 입력
 */
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import img01 from "@imgs/loan/LoanTelecomInputPop_01.png";
import { Button, Drawer, Input } from "antd";
import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";

import $style from "./LoanTelecomInputPop.module.scss";

interface ILoanTelecomInputPop {
  openSheet: boolean;
  closeSheet: () => void;
  showNextStep: () => void;
}

const LoanTelecomInputPop: FC<ILoanTelecomInputPop> = ({
  openSheet = false,
  closeSheet,
  showNextStep
}) => {
  const [userVarifNum, setUserVarifNum] = useState("");

  const onChangeVarifNum = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUserVarifNum(e.target.value);
    },
    [userVarifNum]
  );

  useEffect(() => {
    if (!openSheet) {
      setTimeout(() => {
        setUserVarifNum("");
      }, 300);
    }
  }, [openSheet]);

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
        onClose={closeSheet}
        closeIcon={false}
        height={427}
        title={
          <DrawerTitle
            title={"인증번호 입력"}
            subText={""}
            useCloseBtn
            closeDrawerBtn={closeSheet}
          />
        }
        placement={"bottom"}
        key={"LoanTelecomInputPop"}
        footer={
          <Button
            className={$style.btn}
            disabled={userVarifNum.length < 6}
            onClick={showNextStep}>
            다음
          </Button>
        }
        className={$style.LoanTelecomInputPop}>
        <div className={$style.inputbox}>
          <Input
            placeholder="숫자 6자리 입력"
            maxLength={6}
            value={userVarifNum}
            onChange={onChangeVarifNum}
          />
        </div>
        <div className={$style.img}>
          <img src={img01} width="100%" />
        </div>
      </Drawer>
    </>
  );
};

export default LoanTelecomInputPop;
