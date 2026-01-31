"use client";

import Link from "next/link";
import {
  ArrowRight,
  Code,
  Zap,
  Search,
  Layers,
  Globe,
  Award,
  Star,
  Users,
  Briefcase,
  CheckCircle,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  generatePersonSchema,
  generateWebsiteSchema,
} from "@/lib/structured-data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "@/lib/projects-data";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);

  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebsiteSchema();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
    ).fromTo(
      subTextRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5",
    );

    const sections = document.querySelectorAll(".reveal-on-scroll");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        },
      );
    });

    // Parallax for project images
    const projectImages = document.querySelectorAll(".project-image");
    projectImages.forEach((img) => {
      gsap.to(img, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <div className="relative min-h-screen w-full bg-background overflow-hidden">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative pt-28 pb-20 md:pt-44 md:pb-28 w-full mx-auto px-6 h-auto min-h-[720px] flex flex-col items-center justify-center text-center z-10"
        >
          {/* Dark Animated Gradient Background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Base dark gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(20,40,80,0.3),transparent)]"></div>

            {/* Animated gradient orbs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(30,64,175,0.15)_0%,transparent_70%)] animate-[pulse_8s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(15,23,42,0.4)_0%,transparent_70%)] animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(30,58,138,0.1)_0%,transparent_60%)] animate-[pulse_12s_ease-in-out_infinite]"></div>

            {/* Subtle noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]"></div>

            {/* Vignette effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
          </div>

          <div className="mb-6 relative z-10">
            <span className="font-mono text-sm tracking-wider text-primary/80 uppercase">
              Frontend Engineer
            </span>
          </div>

          <h1
            ref={textRef}
            className="font-sans font-bold text-5xl md:text-7xl lg:text-[8rem] tracking-tighter text-foreground mb-10 leading-[0.95] relative z-10"
          >
            <span className="block">ASAD</span>
            <span className="block text-primary">MASOOD</span>
          </h1>

          <p
            ref={subTextRef}
            className="font-body text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-16 relative z-10 font-light"
          >
            Crafting{" "}
            <span className="text-primary font-medium">
              premium digital experiences
            </span>{" "}
            through innovative frontend architecture and performance
            engineering.
          </p>


        </section>

        {/* Stats Section */}
        <section className="relative z-10 bg-background border-y border-border/20">
          <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-border/20">
              {[
                {
                  category: "EXPERIENCE",
                  value: "2+ Years",
                  desc: "Frontend development",
                },
                {
                  category: "PROJECTS",
                  value: "10+ Delivered",
                  desc: "Production applications",
                },
                {
                  category: "FOCUS",
                  value: "Performance",
                  desc: "Lighthouse scores",
                },
                { 
                  category: "AVAILABILITY", 
                  value: "Worldwide", 
                  desc: "Remote ready" 
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col px-8 py-8 text-left reveal-on-scroll"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3">
                    {stat.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-muted-foreground">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Works */}
        <section className="py-32 bg-background relative z-10">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-32 reveal-on-scroll">
              <h2 className="font-sans text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                Selected Works
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                A curated selection of projects demonstrating product strategy,
                design systems, and frontend engineering.
              </p>
            </div>

            <div className="space-y-48">
              {projectsData.slice(0, 6).map((project, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center reveal-on-scroll"
                >
                  {/* Content Area - Minimal Qapital Style */}
                  <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
                    {/* Title & Category */}
                    <div className="space-y-4">
                        <h3 className="font-sans font-bold text-5xl md:text-6xl tracking-tighter text-foreground">
                          {project.title}
                        </h3>
                        <p className="font-medium text-lg md:text-xl text-muted-foreground/60 uppercase tracking-widest">
                          {project.category}
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                      {project.description}
                    </p>

                    {/* Tags - Strategy/Concept focused */}
                    <div className="flex flex-wrap justify-center gap-3 my-4">
                      {(project.tags || project.tech).map((t) => (
                        <span
                          key={t}
                          className="px-5 py-2.5 rounded-full bg-secondary/30 border border-border/50 text-xs font-semibold text-muted-foreground uppercase tracking-wider transition-all duration-300 hover:bg-secondary/50 hover:text-foreground cursor-default"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Button - Reveal on hover */}
                    <div className="pt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <Button
                          asChild
                          variant="outline"
                          className="rounded-full h-14 px-10 border-border hover:bg-foreground hover:text-background transition-colors text-base"
                        >
                          <Link href={project.href}>View Case Story</Link>
                        </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
