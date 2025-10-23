'use client'

interface CaptionInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function CaptionInput({ value, onChange, placeholder = 'Write a caption...' }: CaptionInputProps) {
  return (
    <div className="space-y-4">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-32 p-3 border border-ig-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-ig-primary text-ig-text-primary placeholder:text-ig-text-secondary"
        maxLength={2200}
      />
      <div className="flex justify-end text-xs text-ig-text-secondary">
        {value.length}/2,200
      </div>
    </div>
  )
}
