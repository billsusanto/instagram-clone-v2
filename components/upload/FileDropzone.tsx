'use client'

import { useCallback } from 'react'
import { Image as ImageIcon } from 'lucide-react'

interface FileDropzoneProps {
  onFileSelect: (file: File) => void
}

export function FileDropzone({ onFileSelect }: FileDropzoneProps) {
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      const file = e.dataTransfer.files[0]
      if (file && file.type.startsWith('image/')) {
        onFileSelect(file)
      }
    },
    [onFileSelect]
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        onFileSelect(file)
      }
    },
    [onFileSelect]
  )

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="flex flex-col items-center justify-center border-2 border-dashed border-ig-border rounded-lg p-12 hover:bg-ig-bg-tertiary transition-colors cursor-pointer"
    >
      <ImageIcon className="h-16 w-16 text-ig-text-secondary mb-4" />
      <h3 className="text-lg font-semibold text-ig-text-primary mb-2">
        Drag photos here
      </h3>
      <label className="mt-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
        <span className="px-4 py-2 bg-ig-primary text-white rounded-lg cursor-pointer hover:bg-ig-primary-hover transition-colors inline-block">
          Select from computer
        </span>
      </label>
    </div>
  )
}
