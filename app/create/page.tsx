'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Play } from 'lucide-react';

const CodeEditor = dynamic(() => import('@/components/editor/CodeEditor'), { ssr: false });
const GameCanvas = dynamic(() => import('@/components/game/GameCanvas'), { ssr: false });

export default function Home() {
  return (
    <main className="flex h-screen flex-col bg-neutral-900 text-white overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-neutral-800 bg-neutral-950 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Eternatum</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-md bg-green-600 px-4 py-1.5 text-sm font-medium hover:bg-green-700 transition-colors">
            <Play size={16} />
            Run Game
          </button>
        </div>
      </header>

      {/* Workspace */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: Editor */}
        <div className="w-1/2 border-r border-neutral-800 flex flex-col">
          <div className="flex items-center justify-between bg-neutral-900 px-4 py-2 text-xs text-neutral-400 border-b border-neutral-800">
            <span>game.js</span>
          </div>
          <div className="flex-1 relative">
            <CodeEditor />
          </div>
        </div>

        {/* Right: Game Preview */}
        <div className="w-1/2 bg-neutral-950 flex flex-col relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <GameCanvas />
          </div>
        </div>
      </div>
    </main>
  );
}
