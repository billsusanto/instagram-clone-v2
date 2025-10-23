import { create } from 'zustand'

type UploadStep = 'select' | 'crop' | 'filter' | 'caption'

interface UploadStore {
  currentStep: UploadStep
  selectedFile: File | null
  previewUrl: string | null
  caption: string
  altText: string
  location: string
  setStep: (step: UploadStep) => void
  setFile: (file: File | null) => void
  setPreviewUrl: (url: string | null) => void
  setCaption: (caption: string) => void
  setAltText: (altText: string) => void
  setLocation: (location: string) => void
  reset: () => void
}

export const useUploadStore = create<UploadStore>((set) => ({
  currentStep: 'select',
  selectedFile: null,
  previewUrl: null,
  caption: '',
  altText: '',
  location: '',
  setStep: (step) => set({ currentStep: step }),
  setFile: (file) => set({ selectedFile: file }),
  setPreviewUrl: (url) => set({ previewUrl: url }),
  setCaption: (caption) => set({ caption }),
  setAltText: (altText) => set({ altText }),
  setLocation: (location) => set({ location }),
  reset: () =>
    set({
      currentStep: 'select',
      selectedFile: null,
      previewUrl: null,
      caption: '',
      altText: '',
      location: '',
    }),
}))