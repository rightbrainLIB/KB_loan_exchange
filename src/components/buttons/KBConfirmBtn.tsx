import { Button } from "antd";
import cx from "classnames";
import { FC, ReactNode, useCallback } from "react";

import $style from "./KBConfirmBtn.module.sass";

interface KBConfirmBtn {
  width?: number;
  onClickConfirm?: () => void;
  disabled?: boolean;
  type?: string; // default
  children?: ReactNode;
}

const KBConfirmBtn: FC<KBConfirmBtn> = ({
  width,
  onClickConfirm,
  disabled = false,
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
      style={styles}
      disabled={disabled}>
      {children}
    </Button>
  );
};

export default KBConfirmBtn;
