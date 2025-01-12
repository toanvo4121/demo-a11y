import React from 'react';
import { useA11y } from '../../../hooks/useA11y';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', icon, loading, ...props }, ref) => {
    const { announce } = useA11y();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (loading) {
        announce('Processing action, please wait...');
      }
      props.onClick?.(e);
    };

    return (
      <button
        ref={ref}
        className={`btn btn-${variant}`}
        disabled={loading}
        onClick={handleClick}
        aria-busy={loading}
        {...props}
      >
        {icon && (
          <span className="btn-icon" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="btn-text">{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';