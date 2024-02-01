import { setContainerBottomSize } from "@slices/globalUISlice.ts";
import { KBState } from "@src/store";
import { motion } from "framer-motion";
import { FC, ReactNode, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface IMotionList {
  aniCondition?: boolean;
  afterAnim?: () => void;
  showHeight?: number | string;
  moveScroll?: number;
  noScroll?: boolean;
  children?: ReactNode;
}

const MotionList: FC<IMotionList> = ({
  aniCondition = false,
  afterAnim,
  showHeight = "100%",
  moveScroll = 0,
  noScroll = false,
  children
}) => {
  const dispatch = useDispatch();

  const item = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, height: showHeight },
    hideAndRemove: { opacity: 0, y: -50, height: 0 }
  };

  const exitAnim = useCallback(() => {
    if (aniCondition && afterAnim) {
      setTimeout(() => {
        afterAnim();
      }, 300);
    }
  }, [afterAnim, aniCondition]);

  const chkLastScroll = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      // console.log(e);
      // console.log(document.body.scrollTop);
    },
    []
  );

  const { containerBootmSize } = useSelector(
    (state: KBState) => state.globalUI
  );

  const onResetMotion = useCallback(() => {
    console.log("reset");
    dispatch(setContainerBottomSize(null));
  }, []);

  useEffect(() => {
    // if (containerBootmSize && containerBootmSize > 0) {
    //   let top = 0;
    //   if (noScroll) {
    //     top = 0;
    //   } else if (moveScroll && moveScroll > 0) {
    //     top = document.body.scrollTop + moveScroll;
    //   } else {
    //     top = 1000000;
    //   }
    //   console.log("top = ", top);
    //   document.body.scrollTo({
    //     top: top,
    //     behavior: "smooth"
    //   });
    // }
    // document.body.scrollTo({
    //   top: 1000000,
    //   behavior: "smooth"
    // });
    if (containerBootmSize && containerBootmSize > 0) {
      console.log("변경!!", containerBootmSize);
      // setTimeout(() => {
      //   document.body.scrollTo({
      //     top: 1000000,
      //     behavior: "smooth"
      //   });
      // }, 800);
    }
  }, [containerBootmSize]);

  return (
    <motion.div
      variants={item}
      initial={"hidden"}
      animate={aniCondition ? "visible" : "hideAndRemove"}
      // onAnimationStart={onResetMotion}
      onTransitionEnd={chkLastScroll}
      transition={{
        duration: 0.6,
        type: "spring",
        bounce: 0.5,
        onComplete: () => {
          exitAnim();
          const containerEl = document.querySelector(
            "[class*='_KBContainer_']"
          ) as HTMLDivElement;
          const lastEl: HTMLDivElement = document.querySelector(
            "[class*='_KBContainer_']"
          )?.lastChild as HTMLDivElement;
          const lastElHeight = lastEl.clientHeight; // 마지막 요소 높이값
          const lastElPos = lastEl.getBoundingClientRect().y; // 마지막 요소 위치
          const screenHeight = window.innerHeight;
          const headerHeight = 48;
          const containerPadding = parseInt(
            getComputedStyle(containerEl).paddingBottom
          );
          const nowScrollPos = document.body.scrollTop;

          const execScrollValue =
            document.body.scrollTop + lastElPos + lastElHeight;

          console.log(execScrollValue);

          if (execScrollValue > -100) {
            // containerPadding에 지정할 값
            //   const variableContainerPadding =
            //     screenHeight - lastElHeight - headerHeight - 18;
            //   dispatch(setContainerBottomSize(variableContainerPadding));
            // console.log("scroll");
          } else {
            //   // console.log("미실행");
            //   // dispatch(setContainerBottomSize(null));
          }
        }
      }}>
      {children}
    </motion.div>
  );
};

export default MotionList;
