import "../globals.css"
import {CSPostHogProvider} from "@/app/providers";

export const metadata = {
  title: 'Registrace - autoskolatest.cz',
  description: "Nejlepší způsob přípravy na autoškolu.",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <CSPostHogProvider>
        <body>{children}</body>
      </CSPostHogProvider>
    </html>
  )
}
