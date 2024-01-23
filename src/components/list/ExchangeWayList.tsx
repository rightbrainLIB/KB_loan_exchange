import "./ExchangeWayList.sass";

import {
  setCompUserSelect,
  setOpenTakenPlaceSheet,
  setOpenTakenWaySheet
} from "@slices/exchangeCurrencySlices.ts";
import { ConfigProvider, Radio, RadioChangeEvent } from "antd";
import cx from "classnames";
import { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import $style from "./ExchangeWayList.module.sass";

interface IExchangeWayList {
  wayList: { imgSrc: string; title: string; subText: string }[];
}

const ExchangeWayList: FC<IExchangeWayList> = ({ wayList }) => {
  const dispatch = useDispatch();

  const [currency, setCurrency] = useState<string>("");
  // 통화값 저장
  const onCurrencyChange = useCallback((e: RadioChangeEvent) => {
    setCurrency(e.target.value as string);
    if (e.target.value === "직접 받으로 가기") {
      dispatch(setOpenTakenWaySheet(false));
      setTimeout(() => {
        setCurrency("");
        dispatch(setOpenTakenPlaceSheet(true));
      });
    }
    if (e.target.value === "은행에서 직접 받기") {
      dispatch(setOpenTakenPlaceSheet(false));
      dispatch(setCompUserSelect(true)); // 모두 선택 되었는지 체크하여 '은행지점에서 받기 보이기를 useEffect로 체크
      setTimeout(() => {
        setCurrency("");
      });
    }
  }, []);

  return (
    <>
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
    </>
  );
};

export default ExchangeWayList;
