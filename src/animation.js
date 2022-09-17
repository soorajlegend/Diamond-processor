import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, rotateY: -100 },//rotate: -100 },
  animate: { opacity: 1, rotateY: 0 }, //rotate: 0 },
  exit: { opacity: 0, rotateY: 100 }//rotate: 90 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{duration: 0.5}}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
