'use client';

import React from 'react';

interface CatMascotProps {
  animate?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'w-24 h-24',
  md: 'w-32 h-32',
  lg: 'w-48 h-48',
};

export default function CatMascot({
  animate = true,
  className = '',
  size = 'md',
}: CatMascotProps) {
  return (
    <div className={`${sizeMap[size]} ${className} relative`}>
      <svg
        viewBox="0 0 200 240"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
            @keyframes catWink {
              0%, 100% { cy: 85; }
              50% { cy: 95; }
            }
            @keyframes glassesReflect {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 0.8; }
            }
            @keyframes headTilt {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(-5deg); }
            }
            .cat-head {
              ${animate ? 'animation: headTilt 4s ease-in-out infinite;' : ''}
              transform-origin: 100px 90px;
            }
            .glasses-glare {
              ${animate ? 'animation: glassesReflect 3s ease-in-out infinite;' : ''}
            }
            .cat-eye {
              ${animate ? 'animation: catWink 6s ease-in-out infinite;' : ''}
            }
          `}</style>
          <filter id="catShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3" />
          </filter>
          <linearGradient id="catBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ff6b00', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#ff8c00', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Head */}
        <g className="cat-head" filter="url(#catShadow)">
          {/* Main head circle */}
          <circle
            cx="100"
            cy="90"
            r="45"
            fill="url(#catBodyGradient)"
            stroke="#1a1a1a"
            strokeWidth="2"
          />

          {/* Left ear */}
          <path
            d="M 70 50 L 55 10 L 75 40 Z"
            fill="url(#catBodyGradient)"
            stroke="#1a1a1a"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M 68 45 L 62 25 L 72 40 Z" fill="#ffb3b3" opacity="0.8" />

          {/* Right ear */}
          <path
            d="M 130 50 L 145 10 L 125 40 Z"
            fill="url(#catBodyGradient)"
            stroke="#1a1a1a"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M 132 45 L 138 25 L 128 40 Z" fill="#ffb3b3" opacity="0.8" />

          {/* Mouth */}
          <path
            d="M 100 105 Q 90 115 80 110"
            stroke="#1a1a1a"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 100 105 Q 110 115 120 110"
            stroke="#1a1a1a"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Nose */}
          <path
            d="M 95 100 L 100 108 L 105 100 Z"
            fill="#ff99cc"
            stroke="#1a1a1a"
            strokeWidth="1"
          />

          {/* Left eye (covered by glasses) */}
          <circle className="cat-eye" cx="78" cy="85" r="8" fill="white" />
          <circle cx="78" cy="87" r="5" fill="#1a1a1a" />
          <circle cx="80" cy="84" r="2" fill="white" />

          {/* Right eye (covered by glasses) */}
          <circle className="cat-eye" cx="122" cy="85" r="8" fill="white" />
          <circle cx="122" cy="87" r="5" fill="#1a1a1a" />
          <circle cx="124" cy="84" r="2" fill="white" />

          {/* Thug Glasses - Left lens */}
          <rect
            x="60"
            y="70"
            width="30"
            height="28"
            rx="4"
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="2.5"
          />
          <rect
            x="62"
            y="72"
            width="26"
            height="24"
            rx="3"
            fill="#0a0a0a"
            opacity="0.85"
          />
          <ellipse
            className="glasses-glare"
            cx="70"
            cy="78"
            rx="6"
            ry="5"
            fill="#00f0ff"
            opacity="0.3"
          />

          {/* Thug Glasses - Right lens */}
          <rect
            x="110"
            y="70"
            width="30"
            height="28"
            rx="4"
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="2.5"
          />
          <rect
            x="112"
            y="72"
            width="26"
            height="24"
            rx="3"
            fill="#0a0a0a"
            opacity="0.85"
          />
          <ellipse
            className="glasses-glare"
            cx="120"
            cy="78"
            rx="6"
            ry="5"
            fill="#bf00ff"
            opacity="0.3"
          />

          {/* Glasses bridge */}
          <line
            x1="90"
            y1="84"
            x2="110"
            y2="84"
            stroke="#1a1a1a"
            strokeWidth="2"
          />

          {/* Glasses arms */}
          <path
            d="M 60 82 L 45 85"
            stroke="#1a1a1a"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 140 82 L 155 85"
            stroke="#1a1a1a"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>

        {/* Body */}
        <ellipse
          cx="100"
          cy="155"
          rx="35"
          ry="45"
          fill="url(#catBodyGradient)"
          stroke="#1a1a1a"
          strokeWidth="2"
          filter="url(#catShadow)"
        />

        {/* Front left paw */}
        <ellipse
          cx="80"
          cy="190"
          rx="10"
          ry="18"
          fill="url(#catBodyGradient)"
          stroke="#1a1a1a"
          strokeWidth="2"
          filter="url(#catShadow)"
        />
        <ellipse cx="78" cy="208" rx="8" ry="6" fill="#ffb3b3" />

        {/* Front right paw */}
        <ellipse
          cx="120"
          cy="190"
          rx="10"
          ry="18"
          fill="url(#catBodyGradient)"
          stroke="#1a1a1a"
          strokeWidth="2"
          filter="url(#catShadow)"
        />
        <ellipse cx="122" cy="208" rx="8" ry="6" fill="#ffb3b3" />

        {/* Tail */}
        <path
          d="M 130 140 Q 160 120 150 70"
          stroke="url(#catBodyGradient)"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          filter="url(#catShadow)"
        />
      </svg>

      {/* Glow effect around cat */}
      {animate && (
        <div className="absolute inset-0 rounded-full animate-pulse-neon" />
      )}
    </div>
  );
}
