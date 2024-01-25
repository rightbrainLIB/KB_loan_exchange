import { Button } from "antd";
import { FC } from "react";

import $style from "./UtilUnderTalkList.module.sass";

interface IUtilUnderTalkList {
  disabled?: boolean;
  btnList?: string[];
  btnUnderList?: {
    disabled?: boolean;
    text: string;
    onClickBtn?: () => void;
  }[];
}

const UtilUnderTalkList: FC<IUtilUnderTalkList> = ({
  disabled = false,
  btnList,
  btnUnderList
}) => {
  return (
    <ul className={$style.utilUnderTalkList}>
      {btnList &&
        btnList.map((btn, idx) => (
          <li key={btn + idx}>
            <Button disabled={disabled}>{btn}</Button>
          </li>
        ))}
      {btnUnderList &&
        btnUnderList.map((btn, idx) => (
          <li key={btn.text + idx}>
            {btn.onClickBtn ? (
              <Button onClick={btn.onClickBtn} disabled={btn.disabled}>
                {btn.text}
              </Button>
            ) : (
              <Button>{btn.text}</Button>
            )}
          </li>
        ))}
    </ul>
  );
};

export default UtilUnderTalkList;
