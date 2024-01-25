/**
 * Step 04. 신청정보입력(Progress bar 4/6)
 * - ‘조건 변경하기’ 루트
 * 대출기간 선택 바텀시트
 */
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import { Drawer } from "antd";
import { FC, useCallback } from "react";

import $style from "./SelectLoanPeriodSheet.module.scss";
// import { useDispatch } from "react-redux";

interface ISelectLoanPeriodSheet {
  sheetOpen: boolean;
}

const SelectLoanPeriodSheet: FC<ISelectLoanPeriodSheet> = ({ sheetOpen }) => {
  // const dispatch = useDispatch();
  
  // 시트 닫기
  const closeSheet = useCallback(() => {
    // dispatch(setOpenTakenWaySheet(false));
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
          title={"대출기간 선택"}
          useCloseBtn
          closeDrawerBtn={closeSheet}
        />
      }
      placement={"bottom"}
      key={"SelectLoanPeriodSheet"}>
      <ul className={$style.loanPeriodList}>
        <li>10년</li>
        <li>15년</li>
        <li>25년</li>
        <li>30년</li>
        <li>35년</li>
        <li>40년</li>
        <li>50년</li>
      </ul>
    </Drawer>
  );
};

export default SelectLoanPeriodSheet;
