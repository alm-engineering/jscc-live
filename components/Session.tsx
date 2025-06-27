'use client'

import React from 'react'
import { SessionData } from '@/types/schedule'

type SessionProps = {
  session: SessionData
  onClick?: () => void
}

const Session: React.FC<SessionProps> = ({ session, onClick }) => {
  if (session.isLunch) {
    return null // Lunch is handled differently in the grid
  }

  // Simulate sticky note appearance with rotation
  const rotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2', '-rotate-3', 'rotate-3']
  const randomRotation = rotations[parseInt(session.id) % rotations.length] || ''

  return (
    <div
      onClick={onClick}
      className={`
        ${session.color || 'bg-yellow-200'} 
        p-2
        m-1
        rounded-sm
        shadow-lg 
        hover:shadow-xl 
        transition-all
        duration-200
        transform 
        ${randomRotation} 
        hover:rotate-0
        hover:scale-105
        cursor-pointer
        relative
        h-full
        min-h-[70px]
        text-xs
        font-medium
        text-gray-800
        border-l-4 border-b-4 border-gray-400/20
        before:content-['']
        before:absolute
        before:top-0
        before:right-0
        before:w-0
        before:h-0
        before:border-t-[10px]
        before:border-t-gray-50
        before:border-r-[10px]
        before:border-r-transparent
      `}
      style={{
        boxShadow: '2px 2px 6px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)'
      }}
    >
      <p className="leading-tight break-words text-[11px] font-semibold">
        {session.title}
      </p>
    </div>
  )
}

export default Session 