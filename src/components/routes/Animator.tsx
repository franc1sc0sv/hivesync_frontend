import { useLocation } from "react-router-dom";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { CurrentPage } from "./CurrentPage";

export const Animator = () => {
  const location = useLocation();

  const variants: Variants = {
    initialAnimation: { opacity: 0 },
    animateAnimation: { opacity: 1 },
    exitAnimation: { opacity: 0 },
    // transitionProps : {duration:0.4}
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={variants}
        style={{ position: "absolute", width: "100%" }}
      >
        <CurrentPage />
      </motion.div>
    </AnimatePresence>
  );
};
