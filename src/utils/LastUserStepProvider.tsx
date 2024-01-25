import { IExchangeState } from "@slices/exchangeSlices.ts";
import { useSelector } from "react-redux";

const LastTrueUserStep = () => {
  // const dispatch = useDispatch();

  const userSteps = useSelector(
    (state: { exchange: IExchangeState }) => state.exchange.userStep
  );

  const findLastTrueStep = (steps: { [key: string]: boolean }) => {
    const reversedKeys = Object.keys(steps).reverse();
    for (const key of reversedKeys) {
      if (steps[key]) {
        return key;
      }
    }
    return null;
  };
  return findLastTrueStep(userSteps);
};

export default LastTrueUserStep;
