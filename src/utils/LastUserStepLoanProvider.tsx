import { ILoanState } from "@slices/loanSlices.ts";
import { useSelector } from "react-redux";

const LastTrueUserStepLoan = () => {
  // const dispatch = useDispatch();

  const userSteps = useSelector(
    (state: { loan: ILoanState }) => state.loan.userStep
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

export default LastTrueUserStepLoan;
