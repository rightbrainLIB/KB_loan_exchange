/**
 * Step 03. 환전정보입력(Progress bar 3/7)
 * 꼭 확인해주세요! 바텀시트
 */
import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import img from "@imgs/exchange/EssentialConfirmationSheet.png";
import { Drawer } from "antd";
import { FC, useCallback } from "react";

import $style from "./EssentialConfirmationSheet.module.scss";
// import { useDispatch } from "react-redux";

interface IEssentialConfirmationSheet {
  sheetOpen: boolean;
}

const EssentialConfirmationSheet: FC<IEssentialConfirmationSheet> = ({ sheetOpen }) => {
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
          title={<span className={$style.sheetTitle}>꼭 확인해주세요!</span>}
          useCloseBtn
          closeDrawerBtn={closeSheet}
        />
      }
      placement={"bottom"}
      key={"EssentialConfirmationSheet"}
			footer={
				<div className={$style.footerBtns}>
					<KBConfirmBtn type="default">취소</KBConfirmBtn>
					<KBConfirmBtn>다음</KBConfirmBtn>
				</div>
      }>
			<img src={img} className={$style.img} /> 
    </Drawer>
  );
};

export default EssentialConfirmationSheet;
