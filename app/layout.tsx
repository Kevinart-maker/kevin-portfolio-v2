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
  title: "Kevin's Portfolio",
  description: "A showcase of my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} antialiased`}
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