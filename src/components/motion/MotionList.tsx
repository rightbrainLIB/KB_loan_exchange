import { motion } from "framer-motion";
import { FC, ReactNode, useCallback } from "react";

interface IMotionList {
  aniCondition?: boolean;
  afterAnim?: () => void;
  children?: ReactNode;
}

const MotionList: FC<IMotionList> = ({
  aniCondition = false,
  afterAnim,
  children
}) => {
  const item = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    hideAndRemove: { opacity: 0, y: -50, height: 0 }
  };

  const exitAnim = useCallback(() => {
    aniCondition &&
      afterAnim &&
      setTimeout(() => {
        afterAnim();
      }, 500);
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
        }
      }}>
      {children}
    </motion.div>
  );
};

export default MotionList;
