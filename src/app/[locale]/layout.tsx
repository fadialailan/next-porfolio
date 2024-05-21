import "../globals.css";
import { icon_url } from "@/scripts/global";

import Navbar from "@/components/Navbar";
import { getLanguageInfo } from "@/scripts/sql";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {

  const language_info = await getLanguageInfo(params.locale)
  const headersList = headers()

  if (!language_info) {
    const pathnames = headersList.get("next-url")?.split('/')
    if (pathnames) {
      pathnames.splice(1,1)
      const new_pathname = pathnames.join("/")
      redirect(new_pathname)
    } else {
      console.error("no next-url")
    }
    return (<></>)
  }
  

  return (
    <html lang={language_info.iso_code} dir={language_info.direction}>
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href={icon_url}
        />
        <title>{language_info.text_title}</title>
        <meta name="description" content="a portfolio website used to show my portfolio" />
      </head>
    <body className={`${inter.className} dark:bg-gray-700 dark:text-white`}>
      <Navbar language_info={language_info!}/>
      {children}
    </body>
    </html>
  );
}
