/**
 * Step 01. 맞춤상품안내
 */
import KBConfirmBtn from "@components/buttons/KBConfirmBtn.tsx";
import img01 from "@imgs/loan/LoanCreditLimitProduct_01.png";
import img02 from "@imgs/loan/LoanCreditLimitProduct_02.png";
import { setIsCompleteExchange } from "@slices/globalUISlice.ts";
import { FC, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import $style from "./LoanCreditLimitProduct.module.scss";

const LoanCreditLimitProduct: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickConfirmBtn = () => {
    navigate("/LoanImportCheck");
  };

  const onClickBack = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    dispatch(setIsCompleteExchange(false));
  }, [dispatch]);

  return (
    <>
      <div className={$style.LoanCreditLimitProductWrap}>
        <div className={$style.header} onClick={onClickBack}>
          <img src={img01} width="100%" alt="" />
        </div>

        <div>
          <img src={img02} width="100%" alt="" />
        </div>
        <KBConfirmBtn onClickConfirm={onClickConfirmBtn}>
          금리·한도 알아보기
        </KBConfirmBtn>
      </div>
    </>
  );
};

export default LoanCreditLimitProduct;
