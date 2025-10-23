import { Sidebar } from '@/components/navigation/Sidebar'
import { BottomNav } from '@/components/navigation/BottomNav'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 lg:ml-[244px]">
        <div className="mx-auto max-w-[935px] pb-20 lg:pb-0">
          {children}
        </div>
      </main>
      
      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  )
}