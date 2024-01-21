import { FC, ReactNode, useCallback } from "react";

import $style from "./SelectableBtn.module.sass";

interface ISelectableBtn {
  useImg?: boolean;
  onClickBtn?: (data: boolean) => void;
  children?: ReactNode;
}

const SelectableBtn: FC<ISelectableBtn> = ({
  useImg = false,
  onClickBtn,
  children
}) => {
  const onClickSelectableBtn = useCallback(() => {
    onClickBtn && onClickBtn(true);
  }, [onClickBtn]);

  return (
    <button
      type="button"
      className={$style.selectableBtn}
      onClick={onClickSelectableBtn}>
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
