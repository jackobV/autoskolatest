import './globals.css'
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
    <head>
      <meta name="author" content="Jakub Záloha" />
      <meta name="keywords" content="autoškola test, autoškola testy, testy z autoškoly, testy řidičák" />
    </head>
      <body>
      <main>
        <nav className="flex flex-row max-w-5xl mx-auto px-4 py-7 justify-between md:pr-5">

          <div>
            <Link href="/">autoskolatest.cz</Link>
          </div>
          <div>
            <Link href="/blog">Blog</Link>
          </div>
        </nav>
        {children}

      </main>

      </body>
    </html>
  )
}
