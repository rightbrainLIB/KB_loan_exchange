/**
 * 원하는 환율일 때 알림받기
 * 환율 지정 바텀시트
 */
import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import Keypad from "@components/contents/Keypad.tsx";
import { Drawer } from "antd";
import { FC, useCallback, useState } from "react";

import $style from "./ExchangeRateInputSheet.module.scss";

interface IExchangeRateInputSheet {
  sheetOpen: boolean;
  confirmAlarmPrice?: () => void;
}

const ExchangeRateInputSheet: FC<IExchangeRateInputSheet> = ({
  sheetOpen,
  confirmAlarmPrice
}) => {
  // const dispatch = useDispatch();

  const [userClicked, setUserClicked] = useState("1,344.5");

  const isClickedClassName =
    userClicked === "1,344.5" ? `${$style.disabled}` : "";

  // 시트 닫기
  const closeSheet = useCallback(() => {
    // dispatch(setOpenTakenWaySheet(false));
  }, []);

  // 금액 클릭
  const onClickValue = useCallback(() => {
    setUserClicked((prevState) =>
      prevState === "1,344.5" ? "1,300.8" : "1,344.5"
    );
  }, [userClicked]);

  const onClickConfirm = useCallback(() => {
    confirmAlarmPrice && confirmAlarmPrice();
  }, [confirmAlarmPrice]);

  return (
    <Drawer
      style={{ borderRadius: "12px 12px 0 0" }}
      styles={{
        header: { borderBottom: 0, paddingTop: 32, paddingBottom: 0 },
        body: { padding: "20px 24px" },
        footer: { borderTop: 0, padding: 0 }
      }}
      open={sheetOpen}
      onClose={closeSheet}
      closeIcon={false}
      height={"auto"}
      title={
        <DrawerTitle
          title={"환율 지정"}
          subText={"소수점 앞자리와 뒷자리를 입력해주세요"}
          useCloseBtn
          closeDrawerBtn={closeSheet}
        />
      }
      placement={"bottom"}
      key={"ExchangeRateInputSheet"}
      footer={
        <KBConfirmBtn onClickConfirm={onClickConfirm}>확인</KBConfirmBtn>
      }>
      <div className={$style.inputWrap} onClick={onClickValue}>
        <div className={`${$style.input} ${isClickedClassName}`}>
          {userClicked}
        </div>
        <span>원</span>
      </div>
      <Keypad type={"dot"} />
    </Drawer>
  );
};

export default ExchangeRateInputSheet;
