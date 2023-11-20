import GlobalContext from '@/context'
import { Provider } from '@/provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Netfix Clone',
  description: 'Netfix Clone built with Next.js ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <GlobalContext>
            {children}
          </GlobalContext>
        </Provider>
      </body>
    </html>
  )
}
