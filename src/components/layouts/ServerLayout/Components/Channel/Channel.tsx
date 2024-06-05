import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import FakePageTemplate from '../../../../modals/FakePageTemplate';
import { AnimatePresence } from 'framer-motion';


export const Channel: React.FC = () => {
  const [fakePages, setFakePages] = useState<number[]>([]);

  const openFakePage = () => setFakePages((prev) => [...prev, prev.length]);
  const closeFakePage = () => setFakePages((prev) => prev.slice(0, -1));

  const handlers = useSwipeable({
    onSwipedLeft: () => openFakePage(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className='flex flex-row justify-center items-center w-full max-h-fit bg-overlay_2 screen_overlay rounded-tl-lg rounded-bl-lg'>
      <AnimatePresence>
        {fakePages.map((_, index) => (
          <FakePageTemplate
            key={index}
            isOpen={true}
            onClose={closeFakePage}
            onOpenNew={openFakePage}
            index={index}
          />
        ))}
      </AnimatePresence>

      <div 
        {...handlers} 
        className='w-full h-full rounded-tl-lg  bg-overlay_2 rounded-bl-lg ml-auto screen_overlay'
        onClick={openFakePage}
      ></div>
    </div>
  );
};


