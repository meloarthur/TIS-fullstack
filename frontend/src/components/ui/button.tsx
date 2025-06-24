/**
 * Button Component
 *
 * Standardized button component for consistent UI across the application.
 *
 * Usage Guidelines:
 * 1. Always use the Button component instead of HTML button elements or custom button classes
 * 2. Use appropriate variant props instead of overriding with className when possible
 * 3. Available variants: default, secondary, outline, ghost, link, destructive, success, warning, info
 * 4. Available sizes: sm, default, lg, xl, icon
 * 5. For links that should look like buttons, use the asChild prop with a Next.js Link component
 *
 * Example:
 * <Button variant="default" size="lg">Click Me</Button>
 *
 * With Link:
 * <Button asChild variant="primary">
 *   <Link href="/destination">Navigate</Link>
 * </Button>
 */

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold leading-5 text-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary-main text-white shadow-sm hover:bg-primary-dark active:bg-primary-dark/90',
        destructive:
          'bg-red-600 text-white shadow-sm hover:bg-red-700 active:bg-red-800',
        outline:
          'border border-gray-300 dark:border-neutral-60 bg-white dark:bg-neutral-60/30 text-neutral-90 dark:text-white shadow-sm hover:bg-primary-main/5 hover:border-primary-main/60 hover:text-primary-main dark:hover:bg-primary-main/20',
        secondary:
          'bg-secondary-main text-white shadow-sm hover:bg-secondary-dark active:bg-secondary-dark/90',
        ghost:
          'text-neutral-80 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 hover:text-neutral-90',
        link: 'text-primary-main underline-offset-4 hover:underline',
        success:
          'bg-green-600 text-white shadow-sm hover:bg-green-700 active:bg-green-800',
        warning:
          'bg-amber-500 text-white shadow-sm hover:bg-amber-600 active:bg-amber-700',
        info: 'bg-blue-600 text-white shadow-sm hover:bg-blue-700 active:bg-blue-800',
      },
      size: {
        default: 'h-11 px-5 py-2.5',
        sm: 'h-9 px-3 py-2 text-xs',
        lg: 'h-12 px-6 py-3 text-base',
        xl: 'h-14 px-8 py-4 text-base',
        icon: 'h-10 w-10',
      },
      rounded: {
        default: 'rounded-xl',
        full: 'rounded-full',
        none: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
