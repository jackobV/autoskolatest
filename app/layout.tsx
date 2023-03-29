import './globals.css'
import Link from "next/link";
import logo from "../public/logo.svg"
import Image from "next/image";
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
        <nav className="flex flex-row max-w-5xl mx-auto px-4 py-7 justify-between md:pr-5 items-center">

          <div>
            <Link href="/">
              <Image src={logo} alt={"loho"} />
            </Link>
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
