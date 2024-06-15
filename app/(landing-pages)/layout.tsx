import "../globals.css"
import {CSPostHogProvider} from "@/app/providers";

export const metadata = {
    title: 'autoskolatest.cz - Zajisti si úspěch u teorie z autoškoly!',
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
            <body>
            {children}
            </body>
        </CSPostHogProvider>
        </html>
    )
}
