import Link from "next/link";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-24 md:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        {/* Main CTA Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide mb-8">
            Available for new projects
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            Let&apos;s create something
            <span className="block text-primary">amazing together</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-md mb-10">
            Have a project in mind? I&apos;d love to hear about it.
          </p>

          <a 
            href="mailto:contact@asadmasood.dev" 
            className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-primary transition-all duration-300"
          >
            Get in touch
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground order-2 md:order-1">
              © {currentYear} Asad Masood
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-1 order-1 md:order-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                GitHub
              </a>
              <span className="text-border">·</span>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                LinkedIn
              </a>
              <span className="text-border">·</span>
              <a 
                href="mailto:contact@asadmasood.dev" 
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
