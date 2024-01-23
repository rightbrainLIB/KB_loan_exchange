import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import ExchangeWayList from "@components/list/ExchangeWayList.tsx";
import exchangeWayIcon from "@imgs/Ellipse 4.png";
import { Drawer } from "antd";
import { FC, useCallback } from "react";

// import { useDispatch } from "react-redux";

interface ICurrencySelectSheet2 {
  sheetOpen: boolean
  onClickCloseSheet: () => void
}

const CurrencySelectSheet2: FC<ICurrencySelectSheet2> = ({ sheetOpen, onClickCloseSheet }) => {
  // const dispatch = useDispatch();
  // 시트 닫기
  const closeSheet = useCallback(() => {
    onClickCloseSheet();
  }, [onClickCloseSheet]);

  const onClickConfirmBtn = useCallback(() => {
    onClickCloseSheet();
  }, [onClickCloseSheet]);

  const wayList = [
    {
      imgSrc: `${exchangeWayIcon}`,
      title: "은행에서 직접 받기",
      subText: "최소 환전금액 USD 50부터 가능해요"
    },
    {
      imgSrc: `${exchangeWayIcon}`,
      title: "외환 ATM에서 받기",
      subText: "최소 환전금액 USD 10부터 가능해요"
    },
    {
      imgSrc: `${exchangeWayIcon}`,
      title: "인천공항에서 받기",
      subText: "최소 환전금액 USD 10부터 가능해요"
    },
  ];

  return (
    <Drawer
      style={{ borderRadius: "12px 12px 0 0" }}
      styles={{
        header: { borderBottom: 0, paddingTop: 32, paddingBottom: 0 },
        body: { padding: 24 },
        footer: { borderTop: 0, padding: 0 }
      }}
      open={sheetOpen}
      onClose={closeSheet}
      closeIcon={false}
      height={"auto"}
      title={
        <DrawerTitle
          title={"환전 수령 방법"}
          subText={"받는 방법에 따라서 최소 환전 가능금액이 달라져요"}
          useCloseBtn
          closeDrawerBtn={closeSheet}
        />
      }
      placement={"bottom"}
      key={"CurrencySelectSheet2"}
      footer={
        <KBConfirmBtn onClickConfirm={onClickConfirmBtn}>확인</KBConfirmBtn>
      }>
      <ExchangeWayList wayList={wayList} />
    </Drawer>
  );
};

export default CurrencySelectSheet2;
