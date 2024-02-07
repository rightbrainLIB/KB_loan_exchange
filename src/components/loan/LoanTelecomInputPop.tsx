/**
 * Step 09. 본인인증 번호 입력
 */
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import iosKeypadNumberShort from "@imgs/iosKeypad_number_short.png";
import img01 from "@imgs/loan/LoanTelecomInputPop_01.png";
import { Button, Drawer } from "antd";
import cx from "classnames";
import { FC, useCallback, useEffect, useState } from "react";

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
  const [userVarifNum, setUserVarifNum] = useState("숫자 6자리 입력");

  // const onChangeVarifNum = useCallback(
  //   (e: ChangeEvent<HTMLInputElement>) => {
  //     setUserVarifNum(e.target.value);
  //   },
  //   [userVarifNum]
  // );

  const onClickVarifNum = useCallback(() => {
    setUserVarifNum("123456");
  }, []);

  useEffect(() => {
    if (!openSheet) {
      setTimeout(() => {
        setUserVarifNum("");
      }, 300);
    }
  }, [openSheet]);

  useEffect(() => {
    if (openSheet) {
      setUserVarifNum("숫자 6자리 입력");
    }
  }, [openSheet]);

  return (
    <>
      <Drawer
        style={{ borderRadius: "12px 12px 0 0" }}
        styles={{
          header: { borderBottom: 0, paddingTop: 32, paddingBottom: 0 },
          body: { padding: 0 },
          footer: { borderTop: 0, padding: 0 }
        }}
        open={openSheet}
        onClose={closeSheet}
        closeIcon={false}
        height={userVarifNum !== "123456" ? 672 : 428}
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
            disabled={userVarifNum !== "123456"}
            onClick={showNextStep}>
            다음
          </Button>
        }
        className={$style.LoanTelecomInputPop}>
        <div className={$style.container}>
          <div
            className={cx(
              $style.inputbox,
              userVarifNum === "123456" && $style.typed
            )}
            onClick={onClickVarifNum}>
            {/*<Input*/}
            {/*  placeholder="숫자 6자리 입력"*/}
            {/*  maxLength={6}*/}
            {/*  value={userVarifNum}*/}
            {/*  onChange={onChangeVarifNum}*/}
            {/*/>*/}
            <div className={$style.inputArea}>
              <p>{userVarifNum}</p>
            </div>
          </div>
          <div className={$style.img}>
            <img src={img01} width="100%" />
          </div>
        </div>
        <div
          className={cx(
            $style.keypadBox,
            userVarifNum === "123456" && $style.hidePad
          )}
          onClick={onClickVarifNum}>
          <img src={iosKeypadNumberShort} alt="" />
        </div>
      </Drawer>
    </>
  );
};

export default LoanTelecomInputPop;
