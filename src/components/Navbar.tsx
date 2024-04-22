'use client'

import { THEME } from "@/models/enums";
import Language from "@/schemas/public/Language";
import Link from "next/link";
import { useEffect, useState } from "react"
import { Moon, Sun } from "react-feather";



export interface NavbarProps {
  language_info: Language;
}

export function Navbar(props: NavbarProps) {

  const { language_info } = props;

  const [darkEnabled, setDarkEnabled] = useState<boolean>(false);
  const theme_key = 'theme';

  useEffect(() => {
    const theme_value = localStorage.getItem(theme_key)
    switch (theme_value) {
      case THEME.DARK:
        // setDarkEnabled(true);
        toggleDarkTheme()
        break;
      default:
        // setDarkEnabled(false);
        break;
    }
  }, [])

  function toggleDarkTheme() {
    setDarkEnabled(!darkEnabled)
    // // runs before darkEnabled is flipped
    if (darkEnabled) {
      localStorage.setItem(theme_key, THEME.LIGHT)
      document.documentElement.classList.remove("dark")
    } else {
      localStorage.setItem(theme_key, THEME.DARK)
      document.documentElement.classList.add("dark")
    }
  }

  return (
    <nav className="[&>a]:m-2 p-1">
      <Link href={`/${language_info.iso_code}`}>{language_info.text_home}</Link>
      <button className="float-end p-1 border-black dark:border-white border-2 rounded-lg border-solid"
        onClick={toggleDarkTheme}
      >{darkEnabled? <Moon/>:<Sun/>}</button>
    </nav>
  )

}

export default Navbar
