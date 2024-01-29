import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import { Drawer } from "antd";
import { FC, ReactNode } from "react";

import $style from "./StandardTerms.module.sass";

interface IStandardTerms {
  sheetOpen: boolean;
  closeSheet: () => void;
  onClickConfirm: () => void;
  children: ReactNode;
}

const StandardTerms: FC<IStandardTerms> = ({
  sheetOpen = false,
  closeSheet,
  onClickConfirm,
  children
}) => {
  return (
    <Drawer
      open={sheetOpen}
      onClose={closeSheet}
      closeIcon={false}
      style={{ borderRadius: "12px 12px 0 0" }}
      styles={{
        header: {
          borderBottom: 0,
          height: "61px",
          padding: "13px 18px 24px",
          flex: "none"
        },
        body: { padding: 0 },
        footer: { borderTop: 0, padding: 0 }
      }}
      placement={"bottom"}
      height={"calc(100vh - 30px)"}
      title={<DrawerTitle title={""} useCloseBtn closeDrawerBtn={closeSheet} />}
      footer={
        <KBConfirmBtn onClickConfirm={onClickConfirm}>동의</KBConfirmBtn>
      }>
      <div className={$style.contentBox}>{children}</div>
    </Drawer>
  );
};

export default StandardTerms;
