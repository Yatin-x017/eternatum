/**
 * Game Thumbnail Generator
 * Creates unique game-specific thumbnail designs based on game data
 */

interface GameThumbnailConfig {
  id: string;
  title: string;
  theme?: string;
  colors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

// Default game themes with colors
const GAME_THEMES: Record<string, { colors: string[]; symbols: string[] }> = {
  cyberpunk: {
    colors: ['#00f0ff', '#bf00ff', '#ff0055'],
    symbols: ['◆', '◇', '▲', '▼', '█'],
  },
  retro: {
    colors: ['#ffff00', '#00ff41', '#ff00aa'],
    symbols: ['●', '○', '■', '□', '▪'],
  },
  space: {
    colors: ['#0099ff', '#00f0ff', '#bf00ff'],
    symbols: ['★', '✦', '◆', '✧', '⚡'],
  },
  fantasy: {
    colors: ['#39ff14', '#ff0055', '#0099ff'],
    symbols: ['❖', '✤', '✦', '◈', '★'],
  },
  scifi: {
    colors: ['#00f0ff', '#ff0055', '#ffff00'],
    symbols: ['⬢', '◉', '▲', '◆', '█'],
  },
};

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export function getGameTheme(gameId: string, title: string): string {
  const themes = Object.keys(GAME_THEMES);
  const hash = hashString(gameId + title);
  return themes[hash % themes.length];
}

export function generateThumbnailSVG(config: GameThumbnailConfig): string {
  const themeName = config.theme || getGameTheme(config.id, config.title);
  const theme = GAME_THEMES[themeName] || GAME_THEMES.cyberpunk;

  const titleHash = hashString(config.title);
  const color1 = theme.colors[titleHash % theme.colors.length];
  const color2 = theme.colors[(titleHash + 1) % theme.colors.length];
  const color3 = theme.colors[(titleHash + 2) % theme.colors.length];

  const symbol1 = theme.symbols[titleHash % theme.symbols.length];
  const symbol2 = theme.symbols[(titleHash + 1) % theme.symbols.length];
  const symbol3 = theme.symbols[(titleHash + 2) % theme.symbols.length];

  const gradientId = `grad-${config.id}`;

  return `
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:0.1" />
          <stop offset="50%" style="stop-color:${color2};stop-opacity:0.2" />
          <stop offset="100%" style="stop-color:${color3};stop-opacity:0.1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <style>
          @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
          @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
          .float-item { animation: float 4s ease-in-out infinite; }
          .pulse-item { animation: pulse 3s ease-in-out infinite; }
        </style>
      </defs>

      <!-- Background -->
      <rect width="800" height="450" fill="#0a0a0a"/>
      <rect width="800" height="450" fill="url(#${gradientId})"/>

      <!-- Grid pattern -->
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${color1}" stroke-width="0.5" opacity="0.2"/>
        </pattern>
      </defs>
      <rect width="800" height="450" fill="url(#grid)"/>

      <!-- Animated corner symbols -->
      <text x="50" y="80" font-size="48" fill="${color1}" opacity="0.5" class="float-item">${symbol1}</text>
      <text x="700" y="80" font-size="48" fill="${color2}" opacity="0.5" class="float-item" style="animation-delay: 0.2s">${symbol2}</text>
      <text x="50" y="400" font-size="48" fill="${color3}" opacity="0.5" class="float-item" style="animation-delay: 0.4s">${symbol3}</text>
      <text x="700" y="400" font-size="48" fill="${color1}" opacity="0.5" class="float-item" style="animation-delay: 0.6s">${symbol1}</text>

      <!-- Center accent circles -->
      <circle cx="200" cy="150" r="60" fill="none" stroke="${color1}" stroke-width="2" opacity="0.3" class="pulse-item"/>
      <circle cx="200" cy="150" r="40" fill="none" stroke="${color2}" stroke-width="2" opacity="0.4" class="pulse-item" style="animation-delay: 0.3s"/>

      <circle cx="600" cy="300" r="60" fill="none" stroke="${color2}" stroke-width="2" opacity="0.3" class="pulse-item" style="animation-delay: 0.5s"/>
      <circle cx="600" cy="300" r="40" fill="none" stroke="${color3}" stroke-width="2" opacity="0.4" class="pulse-item" style="animation-delay: 0.8s"/>

      <!-- Game title text background -->
      <rect x="50" y="350" width="700" height="80" fill="#0a0a0a" opacity="0.7" rx="8"/>

      <!-- Game title -->
      <text x="400" y="395" font-family="Pixelify Sans, monospace" font-size="32" font-weight="bold" fill="${color1}" text-anchor="middle" filter="url(#glow)">
        ${config.title.toUpperCase()}
      </text>

      <!-- Neon border -->
      <rect x="5" y="5" width="790" height="440" fill="none" stroke="${color1}" stroke-width="2" opacity="0.5" rx="8"/>
      <rect x="0" y="0" width="800" height="450" fill="none" stroke="${color2}" stroke-width="1" opacity="0.3" rx="8"/>

      <!-- Scanline effect -->
      <defs>
        <pattern id="scanlines" x="0" y="0" width="800" height="4" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="800" height="2" fill="#000" opacity="0.1"/>
        </pattern>
      </defs>
      <rect width="800" height="450" fill="url(#scanlines)"/>
    </svg>
  `;
}

export function generateThumbnailDataUrl(config: GameThumbnailConfig): string {
  const svg = generateThumbnailSVG(config);
  const encoded = encodeURIComponent(svg);
  return `data:image/svg+xml;utf8,${encoded}`;
}
