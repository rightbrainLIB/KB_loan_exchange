/**
 * Step 04. face 인증
 * 얼굴이 인식되지 않음 - 다시 시도
 */
import img01 from "@imgs/loan/LoanFacePop.png";
import { Modal } from "antd";
import { useState } from "react";
import { FC } from "react";
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
        centered
        footer={null}
        closable={false}
        className={$style.LoanFaceModal}>
        <img src={img01} width="100%" onClick={clickFacePop} />
      </Modal>
    </>
  );
};

export default LoanFacePop;
