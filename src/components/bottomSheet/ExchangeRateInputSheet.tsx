/**
 * 원하는 환율일 때 알림받기
 * 환율 지정 바텀시트
 */
import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import { Drawer, Input } from "antd";
import { FC, useCallback, useRef } from "react";

import $style from "./ExchangeRateInputSheet.module.scss";

interface IExchangeRateInputSheet {
  sheetOpen: boolean;
}

const ExchangeRateInputSheet: FC<IExchangeRateInputSheet> = ({ sheetOpen }) => {
  const rateNumRef = useRef(null);
  // const dispatch = useDispatch();
	
  // 시트 닫기
  const closeSheet = useCallback(() => {
    // dispatch(setOpenTakenWaySheet(false));
  }, []);
  
  return (
    <Drawer
      style={{ borderRadius: "12px 12px 0 0" }}
      styles={{
        header: { borderBottom: 0, paddingTop: 32, paddingBottom: 0 },
        body: { padding: 20 },
        footer: { borderTop: 0, padding: 0 }
      }}
      open={sheetOpen}
      onClose={closeSheet}
      closeIcon={false}
      height={"auto"}
      title={<DrawerTitle
				title={"환율 지정"}
				subText={"소수점 앞자리를 입력해주세요"}
				useCloseBtn
				closeDrawerBtn={closeSheet}
			/>}
      placement={"bottom"}
      key={"ExchangeRateInputSheet"}
			footer={<KBConfirmBtn>신청</KBConfirmBtn>}>
        <div className={$style.inputWrap}>
          <Input
            ref={rateNumRef}
            className={$style.input}
            placeholder={"1,344.5"}
            inputMode="none"
          />
        <span>원</span>
        </div>
    </Drawer>
  );
};

export default ExchangeRateInputSheet;
