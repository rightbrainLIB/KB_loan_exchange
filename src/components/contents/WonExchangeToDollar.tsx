import {FC, ReactNode} from "react";

import $style from "./WonExchangeToDollar.module.sass";

interface IWonExchangeToDollar {
  children?: ReactNode;
}

const WonExchangeToDollar: FC<IWonExchangeToDollar> = ({children}) => {
  return (
    <div className={$style.wonExchangeToDollar}>
      {children}
    </div>
  );
};

export default WonExchangeToDollar;