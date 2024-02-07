/**
 * Step 04. 수령정보입력(Progress bar 4/7)
 * 날짜 선택 바텀시트
 */
import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import img from "@imgs/exchange/SelectReceiveDateSheet.png";
import { Drawer } from "antd";
import { FC, useCallback, useState } from "react";

import $style from "./SelectReceiveDateSheet.module.scss";

// import { useDispatch } from "react-redux";

interface ISelectReceiveDateSheet {
  sheetOpen: boolean;
  closeSheet: () => void;
  clickNext: () => void;
}

const SelectReceiveDateSheet: FC<ISelectReceiveDateSheet> = ({
  sheetOpen,
  closeSheet,
  clickNext
}) => {
  // 시트 닫기
  const closeCalendar = useCallback(() => {
    closeSheet && closeSheet();
  }, [closeSheet]);

  const [isChkDate, setIsChkDate] = useState(false);

  return (
    <Drawer
      style={{ borderRadius: "12px 12px 0 0" }}
      styles={{
        header: { borderBottom: 0, paddingTop: 32, paddingBottom: 0 },
        body: { padding: 24 },
        footer: { borderTop: 0, padding: 0 }
      }}
      forceRender
      open={sheetOpen}
      onClose={closeCalendar}
      closeIcon={false}
      height={"auto"}
      title={
        <DrawerTitle
          title={"날짜 선택"}
          useCloseBtn
          closeDrawerBtn={closeCalendar}
        />
      }
      placement={"bottom"}
      key={"SelectReceiveDateSheet"}
      footer={
        <KBConfirmBtn disabled={!isChkDate} onClickConfirm={clickNext}>
          확인
        </KBConfirmBtn>
      }>
      <img
        src={img}
        className={$style.img}
        onClick={() => setIsChkDate(true)}
      />
    </Drawer>
  );
};

export default SelectReceiveDateSheet;
