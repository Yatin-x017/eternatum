'use client';
import { Inter } from 'next/font/google';
import { ArcadeBackground } from '@/components/arcade-background/ArcadeBackground';
import { ArcadeBackgroundProvider, useArcadeBackground } from '@/contexts/ArcadeBackgroundContext';
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-neon-cyan focus:text-black focus:rounded-md focus:font-bold focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to Content
        </a>
        <ArcadeBackgroundProvider>
          <AppContent>{children}</AppContent>
        </ArcadeBackgroundProvider>
      </body>
    </html>
  );
}
