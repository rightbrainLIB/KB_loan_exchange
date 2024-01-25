/**
 * 환전미수령내역 : 수령 대기
 */
import KBTalk from "@components/box/KBTalk.tsx";
import BotProfile from "@components/imgs/BotProfile.tsx";
import MotionList from "@components/motion/MotionList.tsx";
import Waiting from "@imgs/exchange/WaitingReceive.png";
import icGoLink from "@imgs/icons/ic_go_link.png";
import { setWaitingReceive } from "@slices/exchangeSlices.ts";
import SelectableBtn from "@src/components/buttons/SelectableBtn";
import SelectableListWrap from "@src/components/list/SelectableListWrap";
import { ExchangeState } from "@src/store";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import $style from "./WaitingReceive.module.scss";

const WaitingReceive: FC = () => {
  const dispatch = useDispatch();

  const [showBotStep, setShowBotStep] = useState(false);

  const { showMoreDetailInfo } = useSelector(
    (state: ExchangeState) => state.exchange.userStep
  );
  const { waitingReceive } = useSelector(
    (state: ExchangeState) => state.exchange.botStep
  );

  useEffect(() => {
    if (showMoreDetailInfo) {
      setTimeout(() => {
        setShowBotStep(true);
      }, 300);
      setTimeout(() => {
        dispatch(setWaitingReceive(true));
      }, 600);
    }
  }, [showMoreDetailInfo, dispatch]);

  return (
    <>
      {showBotStep && (
        <MotionList aniCondition={waitingReceive} showHeight={537}>
          <BotProfile />
          <KBTalk>
            <img className={$style.img} src={Waiting} />
            <SelectableListWrap>
              <li className={$style.selectList}>
                <SelectableBtn>
                  되팔기
                  <span>
                    <img src={`${icGoLink}`} alt="" />
                  </span>
                </SelectableBtn>
              </li>
              <li className={$style.selectList}>
                <SelectableBtn>
                  수령정보 등록
                  <span>
                    <img src={`${icGoLink}`} alt="" />
                  </span>
                </SelectableBtn>
              </li>
              <li className={$style.selectList}>
                <SelectableBtn>
                  외화예금입금
                  <span>
                    <img src={`${icGoLink}`} alt="" />
                  </span>
                </SelectableBtn>
              </li>
            </SelectableListWrap>
            <div className={$style.moreview}>상세보기 &#62;</div>
          </KBTalk>
        </MotionList>
      )}
    </>
  );
};

export default WaitingReceive;
