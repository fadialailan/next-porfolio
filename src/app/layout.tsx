'use client'
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { icon_url } from "@/scripts/global";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Porfolio Website",
//   description: "a porfolio website used to show my porfolio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkEnabled, setDarkEnabled] = useState<boolean>(false);
  function toggleDarkTheme() {
    setDarkEnabled((darkEnabled) => !darkEnabled)
    console.log("stuff")
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
        <meta name="description" content="a porfolio website used to show my porfolio"/>
      </head>
      <body className={`${inter.className} dark:bg-gray-700 dark:text-white ${darkEnabled && 'dark'}`}>
        <nav className="[&>a]:m-2 p-1">
          <Link href="/">Home</Link>
          <Link href="/attrubution">Attribution</Link>
          <button className="float-right p-1 border-black dark:border-white border-2 rounded-s border-solid" onClick={toggleDarkTheme}>dark theme</button>
        </nav>
        {children}
      </body>
    </html>
  );
}
