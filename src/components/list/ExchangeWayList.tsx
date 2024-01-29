import "./ExchangeWayList.sass";

import { ConfigProvider, Radio, RadioChangeEvent } from "antd";
import cx from "classnames";
import { FC, useCallback, useEffect, useState } from "react";

import $style from "./ExchangeWayList.module.sass";

interface IExchangeWayList {
  klassNames?: string;
  defaultWay?: string;
  wayList: {
    imgSrc: string;
    imgWidth?: number;
    imgHeight?: number;
    title: string;
    subText: string;
  }[];
  clickWay?: (str: string) => void;
}

const ExchangeWayList: FC<IExchangeWayList> = ({
  klassNames = "",
  defaultWay,
  wayList,
  clickWay
}) => {
  const [currency, setCurrency] = useState<string>("");

  // 통화값 저장
  const onCurrencyChange = useCallback(
    (e: RadioChangeEvent) => {
      setCurrency(e.target.value as string);
      clickWay && clickWay(e.target.value as string);
    },
    [clickWay]
  );

  useEffect(() => {
    if (defaultWay) setCurrency(defaultWay);
  }, [defaultWay]);

  return (
    <>
      <Radio.Group
        onChange={onCurrencyChange}
        value={currency}
        defaultValue={defaultWay || ""}
        className={cx(
          $style.exchangeWayList,
          "exchangeWayList",
          klassNames ?? klassNames
        )}>
        {wayList.map((list, idx) => (
          <ConfigProvider
            // theme={{
            //   token: {
            //     colorBorder: "#7D6C59"
            //   },
            //   components: {
            //     Radio: {
            //       dotSize: 8
            //     }
            //   }
            // }}
            key={list.subText + idx}>
            <Radio
              value={list.title + list.subText}
              className={$style.radioArea}>
              {list.imgSrc && (
                <div className={$style.imgBox}>
                  <img
                    src={`${list.imgSrc}`}
                    alt=""
                    {...(list.imgWidth
                      ? { width: `${list.imgWidth}px` }
                      : { width: "24px" })}
                    {...(list.imgHeight
                      ? { height: `${list.imgHeight}px` }
                      : { height: "24px" })}
                  />
                </div>
              )}
              <div className={$style.textBox}>
                {list.title && <p className={$style.listTitle}>{list.title}</p>}
                {list.subText && (
                  <p className={$style.listSubText}>{list.subText}</p>
                )}
              </div>
            </Radio>
          </ConfigProvider>
        ))}
      </Radio.Group>
    </>
  );
};

export default ExchangeWayList;
