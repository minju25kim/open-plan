"use client";

import { ReactNode, CSSProperties, useState } from "react";

interface ButtonProps {
  children: ReactNode;
  style?: CSSProperties;
  disabled?: boolean;
  forceState?: 'default' | 'hovered' | 'pressed'; // for Storybook/demo
  onClick?: () => void;
}

export const Button = ({ children, style, disabled = false, forceState, onClick }: ButtonProps) => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Determine state based on forceState or real events
  const isHovered = forceState ? forceState === 'hovered' || forceState === 'pressed' : hover;
  const isActive = forceState ? forceState === 'pressed' : active;

  const getBackgroundColor = () => {
    if (disabled) return '#E0E0E0';
    if (isActive) return 'rgba(17, 17, 17, 0.8)';
    if (isHovered) return 'rgba(17, 17, 17, 0.8)';
    return '#111111';
  };

  const getTextColor = () => {
    if (disabled) return '#BDBDBD';
    return '#FFFFFF';
  };

  const defaultStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    backgroundColor: getBackgroundColor(),
    color: getTextColor(),
    padding: '12px',
    fontFamily: 'Pretendard, sans-serif',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: 1.48,
    letterSpacing: '-0.02em',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textAlign: 'center',
    transition: 'background 0.15s',
    width: 'fit-content',
    opacity: disabled ? 0.7 : 1,
  };

  return (
    <button
      style={{ ...defaultStyle, ...style }}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => !disabled && setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => !disabled && setActive(true)}
      onMouseUp={() => setActive(false)}
    >
      {children}
    </button>
  );
};
