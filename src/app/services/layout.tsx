import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Asad Masood | Frontend Development Services",
  description: "Professional frontend development services including React.js, Next.js development, UI implementation, and performance optimization.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
