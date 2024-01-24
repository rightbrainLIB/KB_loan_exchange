import img01 from "@imgs/loan/LoanFacePop.png";
import { Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import $style from "./LoanFacePop.module.scss";

const LoanFacePop = () => {
  const navigate = useNavigate();
  const [sheetOpen, setsheetOpen] = useState(true);
  const clickFacePop = () => {
    setsheetOpen(false);
    navigate("/Loan");
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