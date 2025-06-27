import ScheduleBoard from '@/components/ScheduleBoard'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-900">
      <div className="p-4 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
              JSCC Live
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Conference Schedule Board</p>
          </div>
          <ThemeToggle />
        </div>
        <ScheduleBoard />
      </div>
    </main>
  )
}
