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
    visible: { opacity: 1, y: 0 }
  };

  const exitAnim = useCallback(() => {
    setTimeout(() => {
      afterAnim && afterAnim();
    }, 300);
  }, [afterAnim]);

  return (
    <motion.div
      variants={item}
      initial={{ opacity: 0, y: -20 }}
      animate={aniCondition ? "visible" : "hidden"}
      onAnimationComplete={exitAnim}>
      {children}
    </motion.div>
  );
};

export default MotionList;
