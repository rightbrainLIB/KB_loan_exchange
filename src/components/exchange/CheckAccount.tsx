/**
 * Step 05. 출금정보입력(Progress bar 5/7)
 * 출금 계좌 맞는지 확인
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import img from "@imgs/exchange/CheckAccount.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC } from "react";

const CheckAccount: FC = () => {
  return (
    <>
    <MotionList>
      <BotProfile />
      <KBTalk>
				<img src={img} /> 
				<SelectableListWrap>
					<li>
            <SelectableBtn bgBtn>
              출금계좌 확인 완료
						</SelectableBtn>
          </li>
          <li>
            <SelectableBtn>
              출금계좌 변경
						</SelectableBtn>
          </li>
          <li>
            <SelectableBtn>
              부족한 금액 모으기
						</SelectableBtn>
          </li>
				</SelectableListWrap>
      </KBTalk>
    </MotionList>
    </>
  );
};

export default CheckAccount;
