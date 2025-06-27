import ScheduleBoard from '@/components/ScheduleBoard'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">JSCC Live Schedule</h1>
      <ScheduleBoard />
    </main>
  )
}
