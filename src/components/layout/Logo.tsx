import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 40 40" 
    xmlns="http://www.w3.org/2000/svg" 
    aria-label="ChanceTEK Logo"
    {...props}
  >
    <defs>
      <radialGradient id="coreGlow" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
        <stop offset="0%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0 }} />
      </radialGradient>
      <linearGradient id="petalGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.9 }} />
        <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.7 }} />
      </linearGradient>
      <linearGradient id="petalGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.6 }} />
      </linearGradient>
       <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
        <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
    </filter>
    </defs>

    <g id="icon" transform="translate(2, 0)">
      {/* Central Pulsing Core */}
      <circle 
        cx="18" 
        cy="20" 
        r="5" 
        fill="url(#coreGlow)"
        filter="url(#softGlow)"
      >
        <animate attributeName="r" values="4.5;5.5;4.5" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle 
        cx="18" 
        cy="20" 
        r="3.5" 
        fill="hsl(var(--accent))"
      >
         <animateTransform attributeName="transform" type="scale" values="1;1.2;1" dur="2.5s" repeatCount="indefinite" additive="sum" />
      </circle>

      {/* Generative Energy Flows (Petals) - C-shaped, open */}
      <g style={{ animation: 'rotatePetals1 10s linear infinite' }}>
        <path 
          d="M 18,5 A 15,15 0 0,1 33,20" 
          stroke="url(#petalGradient1)" 
          strokeWidth="2.5" 
          strokeLinecap="round"
          fill="none"
        >
          <animate attributeName="stroke-width" values="2;3;2" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
        </path>
      </g>
      <g style={{ animation: 'rotatePetals2 12s linear infinite reverse' }}>
         <path 
          d="M 18,35 A 15,15 0 0,1 3,20" 
          stroke="url(#petalGradient2)" 
          strokeWidth="2.5" 
          strokeLinecap="round"
          fill="none"
        >
          <animate attributeName="stroke-width" values="3;2;3" dur="3.5s" repeatCount="indefinite" />
           <animate attributeName="opacity" values="0.7;0.9;0.7" dur="3.5s" repeatCount="indefinite" />
        </path>
      </g>
      <g style={{ animation: 'rotatePetals3 14s linear infinite' }}>
        <path 
          d="M 30,32 A 15,15 0 0,1 6,8" 
          stroke="hsl(var(--primary))" 
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        >
            <animate attributeName="stroke-width" values="1.8;2.8;1.8" dur="4.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.8;0.5" dur="4.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Agentic Sparks (Orbiting Orbs) */}
      <circle cx="18" cy="20" r="1.8" fill="hsl(var(--primary))" opacity="0.9">
        <animateMotion dur="6s" repeatCount="indefinite" path="M0,0 A10,10 0 1,1 0,-0.01 Z" />
        <animate attributeName="r" values="1.5;2;1.5" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="18" cy="20" r="1.5" fill="hsl(var(--accent))" opacity="0.8">
        <animateMotion dur="8s" repeatCount="indefinite" path="M0,0 A13,13 0 1,0 0,-0.01 Z" />
         <animate attributeName="r" values="1.2;1.8;1.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </g>
    
    <style>{`
      @keyframes rotatePetals1 {
        from { transform: rotate(0deg) translate(-2px, -2px) rotate(0deg); transform-origin: 18px 20px; }
        to { transform: rotate(360deg) translate(-2px, -2px) rotate(-360deg); transform-origin: 18px 20px; }
      }
      @keyframes rotatePetals2 {
        from { transform: rotate(60deg) translate(1px, -1px) rotate(-60deg); transform-origin: 18px 20px; }
        to { transform: rotate(420deg) translate(1px, -1px) rotate(-420deg); transform-origin: 18px 20px; }
      }
      @keyframes rotatePetals3 {
        from { transform: rotate(120deg) translate(0px, 1px) rotate(-120deg); transform-origin: 18px 20px; }
        to { transform: rotate(480deg) translate(0px, 1px) rotate(-480deg); transform-origin: 18px 20px; }
      }
    `}</style>
  </svg>
);

export default Logo;
