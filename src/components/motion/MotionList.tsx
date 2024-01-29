import { motion } from "framer-motion";
import { FC, ReactNode, useCallback } from "react";

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
  showHeight,
  moveScroll = 0,
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
      setTimeout(() => {
        afterAnim();
      }, 300);
    }
  }, [afterAnim, aniCondition]);

  return (
    <motion.div
      variants={item}
      initial={"hidden"}
      animate={aniCondition ? "visible" : "hideAndRemove"}
      transition={{
        duration: 0.6,
        type: "spring",
        bounce: 0.5,
        onComplete: () => {
          exitAnim();
          // console.log(document.body.scrollTop + 30);
          console.log(noScroll);
          let top = 0;
          if (noScroll) {
            top = 0;
          } else if (moveScroll && moveScroll > 0) {
            top = document.body.scrollTop + moveScroll;
          } else {
            top = 1000000;
          }
          document.body.scrollTo({
            top: top,
            behavior: "smooth"
          });
        }
      }}>
      {children}
    </motion.div>
  );
};

export default MotionList;
