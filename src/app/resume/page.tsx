import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume - Asad Masood | Frontend Engineer",
  description: "View and download my resume. Frontend Engineer specializing in React.js and Next.js.",
};

export default function ResumePage() {
  return (
    <>
      <div className="relative min-h-screen w-full bg-background overflow-hidden">
        {/* Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_800px_at_50%_0px,rgba(var(--primary),0.03),transparent)]"></div>

        <section className="pt-32 pb-12 md:pt-48 relative z-10">
            <div className="container mx-auto px-6 text-center">
                <h1 className="font-sans font-bold text-5xl md:text-7xl mb-8 uppercase tracking-tighter">
                    Resume
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                    Frontend Engineer • React.js Specialist
                </p>
                <div className="flex justify-center gap-4">
                    <Button asChild size="lg" className="rounded-full">
                        <a href="/resume.pdf" download>
                            <Download className="mr-2 h-4 w-4" /> Download PDF
                        </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-full">
                        <Link href="/contact">
                            Contact Me
                        </Link>
                    </Button>
                </div>
            </div>
        </section>

        <section className="py-12 pb-24 relative z-10">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="w-full aspect-[1/1.4] bg-surface border border-border rounded-lg shadow-xl overflow-hidden relative">
                    <iframe 
                        src="/resume.pdf" 
                        className="w-full h-full"
                        title="Asad Masood Resume"
                    >
                        <p>Your browser does not support PDFs. <a href="/resume.pdf">Download the PDF</a>.</p>
                    </iframe>
                </div>
            </div>
        </section>
      </div>
    </>
  );
}
