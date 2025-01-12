import React from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helpText?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  error,
  helpText,
  id,
  className,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = `${inputId}-error`;
  const helpTextId = `${inputId}-help`;

  return (
    <div className="form-field">
      <label htmlFor={inputId} className="form-label">
        {label}
      </label>
      <input
        id={inputId}
        className={`form-input ${error ? 'border-red-500' : ''} ${className || ''}`}
        aria-invalid={!!error}
        aria-errormessage={error ? errorId : undefined}
        aria-describedby={helpText ? helpTextId : undefined}
        {...props}
      />
      {helpText && (
        <p id={helpTextId} className="mt-1 text-sm text-text-light">
          {helpText}
        </p>
      )}
      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};