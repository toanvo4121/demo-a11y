import React from 'react';
import { useId } from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helpText?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, helpText, id: providedId, ...props }, ref) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const errorId = `${id}-error`;
    const helpTextId = `${id}-help`;

    return (
      <div className="form-field">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={`form-input ${error ? 'form-input-error' : ''}`}
          aria-invalid={!!error}
          aria-errormessage={error ? errorId : undefined}
          aria-describedby={helpText ? helpTextId : undefined}
          {...props}
        />
        {helpText && (
          <div id={helpTextId} className="help-text">
            {helpText}
          </div>
        )}
        {error && (
          <div id={errorId} className="error-text" role="alert">
            {error}
          </div>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';