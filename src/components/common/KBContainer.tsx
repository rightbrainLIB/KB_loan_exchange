import React, { ReactNode } from "react";
import { isMobile } from "react-device-detect";

import $styles from "./KBContainer.module.sass";

interface IKBContainer {
  children: ReactNode;
}

const KBContainer: React.FC<IKBContainer> = ({ children }) => {
  const containerStyles = {
    ...(isMobile ? { paddingBottom: "50%" } : { paddingBottom: "150px" })
  };

  return (
    <div className={$styles.KBContainer} style={containerStyles}>
      {children}
    </div>
  );
};

export default KBContainer;
