import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
    <head>
      <title>Autoškola Test - vše o testech z autoškoly přehledně</title>
      <meta name="description" content="Na stránce autoškolatest.cz se dozvíte veškeré potřebné informace o testu teorie v autoškole." />
      <meta name="author" content="Jakub Záloha" />
      <meta name="keywords" content="autoškola test, autoškola testy, testy z autoškoly, testy řidičák" />
    </head>
      <body>{children}</body>
    </html>
  )
}
