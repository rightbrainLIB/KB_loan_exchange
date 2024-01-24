/**
 * Step 01. 맞춤상품안내
 */
import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import img01 from "@imgs/loan/LoanCreditLimitProduct_01.png";
import img02 from "@imgs/loan/LoanCreditLimitProduct_02.png";
import { useNavigate } from "react-router-dom";

import $style from "./LoanCreditLimitProduct.module.scss";

const LoanCreditLimitProduct = () => {
  const navigate = useNavigate();
  const onClickConfirmBtn = () => {
    navigate("/LoanImportCheck");
  };

  return (
    <>
      <div className={$style.LoanCreditLimitProductWrap}>
        <div className={$style.header}>
          <img src={img01} width="100%" />
        </div>

        <div>
          <img src={img02} width="100%" />
        </div>
        <KBConfirmBtn onClickConfirm={onClickConfirmBtn}>
          금리·한도 알아보기
        </KBConfirmBtn>
      </div>
    </>
  );
};

export default LoanCreditLimitProduct;
