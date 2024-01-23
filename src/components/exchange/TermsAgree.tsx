import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import UtilUnderTalkList from "@components/list/UtilUnderTalkList.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC, useCallback, useEffect, useState } from "react";

const TermsAgree: FC = () => {
  return (
    <>
    <MotionList>
      <BotProfile />
      <KBTalk>
        <h2>은행지점에서 받기 위해 외화거래에<br />대한 약관동의가 필요해요</h2>
        <SelectableListWrap>
          <li>
            <SelectableBtn bgBtn>외화 약관 동의</SelectableBtn>
          </li>
        </SelectableListWrap>
      </KBTalk>
      <UtilUnderTalkList btnList={["외화거래기본약관 확인"]} />
    </MotionList>
    </>
  );
};

export default TermsAgree;
