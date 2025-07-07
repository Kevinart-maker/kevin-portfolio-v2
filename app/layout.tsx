import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./index.css";
import { ThemeProvider } from 'next-themes';
import Navbar from "./components/layout/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kevin - A Creative",
  description: "Build strategic websites with Kevin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} antialiased px-1 md:px-[2rem]`}
      >
      <ThemeProvider defaultTheme="system" enableSystem>
        <div className="w-full h-[10px] bg-[var(--background)]"/>
        <Navbar />
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}