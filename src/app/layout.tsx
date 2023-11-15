import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/providers/AthProvider'
import { getServerSession } from 'next-auth'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tech Market',
  description: 'Una pagina donde encontraras todo tipo de gadget o equipo tecnologico',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
   const session = await getServerSession();
   console.log(session)
  return (
    <html lang="en">
      <body className={inter.className}>
          <AuthProvider session={session} >
            {children}
          </AuthProvider>
      </body>
    </html>
  )
}
