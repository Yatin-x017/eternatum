'use client';

import React, { useMemo } from 'react';
import { generateThumbnailDataUrl } from '@/lib/generateThumbnail';

interface GameThumbnailProps {
  gameId: string;
  title: string;
  customImage?: string;
  theme?: string;
  className?: string;
  showPlaceholder?: boolean;
}

export default function GameThumbnail({
  gameId,
  title,
  customImage,
  theme,
  className = '',
  showPlaceholder = true,
}: GameThumbnailProps) {
  // Generate thumbnail SVG data URL
  const thumbnailUrl = useMemo(() => {
    if (customImage) {
      return customImage;
    }

    return generateThumbnailDataUrl({
      id: gameId,
      title,
      theme,
    });
  }, [gameId, title, theme, customImage]);

  return (
    <div
      className={`relative w-full aspect-video bg-surface-highlight overflow-hidden rounded-lg ${className}`}
      style={{
        backgroundImage: `url(${thumbnailUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Fallback content if image fails to load */}
      {!customImage && !thumbnailUrl && showPlaceholder && (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neon-cyan/20 to-electric-purple/20">
          <div className="text-center">
            <div className="font-pixel text-sm text-gray-600 mb-2">GENERATING</div>
            <div className="text-xs text-gray-500">{title}</div>
          </div>
        </div>
      )}

      {/* Neon glow border on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
    </div>
  );
}
