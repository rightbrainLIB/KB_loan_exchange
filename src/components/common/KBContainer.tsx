import globalUISlice from "@slices/globalUISlice.ts";
import { ExchangeState } from "@src/store";
import React, { ReactNode, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useSelector } from "react-redux";

import $styles from "./KBContainer.module.sass";

interface IKBContainer {
  children: ReactNode;
}

const KBContainer: React.FC<IKBContainer> = ({ children }) => {
  const { containerBootmSize } = useSelector(
    (state: ExchangeState) => state.globalUI
  );
  const containerStyles = {
    ...(isMobile ? { paddingBottom: "50%" } : { paddingBottom: "150px" }),
    ...(containerBootmSize && {
      paddingBottom: `${containerBootmSize}px`
    })
  };

  return (
    <div className={$styles.KBContainer} style={containerStyles}>
      {children}
    </div>
  );
};

export default KBContainer;
