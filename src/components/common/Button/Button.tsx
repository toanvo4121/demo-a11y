import React from 'react';
import { Link } from 'react-router-dom';
import { useA11y } from '../../../hooks/useA11y';

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

// Props when used as a button
type ButtonAsButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
    to?: never;
  };

// Props when used as a link
type ButtonAsLinkProps = ButtonBaseProps & {
  as: 'link';
  to: string;
  onClick?: () => void;
};

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  loading,
  icon,
  className = '',
  children,
  as = 'button',
  ...props
}) => {
  const { announce } = useA11y();

  const baseClassName = `
    inline-flex items-center justify-center px-4 py-2
    rounded-md font-medium
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variant === 'primary'
      ? 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500'
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500'
    }
    ${className}
  `;

  const handleClick = (e: React.MouseEvent) => {
    if (loading) {
      announce('Processing action, please wait...');
      e.preventDefault();
    }
    if (props.onClick) {
      props.onClick(e as React.MouseEvent<HTMLButtonElement>);
    }
  };

  if (as === 'link') {
    return (
      <Link
        to={props.to!}
        className={baseClassName}
        onClick={handleClick}
      >
        {icon && (
          <span className="mr-2" aria-hidden="true">
            {icon}
          </span>
        )}
        {children}
      </Link>
    );
  }

  return (
    <button
      className={baseClassName}
      disabled={loading}
      aria-busy={loading}
      onClick={handleClick}
      {...(props as ButtonAsButtonProps)}
    >
      {icon && (
        <span className="mr-2" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
      {loading && (
        <span className="ml-2" aria-hidden="true">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        </span>
      )}
    </button>
  );
};