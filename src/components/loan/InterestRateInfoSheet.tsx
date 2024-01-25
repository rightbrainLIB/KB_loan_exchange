/**
 * Step 4. 신청정보입력(Progress bar 4/6)
 * 금리 방식 안내
 */
import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import DrawerTitle from "@components/contents/DrawerTitle.tsx";
import img from "@imgs/loan/InterestRateInfoSheet.png";
import { Drawer } from "antd";
import { FC } from "react";

import $style from "./InterestRateInfoSheet.module.scss";

interface IInterestRateInfoSheet {
  sheetOpen: boolean;
}

const InterestRateInfoSheet: FC<IInterestRateInfoSheet> = ({
  sheetOpen
}) => {
  return (
    <>
      <Drawer
        style={{ borderRadius: "12px 12px 0 0" }}
        styles={{
          header: { borderBottom: 0, paddingTop: 32, paddingBottom: 0 },
          body: { padding: 24 },
          footer: { borderTop: 0, padding: 0 }
        }}
        open={sheetOpen}
        closeIcon={false}
        height={"95vh"}
        title={
          <DrawerTitle
            title={"금리 방식 안내"}
            useCloseBtn
          />
        }
        placement={"bottom"}
        key={"LoanTelecomInputPop"}
        className={$style.InterestRateInfoSheet}
				footer={<KBConfirmBtn>확인</KBConfirmBtn>}
				>
        <img src={img} className={$style.img} />
      </Drawer>
    </>
  );
};

export default InterestRateInfoSheet;
