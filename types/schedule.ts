export type SessionData = {
  id: string
  title: string
  room: string
  time: string
  duration?: number
  color?: string
  type?: 'js' | 'workshop' | 'special' | 'tools'
  isLunch?: boolean
} 