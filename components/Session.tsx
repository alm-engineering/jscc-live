'use client'

import React from 'react'
import { SessionData } from '@/types/schedule'
import { cn } from '@/lib/utils'

type SessionProps = {
  session: SessionData
  onClick?: () => void
  isPast?: boolean
  isCurrent?: boolean
}

const Session: React.FC<SessionProps> = ({ session, onClick, isPast, isCurrent }) => {
  if (session.isLunch) {
    return null // Lunch is handled differently in the grid
  }

  // Generate random rotation for sticky note effect
  const rotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2', 'rotate-0']
  const randomRotation = rotations[parseInt(session.id) % rotations.length]
  
  // Generate random colors for sticky notes - gray if past
  const colors = isPast ? [
    'bg-gray-200 hover:bg-gray-300',
    'bg-gray-200 hover:bg-gray-300',
    'bg-gray-200 hover:bg-gray-300',
    'bg-gray-200 hover:bg-gray-300',
    'bg-gray-200 hover:bg-gray-300',
    'bg-gray-200 hover:bg-gray-300',
  ] : [
    'bg-yellow-200 hover:bg-yellow-300',
    'bg-pink-200 hover:bg-pink-300',
    'bg-blue-200 hover:bg-blue-300',
    'bg-green-200 hover:bg-green-300',
    'bg-purple-200 hover:bg-purple-300',
    'bg-orange-200 hover:bg-orange-300',
  ]
  const randomColor = colors[parseInt(session.id) % colors.length]

  return (
    <div
      onClick={onClick}
      className={cn(
        "absolute inset-1 p-2 cursor-pointer",
        "transition-all duration-200",
        "hover:scale-105 hover:-translate-y-1",
        "flex flex-col",
        randomColor,
        randomRotation,
        "shadow-lg hover:shadow-xl",
        "rounded-sm",
        "relative overflow-hidden",
        "before:content-['']",
        "before:absolute before:top-0 before:right-0",
        "before:w-0 before:h-0",
        "before:border-t-[20px] before:border-t-white/50",
        "before:border-r-[20px] before:border-r-transparent",
        "before:shadow-inner",
        isPast && "opacity-60",
        isCurrent && "ring-4 ring-red-500 ring-offset-2 scale-105"
      )}
      style={{
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 -2px 4px 0 rgba(0, 0, 0, 0.06)',
      }}
    >
      {/* Title */}
      <p className={cn(
        "text-[10px] md:text-xs font-bold leading-tight break-words",
        isPast ? "text-gray-600" : "text-gray-800"
      )}>
        {session.title}
      </p>
      
      {/* Room - now the only detail shown */}
      <div className="mt-auto">
        <p className={cn(
          "text-[8px] md:text-[10px] truncate",
          isPast ? "text-gray-500" : "text-gray-600"
        )}>
          {session.room}
        </p>
      </div>
    </div>
  )
}

export default Session 