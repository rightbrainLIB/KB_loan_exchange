import character from "@imgs/character_ani_01 1.png";
import { FC } from "react";

import $style from "./BotProfile.module.sass";

const BotProfile: FC = () => {
  return (
    <div className={$style.botProfile}>
      <img src={`${character}`} alt="KB_bot" />
    </div>
  );
};

export default BotProfile;
