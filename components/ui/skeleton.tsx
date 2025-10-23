import { cn } from '@/lib/utils/cn'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-shimmer rounded-md bg-gradient-to-r from-ig-bg-tertiary via-ig-border-light to-ig-bg-tertiary bg-[length:200%_100%]',
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }