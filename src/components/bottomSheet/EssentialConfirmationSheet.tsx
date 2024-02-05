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
  closeSheet: () => void;
  clickNext: () => void;
}

const EssentialConfirmationSheet: FC<IEssentialConfirmationSheet> = ({
  sheetOpen,
  closeSheet,
  clickNext
}) => {
  // 시트 닫기
  const closeEssentialSheet = useCallback(() => {
    closeSheet && closeSheet();
  }, [closeSheet]);

  // 다음
  const nextStep = useCallback(() => {
    clickNext && clickNext();
  }, [clickNext]);

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
      onClose={closeEssentialSheet}
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
          <KBConfirmBtn type="default" onClickConfirm={closeEssentialSheet}>
            취소
          </KBConfirmBtn>
          <KBConfirmBtn onClickConfirm={nextStep}>다음</KBConfirmBtn>
        </div>
      }>
      <img src={img} className={$style.img} />
    </Drawer>
  );
};

export default EssentialConfirmationSheet;
