import { forwardRef } from 'react';
import { clsx } from 'clsx';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading = false, 
  disabled = false, 
  className, 
  ...props 
}, ref) => {
  const baseClasses = 'relative overflow-hidden font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-blue-500 text-white hover:shadow-glow hover:scale-105 active:scale-95',
    secondary: 'glass text-white hover:bg-glass-300 hover:scale-105 active:scale-95',
    ghost: 'text-primary-400 hover:bg-glass-200 hover:text-primary-300',
    outline: 'border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
  };

  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="loading-spinner"></div>
        </div>
      )}
      <span className={clsx(loading && 'opacity-0')}>
        {children}
      </span>
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
