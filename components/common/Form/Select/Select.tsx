import React from 'react';
import { useId } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'value'> {
  label: string;
  options: SelectOption[];
  error?: string;
  helpText?: string;
  value: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, helpText, id: providedId, value, onChange, ...props }, ref) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const errorId = `${id}-error`;
    const helpTextId = `${id}-help`;

    return (
      <div className="form-field">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <select
          ref={ref}
          id={id}
          value={value}
          onChange={onChange}
          className={`form-select ${error ? 'form-select-error' : ''}`}
          aria-invalid={!!error}
          aria-errormessage={error ? errorId : undefined}
          aria-describedby={helpText ? helpTextId : undefined}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
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

Select.displayName = 'Select';