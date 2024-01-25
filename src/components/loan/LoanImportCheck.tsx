/**
 * Step 02. 금융상품의 중요사항
 */
import KBHeader from "@components/common/KBHeader.tsx";
import img01 from "@imgs/loan/LoanChack_01.png";
import { Button, CheckboxProps, GetProp } from "antd";
import { Checkbox } from "antd";
import { useState } from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import $style from "./LoanImportCheck.module.scss";

const LoanImportCheck: FC = () => {
  const navigate = useNavigate();
  type CheckboxValueType = GetProp<typeof Checkbox.Group, "value">[number];

  const CheckboxGroup = Checkbox.Group;

  const plainOptions = [
    "금리 및 변동여부",
    "중도상환수수료",
    "상환금액/이자율/시기",
    "담보물에 관한 사항",
    "금융소비자 부담금액"
  ];
  const defaultCheckedList = ["", "", "", "", ""];

  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);

    if (list.length == 5) {
      setCheckAll(true);
    } else {
      setCheckAll(false);
    }
  };

  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);

    if (e.target.checked) {
      setCheckAll(true);
    } else {
      setCheckAll(false);
    }
  };

  const clickBtn = () => {
    if (checkAll) {
      navigate("/LoanSuitableConfirm");
    }
  };

  return (
    <>
      <KBHeader>금융상품의 중요사항</KBHeader>
      <div className={$style.LoanImportCheckWrap}>
        <h4>대출 신청 전 꼭 확인해주세요</h4>
        <div className={$style.checkBox}>
          <Checkbox
            onChange={onCheckAllChange}
            checked={checkAll}
            className={$style.checkAll}>
            금융상품 중요사항 및 필수 확인사항
          </Checkbox>
          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
            className={$style.checkList}
          />
        </div>
        <div className={$style.img}>
          <img src={img01} width="100%" />
        </div>
        <div className={$style.btn}>
          <Button disabled={checkAll ? false : true} onClick={clickBtn}>
            다음
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoanImportCheck;
