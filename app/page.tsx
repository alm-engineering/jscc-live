'use client'

import { useState } from 'react'
import ScheduleBoard from '@/components/ScheduleBoard'
import { ThemeToggle } from '@/components/ThemeToggle'
import ImageModal from '@/components/ImageModal'
import { Github, Image, ExternalLink } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Home() {
  const [showImageModal, setShowImageModal] = useState(false)

  return (
    <TooltipProvider>
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-900">
        <div className="p-4 md:p-8">
          {/* Navigation Bar */}
          <nav className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 md:gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => setShowImageModal(true)}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all"
                  >
                    <Image className="h-4 w-4" />
                    <span className="hidden sm:inline">View Original Board</span>
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>See the physical conference board with real sticky notes</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com/alm-engineering/jscc-live"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all"
                  >
                    <Github className="h-4 w-4" />
                    <span className="hidden sm:inline">Contribute</span>
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Improve this project on GitHub</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <ThemeToggle />
          </nav>

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
              JSCC Live
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Conference Schedule Board</p>
          </div>
          
          <ScheduleBoard />
          
          {/* Footer */}
          <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              <p>
                Created for JSCC Live conference • Digital version of the physical schedule board
              </p>
              <p className="mt-2">
                Built with Next.js, TypeScript, and shadcn/ui • {' '}
                <a 
                  href="https://jscc.live" 
                  className="underline hover:text-gray-900 dark:hover:text-gray-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jscc.live
                </a>
              </p>
            </div>
          </footer>
        </div>

        {/* Image Modal */}
        <ImageModal 
          isOpen={showImageModal} 
          onClose={() => setShowImageModal(false)} 
        />
      </main>
    </TooltipProvider>
  )
}
