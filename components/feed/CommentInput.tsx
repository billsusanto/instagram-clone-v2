import { Smile } from 'lucide-react'

interface CommentInputProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  isSubmitting: boolean
}

export function CommentInput({
  value,
  onChange,
  onSubmit,
  isSubmitting,
}: CommentInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSubmit()
    }
  }

  return (
    <div className="flex items-center gap-3 border-t border-ig-border-light px-4 py-3">
      <button className="text-ig-text-secondary hover:text-ig-text-primary">
        <Smile className="h-6 w-6" />
      </button>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a comment..."
        className="flex-1 text-sm outline-none placeholder:text-ig-text-secondary"
        disabled={isSubmitting}
      />

      {value.trim() && (
        <button
          onClick={onSubmit}
          disabled={isSubmitting}
          className="text-sm font-semibold text-ig-primary hover:text-ig-primary-hover disabled:opacity-30"
        >
          Post
        </button>
      )}
    </div>
  )
}