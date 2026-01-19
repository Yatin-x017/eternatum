'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ArcadeBackgroundContextType {
  isBackgroundVisible: boolean;
  setBackgroundVisible: (isVisible: boolean) => void;
}

const ArcadeBackgroundContext = createContext<ArcadeBackgroundContextType | undefined>(undefined);

export const ArcadeBackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [isBackgroundVisible, setBackgroundVisible] = useState(true);

  return (
    <ArcadeBackgroundContext.Provider value={{ isBackgroundVisible, setBackgroundVisible }}>
      {children}
    </ArcadeBackgroundContext.Provider>
  );
};

export const useArcadeBackground = () => {
  const context = useContext(ArcadeBackgroundContext);
  if (context === undefined) {
    throw new Error('useArcadeBackground must be used within an ArcadeBackgroundProvider');
  }
  return context;
};
