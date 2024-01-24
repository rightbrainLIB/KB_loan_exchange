import headerBackBtn from "@imgs/icons/icon_back_24.png";
// import { Progress } from "antd";
import { FC, ReactNode } from "react";

import $style from "./KBHeader.module.sass";

interface IKBHeader {
  children?: ReactNode;
}

const KBHeader: FC<IKBHeader> = ({ children }) => {
  return (
    <>
      <div className={$style.KBHeader}>
        {/* S: leftSide */}
        <div className={$style.leftSide}>
          {/* S: backBtn */}
          <button type="button" className={$style.backBtn}>
            <div className={$style.imgBox}>
              <img src={`${headerBackBtn}`} alt="뒤로가기" />
            </div>
          </button>
          {/* E: backBtn */}
          {/* S: pageTitle */}
          <div className={$style.pageTitle}>
            <h1>{children}</h1>
          </div>
          {/* E: pageTitle */}
        </div>
        {/* E: leftSide */}

        {/* S: rightSide */}
        <div className={$style.rightSide}>
          <button type="button" className={$style.cancelBtn}>
            취소
          </button>
        </div>
        {/* E: rightSide */}
      </div>
      {/*<Progress percent={7} showInfo={false} />*/}
    </>
  );
};

export default KBHeader;
