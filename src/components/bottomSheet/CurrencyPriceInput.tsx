import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import Keypad from "@components/contents/Keypad.tsx";
import usaFlag from "@imgs/logo/usa.png";
import { Drawer } from "antd";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import $style from "./CurrencyPriceInput.module.sass";

interface ICurrencyPriceInput {
  sheetOpen?: boolean;
  onClickClose?: () => void;
  onClickConfirm?: () => void;
}

const CurrencyPriceInput: FC<ICurrencyPriceInput> = ({
  sheetOpen,
  onClickClose,
  onClickConfirm
}) => {
  const dispatch = useDispatch();

  const [userClicked, setUserClicked] = useState(false);

  const closeSheet = useCallback(() => {
    onClickClose && onClickClose();
    setUserClicked(false);
  }, [onClickClose]);

  const onClickConfirms = useCallback(() => {
    onClickConfirm && onClickConfirm(); // 키패드창 닫기
    // dispatch(setRequestCurrencyValue(true));
  }, [dispatch, onClickConfirm]);

  useEffect(() => {
    if (!sheetOpen) {
      setTimeout(() => {
        setUserClicked(false);
      }, 500);
    }
  }, [sheetOpen]);

  return (
    <Drawer
      style={{ borderRadius: "12px 12px 0 0" }}
      styles={{
        header: { borderBottom: 0, paddingTop: 32, paddingBottom: 0 },
        body: { paddingTop: 24, paddingBottom: 16 },
        footer: { borderTop: 0, padding: 0 }
      }}
      forceRender
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
        <KBConfirmBtn disabled={!userClicked} onClickConfirm={onClickConfirms}>
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
