import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-11 w-full rounded-md border border-ig-border bg-ig-bg-tertiary px-3 py-2 text-sm transition-colors placeholder:text-ig-text-tertiary focus-visible:outline-none focus-visible:border-ig-primary focus-visible:ring-2 focus-visible:ring-ig-primary/10 disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-ig-error focus-visible:border-ig-error focus-visible:ring-ig-error/10',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }