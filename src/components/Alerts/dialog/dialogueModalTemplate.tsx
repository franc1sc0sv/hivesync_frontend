import { useState } from "react";
import { useModal } from "../../../store/useModal";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "../../Icons/close";

interface DialogueProps {
  identificator: string;
  children: React.ReactNode;
}

export const DialogueTemplate: React.FC<DialogueProps> = ({
  identificator,
  children,
}) => {
  const { modalId, setModalId } = useModal();

  const onClose = () => {
    setModalId("");
  };

  return (
    <AnimatePresence>
      {modalId === identificator && (
        <motion.div
          key={identificator}
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen overflow-y-auto bg-overlay_3 bg-opacity-50"
        >
          <motion.div
            className="relative p-4 w-full max-w-md max-h-full"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {/* Modal content */}
            <motion.div
              className="relative bg-overlay_2 rounded-xl shadow"
              initial={{
                opacity: 0,
                scale: 0.3,
                filter: "blur(20px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 0.3,
                filter: "blur(20px)",
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between p-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="ms-auto inline-flex justify-center items-center "
                >
                  <CloseIcon size={30} color="white" />
                </button>
              </div>
              {/* Modal body */}
              <div>{children}</div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
