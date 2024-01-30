import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import { Drawer } from "antd";
import { FC, useCallback } from "react";

import $style from "./RemindReverseSheet.module.sass";

interface IRemindReverse {
  sheetOpen: boolean;
  closeSheet: () => void;
  execConfirm: () => void;
}

const StopLoanSheet: FC<IRemindReverse> = ({
  sheetOpen = false,
  closeSheet,
  execConfirm
}) => {
  const onClickConfirm = useCallback(() => {
    closeSheet();
  }, [closeSheet]);

  return (
    <>
      <Drawer
        style={{ borderRadius: "12px 12px 0 0" }}
        styles={{
          header: { borderBottom: 0, paddingTop: 32, paddingBottom: 0 },
          body: { display: "none" },
          footer: { borderTop: 0, padding: 0 }
        }}
        open={sheetOpen}
        onClose={closeSheet}
        closeIcon={false}
        height={189}
        title={
          <DrawerTitle
            title={"대출 신청을 그만할까요?"}
            subText={"오늘이 지나면 금리와 한도가 달라질 수 있어요"}
            headerLinkSubText
            useCloseBtn
            closeDrawerBtn={closeSheet}
          />
        }
        placement={"bottom"}
        key={"StopLoanSheet"}
        footer={
          <div className={$style.sheetFooter}>
            <KBConfirmBtn
              width={150}
              onClickConfirm={onClickConfirm}
              type={"default"}>
              아니요
            </KBConfirmBtn>
            <KBConfirmBtn width={225} onClickConfirm={execConfirm}>
              예
            </KBConfirmBtn>
          </div>
        }
      />
    </>
  );
};

export default StopLoanSheet;
