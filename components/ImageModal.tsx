'use client'

import React, { useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { X, Maximize2 } from 'lucide-react'

type ImageModalProps = {
  isOpen: boolean
  onClose: () => void
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose }) => {
  // Add keyboard listener for Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="!max-w-[100vw] !w-screen !max-h-[100vh] !h-screen !p-0 !m-0 !border-0 !rounded-none overflow-hidden"
        showCloseButton={false}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-3 rounded-full bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 transition-all z-10 shadow-lg backdrop-blur-sm"
          aria-label="Close fullscreen view"
        >
          <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        </button>
        
        {/* Fullscreen indicator */}
        <div className="absolute top-4 left-4 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm pointer-events-none">
          <Maximize2 className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        </div>
        
        <DialogHeader className="sr-only">
          <DialogTitle>Original Conference Board - Fullscreen View</DialogTitle>
        </DialogHeader>
        
        <div 
          className="relative w-full h-full bg-black flex items-center justify-center p-4 cursor-zoom-out"
          onClick={onClose}
        >
          <img
            src="/sessions.jpg"
            alt="Original JSCC Live conference board with sticky notes"
            className="max-w-full max-h-full w-auto h-auto object-contain cursor-auto"
            style={{ maxWidth: 'calc(100vw - 2rem)', maxHeight: 'calc(100vh - 2rem)' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ImageModal 