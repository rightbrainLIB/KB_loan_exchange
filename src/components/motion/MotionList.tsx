import { motion } from "framer-motion";
import { FC, ReactNode, useCallback } from "react";

interface IMotionList {
  aniCondition?: boolean;
  afterAnim?: () => void;
  showHeight?: number | string;
  children?: ReactNode;
}

const MotionList: FC<IMotionList> = ({
  aniCondition = false,
  afterAnim,
  showHeight,
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
        duration: 0.5,
        onComplete: () => {
          exitAnim();
          setTimeout(() => {
            window.scrollTo({
              top: 1000000,
              behavior: "smooth"
            });
          }, 800);
        }
      }}>
      {children}
    </motion.div>
  );
};

export default MotionList;
