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

const StopLoanProcessSheet: FC<IRemindReverse> = ({
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
            title={"진행을 그만둘까요?"}
            subText={"대출이 정상적으로 신청되어 지금 나가도 내역은 남아있어요"}
            headerLinkSubText
            useCloseBtn
            closeDrawerBtn={closeSheet}
          />
        }
        placement={"bottom"}
        key={"StopLoanProcessSheet"}
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

export default StopLoanProcessSheet;
