import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enmanuel Nunez Matias | Full Stack Developer & Systems Designer",
  description: "Full Stack Developer & Systems Designer de Santo Domingo, RD. Construyendo sistemas y las interfaces en las que viven.",
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
