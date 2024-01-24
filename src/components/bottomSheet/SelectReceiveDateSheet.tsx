/**
 * Step 04. 수령정보입력(Progress bar 4/7)
 * 날짜 선택 바텀시트
 */
import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import img from "@imgs/exchange/SelectReceiveDateSheet.png";
import { setOpenTakenWaySheet } from "@slices/exchangeCurrencySlices.ts";
import { Drawer } from "antd";
import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";

import $style from "./SelectReceiveDateSheet.module.scss";
// import { useDispatch } from "react-redux";

interface ISelectReceiveDateSheet {
  sheetOpen: boolean;
}

const SelectReceiveDateSheet: FC<ISelectReceiveDateSheet> = ({ sheetOpen }) => {
  const dispatch = useDispatch();
  // 시트 닫기
  const closeSheet = useCallback(() => {
    dispatch(setOpenTakenWaySheet(false));
  }, []);
  
  return (
    <Drawer
      style={{ borderRadius: "12px 12px 0 0" }}
      styles={{
        header: { borderBottom: 0, paddingTop: 32, paddingBottom: 0 },
        body: { padding: 24 },
        footer: { borderTop: 0, padding: 0 }
      }}
      open={sheetOpen}
      onClose={closeSheet}
      closeIcon={false}
      height={"auto"}
      title={
        <DrawerTitle
          title={"날짜 선택"}
          useCloseBtn
          closeDrawerBtn={closeSheet}
        />
      }
      placement={"bottom"}
      key={"SelectReceiveDateSheet"}
			footer={
        <KBConfirmBtn>확인</KBConfirmBtn>
      }>
			<img src={img} className={$style.img} /> 
    </Drawer>
  );
};

export default SelectReceiveDateSheet;
