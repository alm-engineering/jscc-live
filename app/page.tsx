import ScheduleBoard from '@/components/ScheduleBoard'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="p-4 md:p-8">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            JSCC Live
          </h1>
          <p className="text-muted-foreground mt-2">Conference Schedule</p>
        </div>
        <ScheduleBoard />
      </div>
    </main>
  )
}
