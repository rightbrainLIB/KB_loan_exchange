import { Button } from "antd";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import $style from "./SelectTaskView.module.sass";

const Index = () => {
  const navigate = useNavigate();

  const onClickTask = useCallback(
    (val: string) => {
      navigate(val);
    },
    [navigate]
  );

  return (
    <>
      <div className={$style.taskContainer}>
        <ul className={$style.taskListWrap}>
          <li>
            <Button onClick={() => onClickTask("exchange")}>환전</Button>
          </li>
          <li>
            <Button>대출</Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Index;
