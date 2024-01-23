import modifyPencil from "@imgs/icons/modify_pencil.png";
import { Button } from "antd";
import { FC, ReactNode, useCallback } from "react";

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
  const onClickModifyBtn = useCallback(() => {
    modifyUserSelect && modifyUserSelect();
  }, [modifyUserSelect]);

  return (
    <div className={$style.selectedUserBox}>
      <div className={$style.userTalk}>{children}</div>
      {isLastSelect && <Button
        className={$style.modifyBtn}
        htmlType="button"
        onClick={onClickModifyBtn}>
        <div className={$style.imgBox}>
          <img src={`${modifyPencil}`} alt="" />
        </div>
      </Button>}
    </div>
  );
};

export default SelectedUserBox;
