import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showText = true, light = false, size = 'md' }: LogoProps) {
  const textColor = light ? 'text-white' : 'text-navy-800';
  const subtextColor = light ? 'text-gold-200' : 'text-navy-950 font-semibold';
  const lineColor = light ? 'border-gold-300' : 'border-gold-500/80';

  const sizeClasses = {
    sm: {
      svg: 'h-9 w-9 md:h-10 md:w-10',
      text: 'text-base sm:text-lg',
      sub: 'text-[9px] sm:text-[10px]',
      gap: 'gap-2 md:gap-3',
    },
    md: {
      svg: 'h-12 w-12',
      text: 'text-xl sm:text-2xl',
      sub: 'text-[11px] sm:text-[12px]',
      gap: 'gap-3',
    },
    lg: {
      svg: 'h-16 w-16 md:h-20 md:w-20',
      text: 'text-3xl sm:text-4xl',
      sub: 'text-[14px] sm:text-[16px]',
      gap: 'gap-4',
    }
  };

  const selectedSize = sizeClasses[size];

  return (
    <div className={`flex items-center ${selectedSize.gap} ${className} group cursor-pointer`} id="smart-partner-logo">
      {showText && (
        <div className="flex flex-col items-start text-left select-none relative">
          <span className={`${selectedSize.text} ${textColor} font-black tracking-tight leading-none group-hover:text-gold-500 transition-colors duration-300`}>
            SMART PARTNER
          </span>
          {/* Brand separator line */}
          <div className={`border-b-2 ${lineColor} my-1.5 w-full transition-all duration-300 group-hover:w-full group-hover:border-gold-500`} />
          <span className={`${selectedSize.sub} ${subtextColor} tracking-[0.08em] whitespace-nowrap uppercase font-bold transition-colors duration-300 group-hover:text-gold-500`}>
            Consultoria e Capacitação
          </span>
        </div>
      )}

      {/* SVG Emblem with high-end premium style and interactive transition positioned on the right */}
      <div className="relative shrink-0 select-none">
        {/* Glow backdrop on hover */}
        <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <svg 
          viewBox="0 0 100 100" 
          className={`${selectedSize.svg} relative z-10 transition-transform duration-500 ease-out group-hover:scale-105`} 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#AA7C11" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#FCEBB6" />
            </linearGradient>
            <linearGradient id="logoNavyGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#021B35" />
              <stop offset="100%" stopColor="#0B3461" />
            </linearGradient>
            <linearGradient id="logoSilverGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          
          {/* Upper Ribbon (Gold) */}
          <path 
            d="M 28.2 14.3 V 34.8 C 38 35.5 47.5 44 52.6 48.2 L 64.5 37.1 C 56 26.5 42 16.5 28.2 14.3 Z" 
            fill="url(#logoGoldGrad)"
            className="transition-all duration-300 group-hover:opacity-95"
          />
          
          {/* Lower Ribbon (Navy on light backgrounds / Silver/White on dark backgrounds) */}
          <path 
            d="M 28.2 62.8 V 85.7 C 38 85 62 70 71.8 22.3 C 65 38 52 53 28.2 62.8 Z" 
            fill={light ? "url(#logoSilverGrad)" : "url(#logoNavyGrad)"}
            className="transition-all duration-300 group-hover:opacity-95"
          />
        </svg>
      </div>
    </div>
  );
}
