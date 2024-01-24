/**
 * Step 05. 출금정보입력(Progress bar 5/7)
 * 권유한 직원
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC } from "react";


const RecommendedEmployee: FC = () => {
  return (
    <>
    <MotionList>
      <BotProfile />
      <KBTalk>
				<h2>권유한 직원이 있나요?</h2>
				<SelectableListWrap>
					<li>
            <SelectableBtn>
							지점명 검색
						</SelectableBtn>
          </li>
					<li>
            <SelectableBtn>
							직원이름 검색
						</SelectableBtn>
          </li>
					<li>
            <SelectableBtn>
							직원번호 검색
						</SelectableBtn>
          </li>
					<li>
            <SelectableBtn>
							없음
						</SelectableBtn>
          </li>
        </SelectableListWrap>
      </KBTalk>
    </MotionList>
    </>
  );
};

export default RecommendedEmployee;
