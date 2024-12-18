import "../globals.css"
import { AuthProvider } from "@/app/(app)/osobni_zona/(context)/AuthContext";
import Shell from "@/app/(app)/osobni_zona/(parent_components)/shell";
import {QuestionsProvider} from "@/app/(app)/osobni_zona/(context)/QuestionsContext";

export const metadata = {
    title: 'Osobní zóna - autoskolatest.cz',
    description: "Nejlepší způsob přípravy na autoškolu.",

}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="cs">
      <AuthProvider>
          <QuestionsProvider>
        <body>
        <Shell>{children}</Shell>
        </body>
              </QuestionsProvider>
      </AuthProvider>
      </html>
  )
}
