import { forwardRef } from 'react';
import { clsx } from 'clsx';

const Textarea = forwardRef(({ 
  label, 
  error, 
  rows = 4, 
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
      <textarea
        ref={ref}
        rows={rows}
        className={clsx(
          'input-glass resize-vertical',
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

Textarea.displayName = 'Textarea';

export default Textarea;
