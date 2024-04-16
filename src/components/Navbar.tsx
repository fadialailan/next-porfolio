'use client'

import { THEME } from "@/models/enums";
import Language from "@/schemas/public/Language";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react"


const inter = Inter({ subsets: ["latin"] });

export interface NavbarProps {
  language_info: Language;
  children?: ReactNode;
}

export function Navbar(props: NavbarProps) {

  const { language_info, children } = props;

  const [darkEnabled, setDarkEnabled] = useState<boolean>(false);
  const theme_key = 'theme';

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
    <body className={`${inter.className} dark:bg-gray-700 dark:text-white ${darkEnabled ? 'dark' : ''}`}>
      <nav className="[&>a]:m-2 p-1">
        <Link href="/">{language_info.text_home}</Link>
        <button className="float-end p-1 border-black dark:border-white border-2 rounded-s border-solid" onClick={toggleDarkTheme}>dark theme</button>
      </nav>
      <main>
        {children}
      </main>
    </body>
  )

}

export default Navbar
