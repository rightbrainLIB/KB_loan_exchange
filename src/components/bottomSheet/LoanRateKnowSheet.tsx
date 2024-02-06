/**
 * Step 18-1. 신청정보입력(Progress bar 4/6)
 * 금리방식 안내
 */
import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import LoanRateKnow from "@imgs/loan/LoanRateKnow.png";
import { Drawer } from "antd";
import { FC } from "react";

import $style from "./TravelInsuranceNoticeSheet.module.sass";

interface ITravelInsuranceNoticeSheet {
  openSheet: boolean;
  closeSheet: () => void;
}

const TravelInsuranceNoticeSheet: FC<ITravelInsuranceNoticeSheet> = ({
  openSheet = false,
  closeSheet
}) => {
  return (
    <Drawer
      style={{ borderRadius: "12px 12px 0 0" }}
      styles={{
        header: { borderBottom: 0, paddingTop: 32, paddingBottom: 16 },
        body: { padding: 0 },
        footer: { borderTop: 0, padding: 0 }
      }}
      key={"TravelInsuranceNoticeSheet"}
      forceRender
      open={openSheet}
      onClose={closeSheet}
      closeIcon={false}
      height={"calc(100vh - 30px)"}
      title={
        <DrawerTitle
          title={"금리방식 안내"}
          useCloseBtn
          closeDrawerBtn={closeSheet}
        />
      }
      placement={"bottom"}
      footer={<KBConfirmBtn onClickConfirm={closeSheet}>확인</KBConfirmBtn>}>
      <div className={$style.underArea} style={{ paddingTop: 8 }}>
        <div className={$style.imgBox}>
          <img src={LoanRateKnow} alt="" />
        </div>
      </div>
    </Drawer>
  );
};

export default TravelInsuranceNoticeSheet;
