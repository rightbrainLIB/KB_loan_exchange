// import { disableInstantTransitions } from "framer-motion";
import { FC, ReactNode, useCallback } from "react";

import $style from "./SelectableBtn.module.sass";

interface ISelectableBtn {
  useImg?: boolean;
  onClickBtn?: (data: boolean) => void;
  children?: ReactNode;
  bgBtn?: boolean;
  size?: string;
  disabled?: boolean;
}

const SelectableBtn: FC<ISelectableBtn> = ({
  useImg = false,
  onClickBtn,
  children,
  bgBtn = false,
  size = "",
  disabled = false
}) => {
  const onClickSelectableBtn = useCallback(() => {
    onClickBtn && onClickBtn(true);
  }, [onClickBtn]);

  return (
    <button
      type="button"
      className={`${$style.selectableBtn} ${bgBtn ? $style.bgBtn : ""} ${size ? $style[size] : ""}`}
      onClick={onClickSelectableBtn}
      disabled={disabled}>
      {useImg && (
        <div className={$style.imgBox}>
          <img src="" alt="" />
        </div>
      )}
      <p>{children}</p>
    </button>
  );
};

export default SelectableBtn;
