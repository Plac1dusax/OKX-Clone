import "../styles/globals.css"
import { Inter } from "next/font/google"
import Head from "next/head"
import { MetadataHome } from "@/metadata"
import LocalesContextProvider from "@/context/LocalesContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: MetadataHome.title,
    template: `%s | ${MetadataHome.title}`,
  },
  description: MetadataHome.description,
  keywords: MetadataHome.keywords,
}
export default function RootLayout({ children }) {
  return (
    <LocalesContextProvider>
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href="src/app/company-logo.png"
          sizes="16x16px"
        />
      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </LocalesContextProvider>
  )
}
