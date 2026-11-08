import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';

interface ProjectVisualProps {
  id?: string;
  imageUrl?: string;
  logoUrl?: string;
  title: string;
  category: string;
  schematicType?: Project['schematicType'];
  status?: string;
  className?: string;
}

/**
 * Generates a real SVG interface mockup image data-URI in neutral monochrome
 * so every Product, Work item, or Venture always renders an actual <img> thumbnail.
 */
function buildMockupThumbnailDataUri(title: string, category: string, schematicType?: string): string {
  const safeTitle = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeCat = category.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  let innerGraphic = '';
  if (schematicType === 'feedback-pipeline') {
    innerGraphic = `
      <rect x="70" y="135" width="190" height="220" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
      <rect x="90" y="160" width="90" height="10" rx="5" fill="#e4e4e7"/>
      <rect x="90" y="185" width="150" height="8" rx="4" fill="#3f3f46"/>
      <rect x="90" y="205" width="130" height="8" rx="4" fill="#3f3f46"/>
      <rect x="90" y="240" width="150" height="42" rx="8" fill="#1c1c20" stroke="#52525b" stroke-width="1"/>
      <rect x="285" y="135" width="210" height="220" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
      <circle cx="335" cy="195" r="28" fill="none" stroke="#e4e4e7" stroke-width="6"/>
      <rect x="380" y="175" width="90" height="12" rx="6" fill="#f4f4f5"/>
      <rect x="380" y="198" width="65" height="8" rx="4" fill="#71717a"/>
      <rect x="305" y="245" width="170" height="85" rx="10" fill="#1c1c20"/>
      <path d="M325 305 L360 280 L395 292 L445 262" stroke="#e4e4e7" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <rect x="520" y="135" width="210" height="220" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
      <rect x="542" y="162" width="165" height="36" rx="8" fill="#27272a" stroke="#71717a"/>
      <rect x="542" y="212" width="165" height="36" rx="8" fill="#1c1c20"/>
      <rect x="542" y="262" width="165" height="36" rx="8" fill="#1c1c20"/>
    `;
  } else if (schematicType === 'lead-recovery') {
    innerGraphic = `
      <rect x="70" y="135" width="660" height="220" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
      <rect x="95" y="162" width="190" height="165" rx="10" fill="#1c1c20" stroke="#2a2a2e"/>
      <rect x="112" y="182" width="80" height="10" rx="5" fill="#e4e4e7"/>
      <rect x="112" y="206" width="155" height="44" rx="8" fill="#141416"/>
      <rect x="112" y="260" width="155" height="44" rx="8" fill="#141416"/>
      <rect x="305" y="162" width="190" height="165" rx="10" fill="#1c1c20" stroke="#2a2a2e"/>
      <rect x="322" y="182" width="95" height="10" rx="5" fill="#a1a1aa"/>
      <rect x="322" y="206" width="155" height="44" rx="8" fill="#141416"/>
      <rect x="322" y="260" width="155" height="44" rx="8" fill="#141416"/>
      <rect x="515" y="162" width="190" height="165" rx="10" fill="#1c1c20" stroke="#71717a" stroke-width="1.5"/>
      <rect x="532" y="182" width="105" height="10" rx="5" fill="#f4f4f5"/>
      <rect x="532" y="206" width="155" height="98" rx="8" fill="#27272a"/>
    `;
  } else if (schematicType === 'community-consensus') {
    innerGraphic = `
      <rect x="70" y="135" width="420" height="220" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
      <rect x="95" y="162" width="120" height="12" rx="6" fill="#f4f4f5"/>
      <rect x="95" y="188" width="360" height="10" rx="5" fill="#d4d4d8"/>
      <rect x="95" y="212" width="290" height="8" rx="4" fill="#71717a"/>
      <rect x="95" y="255" width="370" height="14" rx="7" fill="#27272a"/>
      <rect x="95" y="255" width="275" height="14" rx="7" fill="#e4e4e7"/>
      <rect x="95" y="290" width="110" height="36" rx="8" fill="#e4e4e7"/>
      <rect x="220" y="290" width="110" height="36" rx="8" fill="#27272a"/>
      <rect x="510" y="135" width="220" height="220" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
      <circle cx="620" cy="220" r="46" fill="none" stroke="#e4e4e7" stroke-width="8" stroke-dasharray="220 60"/>
      <rect x="565" y="295" width="110" height="10" rx="5" fill="#a1a1aa"/>
    `;
  } else {
    innerGraphic = `
      <rect x="70" y="135" width="310" height="220" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
      <rect x="100" y="165" width="250" height="130" rx="10" fill="#1c1c20" stroke="#71717a" stroke-dasharray="6 4"/>
      <circle cx="225" cy="230" r="30" fill="#27272a" stroke="#e4e4e7" stroke-width="2"/>
      <rect x="165" y="315" width="120" height="10" rx="5" fill="#e4e4e7"/>
      <rect x="405" y="135" width="325" height="220" rx="14" fill="#141416" stroke="#2a2a2e" stroke-width="1.5"/>
      <rect x="430" y="165" width="275" height="40" rx="8" fill="#1c1c20"/>
      <circle cx="452" cy="185" r="7" fill="#e4e4e7"/>
      <rect x="472" y="180" width="140" height="10" rx="5" fill="#d4d4d8"/>
      <rect x="430" y="220" width="275" height="40" rx="8" fill="#1c1c20"/>
      <circle cx="452" cy="240" r="7" fill="#a1a1aa"/>
      <rect x="472" y="235" width="165" height="10" rx="5" fill="#d4d4d8"/>
      <rect x="430" y="275" width="275" height="40" rx="8" fill="#1c1c20"/>
      <circle cx="452" cy="295" r="7" fill="#e4e4e7"/>
      <rect x="472" y="290" width="120" height="10" rx="5" fill="#d4d4d8"/>
    `;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
    <defs>
      <linearGradient id="neutralBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#d8d7d0"/>
        <stop offset="100%" stop-color="#efefe9"/>
      </linearGradient>
      <filter id="drop" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#09090b" flood-opacity="0.22"/>
      </filter>
    </defs>
    <rect width="800" height="500" fill="url(#neutralBg)"/>
    <g filter="url(#drop)">
      <rect x="44" y="48" width="712" height="404" rx="22" fill="#0d0d0f" stroke="#27272a" stroke-width="2"/>
      <rect x="44" y="48" width="712" height="54" rx="22" fill="#16161a"/>
      <circle cx="76" cy="75" r="6" fill="#3f3f46"/>
      <circle cx="96" cy="75" r="6" fill="#3f3f46"/>
      <circle cx="116" cy="75" r="6" fill="#e4e4e7"/>
      <text x="145" y="80" fill="#f4f4f5" font-family="sans-serif" font-size="15" font-weight="700" letter-spacing="0.5">${safeTitle}</text>
      <text x="730" y="79" fill="#a1a1aa" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="end">${safeCat}</text>
      ${innerGraphic}
      <rect x="70" y="380" width="660" height="42" rx="10" fill="#16161a"/>
      <circle cx="94" cy="401" r="5" fill="#e4e4e7"/>
      <text x="112" y="405" fill="#a1a1aa" font-family="sans-serif" font-size="12" font-weight="600">PRODUCT SYSTEM PREVIEW · ISHIMWE AMANI SAMUEL</text>
    </g>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const ProjectVisual: React.FC<ProjectVisualProps> = ({
  id,
  imageUrl,
  logoUrl = '/logo.png',
  title,
  category,
  schematicType,
  status,
  className = '',
}) => {
  const storageKey = `amani_logo_${id || title.toLowerCase().replace(/\s+/g, '-')}`;
  const [customLogo, setCustomLogo] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) setCustomLogo(saved);
    } catch {
      // ignore
    }
  }, [storageKey]);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setCustomLogo(result);
      try {
        localStorage.setItem(storageKey, result);
      } catch {
        // ignore quota
      }
    };
    reader.readAsDataURL(file);
  };

  const thumbnailSrc =
    imageUrl || buildMockupThumbnailDataUri(title, category, schematicType);

  return (
    <div className={`skeuo-inset p-2 sm:p-2.5 group relative shrink-0 ${className}`}>
      {/* Thumbnail Image Container */}
      <div className="relative aspect-16/10 rounded-xl overflow-hidden border border-border bg-surface">
        <img
          src={thumbnailSrc}
          alt={`${title} thumbnail`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* Top-Left Product/Project Logo Slot + Improvised Upload Trigger */}
        <div
          className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 glass-pill p-1 pr-2.5 rounded-xl"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <div className="w-7 h-7 rounded-lg bg-white border border-black/10 p-0.5 flex items-center justify-center overflow-hidden shrink-0">
            <img
              src={customLogo || logoUrl}
              alt={`${title} logo`}
              className="w-full h-full object-contain"
            />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            title="Upload custom logo for this item"
            className="text-[10px] font-bold text-fg hover:underline cursor-pointer flex items-center gap-1"
          >
            <span>Logo</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="hidden"
          />
        </div>

        {/* Top-Right Status Badge */}
        {status && (
          <div className="absolute top-2.5 right-2.5 z-10 glass-pill px-2.5 py-1 rounded-lg text-[10px] uppercase tracking-wider font-bold text-fg">
            {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectVisual;
