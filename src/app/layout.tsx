import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MenuContextProvider } from "@/context/MenuContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark">
      <body className={inter.className}>
        <MenuContextProvider>
          {children}</MenuContextProvider>
      </body>
    </html>
  );
}
