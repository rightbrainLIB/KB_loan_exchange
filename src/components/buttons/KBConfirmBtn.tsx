import { Button } from "antd";
import { FC, ReactNode, useCallback } from "react";

import $style from "./KBConfirmBtn.module.sass";

interface KBConfirmBtn {
  onClickConfirm: () => void;
  children?: ReactNode;
}

const KBConfirmBtn: FC<KBConfirmBtn> = ({ onClickConfirm, children }) => {
  const onClickBtn = useCallback(() => {
    onClickConfirm();
  }, [onClickConfirm]);

  return (
    <Button className={$style.KBConfirmBtn} onClick={onClickBtn}>
      {children}
    </Button>
  );
};

export default KBConfirmBtn;
