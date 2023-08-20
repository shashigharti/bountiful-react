export const metadata = {
  title: 'Bountiful Future',
  description: 'Analysis Bountiful Future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
