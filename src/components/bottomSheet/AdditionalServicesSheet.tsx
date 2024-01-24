/**
 * Step 03. 환전정보입력(Progress bar 3/7)
 * KB 외화 환전/송금 부가 서비스 신청서 바텀시트
 */
import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import img from "@imgs/exchange/AdditionalServicesSheet.png";
import { Drawer } from "antd";
import { FC, useCallback } from "react";

import $style from "./SelectReceiveDateSheet.module.scss";
// import { useDispatch } from "react-redux";

interface IAdditionalServicesSheet {
  sheetOpen: boolean;
}

const AdditionalServicesSheet: FC<IAdditionalServicesSheet> = ({ sheetOpen }) => {
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
        body: { padding: 0 },
        footer: { borderTop: 0, padding: 0 }
      }}
      open={sheetOpen}
      onClose={closeSheet}
      closeIcon={false}
      height={"auto"}
      title={<DrawerTitle
				title={""}
				useCloseBtn
				closeDrawerBtn={closeSheet}
			/>}
      placement={"bottom"}
      key={"AdditionalServicesSheet"}
			footer={<KBConfirmBtn>신청</KBConfirmBtn>}>
			<img src={img} className={$style.img} /> 
    </Drawer>
  );
};

export default AdditionalServicesSheet;
