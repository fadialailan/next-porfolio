import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { icon_url } from "@/scripts/global";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Porfolio Website",
  description: "a porfolio website used to show my porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href={icon_url}
        />
      </head>
      <body className={[inter.className, "bg-red-500"].join(" ")}>
        <nav className="[&>a]:m-2 hover:[&>a]:text-white">
          <Link href="/">Home</Link>
          <Link href="/attrubution">Attribution</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
