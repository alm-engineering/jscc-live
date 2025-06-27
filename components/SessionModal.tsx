'use client'

import React from 'react'
import { SessionData } from '@/types/schedule'

type SessionModalProps = {
  session: SessionData
  onClose: () => void
}

const SessionModal: React.FC<SessionModalProps> = ({ session, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className={`${session.color || 'bg-yellow-200'} max-w-md w-full p-6 rounded-lg shadow-2xl transform rotate-1 border-l-4 border-b-4 border-gray-400/20`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl font-bold"
        >
          ×
        </button>
        
        <h2 className="text-xl font-bold mb-4 text-gray-800">{session.title}</h2>
        
        <div className="space-y-2 text-gray-700">
          <div className="flex items-center">
            <span className="font-semibold mr-2">📍 Room:</span>
            <span>{session.room}</span>
          </div>
          
          <div className="flex items-center">
            <span className="font-semibold mr-2">🕐 Time:</span>
            <span>{session.time}</span>
          </div>
          
          {session.duration && (
            <div className="flex items-center">
              <span className="font-semibold mr-2">⏱️ Duration:</span>
              <span>{session.duration} hour{session.duration > 1 ? 's' : ''}</span>
            </div>
          )}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-400/20">
          <p className="text-sm text-gray-600 italic">
            Click anywhere outside to close
          </p>
        </div>
      </div>
    </div>
  )
}

export default SessionModal 