/**
 * Step 03. 환전정보입력(Progress bar 3/7)
 * [선택]개인정보 제3자 제공동의서(여행자 보험) 바텀시트
 */
import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import img from "@imgs/exchange/TravelInsuranceAgreeSheet.png";
import { Drawer } from "antd";
import { FC, useCallback } from "react";

import $style from "./SelectReceiveDateSheet.module.scss";

interface ITravelInsuranceAgreeSheet {
  sheetOpen: boolean;
  closeSheet: () => void;
  clickNext: () => void;
}

const TravelInsuranceAgreeSheet: FC<ITravelInsuranceAgreeSheet> = ({
  sheetOpen,
  closeSheet,
  clickNext
}) => {
  // const dispatch = useDispatch();

  // 시트 닫기
  const closeAgreeSheet = useCallback(() => {
    closeSheet && closeSheet();
  }, [closeSheet]);

  return (
    <Drawer
      style={{ borderRadius: "12px 12px 0 0" }}
      styles={{
        header: { borderBottom: 0, paddingTop: 13, paddingBottom: 0 },
        body: { padding: 0 },
        footer: { borderTop: 0, padding: 0 }
      }}
      forceRender
      open={sheetOpen}
      onClose={closeAgreeSheet}
      closeIcon={false}
      height={"auto"}
      title={
        <DrawerTitle title={""} useCloseBtn closeDrawerBtn={closeAgreeSheet} />
      }
      placement={"bottom"}
      key={"TravelInsuranceAgreeSheet"}
      footer={<KBConfirmBtn onClickConfirm={clickNext}>동의</KBConfirmBtn>}>
      <img src={img} className={$style.img} />
    </Drawer>
  );
};

export default TravelInsuranceAgreeSheet;
