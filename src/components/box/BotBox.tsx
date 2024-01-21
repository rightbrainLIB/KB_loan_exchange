import { FC, ReactNode } from "react";

import $style from "./BotBox.module.sass";

interface IBotBox {
  children?: ReactNode;
}

const BotBox: FC<IBotBox> = ({ children }) => {
  return <div className={$style.botBox}>{children}</div>;
};

export default BotBox;
