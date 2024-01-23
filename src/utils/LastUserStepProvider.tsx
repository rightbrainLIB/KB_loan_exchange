import { IExchangeState } from "@slices/exchangeSlices.ts";
import { useSelector } from "react-redux";

const LastTrueUserStep = () => {
  // const dispatch = useDispatch();

  const userSteps = useSelector(
    (state: { exchange: IExchangeState }) => state.exchange.userStep
  );

  const findLastTrueStep = (steps: { [key: string]: boolean }) => {
    // 역순으로 속성 이름들을 가져옵니다.
    const reversedKeys = Object.keys(steps).reverse();
    // 역순으로 반복하면서 `true` 값을 찾습니다.
    for (const key of reversedKeys) {
      if (steps[key]) {
        return key;
      }
    }
    // dispatch(setLastUserStep(null));
    return null;
  };
  // 찾은 step을 표시합니다. 값이 없으면 "No steps completed"를 표시합니다.
  // dispatch(setLastUserStep(findLastTrueStep(userSteps)));
  return findLastTrueStep(userSteps);
};

export default LastTrueUserStep;
