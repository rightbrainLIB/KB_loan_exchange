import { KBState } from "@src/store";
import React, { ReactNode, useRef } from "react";
import { isMobile } from "react-device-detect";
import { useSelector } from "react-redux";

import $styles from "./KBContainer.module.sass";

interface IKBContainer {
  children: ReactNode;
}

const KBContainer: React.FC<IKBContainer> = ({ children }) => {
  const containerEl = useRef(null);

  const { containerBootmSize } = useSelector(
    (state: KBState) => state.globalUI
  );
  const containerStyles = {
    ...(isMobile ? { paddingBottom: "50%" } : { paddingBottom: "150px" }),
    ...(containerBootmSize && {
      paddingBottom: `${containerBootmSize}px`
    })
  };

  return (
    <div
      className={$styles.KBContainer}
      style={containerStyles}
      ref={containerEl}>
      {children}
    </div>
  );
};

export default KBContainer;
