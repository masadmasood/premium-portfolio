import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asad Masood - Frontend Engineer (React.js / Next.js)",
  description: "Frontend Engineer specializing in React.js and Next.js. Building scalable, performant web applications.",
  keywords: ["Frontend Engineer", "React.js", "Next.js", "Web Development", "TypeScript"],
  authors: [{ name: "Asad Masood" }],
  creator: "Asad Masood",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Asad Masood - Frontend Engineer",
    description: "Frontend Engineer specializing in React.js and Next.js",
    siteName: "Asad Masood Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asad Masood - Frontend Engineer",
    description: "Frontend Engineer specializing in React.js and Next.js",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
