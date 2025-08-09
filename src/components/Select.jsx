import { forwardRef } from 'react';
import { clsx } from 'clsx';

const Select = forwardRef(({ 
  label, 
  error, 
  options = [], 
  className, 
  required = false,
  placeholder = 'Select an option...',
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <select
        ref={ref}
        className={clsx(
          'input-glass cursor-pointer',
          error && 'ring-2 ring-red-400 focus:ring-red-400',
          className
        )}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option 
            key={option.value} 
            value={option.value}
            className="bg-dark-800 text-white"
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
