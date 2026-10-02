import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        default:
          'bg-emerald-800 text-white shadow-md hover:bg-emerald-900 focus-visible:ring-emerald-800',
        primary:
          'bg-[#006400] text-white shadow-md hover:bg-[#004d00] focus-visible:ring-[#006400]',
        secondary:
          'bg-[#7E3517] text-white shadow-md hover:bg-[#5A0001] focus-visible:ring-[#7E3517]',
        outline:
          'border-2 border-emerald-800 text-emerald-800 bg-transparent hover:bg-emerald-50 focus-visible:ring-emerald-800',
        outlineSecondary:
          'border-2 border-[#7E3517] text-[#7E3517] bg-transparent hover:bg-red-50 focus-visible:ring-[#7E3517]',
        ghost: 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900',
        link: 'text-[#006400] underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        default: 'h-11 px-5 py-2.5',
        sm: 'h-9 rounded-lg px-3.5 text-xs',
        lg: 'h-13 rounded-2xl px-7 text-base font-bold shadow-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
