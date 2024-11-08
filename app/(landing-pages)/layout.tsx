import "../globals.css"
import {CSPostHogProvider} from "@/app/providers";
import Analytics from "@/app/utils/GA";

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
            <Analytics/>
            {children}
            </body>
        </CSPostHogProvider>
        </html>
    )
}
