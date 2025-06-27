'use client'

import React, { useState } from 'react'
import { Clock } from 'lucide-react'
import Session from './Session'
import SessionModal from './SessionModal'
import { SessionData, RoomData } from '@/types/schedule'
import scheduleData from '@/data/sessions.json'

const ScheduleBoard = () => {
  const [selectedSession, setSelectedSession] = useState<SessionData | null>(null)
  
  // Import data from JSON
  const rooms = scheduleData.rooms as RoomData[]
  const sessions = scheduleData.sessions as SessionData[]
  const timeSlots = scheduleData.timeSlots

  // Helper function to get sessions for a specific time and room
  const getSessionsForSlot = (time: string, room: string) => {
    if (time === '13:00') {
      return sessions.filter(s => s.isLunch)
    }
    return sessions.filter(s => s.time === time && s.room === room)
  }

  return (
    <div className="space-y-6">
      {/* Schedule Grid */}
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-4 md:p-6 rounded-lg shadow-2xl">
        {/* Board texture overlay */}
        <div 
          className="absolute inset-0 opacity-10 rounded-lg pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,0,0,0.03) 39px, rgba(0,0,0,0.03) 40px),
                            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,0,0,0.03) 39px, rgba(0,0,0,0.03) 40px)`
          }}
        ></div>
        
        {/* Scroll indicator for mobile */}
        <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <div className="bg-gradient-to-l from-gray-100 via-gray-100/80 to-transparent dark:from-gray-800 dark:via-gray-800/80 pl-8 pr-2">
            <div className="animate-pulse text-gray-600 dark:text-gray-400 text-2xl">
              →
            </div>
          </div>
        </div>
        
        <div className="relative overflow-x-auto -mx-4 md:mx-0">
          <div className="min-w-[1600px]">
            {/* Header */}
            <div 
              className="grid gap-2 mb-6 px-2 md:px-4" 
              style={{ gridTemplateColumns: `100px repeat(${rooms.length}, 1fr)` }}
            >
              <div className="sticky-time bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-2 rounded-lg shadow-md">
                <Clock className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              {rooms.map((room) => (
                <div key={room.name} className="text-center space-y-1 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg shadow-sm backdrop-blur-sm">
                  <div className="text-xl">{room.icon}</div>
                  <div className="font-semibold text-xs md:text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">{room.name}</div>
                  {room.subtitle && (
                    <div className="text-xs text-gray-500 dark:text-gray-400">{room.subtitle}</div>
                  )}
                </div>
              ))}
            </div>

            <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600 mb-4" />

            {/* Time slots and sessions */}
            <div className="space-y-2">
              {timeSlots.map((time) => (
                <div 
                  key={time} 
                  className="grid gap-2 px-2 md:px-4"
                  style={{ gridTemplateColumns: `100px repeat(${rooms.length}, 1fr)` }}
                >
                  {/* Time column - sticky on mobile */}
                  <div className="sticky-time bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center h-24 p-2 rounded-lg shadow-md">
                    <span className="text-lg md:text-xl font-bold text-gray-700 dark:text-gray-300 font-mono">
                      {time}
                    </span>
                  </div>
                  
                  {/* Sessions for each room at this time */}
                  {rooms.map((room) => {
                    const sessionsInSlot = getSessionsForSlot(time, room.name)
                    
                    if (time === '13:00') {
                      // Lunch row
                      return (
                        <div 
                          key={`${time}-${room.name}`} 
                          className="flex items-center justify-center h-24 rounded-lg bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-900 border-2 border-dashed border-green-300 dark:border-green-700 shadow-inner"
                        >
                          <span className="text-sm md:text-base font-bold text-green-700 dark:text-green-300 tracking-wider">LUNCH</span>
                        </div>
                      )
                    }
                    
                    return (
                      <div 
                        key={`${time}-${room.name}`} 
                        className="relative h-24 bg-white/10 dark:bg-gray-700/10 rounded-lg"
                      >
                        {sessionsInSlot.map((session) => (
                          <Session 
                            key={session.id} 
                            session={session} 
                            onClick={() => setSelectedSession(session)}
                          />
                        ))}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Click on any session for more details</p>
      </div>
      
      {/* Session Modal */}
      {selectedSession && (
        <SessionModal 
          session={selectedSession} 
          onClose={() => setSelectedSession(null)} 
        />
      )}
    </div>
  )
}

export default ScheduleBoard 