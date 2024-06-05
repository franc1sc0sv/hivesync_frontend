import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';

interface FakePageProps {
  onClose: () => void;
  onOpenNew: () => void;
  isOpen: boolean;
  index: number;
}

const FakePageTemplate: React.FC<FakePageProps> = ({ onClose, onOpenNew, isOpen, index }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300); 
  };

  const handlers = useSwipeable({
    onSwipedRight: handleClose,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <AnimatePresence>
      {isOpen && !isClosing && (
        <motion.div
          {...handlers}
          className="fixed inset-0 flex items-center justify-center bg-[#2E2934] z-50 shadow-3xl"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30,  mass: 1.2}}
          style={{ zIndex: 100 + index }}
          

        >
          <div className="p-4 text-center">
            <h1 className="text-2xl font-bold text-white">Fake Page {index + 1}</h1>
            <p className="mt-4 text-white">Swipe right to close this page.</p>
            <button onClick={onOpenNew} className="mt-4 bg-white text-black px-4 py-2 rounded">
              Open Another Fake Page
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FakePageTemplate;
