/**
 * Step 04. 수령정보입력(Progress bar 4/7)
 * ‘여의도종합금융센터’ 지점 위치를 알려드릴까요?
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC } from "react";

const BankBranchLocation: FC = () => {
  return (
    <>
    <MotionList>
      <BotProfile />
      <KBTalk>
				<h2>‘여의도종합금융센터’ 지점 위치를 알려드릴까요?</h2>
				<SelectableListWrap>
					<li>
            <SelectableBtn>
							지점 위치 안내
						</SelectableBtn>
          </li>
					<li>
            <SelectableBtn>
							안내 생략
						</SelectableBtn>
          </li>
        </SelectableListWrap>
      </KBTalk>
    </MotionList>
    </>
  );
};

export default BankBranchLocation;
