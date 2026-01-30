import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Asad Masood | Frontend Engineer",
  description: "Get in touch for frontend development projects, consulting, or job opportunities. Based in [Location], available for remote work.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
