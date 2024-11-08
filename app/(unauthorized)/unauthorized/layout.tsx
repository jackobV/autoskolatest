import "../../globals.css"
import {AuthProvider} from "@/app/(app)/osobni_zona/(context)/AuthContext";
import Analytics from "@/app/utils/GA";

export const metadata = {
    title: 'Příhlásit se - autoskolatest.cz',
    description: "Nejlepší způsob přípravy na autoškolu.",

}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="cs">
            <body>
            <Analytics/>
            {children}</body>
        </html>
    )
}
