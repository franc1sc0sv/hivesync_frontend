import React from 'react';
import { Pepito } from './videoCallsPepito';// Ajusta la ruta según tu estructura de carpetas
import { TopChannelBar } from './topChannelBar';

export const PageChannelTesting: React.FC = () => {
  return (
    <div className="p-4">
        
      <TopChannelBar />
      <Pepito />
    </div>
  );
};


