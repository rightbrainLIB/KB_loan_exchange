import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import Keypad from "@components/contents/Keypad.tsx";
import usaFlag from "@imgs/logo/icon_country.png";
import { setRequestCurrencyValue } from "@slices/exchangeSlices.ts";
import { Drawer } from "antd";
import { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import $style from "./CurrencyPriceInput.module.sass";

interface ICurrencyPriceInput {
  sheetOpen?: boolean;
  onClickClose?: () => void;
}

const CurrencyPriceInput: FC<ICurrencyPriceInput> = ({
  sheetOpen,
  onClickClose
}) => {
  const dispatch = useDispatch();

  const [userClicked, setUserClicked] = useState(false);

  const closeSheet = useCallback(() => {
    onClickClose && onClickClose();
  }, [onClickClose]);

  const onClickConfirm = useCallback(() => {
    onClickClose && onClickClose(); // 키패드창 닫기
    setTimeout(() => {
      dispatch(setRequestCurrencyValue(true));
    }, 300);
  }, [onClickClose]);

  return (
    <Drawer
      style={{ borderRadius: "12px 12px 0 0" }}
      styles={{
        header: { borderBottom: 0, paddingTop: 32, paddingBottom: 0 },
        body: { paddingTop: 24, paddingBottom: 16 },
        footer: { borderTop: 0, padding: 0 }
      }}
      open={sheetOpen}
      onClose={closeSheet}
      closeIcon={false}
      title={
        <DrawerTitle
          title={"환전 신청금액 입력"}
          useCloseBtn
          closeDrawerBtn={closeSheet}
        />
      }
      height={443}
      placement={"bottom"}
      footer={
        <KBConfirmBtn disabled={!userClicked} onClickConfirm={onClickConfirm}>
          확인
        </KBConfirmBtn>
      }>
      <div
        className={$style.dummyInput}
        onClick={() => setUserClicked((prevState) => (prevState = !prevState))}>
        <div className={$style.inputBox}>
          <span className={$style.imgBox}>
            <img src={`${usaFlag}`} alt="" />
          </span>
          {userClicked ? (
            <span className={$style.price}>1,000</span>
          ) : (
            <span className={$style.userGuideText}>최소 10 이상 입력</span>
          )}
        </div>
      </div>
      <Keypad />
    </Drawer>
  );
};

export default CurrencyPriceInput;
