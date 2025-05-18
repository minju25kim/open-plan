import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Button({ children, className = '', onClick, ...props }: ButtonProps) {
  return (
    <button
      className={`w-[335px] py-3 px-0 bg-[#111] text-white rounded-[12px] font-semibold text-[16px] leading-[1.48em] tracking-[-0.02em] transition-colors duration-150 hover:bg-[rgba(17,17,17,0.8)] font-pretendard text-center ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
