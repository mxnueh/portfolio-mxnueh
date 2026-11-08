import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/ThemeScript";

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: "Enmanuel Nunez Matias | Full Stack Developer & Systems Designer",
  description: "Full Stack Developer & Systems Designer from Santo Domingo, DR. Building systems and the interfaces they live in.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased light ${inter.className}`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white text-text-primary">
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
