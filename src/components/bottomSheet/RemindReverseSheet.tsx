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

const RemindReverseSheet: FC<IRemindReverse> = ({
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
        height={173}
        title={
          <DrawerTitle
            title={"다시 선택하시겠어요?"}
            subText={"바로 이전의 선택지로 돌아갈 수 있어요"}
            useCloseBtn
            closeDrawerBtn={closeSheet}
          />
        }
        placement={"bottom"}
        key={"RemindReverseSheet"}
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

export default RemindReverseSheet;
