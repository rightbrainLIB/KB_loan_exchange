/**
 * Step 05. 출금정보입력(Progress bar 5/7)
 * 환전사유 선택 바텀시트
 */
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import { setOpenTakenWaySheet } from "@slices/exchangeCurrencySlices.ts";
import { Drawer } from "antd";
import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";

import $style from "./ReasonExchangeSelectSheet.module.scss";
// import { useDispatch } from "react-redux";

interface IReasonExchangeSelectSheet {
  sheetOpen: boolean;
}

const ReasonExchangeSelectSheet: FC<IReasonExchangeSelectSheet> = ({ sheetOpen }) => {
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
          title={"환전 사유"}
          useCloseBtn
          closeDrawerBtn={closeSheet}
        />
      }
      placement={"bottom"}
      key={"ReasonExchangeSelectSheet"}>
      <ul className={$style.reasonList}>
        <li>관광, 친지방문 등 일반해외여행경비</li>
        <li>보유목적</li>
        <li>유학경비 (6개월 이상 해외연수 또는 유학)</li>
        <li>해외체재비 (해외파견 주재원 또는 6개월 미만 해외연수)</li>
      </ul>
    </Drawer>
  );
};

export default ReasonExchangeSelectSheet;
