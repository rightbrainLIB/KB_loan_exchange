/**
 * Step 05. 출금정보입력(Progress bar 5/7)
 * 휴대폰 번호가 맞는지 확인해주세요
 */
import EmphasisContent from "@components/box/EmphasisContent.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC } from "react";

const CheckPhoneNumber: FC = () => {
  return (
    <>
    <MotionList>
      <BotProfile />
      <KBTalk>
				<h2>휴대폰 번호가 맞는지 확인해주세요</h2>
        <EmphasisContent>
          <p>010 1234 1234</p>
        </EmphasisContent>
				<SelectableListWrap>
					<li>
            <SelectableBtn>
              번호 확인 완료
						</SelectableBtn>
          </li>
          <li>
            <SelectableBtn>
              번호 수정
						</SelectableBtn>
          </li>
				</SelectableListWrap>
      </KBTalk>
    </MotionList>
    </>
  );
};

export default CheckPhoneNumber;
