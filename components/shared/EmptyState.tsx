interface EmptyStateProps {
  title: string
  description: string
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h3 className="text-xl font-semibold text-ig-text-primary">{title}</h3>
      <p className="mt-2 text-sm text-ig-text-secondary">{description}</p>
    </div>
  )
}