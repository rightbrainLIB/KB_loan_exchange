import { FC, ReactNode } from "react";

import $style from "./KBTalk.module.sass";

interface IKBTalk {
  children?: ReactNode;
  mv?: number;
  mh?: number;
}

const KBTalk: FC<IKBTalk> = ({ children, mv = 18, mh = 20 }) => {
  return (
    <div
      className={$style.KBTalk}
      style={{
        paddingTop: `${mv && mv}px`,
        paddingBottom: `${mv && mv}px`,
        paddingLeft: `${mh && mh}px`,
        paddingRight: `${mh && mh}px`
      }}>
      {children}
    </div>
  );
};

export default KBTalk;
