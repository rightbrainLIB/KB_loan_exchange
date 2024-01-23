import { FC, ReactNode } from "react";

import $style from "./SelectableListWrap.module.sass";

interface ISelectableListWrap {
  children?: ReactNode;
}

const SelectableListWrap: FC<ISelectableListWrap> = ({ children }) => {
  return <ul className={$style.selectableListWrap}>{children}</ul>;
};

export default SelectableListWrap;
