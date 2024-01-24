import iconClose from "@imgs/icons/icon_close_24.png";
import { Button } from "antd";
import { FC, useCallback } from "react";

import $style from "./DrawerTitle.module.sass";

interface IDrawerTitle {
  title: string;
  subText?: string;
  useCloseBtn?: boolean;
  closeDrawerBtn?: () => void;
}

const DrawerTitle: FC<IDrawerTitle> = ({
  title,
  subText,
  useCloseBtn = false,
  closeDrawerBtn
}) => {
  const onClickCloseBtn = useCallback(() => {
    closeDrawerBtn && closeDrawerBtn();
  }, [closeDrawerBtn]);

  return (
    <div className={$style.drawerTitle}>
      <h2 className={$style.title}>{title}</h2>
      {subText && <p className={$style.subText}>{subText}</p>}
      {useCloseBtn && (
        <>
          <Button className={$style.closeBtn} onClick={onClickCloseBtn}>
            <div className={$style.imgBox}>
              <img src={`${iconClose}`} alt="" />
            </div>
          </Button>
        </>
      )}
    </div>
  );
};

export default DrawerTitle;
