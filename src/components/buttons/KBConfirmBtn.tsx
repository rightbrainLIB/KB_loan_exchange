import { Button } from "antd";
import cx from "classnames";
import { FC, ReactNode, useCallback } from "react";

import $style from "./KBConfirmBtn.module.sass";

interface KBConfirmBtn {
  width?: number;
  onClickConfirm?: () => void;
  children?: ReactNode;
  type?: string; // default
}

const KBConfirmBtn: FC<KBConfirmBtn> = ({
  width,
  onClickConfirm,
  type,
  children
}) => {
  const onClickBtn = useCallback(() => {
    onClickConfirm && onClickConfirm();
  }, [onClickConfirm]);

  const styles = {
    ...(width ? { width: `${width}px` } : {})
  };

  return (
    <Button
      className={cx($style.KBConfirmBtn, {
        [$style.default]: type === "default"
      })}
      onClick={onClickBtn}
      style={styles}>
      {children}
    </Button>
  );
};

export default KBConfirmBtn;
