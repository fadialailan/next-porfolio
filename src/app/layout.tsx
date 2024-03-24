import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { icon_url } from "@/scripts/global";

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
      <body className={[inter.className, "bg-red-500"].join(" ")}>{children}</body>
    </html>
  );
}
