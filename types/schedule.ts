export type SessionData = {
  id: string
  title: string
  room: string
  time: string
  speaker?: string
  duration?: number
  isLunch?: boolean
}

export type RoomData = {
  name: string
  icon: string
  subtitle?: string
} 