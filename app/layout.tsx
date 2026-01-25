'use client';
import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import { ArcadeBackground } from '@/components/arcade-background/ArcadeBackground';
import { ArcadeBackgroundProvider, useArcadeBackground } from '@/contexts/ArcadeBackgroundContext';
import { AudioProvider } from '@/contexts/AudioContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

function AppContent({ children }: { children: React.ReactNode }) {
  const { isBackgroundVisible } = useArcadeBackground();

  return (
    <>
      {isBackgroundVisible && <ArcadeBackground />}
      {children}
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <AudioProvider>
            <ArcadeBackgroundProvider>
              <AppContent>{children}</AppContent>
            </ArcadeBackgroundProvider>
          </AudioProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
