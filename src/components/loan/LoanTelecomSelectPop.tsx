/**
 * Step 08. 통신사 선택 팝업
 */
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import ExchangeWayList from "@components/list/ExchangeWayList.tsx";
// import img01 from "@imgs/loan/LoanTelecomSelectPop_01.png";
import { Button, Drawer } from "antd";
import { useCallback, useEffect, useState } from "react";
import { FC } from "react";

import $style from "./LoanTelecomSelectPop.module.scss";

interface ILoanTelecomSelectPop {
  openSheet: boolean;
  closeSheet: () => void;
  showNextTask: () => void;
}

const LoanTelecomSelectPop: FC<ILoanTelecomSelectPop> = ({
  openSheet,
  closeSheet,
  showNextTask
}) => {
  const wayList = [
    {
      imgSrc: "",
      title: "",
      subText: "SKT"
    },
    {
      imgSrc: "",
      title: "",
      subText: "KT"
    },
    {
      imgSrc: "",
      title: "",
      subText: "LGU+"
    },
    {
      imgSrc: "",
      title: "",
      subText: "SK알뜰폰"
    },
    {
      imgSrc: "",
      title: "",
      subText: "KT알뜰폰"
    },
    {
      imgSrc: "",
      title: "",
      subText: "LGU+알뜰폰"
    }
  ];

  const [selectedWay, setSelectedWay] = useState("SKT");

  const closeImgSheet = useCallback(() => {
    closeSheet && closeSheet();
  }, [closeSheet]);
  const clickNextPop = useCallback(() => {
    showNextTask && showNextTask();
  }, [showNextTask]);

  useEffect(() => {
    // console.log(selectedWay);
  }, [selectedWay]);

  return (
    <>
      <Drawer
        style={{ borderRadius: "12px 12px 0 0" }}
        styles={{
          header: { borderBottom: 0, paddingTop: 32, paddingBottom: 0 },
          body: { padding: 24 },
          footer: { borderTop: 0, padding: 0 }
        }}
        open={openSheet}
        onClose={closeImgSheet}
        closeIcon={false}
        height={417}
        title={
          <DrawerTitle
            title={"통신사 선택"}
            subText={""}
            useCloseBtn
            closeDrawerBtn={closeImgSheet}
          />
        }
        placement={"bottom"}
        key={"loanTelecomSelectSheet"}
        footer={
          <Button className={$style.btn} onClick={clickNextPop}>
            인증번호 전송
          </Button>
        }
        className={$style.LoanTelecomSelectPop}>
        {/*<div className={$style.img}>*/}
        {/*  <img src={img01} width="100%" />*/}
        {/*</div>*/}
        <ExchangeWayList
          klassNames={"telList"}
          defaultWay={selectedWay}
          wayList={wayList}
          clickWay={(str) => setSelectedWay(str)}
        />
      </Drawer>
    </>
  );
};

export default LoanTelecomSelectPop;
