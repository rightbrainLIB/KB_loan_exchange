import RemindReverseSheet from "@components/bottomSheet/RemindReverseSheet.tsx";
import modifyPencil from "@imgs/icons/modify_pencil.png";
import { Button } from "antd";
import { FC, ReactNode, useCallback, useState } from "react";

import $style from "./SelectedUserBox.module.sass";

interface ISelectedUserBox {
  modifyUserSelect?: () => void;
  isLastSelect?: boolean;
  children?: ReactNode;
}

const SelectedUserBox: FC<ISelectedUserBox> = ({
  modifyUserSelect,
  isLastSelect = false,
  children
}) => {
  const [openRemindSheet, setOpenRemindSheet] = useState(false);

  const onClickModifyBtn = useCallback(() => {
    setOpenRemindSheet(false);
    modifyUserSelect &&
      setTimeout(() => {
        modifyUserSelect();
      }, 300);
  }, [modifyUserSelect]);

  return (
    <>
      <div className={$style.selectedUserBox}>
        <div className={$style.userTalk}>{children}</div>
        {isLastSelect && (
          <Button
            className={$style.modifyBtn}
            htmlType="button"
            onClick={() => setOpenRemindSheet(true)}>
            <div className={$style.imgBox}>
              <img src={`${modifyPencil}`} alt="" />
            </div>
          </Button>
        )}
      </div>
      <RemindReverseSheet
        sheetOpen={openRemindSheet}
        closeSheet={() => setOpenRemindSheet(false)}
        execConfirm={() => onClickModifyBtn()}
      />
    </>
  );
};

export default SelectedUserBox;
