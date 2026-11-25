import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const geist = Geist({ subsets: ['latin'], display: 'swap', variable: '--font-geist-sans' });

export const metadata: Metadata = {
  title: "Enmanuel Nunez Matias | Full Stack Developer & Systems Designer",
  description: "Full Stack Developer & Systems Designer from Santo Domingo, DR. Building systems and the interfaces they live in.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.className} ${geist.variable}`}>
      <body className="min-h-full flex flex-col bg-white text-text-primary">
        {children}
      </body>
    </html>
  );
}
