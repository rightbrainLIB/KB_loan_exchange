import {Button} from "antd";
import {FC} from "react";

import $style from "./UtilUnderTalkList.module.sass";

interface IUtilUnderTalkList {
  btnList: string[];
}

const UtilUnderTalkList: FC<IUtilUnderTalkList> = ({ btnList }) => {
  return (
    <ul className={$style.utilUnderTalkList}>
      {btnList.map((btn, idx) => (
        <li key={btn+idx}>
          <Button>{btn}</Button>
        </li>
      ))}
    </ul>
  );
};

export default UtilUnderTalkList;