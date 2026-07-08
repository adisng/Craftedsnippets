import React from 'react';
import logoDark from '@/assets/logo-mark.png';
import logoLight from '@/assets/logo-mark-light.png';

interface LogoMarkProps {
  className?: string;
  /** "dark" = brown mark for light surfaces. "light" = cream mark for dark surfaces. */
  variant?: 'dark' | 'light';
}

export const LogoMark = ({ className = "w-8 h-8", variant = 'dark' }: LogoMarkProps) => (
  <img
    src={variant === 'light' ? logoLight : logoDark}
    alt="CraftedSnippets Co."
    draggable={false}
    className={`${className} object-contain select-none`}
  />
);
