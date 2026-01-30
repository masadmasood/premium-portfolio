"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="bg-surface border border-border rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden reveal-on-scroll">
          
          {/* Abstract Shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-sans text-4xl md:text-7xl font-bold mb-8 tracking-tighter leading-[1.1] text-foreground">
              Ready to build something extraordinary?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
              Available for freelance projects and engineering roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="default" className="rounded-full h-16 px-10 text-lg">
                <Link href="/contact">Book a Call</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-16 px-10 text-lg">
                <Link href="mailto:contact@asadmasood.dev">Email Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
