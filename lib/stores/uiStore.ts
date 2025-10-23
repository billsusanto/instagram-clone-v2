import { create } from 'zustand'

interface UIStore {
  isUploadModalOpen: boolean
  isSearchModalOpen: boolean
  openUploadModal: () => void
  closeUploadModal: () => void
  openSearchModal: () => void
  closeSearchModal: () => void
}

export const useUIStore = create<UIStore>((set) => ({
  isUploadModalOpen: false,
  isSearchModalOpen: false,
  openUploadModal: () => set({ isUploadModalOpen: true }),
  closeUploadModal: () => set({ isUploadModalOpen: false }),
  openSearchModal: () => set({ isSearchModalOpen: true }),
  closeSearchModal: () => set({ isSearchModalOpen: false }),
}))