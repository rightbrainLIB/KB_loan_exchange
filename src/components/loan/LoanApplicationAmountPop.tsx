/**
 * Step 22. 대출 신청금액 입력
 */
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import Keypad from "@components/contents/Keypad.tsx";
import { Button, Drawer } from "antd";
import cx from "classnames";
import { FC, useCallback, useState } from "react";

import $style from "./LoanApplicationAmountPop.module.scss";

interface ILoanApplicationAmountPop {
  openSheet: boolean;
  closeSheet: () => void;
  showNextStep: () => void;
}

const LoanApplicationAmountPop: FC<ILoanApplicationAmountPop> = ({
  openSheet,
  closeSheet,
  showNextStep
}) => {
  const [inputValue, setInputValue] = useState("100만~6억 5,000만원");

  const onClickChangeValue = useCallback(() => {
    // setInputValue((prevState) => {
    //   return prevState === "100만~6억 5,000만원"
    //     ? "77,000,000"
    //     : "100만~6억 5,000만원";
    // });
    setInputValue("77,000,000");
  }, []);

  const afterChange = useCallback((e: boolean) => {
    if (!e) {
      setInputValue("100만~6억 5,000만원");
    }
  }, []);

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
        afterOpenChange={afterChange}
        closeIcon={false}
        height={512}
        title={
          <DrawerTitle
            title={"신청금액 입력"}
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
            disabled={inputValue === "100만~6억 5,000만원"}
            onClick={showNextStep}>
            확인
          </Button>
        }
        className={$style.LoanApplicationAmountPop}>
        <div className={$style.inputbox}>
          {/*<Input placeholder="100만~6억 5,000만원" suffix="원" />*/}
          <div className={$style.inputArea} onClick={onClickChangeValue}>
            <span
              className={cx(
                $style.inputValue,
                inputValue !== "100만~6억 5,000만원" && $style.typed
              )}>
              {inputValue}
            </span>
            <span className={$style.won}>원</span>
          </div>
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
        <div onClick={onClickChangeValue}>
          <Keypad />
        </div>
      </Drawer>
    </>
  );
};

export default LoanApplicationAmountPop;
