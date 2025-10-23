import { Skeleton } from '@/components/ui/skeleton'

export function PostSkeleton() {
  return (
    <div className="bg-white border border-ig-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <Skeleton className="h-8 w-8 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-2 w-16" />
        </div>
      </div>

      {/* Image */}
      <Skeleton className="aspect-square w-full" />

      {/* Actions */}
      <div className="flex gap-4 px-4 py-3">
        <Skeleton className="h-6 w-6 rounded" />
        <Skeleton className="h-6 w-6 rounded" />
        <Skeleton className="h-6 w-6 rounded" />
      </div>

      {/* Caption */}
      <div className="px-4 pb-3 space-y-2">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/4" />
      </div>
    </div>
  )
}