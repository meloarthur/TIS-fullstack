import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex w-full rounded-xl font-medium transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-50/70 dark:placeholder:text-white/30 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border border-gray-300 dark:border-neutral-60 bg-white dark:bg-white/5 text-neutral-90 dark:text-white shadow-sm focus-visible:border-primary-main/70 focus-visible:ring-1 focus-visible:ring-primary-main',
        ghost:
          'border-transparent bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 focus-visible:bg-white dark:focus-visible:bg-base-dark',
        outline:
          'border border-gray-300 dark:border-neutral-60 bg-transparent hover:border-primary-main/50 focus-visible:border-primary-main',
        filled:
          'border border-transparent bg-gray-100 dark:bg-white/10 text-neutral-90 dark:text-white hover:bg-gray-200/70 dark:hover:bg-white/20 focus-visible:bg-white focus-visible:border-primary-main/50 dark:focus-visible:bg-white/5',
      },
      inputSize: {
        default: 'h-11 px-4 py-2 text-sm',
        sm: 'h-9 px-3 py-1 text-xs',
        lg: 'h-12 px-5 py-2.5 text-base',
        xl: 'h-14 px-5 py-3.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'default',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'default' | 'ghost' | 'outline' | 'filled';
  inputSize?: 'default' | 'sm' | 'lg' | 'xl';
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  error?: boolean;
  helperText?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      inputSize,
      leadingIcon,
      trailingIcon,
      error,
      helperText,
      label,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id;

    return (
      <div className='w-full space-y-1.5'>
        {label && (
          <label
            htmlFor={inputId}
            className='text-sm font-medium text-neutral-80 dark:text-gray-200'
          >
            {label}
          </label>
        )}
        <div className='relative w-full'>
          {leadingIcon && (
            <div className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-70 dark:text-gray-400'>
              {leadingIcon}
            </div>
          )}
          <input
            id={inputId}
            className={cn(
              inputVariants({ variant, inputSize }),
              leadingIcon && 'pl-10',
              trailingIcon && 'pr-10',
              error &&
                'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/10 placeholder:text-red-400/50',
              className
            )}
            ref={ref}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={helperText ? `${inputId}-description` : undefined}
            {...props}
          />
          {trailingIcon && (
            <div className='absolute right-3 top-1/2 -translate-y-1/2 text-neutral-70 dark:text-gray-400'>
              {trailingIcon}
            </div>
          )}
        </div>
        {helperText && (
          <p
            id={`${inputId}-description`}
            className={cn(
              'text-xs',
              error ? 'text-red-500' : 'text-neutral-70 dark:text-gray-400'
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input, inputVariants };
