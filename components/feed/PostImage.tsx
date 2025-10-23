'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { PostImage as PostImageType } from '@/lib/types'
import { useDoubleTap } from '@/lib/hooks/ui/useDoubleTap'
import { useLikePost } from '@/lib/hooks/feed/useLikePost'
import { Heart } from 'lucide-react'

interface PostImageProps {
  images: PostImageType[]
  postId: string
  isLiked: boolean
}

export function PostImage({ images, postId, isLiked }: PostImageProps) {
  const [showHeart, setShowHeart] = useState(false)
  const likeMutation = useLikePost()

  const handleDoubleTap = useDoubleTap(() => {
    if (!isLiked) {
      likeMutation.mutate(postId)
    }
    setShowHeart(true)
    setTimeout(() => setShowHeart(false), 800)
  })

  return (
    <div 
      className="relative aspect-square bg-black cursor-pointer select-none"
      onClick={handleDoubleTap}
    >
      <Image
        src={images[0].url}
        alt={images[0].altText}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 614px"
        priority={false}
      />

      <AnimatePresence>
        {showHeart && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 1, opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <Heart className="h-24 w-24 text-white fill-white drop-shadow-lg" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}