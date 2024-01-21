import "./ExchangeWayList.sass";

import { ConfigProvider, Radio, RadioChangeEvent } from "antd";
import cx from "classnames";
import { FC, useCallback, useState } from "react";

import $style from "./ExchangeWayList.module.sass";

interface IExchangeWayList {
  wayList: { imgSrc: string; title: string; subText: string }[];
}

const ExchangeWayList: FC<IExchangeWayList> = ({ wayList }) => {
  const [currency, setCurrency] = useState<string>("USD (미국 달러)");
  // 통화값 저장
  const onCurrencyChange = useCallback((e: RadioChangeEvent) => {
    setCurrency(e.target.value as string);
  }, []);

  return (
    <Radio.Group
      onChange={onCurrencyChange}
      value={currency}
      defaultValue={""}
      className={cx($style.exchangeWayList, "exchangeWayList")}>
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
          key={list.title + idx}>
          <Radio value={list.title} className={$style.radioArea}>
            <div className={$style.imgBox}>
              <img src={`${list.imgSrc}`} alt="" />
            </div>
            <div className={$style.textBox}>
              <p className={$style.listTitle}>{list.title}</p>
              <p className={$style.listSubText}>{list.subText}</p>
            </div>
          </Radio>
        </ConfigProvider>
      ))}
    </Radio.Group>
  );
};

export default ExchangeWayList;
