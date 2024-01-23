import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import ExchangeWayList from "@components/list/ExchangeWayList.tsx";
import exchangeWayIcon from "@imgs/Ellipse 4.png";
import { Drawer } from "antd";
import { FC, useCallback } from "react";

// import { useDispatch } from "react-redux";

interface ICurrencySelectSheet {
  sheetOpen: boolean
  onClickCloseSheet: () => void
}

const CurrencySelectSheet: FC<ICurrencySelectSheet> = ({ sheetOpen, onClickCloseSheet }) => {
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
      title: "직접 받으로 가기",
      subText: "최소 환전금액 USD 50부터 가능해요"
    },
    {
      imgSrc: `${exchangeWayIcon}`,
      title: "외화 선물하기 (기프티콘)",
      subText: "최소 환전금액 USD 50부터 가능해요"
    },
    {
      imgSrc: `${exchangeWayIcon}`,
      title: "우편으로 받기",
      subText: "최소 환전금액 USD 400부터 가능해요"
    },
    {
      imgSrc: `${exchangeWayIcon}`,
      title: "외화 머니박스 보관하기",
      subText: "최소 환전금액 USD 10부터 가능해요"
    }
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
      // height={467}
      height={544}
      title={
        <DrawerTitle
          title={"환전 수령 방법"}
          subText={"받는 방법에 따라서 최소 환전 가능금액이 달라져요"}
          useCloseBtn
          closeDrawerBtn={closeSheet}
        />
      }
      placement={"bottom"}
      key={"CurrencySelectSheet"}
      footer={
        <KBConfirmBtn onClickConfirm={onClickConfirmBtn}>확인</KBConfirmBtn>
      }>
      <ExchangeWayList wayList={wayList} />
    </Drawer>
  );
};

export default CurrencySelectSheet;
