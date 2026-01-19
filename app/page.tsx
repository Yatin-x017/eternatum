'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';

const LandingScene = dynamic(() => import('@/components/landing/LandingScene'), { ssr: false });

export default function LandingPage() {
    return (
        <main className="relative min-h-screen bg-background text-gray-100 overflow-x-hidden selection:bg-neon-cyan selection:text-black">
            {/* Background 3D Scene */}
            <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
                <LandingScene />
            </div>

            {/* Scanlines Overlay - reusing global class */}
            <div className="scanlines" />

            {/* Navbar */}
            <header className="relative z-10 mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-8 h-8 bg-neon-cyan rounded-sm animate-pulse-slow" />
                    <span className="font-pixel text-2xl font-bold tracking-widest text-glow-cyan group-hover:text-neon-cyan transition-colors">
                        ETERNATUM
                    </span>
                </div>
                <nav className="hidden md:flex gap-8 font-medium text-sm text-gray-400">
                    {['Games', 'Assets', 'Learn', 'Community'].map((item) => (
                        <a key={item} href="#" className="hover:text-neon-cyan hover:text-glow-cyan transition-colors">
                            {item}
                        </a>
                    ))}
                </nav>
                <div className="flex gap-4">
                    <Button variant="ghost" size="sm">Log In</Button>
                    <Button size="sm" glow>Sign Up</Button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative z-10 flex flex-col items-center justify-center pt-20 pb-32 px-6 text-center max-w-5xl mx-auto">
                <Badge variant="success" className="mb-6 animate-float">
                    SYSTEM ONLINE_ v1.0
                </Badge>

                <h1 className="font-pixel text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
                    Build Games <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-purple text-glow-cyan">
                        With Superpowers
                    </span>
                </h1>

                <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                    A modern developer platform that grew up playing arcade games.
                    Create, share, and play in a universe built for indie creators.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <Button size="lg" glow className="min-w-[200px] text-lg">
                        Insert Coin
                    </Button>
                    <Button variant="outline" size="lg" className="min-w-[200px] text-lg">
                        View Documentation
                    </Button>
                </div>
            </section>

            {/* Design Showcase Section */}
            <section className="relative z-10 py-20 bg-surface/50 border-y border-white/5 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
                        <h2 className="font-pixel text-2xl text-gray-500">SYSTEM COMPONENTS</h2>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1: Game Preview */}
                        <Card variant="game" className="h-full">
                            <div className="aspect-video bg-surface-highlight flex items-center justify-center border-b border-white/5 group-hover:border-cyan-500/20 transition-colors">
                                <span className="font-pixel text-gray-600">NO SIGNAL</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-bold text-xl text-white group-hover:text-neon-cyan transition-colors">Cyber Odyssey</h3>
                                    <Badge variant="warning">BETA</Badge>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm text-gray-400 font-pixel">
                                        <span>XP LEVEL</span>
                                        <span>12</span>
                                    </div>
                                    <div className="h-2 bg-black rounded-full overflow-hidden">
                                        <div className="h-full w-2/3 bg-electric-purple shadow-[0_0_10px_#bf00ff]" />
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Card 2: UI Elements */}
                        <Card className="space-y-8">
                            <div>
                                <h4 className="font-pixel text-sm text-gray-500 mb-4">BUTTON VARIANTS</h4>
                                <div className="flex flex-wrap gap-4">
                                    <Button variant="secondary" size="sm">Secondary</Button>
                                    <Button variant="outline" size="sm">Outline</Button>
                                    <Button variant="pixel" size="sm">PIXEL</Button>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-pixel text-sm text-gray-500 mb-4">INPUT FIELDS</h4>
                                <div className="space-y-4">
                                    <Input placeholder="Enter username..." />
                                    <div className="flex gap-2">
                                        <Badge>Default</Badge>
                                        <Badge variant="error">Error</Badge>
                                        <Badge variant="success">Success</Badge>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Card 3: Stats */}
                        <Card variant="stats" className="flex flex-col justify-center">
                            <h3 className="font-pixel text-lg text-gray-400 mb-1">PLAYER STATS</h3>
                            <div className="text-4xl font-bold text-white mb-2">9,001</div>
                            <div className="text-sm text-gray-500 mb-6">Active Players Online</div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-xs text-gray-400">
                                    <span>SERVER LOAD</span>
                                    <span className="text-neon-cyan">34%</span>
                                </div>
                                <div className="h-1 bg-black w-full">
                                    <div className="h-full w-[34%] bg-neon-cyan" />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    );
}

