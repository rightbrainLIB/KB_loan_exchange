import exclaminationIcon from "@imgs/icons/exclamination_icon.png";
import { FC } from "react";

import $style from "./ExclaminationList.module.sass";

interface IExclaminationList {
  exclaList: { text: string }[];
}

const ExclaminationList: FC<IExclaminationList> = ({ exclaList }) => {
  return (
    <div className={$style.exclaminationList}>
      <ul>
        {exclaList.map((list, idx) => (
          <li key={list.text + idx}>
            <div className={$style.imgBox}>
              <img src={exclaminationIcon} alt="" />
            </div>
            <div className={$style.textBox}>
              <p>{list.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExclaminationList;
