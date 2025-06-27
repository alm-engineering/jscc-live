'use client'

import React from 'react'
import { SessionData } from '@/types/schedule'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Clock, MapPin, X } from 'lucide-react'

type SessionModalProps = {
  session: SessionData
  onClose: () => void
}

const SessionModal: React.FC<SessionModalProps> = ({ session, onClose }) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-yellow-100 border-0 shadow-2xl rotate-1">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-yellow-200 transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>
        
        <div 
          className="absolute top-0 right-0 w-0 h-0"
          style={{
            borderTop: '30px solid rgba(255,255,255,0.5)',
            borderRight: '30px solid transparent',
          }}
        />
        
        <DialogHeader className="pb-3 border-b border-gray-300/30">
          <DialogTitle className="text-xl font-bold text-gray-800 pr-6">{session.title}</DialogTitle>
          <DialogDescription className="sr-only">
            Session details for {session.title}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 pt-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-gray-600 mt-0.5" />
              <div>
                <span className="font-semibold text-sm text-gray-700">Room</span>
                <p className="text-gray-800">{session.room}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-gray-600 mt-0.5" />
              <div>
                <span className="font-semibold text-sm text-gray-700">Time</span>
                <p className="text-gray-800">{session.time}</p>
              </div>
            </div>
            
            {session.speaker && (
              <div className="flex items-start gap-3">
                <span className="text-gray-600 mt-0.5">👤</span>
                <div>
                  <span className="font-semibold text-sm text-gray-700">Speaker</span>
                  <p className="text-gray-800">{session.speaker}</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="pt-4 border-t border-gray-300/30">
            <p className="text-sm text-gray-600 italic">
              Don&apos;t forget to bring your laptop!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SessionModal 