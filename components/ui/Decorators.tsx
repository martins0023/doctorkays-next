import React from 'react';

// 1. THE WAVY SQUIGGLE (Classic playful underline)
export const SquiggleUnderline = ({ children, color = "text-blue-600" }: { children: React.ReactNode, color?: string }) => {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <svg 
        className={`absolute -bottom-2 left-0 w-full h-3 ${color}`} 
        viewBox="0 0 200 9" 
        fill="none" 
        preserveAspectRatio="none"
      >
        <path 
          d="M2.00025 6.99997C25.3336 2.66664 70.0003 -1.33336 123.5 3.49997C177 8.3333 192.5 4 198 1.5" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
        />
        <path 
          d="M2.00025 6.99997C25.3336 6.99997 59.135 9.17754 99.5 6.99997C139.865 4.8224 168.5 3.5 198 1.5" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeOpacity="0.3"
        />
      </svg>
    </span>
  );
};

// 2. THE CIRCLE HIGHLIGHT (Like a marker loop)
export const CircleHighlight = ({ children, color = "text-blue-600" }: { children: React.ReactNode, color?: string }) => {
  return (
    <span className="relative inline-block px-2">
      <span className="relative z-10">{children}</span>
      <svg 
        className={`absolute top-0 left-0 w-full h-full -z-0 transform scale-[1.15] -rotate-2 ${color}`} 
        viewBox="0 0 200 60" 
        fill="none" 
        preserveAspectRatio="none"
      >
        <path 
          d="M10 25C20 10 70 5 100 8C150 12 190 25 190 35C190 50 140 55 100 52C50 49 10 40 10 25Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
          strokeDasharray="10 5" 
        />
      </svg>
    </span>
  );
};

// 3. THE "POP" BRUSH (Thick, offset background)
export const PopBrush = ({ children, color = "bg-blue-100" }: { children: React.ReactNode, color?: string }) => {
  return (
    <span className="relative inline-block">
      {/* The Brush Stroke */}
      <span className={`absolute inset-0 ${color} transform -skew-y-2 scale-y-110 translate-y-1 -z-0 rounded-sm`}></span>
      <span className="relative z-10 px-1">{children}</span>
    </span>
  );
};