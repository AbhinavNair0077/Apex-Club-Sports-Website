import { forwardRef } from 'react';
import { clsx } from 'clsx';

const Input = forwardRef(({ 
  label, 
  error, 
  type = 'text', 
  className, 
  required = false,
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
      <input
        ref={ref}
        type={type}
        className={clsx(
          'input-glass',
          error && 'ring-2 ring-red-400 focus:ring-red-400',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
