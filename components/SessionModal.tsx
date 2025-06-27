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
import { Badge } from '@/components/ui/badge'
import { Clock, MapPin, Calendar } from 'lucide-react'

type SessionModalProps = {
  session: SessionData
  onClose: () => void
}

const SessionModal: React.FC<SessionModalProps> = ({ session, onClose }) => {
  const getSessionTypeLabel = (type?: string) => {
    switch (type) {
      case 'js':
        return 'JavaScript'
      case 'workshop':
        return 'Workshop'
      case 'special':
        return 'Special Event'
      case 'tools':
        return 'Tools & Tech'
      default:
        return 'Session'
    }
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
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">{session.title}</DialogTitle>
          <DialogDescription className="sr-only">
            Session details for {session.title}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 pt-4">
          <Badge className={`${getSessionClass(session.type)} border-0 w-fit`}>
            {getSessionTypeLabel(session.type)}
          </Badge>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Room:</span>
              <span>{session.room}</span>
            </div>
            
            <div className="flex items-center gap-3 text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Time:</span>
              <span>{session.time}</span>
            </div>
            
            {session.duration && (
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Duration:</span>
                <span>{session.duration} hour{session.duration > 1 ? 's' : ''}</span>
              </div>
            )}
          </div>
          
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              Join us for this exciting session at JSCC Live!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SessionModal 