'use client'

import React from 'react'
import { SessionData } from '@/types/schedule'
import { cn } from '@/lib/utils'

type SessionProps = {
  session: SessionData
  onClick?: () => void
}

const Session: React.FC<SessionProps> = ({ session, onClick }) => {
  if (session.isLunch) {
    return null // Lunch is handled differently in the grid
  }

  const getSessionClass = (type?: string) => {
    switch (type) {
      case 'js':
        return 'session-js'
      case 'workshop':
        return 'session-workshop'
      case 'special':
        return 'session-special'
      case 'tools':
        return 'session-tools'
      default:
        return 'session-js'
    }
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        "absolute inset-0 p-1 md:p-2 rounded-lg transition-all duration-200 cursor-pointer",
        "hover:scale-[1.02] hover:shadow-md hover:-translate-y-0.5",
        "flex items-center justify-center text-center",
        "border border-transparent hover:border-border/50",
        getSessionClass(session.type)
      )}
    >
      <p className="text-[10px] md:text-xs font-medium leading-tight break-words px-1">
        {session.title}
      </p>
    </div>
  )
}

export default Session 