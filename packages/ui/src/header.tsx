import type { HTMLAttributes, ReactNode } from 'react';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function Header({ children, className = '', ...props }: HeaderProps) {
  return (
    <div
      className={`font-pretendard text-center ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
