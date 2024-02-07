/**
 * Step 04. face 인증
 * 얼굴이 인식되지 않음 - 다시 시도
 */
import img01 from "@imgs/loan/LoanFacePop.png";
import { Modal } from "antd";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import $style from "./LoanFacePop.module.scss";

const LoanFacePop: FC = () => {
  const navigate = useNavigate();
  const [sheetOpen, setsheetOpen] = useState(true);
  const clickFacePop = () => {
    setsheetOpen(false);
    navigate("/LoanChat");
  };
  return (
    <>
      <Modal
        title=""
        open={sheetOpen}
        mousePosition={{ x: 187, y: 400 }}
        centered
        forceRender
        footer={null}
        closable={false}
        className={$style.LoanFaceModal}>
        <img src={img01} width="100%" onClick={clickFacePop} alt="" />
      </Modal>
    </>
  );
};

export default LoanFacePop;
