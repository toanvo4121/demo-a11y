import React from 'react';
import { useA11y } from '../../../hooks/useA11y';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  loading,
  icon,
  className,
  ...props
}) => {
  const { announce } = useA11y();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (loading) {
      announce('Processing action, please wait...');
    }
    props.onClick?.(e);
  };

  return (
    <button
      className={`btn btn-${variant} ${loading ? 'opacity-50 cursor-not-allowed' : ''} ${className || ''}`}
      disabled={loading}
      aria-busy={loading}
      onClick={handleClick}
      {...props}
    >
      {icon && (
        <span className="mr-2" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
      {loading && (
        <span className="ml-2" aria-hidden="true">
          Loading...
        </span>
      )}
    </button>
  );
};