import { motion } from "framer-motion";
import { FC, ReactNode, useCallback } from "react";

interface IMotionList {
  aniCondition?: boolean;
  afterAnim?: () => void;
  showHeight?: number | string;
  moveScroll?: number;
  targetScroll?: number;
  noScroll?: boolean;
  children?: ReactNode;
}

const MotionList: FC<IMotionList> = ({
  aniCondition = false,
  afterAnim,
  showHeight = "100%",
  moveScroll = 0,
  targetScroll,
  noScroll = false,
  children
}) => {
  const item = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, height: showHeight },
    hideAndRemove: { opacity: 0, y: -50, height: 0 }
  };

  const exitAnim = useCallback(() => {
    if (aniCondition && afterAnim) {
      afterAnim();
    }
  }, [afterAnim, aniCondition]);

  // const chkLastScroll = useCallback(
  //   (e: React.TransitionEvent<HTMLDivElement>) => {
  //     // console.log(e);
  //     // console.log(document.body.scrollTop);
  //   },
  //   []
  // );

  return (
    <motion.div
      variants={item}
      initial={"hidden"}
      animate={aniCondition ? "visible" : "hideAndRemove"}
      // onAnimationStart={onResetMotion}
      // onTransitionEnd={chkLastScroll}
      transition={{
        duration: 0.6,
        type: "spring",
        bounce: 0.5,
        onComplete: () => {
          exitAnim();
          let top = 0;
          if (moveScroll && moveScroll > 0) {
            top = document.body.scrollTop + moveScroll;
          } else if (targetScroll && targetScroll > 0) {
            top = targetScroll;
          } else {
            top = 1000000;
          }

          if (!noScroll) {
            document.body.scrollTo({
              top: top,
              behavior: "smooth"
            });
          }
        }
      }}>
      {children}
    </motion.div>
  );
};

export default MotionList;
