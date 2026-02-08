import './globals.css'

export const metadata = {
  title: 'Caine racing comming soon.',
  description: 'By Leo Caine',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"><body>
      {children}
      </body>
    </html>
  )
}
