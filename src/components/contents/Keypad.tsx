import leftArrow from "@imgs/icons/Group 1346043291.png";
import { FC } from "react";

import $style from "./Keypad.module.sass";

interface IKeypad {
  type?: string; // price, dot
}

const Keypad: FC<IKeypad> = ({ type = "price" }) => {
  return (
    <ul className={$style.keypad}>
      <li>
        <div>1</div>
      </li>
      <li>
        <div>2</div>
      </li>
      <li>
        <div>3</div>
      </li>
      <li>
        <div>4</div>
      </li>
      <li>
        <div>5</div>
      </li>
      <li>
        <div>6</div>
      </li>
      <li>
        <div>7</div>
      </li>
      <li>
        <div>8</div>
      </li>
      <li>
        <div>9</div>
      </li>
      <li>
        <div>
          {type === "price" && "00"}
          {type === "dot" && <span className={$style.dot}></span>}
        </div>
      </li>
      <li>
        <div>0</div>
      </li>
      <li>
        <div>
          <img src={`${leftArrow}`} alt="" />
        </div>
      </li>
    </ul>
  );
};

export default Keypad;
