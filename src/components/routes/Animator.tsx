import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CurrentPage } from "./CurrentPage";

const storedValue = localStorage.getItem("transitionState");
const verifyState = storedValue ? JSON.parse(storedValue) : false;

interface AnimatorProps {
  location: any
}

export const Animator = () => {
  const location = useLocation();

  return (
    <>
      {verifyState ? <Animation location={location} /> : <NoAnimation location={location} />}
    </>
  );
};


const Animation = ({location: AnimatorProps}) => {

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        key={location.pathname}
        style={{ position: "absolute", width: "100%" }}
      >
        <CurrentPage />
      </motion.div>
    </AnimatePresence>
  )
}

const NoAnimation = ({location: AnimatorProps}) => {

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
      >
        <CurrentPage />
      </motion.div>
    </AnimatePresence>
  )
}