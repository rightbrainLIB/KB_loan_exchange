/**
 * Step 10. 주택시세 정보 검색 채팅
 */
import BotBox from "@components/box/BotBox.tsx";
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import ExclaminationList from "@components/list/ExclaminationList.tsx";
import LoanSearchAddressPop from "@components/loan/LoanSearchAddressPop.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import MotionListWrap from "@components/motion/MotionListWrap.tsx";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC, useCallback, useState } from "react";

import $style from "./LoanSearchHouse.module.sass";

const LoanSearchHouse: FC = () => {
  const [openPriceValueSheet, setOpenPriceValueSheet] = useState(false);

  const exclaList = [
    { text: "KB시세가 없는 주택은 대출을 신청할 수 없습니다." },
    {
      text: "입력한 정보가 실제와 다를 경우 금리·한도 조건이 변동될 수 있습니다."
    }
  ];

  const showPriceValueSheet = useCallback(() => {
    setOpenPriceValueSheet(true);
  }, [openPriceValueSheet]);

  const closePriceValueSheet = useCallback(() => {
    setOpenPriceValueSheet(false);
  }, []);

  const goNextTask = useCallback(() => {
    console.log("nextTask");
  }, []);

  return (
    <>
      <MotionListWrap>
        <BotBox>
          <BotProfile />
          <KBTalk>
            <h2>주택 시세정보 검을 위해 주소를 입력해주세요</h2>
            <ExclaminationList exclaList={exclaList} />
            <SelectableListWrap>
              <li>
                <SelectableBtn bgBtn onClickBtn={showPriceValueSheet}>
                  주택 시세정보 검색
                </SelectableBtn>
              </li>
            </SelectableListWrap>
          </KBTalk>
        </BotBox>
      </MotionListWrap>

      <LoanSearchAddressPop
        openSheet={openPriceValueSheet}
        closeSheet={closePriceValueSheet}
        showNextTask={goNextTask}
      />

      {
        <MotionListWrap>
          <MotionList aniCondition={true}>
            <div className={$style.userSelectedValue}>
              <ul>
                <li>
                  <p></p>
                  <p>서울시 강남구 삼성로 212</p>
                </li>
                <li className={$style.postNumber}>
                  <p>07320</p>
                </li>
                <li className={$style.ratioValue}>
                  <p>전용면적</p>
                  <p>52.95㎡(19평)</p>
                </li>
                <li className={$style.floorStair}>
                  <p>층수</p>
                  <p>1층</p>
                </li>
              </ul>
            </div>
          </MotionList>
        </MotionListWrap>
      }
    </>
  );
};

export default LoanSearchHouse;
