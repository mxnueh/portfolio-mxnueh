import type { Metadata } from "next";
import "./globals.css";
import { ThemeScript } from "@/components/ThemeScript";

export const metadata: Metadata = {
  title: "Enmanuel Nunez Matias | Full Stack Developer & Systems Designer",
  description: "Full Stack Developer & Systems Designer from Santo Domingo, DR. Building systems and the interfaces they live in.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-text-primary dark:text-dark-text-primary">
        {children}
      </body>
    </html>
  );
}
