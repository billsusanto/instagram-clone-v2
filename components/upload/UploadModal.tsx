'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { FileDropzone } from './FileDropzone'
import { CaptionInput } from './CaptionInput'
import { Button } from '@/components/ui/button'
import { useUIStore } from '@/lib/stores/uiStore'
import { useUploadStore } from '@/lib/stores/uploadStore'
import { ArrowLeft, Check } from 'lucide-react'

type UploadStep = 'select' | 'caption' | 'uploading'

export function UploadModal() {
  const isOpen = useUIStore((state) => state.isUploadModalOpen)
  const closeModal = useUIStore((state) => state.closeUploadModal)

  const [step, setStep] = useState<UploadStep>('select')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [caption, setCaption] = useState('')

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
      setStep('caption')
    }
    reader.readAsDataURL(file)
  }

  const handleBack = () => {
    if (step === 'caption') {
      setStep('select')
      setSelectedFile(null)
      setPreview(null)
    }
  }

  const handleShare = async () => {
    setStep('uploading')

    // Simulate upload
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset and close
    setStep('select')
    setSelectedFile(null)
    setPreview(null)
    setCaption('')
    closeModal()

    // TODO: Add toast notification for success
  }

  const handleClose = () => {
    setStep('select')
    setSelectedFile(null)
    setPreview(null)
    setCaption('')
    closeModal()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 gap-0">
        <DialogHeader className="p-4 border-b border-ig-border">
          <div className="flex items-center justify-between">
            {step === 'caption' && (
              <button
                onClick={handleBack}
                className="p-1 hover:bg-ig-bg-tertiary rounded-full transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <DialogTitle className="flex-1 text-center font-semibold">
              {step === 'select' && 'Create new post'}
              {step === 'caption' && 'Edit caption'}
              {step === 'uploading' && 'Sharing...'}
            </DialogTitle>
            {(step === 'caption' || step === 'uploading') && (
              <Button
                onClick={handleShare}
                variant="primary"
                size="sm"
                disabled={step === 'uploading'}
              >
                {step === 'uploading' ? 'Sharing...' : 'Share'}
              </Button>
            )}
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto">
          {step === 'select' && (
            <div className="p-8">
              <FileDropzone onFileSelect={handleFileSelect} />
            </div>
          )}

          {step === 'caption' && preview && (
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="flex items-center justify-center bg-black p-4">
                <img
                  src={preview}
                  alt="Upload preview"
                  className="max-w-full max-h-[500px] object-contain"
                />
              </div>
              <div className="p-6">
                <CaptionInput
                  value={caption}
                  onChange={setCaption}
                  placeholder="Write a caption..."
                />
              </div>
            </div>
          )}

          {step === 'uploading' && (
            <div className="flex flex-col items-center justify-center p-12 gap-4">
              <div className="h-12 w-12 rounded-full border-4 border-ig-primary border-t-transparent animate-spin" />
              <p className="text-ig-text-secondary">Uploading your post...</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
