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

  return (
    <motion.div variants={list} initial={"hidden"} animate={"visible"}>
      {children}
    </motion.div>
  );
};

export default MotionListWrap;
