import {FC, ReactNode} from "react";

import $style from "./EmphasisContent.module.sass";

interface IEmphasisContent {
  children?: ReactNode;
}

const EmphasisContent: FC<IEmphasisContent> = ({ children }) => {
  return (
    <div className={$style.emphasisContent}>
      {children}
    </div>
  );
};

export default EmphasisContent;