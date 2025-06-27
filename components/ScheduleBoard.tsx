'use client'

import React, { useState } from 'react'
import Session from './Session'
import SessionModal from './SessionModal'
import { SessionData } from '@/types/schedule'

const ScheduleBoard = () => {
  const [selectedSession, setSelectedSession] = useState<SessionData | null>(null)

  // Rooms from the image
  const rooms = [
    'index',
    'SAAS',
    'components',
    'twilio',
    'peermion',
    'Tiffinger Thiel',
    'Holzner Alm',
    'Some place else'
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
    { id: '1', title: 'EU Mobile Welcome', time: '11:00', room: 'index', color: 'bg-blue-200' },
    { id: '2', title: 'Push + Blog', time: '11:00', room: 'SAAS', color: 'bg-yellow-200' },
    { id: '3', title: 'Serverless und so was abend', time: '11:00', room: 'components', color: 'bg-yellow-200' },
    { id: '4', title: 'B day of extreme TV Yellow Couch', time: '11:00', room: 'twilio', color: 'bg-yellow-200' },
    { id: '5', title: 'Kubernetes & Charles', time: '11:00', room: 'peermion', color: 'bg-blue-200' },
    { id: '6', title: 'CSS Battle', time: '11:00', room: 'Tiffinger Thiel', color: 'bg-pink-300' },
    { id: '7', title: 'JSCo live', time: '11:00', room: 'Holzner Alm', color: 'bg-yellow-200' },
    
    // 12:00 sessions
    { id: '8', title: 'More Tooling Web Dev', time: '12:00', room: 'index', color: 'bg-yellow-200' },
    { id: '9', title: 'Phaser', time: '12:00', room: 'SAAS', color: 'bg-orange-300' },
    { id: '10', title: 'React Deploy Sea', time: '12:00', room: 'components', color: 'bg-orange-300' },
    { id: '11', title: 'Tower (Vim Session mit den tools)', time: '12:00', room: 'twilio', color: 'bg-pink-300' },
    { id: '12', title: 'Stories in Storybook', time: '12:00', room: 'peermion', color: 'bg-blue-200' },
    { id: '13', title: 'Side Project Swap', time: '12:00', room: 'Tiffinger Thiel', color: 'bg-blue-200' },
    
    // Lunch
    { id: 'lunch', title: 'LUNCH', time: '13:00', room: 'all', isLunch: true },
    
    // Afternoon sessions
    { id: '14', title: 'Security like', time: '14:00', room: 'index', color: 'bg-yellow-200' },
    { id: '15', title: 'Jankowitch Gambian', time: '14:00', room: 'SAAS', color: 'bg-orange-300' },
    { id: '16', title: 'Simple Web Crypto Tool', time: '14:00', room: 'components', color: 'bg-yellow-200' },
    { id: '17', title: 'ESP Group Video GO', time: '14:00', room: 'twilio', color: 'bg-yellow-200' },
    { id: '18', title: 'Building my cloud', time: '14:00', room: 'peermion', color: 'bg-orange-300' },
    { id: '19', title: 'Wrapper der Generis', time: '14:00', room: 'Holzner Alm', color: 'bg-blue-200' },
    
    // 15:00 sessions
    { id: '20', title: 'Javascript Session (live)', time: '15:00', room: 'index', color: 'bg-yellow-200' },
    { id: '21', title: 'ToolMo Beruf', time: '15:00', room: 'SAAS', color: 'bg-yellow-200' },
    { id: '22', title: 'Building low code in React', time: '15:00', room: 'components', color: 'bg-pink-300' },
    { id: '23', title: 'Git things', time: '15:00', room: 'twilio', color: 'bg-pink-300' },
    { id: '24', title: 'Screen Setlist streams', time: '15:00', room: 'peermion', color: 'bg-orange-300' },
    { id: '25', title: 'FOOTY Mapping', time: '15:00', room: 'Tiffinger Thiel', color: 'bg-yellow-200' },
    
    // 16:00 sessions
    { id: '26', title: 'Frontend Universe', time: '16:00', room: 'index', color: 'bg-yellow-200' },
    { id: '27', title: 'My JS Story & FOOTY', time: '16:00', room: 'SAAS', color: 'bg-yellow-200' },
    { id: '28', title: 'Lightning TALKS', time: '16:00', room: 'components', color: 'bg-blue-200' },
    { id: '29', title: 'Refresh JS Mobile stage', time: '16:00', room: 'peermion', color: 'bg-orange-300' },
    
    // 17:00 sessions
    { id: '30', title: 'Evening News', time: '17:00', room: 'index', color: 'bg-green-200' },
    { id: '31', title: 'Effects', time: '17:00', room: 'twilio', color: 'bg-pink-300' },
    { id: '32', title: 'Code panel JS minimal code demos', time: '17:00', room: 'Holzner Alm', color: 'bg-yellow-200' },
    { id: '33', title: 'Build an ESG Report', time: '17:00', room: 'Some place else', color: 'bg-blue-200' }
  ]

  // Helper function to get sessions for a specific time and room
  const getSessionsForSlot = (time: string, room: string) => {
    if (time === '13:00') {
      return sessions.filter(s => s.isLunch)
    }
    return sessions.filter(s => s.time === time && s.room === room)
  }

  return (
    <div className="overflow-x-auto">
      <div className="bg-gray-50 rounded-lg shadow-2xl p-8 min-w-[1400px]">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-[0.3em] text-gray-700">MARKETPLACE</h2>
        
        <div className="grid grid-cols-[120px_repeat(8,1fr)] gap-1 bg-white p-4 rounded-lg">
          {/* Header row with rooms */}
          <div className=""></div>
          {rooms.map((room, index) => {
            const roomColors = [
              'bg-green-200', 'bg-yellow-100', 'bg-blue-100', 'bg-orange-200',
              'bg-purple-100', 'bg-orange-200', 'bg-orange-200', 'bg-orange-200'
            ]
            return (
              <div 
                key={room} 
                className={`${roomColors[index]} font-semibold text-sm text-center p-3 rounded shadow-sm border border-gray-300`}
              >
                <div className="text-gray-700">{room}</div>
                {room === 'twilio' && <div className="text-xs text-gray-500">TV 10+</div>}
                {room === 'peermion' && <div className="text-xs text-gray-500">10+</div>}
                {room === 'Tiffinger Thiel' && <div className="text-xs text-gray-500">10+</div>}
                {room === 'Holzner Alm' && <div className="text-xs text-gray-500">TBG TV</div>}
              </div>
            )
          })}

          {/* Time slots and sessions */}
          {timeSlots.map((time) => (
            <React.Fragment key={time}>
              {/* Time column */}
              <div className="font-bold text-xl bg-lime-300 p-4 text-center shadow-md rounded border border-gray-400">
                {time}
              </div>
              
              {/* Sessions for each room at this time */}
              {rooms.map((room) => {
                const sessionsInSlot = getSessionsForSlot(time, room)
                
                if (time === '13:00') {
                  // Lunch row
                  return (
                    <div 
                      key={`${time}-${room}`} 
                      className="p-2 bg-gray-200 border-2 border-dashed border-gray-400 text-center flex items-center justify-center"
                    >
                      <div className="text-xl font-bold text-gray-500 tracking-[0.2em]">
                        {'// LUNCH //'}
                      </div>
                    </div>
                  )
                }
                
                return (
                  <div 
                    key={`${time}-${room}`} 
                    className="p-1 min-h-[100px] border border-gray-300 bg-gray-50 relative"
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
            </React.Fragment>
          ))}
        </div>
        
        {/* Footer info */}
        <div className="mt-6 flex justify-between items-center text-sm text-gray-600">
          <div className="flex gap-4">
            <span className="bg-yellow-200 px-3 py-1 rounded">JS Sessions</span>
            <span className="bg-blue-200 px-3 py-1 rounded">Workshops</span>
            <span className="bg-pink-300 px-3 py-1 rounded">Special Events</span>
            <span className="bg-orange-300 px-3 py-1 rounded">Tools & Tech</span>
          </div>
          <div className="text-right">
            <p>Live updates at the venue</p>
          </div>
        </div>
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