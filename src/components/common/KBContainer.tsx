import { KBState } from "@src/store";
import LastTrueUserStep from "@src/utils/LastUserStepProvider.tsx";
import React, { ReactNode, useEffect, useRef } from "react";
// import { isMobile } from "react-device-detect";
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
    // ...(isMobile ? { paddingBottom: "50%" } : { paddingBottom: "150px" }),
    ...(containerBootmSize && {
      paddingBottom: `${containerBootmSize}px`
    })
  };

  const lastStr = LastTrueUserStep();

  useEffect(() => {
    // console.log(lastStr);
    const containerBox: HTMLDivElement =
      containerEl.current as unknown as HTMLDivElement;
    const lastEl: HTMLDivElement = containerBox.lastChild as HTMLDivElement;
    if (lastEl) {
      setTimeout(() => {
        // console.log("lastEl = ", lastEl, lastEl.clientHeight);
      }, 1200);
    }
  }, [lastStr, containerEl]);

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
