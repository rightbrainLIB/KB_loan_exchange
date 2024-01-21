import React, { ReactNode } from "react";

import styles from "./KBContainer.module.sass";

interface IKBContainer {
  children: ReactNode;
}

const KBContainer: React.FC<IKBContainer> = ({ children }) => {
  return <div className={styles.KBContainer}>{children}</div>;
};

export default KBContainer;
