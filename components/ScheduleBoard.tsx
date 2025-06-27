'use client'

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Clock } from 'lucide-react'
import Session from './Session'
import SessionModal from './SessionModal'
import { SessionData } from '@/types/schedule'

const ScheduleBoard = () => {
  const [selectedSession, setSelectedSession] = useState<SessionData | null>(null)
  
  // Rooms from the image
  const rooms = [
    { name: 'index', icon: '🏠' },
    { name: 'SAAS', icon: '☁️' },
    { name: 'components', icon: '🧩' },
    { name: 'twilio', icon: '📱', subtitle: 'TV 10+' },
    { name: 'peermion', icon: '🔗', subtitle: '10+' },
    { name: 'Tiffinger Thiel', icon: '🏔️', subtitle: '10+' },
    { name: 'Holzner Alm', icon: '🌲', subtitle: 'TBG TV' },
    { name: 'Some place else', icon: '📍' }
  ]

  // Time slots
  const timeSlots = [
    '11:00',
    '12:00',
    '13:00', // Lunch
    '14:00',
    '15:00',
    '16:00',
    '17:00'
  ]

  // Sessions data based on the image
  const sessions: SessionData[] = [
    // Morning sessions
    { id: '1', title: 'EU Mobile Welcome', time: '11:00', room: 'index', type: 'workshop' },
    { id: '2', title: 'Push + Blog', time: '11:00', room: 'SAAS', type: 'js' },
    { id: '3', title: 'Serverless und so was abend', time: '11:00', room: 'components', type: 'js' },
    { id: '4', title: 'B day of extreme TV Yellow Couch', time: '11:00', room: 'twilio', type: 'js' },
    { id: '5', title: 'Kubernetes & Charles', time: '11:00', room: 'peermion', type: 'workshop' },
    { id: '6', title: 'CSS Battle', time: '11:00', room: 'Tiffinger Thiel', type: 'special' },
    { id: '7', title: 'JSCo live', time: '11:00', room: 'Holzner Alm', type: 'js' },
    
    // 12:00 sessions
    { id: '8', title: 'More Tooling Web Dev', time: '12:00', room: 'index', type: 'js' },
    { id: '9', title: 'Phaser', time: '12:00', room: 'SAAS', type: 'tools' },
    { id: '10', title: 'React Deploy Sea', time: '12:00', room: 'components', type: 'tools' },
    { id: '11', title: 'Tower (Vim Session mit den tools)', time: '12:00', room: 'twilio', type: 'special' },
    { id: '12', title: 'Stories in Storybook', time: '12:00', room: 'peermion', type: 'workshop' },
    { id: '13', title: 'Side Project Swap', time: '12:00', room: 'Tiffinger Thiel', type: 'workshop' },
    
    // Lunch
    { id: 'lunch', title: 'LUNCH', time: '13:00', room: 'all', isLunch: true },
    
    // Afternoon sessions
    { id: '14', title: 'Security like', time: '14:00', room: 'index', type: 'js' },
    { id: '15', title: 'Jankowitch Gambian', time: '14:00', room: 'SAAS', type: 'tools' },
    { id: '16', title: 'Simple Web Crypto Tool', time: '14:00', room: 'components', type: 'js' },
    { id: '17', title: 'ESP Group Video GO', time: '14:00', room: 'twilio', type: 'js' },
    { id: '18', title: 'Building my cloud', time: '14:00', room: 'peermion', type: 'tools' },
    { id: '19', title: 'Wrapper der Generis', time: '14:00', room: 'Holzner Alm', type: 'workshop' },
    
    // 15:00 sessions
    { id: '20', title: 'Javascript Session (live)', time: '15:00', room: 'index', type: 'js' },
    { id: '21', title: 'ToolMo Beruf', time: '15:00', room: 'SAAS', type: 'js' },
    { id: '22', title: 'Building low code in React', time: '15:00', room: 'components', type: 'special' },
    { id: '23', title: 'Git things', time: '15:00', room: 'twilio', type: 'special' },
    { id: '24', title: 'Screen Setlist streams', time: '15:00', room: 'peermion', type: 'tools' },
    { id: '25', title: 'FOOTY Mapping', time: '15:00', room: 'Tiffinger Thiel', type: 'js' },
    
    // 16:00 sessions
    { id: '26', title: 'Frontend Universe', time: '16:00', room: 'index', type: 'js' },
    { id: '27', title: 'My JS Story & FOOTY', time: '16:00', room: 'SAAS', type: 'js' },
    { id: '28', title: 'Lightning TALKS', time: '16:00', room: 'components', type: 'workshop' },
    { id: '29', title: 'Refresh JS Mobile stage', time: '16:00', room: 'peermion', type: 'tools' },
    
    // 17:00 sessions
    { id: '30', title: 'Evening News', time: '17:00', room: 'index', type: 'workshop' },
    { id: '31', title: 'Effects', time: '17:00', room: 'twilio', type: 'special' },
    { id: '32', title: 'Code panel JS minimal code demos', time: '17:00', room: 'Holzner Alm', type: 'js' },
    { id: '33', title: 'Build an ESG Report', time: '17:00', room: 'Some place else', type: 'workshop' }
  ]

  // Helper function to get sessions for a specific time and room
  const getSessionsForSlot = (time: string, room: string) => {
    if (time === '13:00') {
      return sessions.filter(s => s.isLunch)
    }
    return sessions.filter(s => s.time === time && s.room === room)
  }

  const sessionTypes = [
    { type: 'js', label: 'JavaScript', color: 'session-js' },
    { type: 'workshop', label: 'Workshop', color: 'session-workshop' },
    { type: 'special', label: 'Special', color: 'session-special' },
    { type: 'tools', label: 'Tools', color: 'session-tools' }
  ]

  return (
    <div className="space-y-6">
      {/* Legend */}
      <div className="flex flex-wrap gap-2 justify-center">
        {sessionTypes.map(({ type, label, color }) => (
          <Badge key={type} variant="secondary" className={`${color} border-0`}>
            {label}
          </Badge>
        ))}
      </div>

      {/* Schedule Grid */}
      <div className="relative">
        {/* Scroll indicator for mobile */}
        <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <div className="bg-gradient-to-l from-background via-background/80 to-transparent pl-8 pr-2">
            <div className="animate-pulse text-muted-foreground">
              →
            </div>
          </div>
        </div>
        
        <div className="relative overflow-x-auto -mx-4 md:mx-0">
          <div className="min-w-[1200px]">
            {/* Header */}
            <div className="grid grid-cols-[100px_repeat(8,1fr)] gap-1 mb-4 px-2 md:px-4">
              <div className="sticky-time bg-background flex items-center justify-center p-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
              </div>
              {rooms.map((room) => (
                <div key={room.name} className="text-center space-y-1 p-2">
                  <div className="text-lg">{room.icon}</div>
                  <div className="font-medium text-xs md:text-sm">{room.name}</div>
                  {room.subtitle && (
                    <div className="text-xs text-muted-foreground">{room.subtitle}</div>
                  )}
                </div>
              ))}
            </div>

            <div className="h-px bg-border" />

            {/* Time slots and sessions */}
            <div className="space-y-1">
              {timeSlots.map((time) => (
                <div key={time} className="grid grid-cols-[100px_repeat(8,1fr)] gap-1 px-2 md:px-4">
                  {/* Time column - sticky on mobile */}
                  <div className="sticky-time bg-background flex items-center justify-center h-24 p-2">
                    <Badge variant={time === '13:00' ? 'secondary' : 'outline'} className="text-sm md:text-base font-mono">
                      {time}
                    </Badge>
                  </div>
                  
                  {/* Sessions for each room at this time */}
                  {rooms.map((room) => {
                    const sessionsInSlot = getSessionsForSlot(time, room.name)
                    
                    if (time === '13:00') {
                      // Lunch row
                      return (
                        <div 
                          key={`${time}-${room.name}`} 
                          className="flex items-center justify-center h-24 rounded bg-muted/30 border-2 border-dashed border-muted-foreground/10"
                        >
                          <span className="text-xs md:text-sm font-medium text-muted-foreground">Lunch</span>
                        </div>
                      )
                    }
                    
                    return (
                      <div 
                        key={`${time}-${room.name}`} 
                        className="relative h-24"
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