import RemindReverseSheet from "@components/bottomSheet/RemindReverseSheet.tsx";
import modifyPencil from "@imgs/icons/modify_pencil.png";
import { Button } from "antd";
import { FC, ReactNode, useCallback, useState } from "react";

import $style from "./SelectedUserBox.module.sass";

interface ISelectedUserBox {
  modifyUserSelect?: () => void;
  marginTop?: number | null;
  isLastSelect?: boolean;
  useTaskModify?: boolean;
  children?: ReactNode;
}

const SelectedUserBox: FC<ISelectedUserBox> = ({
  modifyUserSelect,
  marginTop,
  isLastSelect = false,
  useTaskModify = false,
  children
}) => {
  const [openRemindSheet, setOpenRemindSheet] = useState(false);

  const callModifySheet = useCallback(() => {
    if (useTaskModify) {
      setOpenRemindSheet(true);
    }
  }, [useTaskModify]);

  const onClickModifyBtn = useCallback(() => {
    setOpenRemindSheet(false);
    modifyUserSelect &&
      setTimeout(() => {
        modifyUserSelect();
      }, 300);
  }, [modifyUserSelect]);

  const customStyle = {
    marginTop: marginTop ? marginTop : 0
  };

  return (
    <>
      <div className={$style.selectedUserBox}>
        <div className={$style.userTalk} style={customStyle && customStyle}>
          {children}
        </div>
        {isLastSelect && (
          <Button
            className={$style.modifyBtn}
            htmlType="button"
            onClick={callModifySheet}>
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
