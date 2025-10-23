import type { Metadata } from 'next'
import { QueryProvider } from '@/components/providers/QueryProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Instagram Clone',
  description: 'A web-first Instagram clone with enhanced desktop features',
}

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children}
          {modal}
        </QueryProvider>
      </body>
    </html>
  )
}
