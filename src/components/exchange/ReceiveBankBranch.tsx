/**
 * Step 04. 수령정보입력(Progress bar 4/7)
 * 어느 지점에서 받으시겠어요?
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/ReceiveBankBranch.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC } from "react";

const ReceiveBankBranch: FC = () => {
  return (
    <>
    <MotionList>
      <BotProfile />
      <KBTalk>
				<img src={img} />
				<SelectableListWrap>
					<li>
            <SelectableBtn bgBtn>
							바로 진행
						</SelectableBtn>
          </li>
					<li>
            <SelectableBtn>
							다른 지점 검색
						</SelectableBtn>
          </li>
        </SelectableListWrap>
      </KBTalk>
    </MotionList>
    </>
  );
};

export default ReceiveBankBranch;
