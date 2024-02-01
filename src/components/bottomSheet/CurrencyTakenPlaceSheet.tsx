import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import ExchangeWayList from "@components/list/ExchangeWayList.tsx";
import way_2_airport from "@imgs/icons/way_2_airport.png";
import way_2_atm from "@imgs/icons/way_2_atm.png";
import way_2_bank from "@imgs/icons/way_2_bank.png";
import {
  setCompUserSelect,
  setOpenTakenPlaceSheet
} from "@slices/exchangeCurrencySlices.ts";
import { Drawer } from "antd";
import { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

interface ICurrencyTakenPlaceSheet {
  sheetOpen: boolean;
}

const CurrencyTakenPlaceSheet: FC<ICurrencyTakenPlaceSheet> = ({
  sheetOpen
}) => {
  const dispatch = useDispatch();

  const [selectedWay, setSelectedWay] = useState("");
  const [confirmBtnDisabled, setConfirmBtnDisabled] = useState(true);

  // 시트 닫기
  const closeSheet = useCallback(() => {
    dispatch(setOpenTakenPlaceSheet(false));
  }, [dispatch]);

  const onClickConfirmBtn = useCallback(() => {
    if (selectedWay.includes("은행에서 직접 받기")) {
      dispatch(setOpenTakenPlaceSheet(false));
      dispatch(setCompUserSelect(true)); // 모두 선택 되었는지 체크하여 '은행지점에서 받기 보이기를 useEffect로 체크
      setTimeout(() => {
        setSelectedWay("");
      }, 300);
    }
  }, [selectedWay, dispatch]);

  const wayList = [
    {
      imgSrc: `${way_2_bank}`,
      title: "은행에서 직접 받기",
      subText: "최소 환전금액 USD 50부터 가능해요"
    },
    {
      imgSrc: `${way_2_atm}`,
      title: "외환 ATM에서 받기",
      subText: "최소 환전금액 USD 10부터 가능해요"
    },
    {
      imgSrc: `${way_2_airport}`,
      imgWidth: 27,
      imgHeight: 19,
      title: "인천공항에서 받기",
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
      height={"auto"}
      title={
        <DrawerTitle
          title={"환전 수령 방법"}
          subText={"은행이나 외환 ATM, 인천공항에서 직접 받을 수 있어요"}
          useCloseBtn
          closeDrawerBtn={closeSheet}
        />
      }
      placement={"bottom"}
      key={"CurrencyTakenPlaceSheet"}
      footer={
        <KBConfirmBtn
          disabled={confirmBtnDisabled}
          onClickConfirm={onClickConfirmBtn}>
          확인
        </KBConfirmBtn>
      }>
      <ExchangeWayList
        wayList={wayList}
        chkClickedList={() => setConfirmBtnDisabled(false)}
        clickWay={(str) => setSelectedWay(str)}
      />
    </Drawer>
  );
};

export default CurrencyTakenPlaceSheet;
