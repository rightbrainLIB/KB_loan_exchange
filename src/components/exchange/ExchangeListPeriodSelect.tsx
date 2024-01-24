/**
 * 환전 미수령 내역 : 환전 내역 기간 설정
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import iconArrow20 from "@imgs/icons/icon_arrow_20.png";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { FC } from "react";

const ExchangeListPeriodSelect: FC = () => {
  return (
    <>
      <MotionList>
        <BotProfile />
        <KBTalk>
          <h2>환전 내역 기간을 설정해주세요</h2>
          <SelectableListWrap>
            <li>
              <SelectableBtn>1개월</SelectableBtn>
            </li>
            <li>
              <SelectableBtn>6개월</SelectableBtn>
            </li>
            <li>
              <SelectableBtn>1년</SelectableBtn>
            </li>
            <li>
              <SelectableBtn>5년</SelectableBtn>
            </li>
            <li>
              <SelectableBtn>
                날짜 선택
                <span>
                  <img src={`${iconArrow20}`} alt="" />
                </span>
              </SelectableBtn>
            </li>
          </SelectableListWrap>
        </KBTalk>
      </MotionList>
    </>
  );
};

export default ExchangeListPeriodSelect;
