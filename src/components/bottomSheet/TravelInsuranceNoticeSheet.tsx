/**
 * Step 03. 환전정보입력(Progress bar 3/7)
 * 여행자보험 안내
 */
import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import noticeImg from "@imgs/exchange/TraveInsuranceNotice.png";
import accourdianImg from "@imgs/exchange/TraveInsuranceNotice_Accordian.png";
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
      open={openSheet}
      onClose={closeSheet}
      closeIcon={false}
      height={"calc(100vh - 30px)"}
      title={
        <DrawerTitle
          title={"여행자보험 안내"}
          useCloseBtn
          closeDrawerBtn={closeSheet}
        />
      }
      placement={"bottom"}
      footer={<KBConfirmBtn onClickConfirm={closeSheet}>확인</KBConfirmBtn>}>
      <div className={$style.upperArea}>
        <div className={$style.imgBox}>
          <img src={noticeImg} alt="" />
        </div>
      </div>
      <div className={$style.underArea}>
        <div className={$style.imgBox}>
          <img src={accourdianImg} alt="" />
        </div>
      </div>
    </Drawer>
  );
};

export default TravelInsuranceNoticeSheet;
