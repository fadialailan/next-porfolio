'use client'
import { Inter } from "next/font/google";
import "../globals.css";
import { icon_url } from "@/scripts/global";
import Link from "next/link";
import { useEffect, useState } from "react";
import { THEME } from "@/models/enums";
import { usePathname, useRouter } from "next/navigation";

import type Language from "@/schemas/public/Language";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string}
}>) {

  const pathname = usePathname()
  const router = useRouter()


  const [darkEnabled, setDarkEnabled] = useState<boolean>(false);
  const theme_key = 'theme';

  const url = new URL(`api/languages/${params.locale}`, process.env.HOST)
  console.log("url => ", url)
  // const language_info_request = await fetch()
  // const language_info:Language | null = await language_info_request.json()
  //
  // if (!language_info) {
  //   const pathname_parts = pathname.split("/")
  //   pathname_parts.splice(1)
  //   router.replace(pathname_parts.join("/"))
  // }
  // console.log(language_info)
  
  useEffect(() => {
    const theme_value = localStorage.getItem(theme_key)
    switch (theme_value) {
      case THEME.DARK:
        setDarkEnabled(true);
        break;
      default:
        setDarkEnabled(false);
        break;
    }
  }, [])

  function toggleDarkTheme() {
    setDarkEnabled((darkEnabled) => !darkEnabled)

    // runs before darkEnabled is flipped
    if (darkEnabled) {
      localStorage.setItem(theme_key, THEME.LIGHT)
    } else {
      localStorage.setItem(theme_key, THEME.DARK)
    }
  }

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href={icon_url}
        />
        <title>Porfolio Website</title>
        <meta name="description" content="a porfolio website used to show my porfolio" />
      </head>
      <body dir="ltr" className={`${inter.className} dark:bg-gray-700 dark:text-white ${darkEnabled?'dark':''}`}>
        <nav className="[&>a]:m-2 p-1">
          <Link href="/">{('Home')}</Link>
          <button className="float-end p-1 border-black dark:border-white border-2 rounded-s border-solid" onClick={toggleDarkTheme}>dark theme</button>
        </nav>
        {children}
      </body>
    </html>
  );
}
