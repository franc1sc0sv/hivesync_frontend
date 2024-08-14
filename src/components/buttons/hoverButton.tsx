import React from 'react';

interface ButtonHoverProp {
  children: React.ReactNode;
  direction: "r" | "l" | "t" | "b";
}

export const ButtonHover: React.FC<ButtonHoverProp> = ({ children, direction }) => {
  // Construir la clase dinámica
  const dynamicClass = `rounded-${direction}-lg bg-overlay_2 hover:bg-overlay_4`;

  return (
    <div
      className={`flex items-center justify-center ${dynamicClass} w-[4.3rem] h-[3.4rem] p-4 transition-colors duration-300 ease-in-out`}
    >
      {children}
    </div>
  );
};
