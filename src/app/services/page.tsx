"use client";

import { useEffect, useRef } from "react";
import { Code, Rocket, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components & data
import ServicesGrid from "@/components/services/ServicesGrid";
import EngagementModels from "@/components/services/EngagementModels";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import FaqAccordion from "@/components/services/FaqAccordion";
import { CTASection } from "@/components/cta-section";

import { services as rawServices, engagementModels, processSteps, faqs } from "@/lib/services-data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Services data is now in `src/lib/services-data.ts` and injected with icons in the page component.

export default function ServicesPage() {

  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline();
    
    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
    ).fromTo(
      ".hero-subtitle",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );

    // Reveal on scroll
    const sections = document.querySelectorAll(".reveal-on-scroll");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-background overflow-hidden selection:bg-primary/20">
      
      {/* Hero Section - Minimal & Typographic */}
      <section ref={heroRef} className="relative pt-40 pb-24 md:pt-52 md:pb-32 container mx-auto px-6 z-10">
        <div className="max-w-5xl mx-auto text-center">
            <h1 ref={titleRef} className="font-sans font-medium text-6xl md:text-8xl lg:text-[10rem] tracking-tighter leading-none mb-12 text-foreground">
              Services
            </h1>
            
            <div className="hero-subtitle flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-lg md:text-xl text-muted-foreground font-light">
                <span>Frontend Architecture</span>
                <span className="hidden md:inline w-1 h-1 bg-primary/50 rounded-full" />
                <span>Performance Engineering</span>
                <span className="hidden md:inline w-1 h-1 bg-primary/50 rounded-full" />
                <span>UI/UX Implementation</span>
            </div>
        </div>
      </section>

      {/* Services Grid - Clean Lines */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="reveal-on-scroll mb-20">
              <h2 className="font-sans text-3xl md:text-4xl font-medium mb-6 tracking-tight">Technical Capabilities</h2>
              <div className="h-px w-20 bg-primary/50" />
          </div>
          
          <div className="reveal-on-scroll">
            <ServicesGrid
              services={rawServices.map((s, i) => ({ ...s, icon: [Code, Rocket, Users][i] }))}
            />
          </div>
        </div>
      </section>

      {/* Process - The "How" */}
      <section className="relative z-10 py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="reveal-on-scroll text-center mb-20 md:mb-32">
            <h2 className="font-sans text-4xl md:text-6xl font-medium tracking-tighter mb-6">Process</h2>
            <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
                A streamlined workflow designed for transparency and velocity.
            </p>
          </div>
          
          <div className="reveal-on-scroll">
            <ProcessTimeline steps={processSteps} />
          </div>
        </div>
      </section>

      {/* Engagement Models - The "Terms" */}
      <section className="relative z-10 py-24 md:py-32 border-t border-border/40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="reveal-on-scroll lg:col-span-5 lg:sticky lg:top-32">
              <h2 className="font-sans text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Engagement <br/> Models
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you need a dedicated partner for the long haul or specific expertise for a sprint, I offer flexible terms that adapt to your business velocity.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  Clear deliverables
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  Transparent pricing
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  Daily or weekly updates
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EngagementModels items={engagementModels} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="reveal-on-scroll text-center mb-16">
            <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about working with me.</p>
          </div>
          
          <div className="reveal-on-scroll">
             <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

    </div>
  );
}
