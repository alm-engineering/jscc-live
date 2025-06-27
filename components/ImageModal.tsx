'use client'

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { X } from 'lucide-react'

type ImageModalProps = {
  isOpen: boolean
  onClose: () => void
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors z-10"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </button>
        
        <DialogHeader className="sr-only">
          <DialogTitle>Original Conference Board</DialogTitle>
        </DialogHeader>
        
        <div className="relative bg-gray-100 dark:bg-gray-900">
          <img
            src="/sessions.jpg"
            alt="Original JSCC Live conference board with sticky notes"
            className="w-full h-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ImageModal 