import React from 'react';

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

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  error,
  helpText,
  id,
  className,
  ...props
}) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = `${selectId}-error`;
  const helpTextId = `${selectId}-help`;

  return (
    <div className="form-field relative">
      <label
        htmlFor={selectId}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={selectId}
          className={`
            block w-full rounded-lg
            px-4 py-2.5
            bg-white dark:bg-gray-800
            border border-gray-300 dark:border-gray-600
            text-gray-900 dark:text-white
            shadow-sm
            appearance-none
            hover:border-gray-400 dark:hover:border-gray-500
            focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500
            dark:focus:ring-primary-400/20 dark:focus:border-primary-400
            transition-all duration-200
            cursor-pointer
            ${error ? 'border-red-300 dark:border-red-500' : ''}
            ${className || ''}
          `}
          aria-invalid={!!error}
          aria-errormessage={error ? errorId : undefined}
          aria-describedby={helpText ? helpTextId : undefined}
          {...props}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="py-2 bg-white dark:bg-gray-800"
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400 dark:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {helpText && (
        <p
          id={helpTextId}
          className="mt-1.5 text-sm text-gray-500 dark:text-gray-400"
        >
          {helpText}
        </p>
      )}
      {error && (
        <p
          id={errorId}
          className="mt-1.5 text-sm text-red-600 dark:text-red-400"
          role="alert"
        >
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </span>
        </p>
      )}
    </div>
  );
};