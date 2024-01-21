import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface IMotionListWrap {
  children?: ReactNode;
}

const MotionListWrap: FC<IMotionListWrap> = ({ children }) => {
  const list = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.7
      }
    }
  };

  const onAnimationStart = () => {
    const scr = document.body.scrollHeight > document.body.clientHeight;
    if (scr) {
      window.scrollTo({
        top: document.body.scrollHeight - 50,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.div
      onAnimationStart={onAnimationStart}
      variants={list}
      initial={"hidden"}
      animate={"visible"}>
      {children}
    </motion.div>
  );
};

export default MotionListWrap;
