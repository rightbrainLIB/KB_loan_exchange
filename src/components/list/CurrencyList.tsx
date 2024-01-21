import { FC, ReactNode } from "react";

import $style from "./CurrencyList.module.sass";

interface ICurrencyList {
  children?: ReactNode;
}

const CurrencyList: FC<ICurrencyList> = ({ children }) => {
  return <ul className={$style.currencyList}>{children}</ul>;
};

export default CurrencyList;
