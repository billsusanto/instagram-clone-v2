import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ig-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30',
  {
    variants: {
      variant: {
        primary:
          'bg-ig-primary text-white hover:bg-ig-primary-hover active:scale-[0.98]',
        secondary:
          'bg-transparent border border-ig-border text-ig-text-primary hover:bg-ig-bg-tertiary',
        ghost: 'hover:bg-ig-bg-tertiary text-ig-text-primary',
        text: 'text-ig-primary hover:bg-ig-primary/5',
        destructive: 'bg-ig-error text-white hover:bg-ig-error/90',
      },
      size: {
        sm: 'h-9 px-3 text-xs',
        md: 'h-11 px-4',
        lg: 'h-12 px-6',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }