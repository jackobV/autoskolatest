import "../globals.css"
import Link from "next/link";
import logo from "../../public/logo_white.svg"
import Image from "next/image";
import Footer from "@/app/(general)/(components)/footer";
import {CSPostHogProvider} from "@/app/providers";
import Analytics from "@/app/utils/GA";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
    <CSPostHogProvider>
    <head>
      <meta name="author" content="Jakub Záloha" />
      <meta name="keywords" content="autoškola test, autoškola testy, testy z autoškoly, testy řidičák" />
    </head>
      <body className="min-h-screen bg-[#F4F4F4]">
      <Analytics/>
      <main>
        <div className="bg-[#1D66B4] rounded-b-3xl">

        <nav className="flex flex-row max-w-6xl mx-auto px-4 py-7 justify-between md:pr-5 items-center text-white">

          <div>
            <Link href="/">
              <Image src={logo} alt={"logo"} className="h-12" />
            </Link>
          </div>
          <div>
          </div>
        </nav>
        </div>
        {children}
      </main>
      <Footer />
      </body>
      </CSPostHogProvider>

    </html>
  )
}
