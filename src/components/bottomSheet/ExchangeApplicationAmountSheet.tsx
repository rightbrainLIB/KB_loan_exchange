/**
 * Step 03. 환전정보입력(Progress bar 3/7)
 * 환전 신청금액 입력 바텀시트
 */
import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import afterInput from "@imgs/exchange/afterInput.png";
import beforeInput from "@imgs/exchange/beforeInput.png";
import { Drawer } from "antd";
import { FC, useCallback } from "react";

import $style from "./ExchangeApplicationAmountSheet.module.scss";

interface IExchangeApplicationAmountSheet {
  sheetOpen: boolean;
}

const ExchangeApplicationAmountSheet: FC<IExchangeApplicationAmountSheet> = ({
  sheetOpen
}) => {
  // const dispatch = useDispatch();

  // 시트 닫기
  const closeSheet = useCallback(() => {
    // dispatch(setOpenTakenWaySheet(false));
  }, []);

  // 입력전 이미지 클릭시 입력후 이미지 보이게
  const beforeInputClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetEl = e.target as HTMLElement;
    targetEl.style.display = "none";
  };

  return (
    <Drawer
      style={{ borderRadius: "12px 12px 0 0" }}
      styles={{
        header: { borderBottom: 0, paddingTop: 32, paddingBottom: 0 },
        body: { padding: 0 },
        footer: { borderTop: 0, padding: 0 }
      }}
      open={sheetOpen}
      onClose={closeSheet}
      closeIcon={false}
      height={"auto"}
      title={
        <DrawerTitle
          title={"환전 신청금액 입력"}
          useCloseBtn
          closeDrawerBtn={closeSheet}
        />
      }
      placement={"bottom"}
      key={"ExchangeApplicationAmountSheet"}
      footer={<KBConfirmBtn disabled>확인</KBConfirmBtn>}>
      <div className={$style.imgWrap}>
        <div className={$style.beforeInputImg} onClick={beforeInputClick}>
          <img src={beforeInput} />
        </div>
        <div className={$style.afterInputImg}>
          <img src={afterInput} />
        </div>
      </div>
    </Drawer>
  );
};

export default ExchangeApplicationAmountSheet;
