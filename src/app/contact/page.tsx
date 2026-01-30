"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
       const tl = gsap.timeline();

       tl.fromTo(heroTitleRef.current, 
         { y: 50, opacity: 0 },
         { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
       )
       .fromTo(".hero-item", 
         { y: 20, opacity: 0 },
         { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
         "-=0.5"
       )
       .fromTo(".contact-content",
         { y: 30, opacity: 0 },
         { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
         "-=0.5"
       );

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-background overflow-hidden selection:bg-primary/20">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-48 md:pt-32 md:pb-56 container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto">
            <h1 ref={heroTitleRef} className="font-sans font-medium text-6xl md:text-8xl lg:text-[9rem] tracking-tighter leading-none mb-8 text-foreground mix-blend-difference">
              Contact
            </h1>
            <p className="hero-item text-xl md:text-2xl text-muted-foreground/60 max-w-2xl mx-auto font-light leading-relaxed">
               Ready to elevate your digital presence? Gets in touch to discuss your next project.
            </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="contact-content relative z-10 pb-24 md:pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
             
             {/* Left Column: Contact Info */}
             <div className="lg:sticky lg:top-32 h-full flex flex-col justify-between py-8">
                <div className="space-y-8">
                   <h3 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9]">
                      Let's start a <br/>
                      <span className="text-muted-foreground/50">conversation.</span>
                   </h3>
                   <p className="text-xl text-muted-foreground/60 font-light max-w-md leading-relaxed">
                      I'm currently open for new projects. If you have an idea that needs a premium touch, I'd love to hear about it.
                   </p>
                </div>


             </div>

             {/* Right Column: Minimalist Line Form */}
             <div className="relative pt-4 lg:pl-12">
                <form className="space-y-16" onSubmit={(e) => e.preventDefault()}>
                   
                   {/* Name Input */}
                   <div className="group relative">
                      <label className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground/40 mb-4 transition-colors group-focus-within:text-primary">
                        01. What's your name?
                      </label>
                      <div className="relative">
                        <input 
                            type="text" 
                            autoComplete="name"
                            className="w-full bg-transparent border-none p-0 py-4 text-2xl md:text-5xl font-light text-foreground placeholder:text-muted-foreground/10 focus:ring-0 focus:outline-none transition-all" 
                            placeholder="John Doe" 
                        />
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground/10 transition-colors group-hover:bg-foreground/20" />
                        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-focus-within:w-full" />
                      </div>
                   </div>

                   {/* Email Input */}
                   <div className="group relative">
                      <label className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground/40 mb-4 transition-colors group-focus-within:text-primary">
                        02. What's your email?
                      </label>
                      <div className="relative">
                        <input 
                            type="email" 
                            autoComplete="email"
                            className="w-full bg-transparent border-none p-0 py-4 text-2xl md:text-5xl font-light text-foreground placeholder:text-muted-foreground/10 focus:ring-0 focus:outline-none transition-all" 
                            placeholder="john@example.com" 
                        />
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground/10 transition-colors group-hover:bg-foreground/20" />
                        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-focus-within:w-full" />
                      </div>
                   </div>

                   {/* Service Select */}
                   <div className="group relative">
                      <label className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground/40 mb-4 transition-colors group-focus-within:text-primary">
                        03. What do you need?
                      </label>
                      <div className="relative">
                        <select className="w-full bg-transparent border-none p-0 py-4 text-2xl md:text-5xl font-light text-foreground placeholder:text-muted-foreground/10 focus:ring-0 focus:outline-none appearance-none cursor-pointer">
                            <option className="bg-background text-lg" value="">Select a service...</option>
                            <option className="bg-background text-lg" value="dev">Web Development</option>
                            <option className="bg-background text-lg" value="design">UI/UX Design</option>
                            <option className="bg-background text-lg" value="audit">Performance Audit</option>
                            <option className="bg-background text-lg" value="consulting">Consultation</option>
                        </select>
                         <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground/40 transition-transform duration-500 group-focus-within:rotate-180">
                             <ArrowRight className="w-6 h-6 rotate-90" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground/10 transition-colors group-hover:bg-foreground/20" />
                        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-focus-within:w-full" />
                      </div>
                   </div>
                   
                   {/* Details Textarea */}
                   <div className="group relative">
                      <label className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground/40 mb-4 transition-colors group-focus-within:text-primary">
                        04. Project Details
                      </label>
                      <div className="relative">
                        <textarea 
                            className="w-full bg-transparent border-none p-0 py-4 text-2xl md:text-3xl font-light text-foreground placeholder:text-muted-foreground/10 focus:ring-0 focus:outline-none resize-none min-h-[120px] leading-normal" 
                            placeholder="Tell me about your timeline, budget, and goals..."
                        ></textarea>
                        <div className="absolute bottom-6 left-0 w-full h-[1px] bg-foreground/10 transition-colors group-hover:bg-foreground/20" />
                        <div className="absolute bottom-6 left-0 w-0 h-[1px] bg-primary transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-focus-within:w-full" />
                      </div>
                   </div>
                   
                   <div className="pt-8 flex justify-end">
                      <Button size="lg" className="group/btn relative overflow-hidden rounded-full h-24 px-16 text-xl bg-foreground text-background hover:bg-foreground transition-all duration-500">
                          <span className="relative z-10 flex items-center gap-4 group-hover/btn:gap-6 transition-all duration-500">
                            Send Inquiry <ArrowRight className="w-6 h-6 -rotate-45 group-hover/btn:rotate-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                          </span>
                      </Button>
                   </div>
                </form>
             </div>

           </div>
        </div>
      </section>

    </div>
  );
}
