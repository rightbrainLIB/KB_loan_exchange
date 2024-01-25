import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import ExchangeWayList from "@components/list/ExchangeWayList.tsx";
import way_1_direct from "@imgs/icons/way_1_direct.png";
import way_1_gift from "@imgs/icons/way_1_gift.png";
import way_1_keep from "@imgs/icons/way_1_keep.png";
import way_1_post from "@imgs/icons/way_1_post.png";
import {
  setOpenTakenPlaceSheet,
  setOpenTakenWaySheet
} from "@slices/exchangeCurrencySlices.ts";
import { Drawer } from "antd";
import { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

// import { useDispatch } from "react-redux";

interface ICurrencySelectSheet {
  sheetOpen: boolean;
}

const CurrencySelectSheet: FC<ICurrencySelectSheet> = ({ sheetOpen }) => {
  const dispatch = useDispatch();

  const [selectedWay, setSelectedWay] = useState("");

  // 시트 닫기
  const closeSheet = useCallback(() => {
    dispatch(setOpenTakenWaySheet(false));
  }, [dispatch]);

  // const onClickConfirmBtn = useCallback(() => {
  //   onClickCloseSheet && onClickCloseSheet();
  // }, [onClickCloseSheet]);

  // 확인 버튼
  const onClickNext = useCallback(() => {
    if (selectedWay === "직접 받으로 가기") {
      dispatch(setOpenTakenWaySheet(false));
      setTimeout(() => {
        dispatch(setOpenTakenPlaceSheet(true));
      }, 300);
      setTimeout(() => {
        setSelectedWay("");
      }, 600);
    }
    console.log(selectedWay);
  }, [selectedWay]);

  const wayList = [
    {
      imgSrc: `${way_1_direct}`,
      title: "직접 받으로 가기",
      subText: "최소 환전금액 USD 50부터 가능해요"
    },
    {
      imgSrc: `${way_1_gift}`,
      title: "외화 선물하기 (기프티콘)",
      subText: "최소 환전금액 USD 50부터 가능해요"
    },
    {
      imgSrc: `${way_1_post}`,
      title: "우편으로 받기",
      subText: "최소 환전금액 USD 400부터 가능해요"
    },
    {
      imgSrc: `${way_1_keep}`,
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
      footer={<KBConfirmBtn onClickConfirm={onClickNext}>확인</KBConfirmBtn>}>
      <ExchangeWayList
        wayList={wayList}
        clickWay={(str) => setSelectedWay(str)}
      />
    </Drawer>
  );
};

export default CurrencySelectSheet;
