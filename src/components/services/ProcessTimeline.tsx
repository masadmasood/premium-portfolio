"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProcessStep } from "@/lib/services-data";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the line drawing
      gsap.fromTo(
        lineRef.current,
        { strokeDasharray: 2000, strokeDashoffset: 2000 },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );

      // Animate cards
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: i % 2 === 0 ? 50 : -50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.2, // Stagger effect based on index
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full py-10 md:py-20 overflow-hidden">
      {/* Mobile Vertical Layout (default < md) */}
      <div className="md:hidden flex flex-col space-y-8 relative">
        <div className="absolute left-6 top-4 bottom-4 w-px bg-border">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/50 to-transparent w-full h-full" />
        </div>
        {steps.map((step, i) => (
          <div key={i} className="relative pl-16">
            <div className="absolute left-[1.12rem] top-0 w-8 h-8 rounded-full bg-background border border-primary flex items-center justify-center z-10 shadow-[0_0_10px_rgba(var(--primary),0.2)]">
              <span className="text-xs font-mono font-bold text-primary">{i + 1}</span>
            </div>
            <div className="pt-1 pr-6">
              <h3 className="text-xl font-medium mb-3 text-foreground tracking-tight">{step.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed font-light">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Curved Layout (>= md) */}
      <div className="hidden md:block relative h-[500px] w-full max-w-[1200px] mx-auto">
        
        {/* The Curved Line */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
        >
            <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(var(--primary), 0.1)" />
                    <stop offset="50%" stopColor="rgba(var(--primary), 1)" />
                    <stop offset="100%" stopColor="rgba(var(--primary), 0.1)" />
                </linearGradient>
            </defs>
          <path
            ref={lineRef}
            d="M0,250 C150,250 150,100 250,100 C350,100 350,400 500,400 C650,400 650,100 750,100 C850,100 850,250 1000,250"
            fill="none"
            stroke="url(#lineGradient)" 
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {/* Steps Nodes */}
        {steps.map((step, i) => {
          // Calculate usage positions based on 5 steps
          // This is hardcoded to match the SVG path logic
          // 0: Start (visual hook) - let's skip
          // Actually let's map the steps to the curves.
          // Step 1: 250, 100 (Top Peak 1) -- 25% across
          // Step 2: 500, 250 (Middle Crossing) -- no, the path above is 250,100 -> 500,400 -> 750,100
          // That's only 3 extrema for 5 steps? 
          // Let's adjust the indices.
          // Positions: 
          // 1. (10%, 250) - Start
          // 2. (30%, 100) - Up
          // 3. (50%, 400) - Down
          // 4. (70%, 100) - Up
          // 5. (90%, 250) - End
          // The SVG needs to match this.
          
          const positions = [
            { left: "10%", top: "50%" }, // Start
            { left: "30%", top: "20%" }, // Peak
            { left: "50%", top: "80%" }, // Trough
            { left: "70%", top: "20%" }, // Peak
            { left: "90%", top: "50%" }, // End
          ];
          
          if (i >= positions.length) return null; // Safety check if more than 5 steps
          
          const isTop = positions[i].top === "20%";
          const isBottom = positions[i].top === "80%";
          
          // Card positioning
          const cardClass = cn(
            "absolute w-64 bg-surface/80 backdrop-blur-md border border-border/50 p-5 rounded-xl shadow-lg hover:border-primary/50 transition-colors duration-300",
            isTop ? "-top-40 left-1/2 -translate-x-1/2" : 
            isBottom ? "top-20 left-1/2 -translate-x-1/2" : 
            "top-24 left-1/2 -translate-x-1/2" // Middle ones
          );

          // For the "Middle" ones (10% and 90%), we probably want the card below or above depending on flow.
          // Let's refine the SVG to be a clean sine wave for 5 items.
          // Items at: 10%, 30%, 50%, 70%, 90%
          // Y values: 50%, 20%, 80%, 20%, 50%
          
          // Actually, let's just use absolute positioning that matches the visual "stations".
          
          return (
            <div
              key={i}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: positions[i].left, top: positions[i].top }}
            >
              {/* Marker Node */}
              <div className="relative z-20 w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(var(--primary),0.5)] group cursor-pointer hover:scale-125 transition-transform duration-300">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>

              {/* Connected Card */}
              <div 
                ref={(el) => { cardsRef.current[i] = el; }}
                className={cn(
                    "absolute w-72 pointer-events-none group-hover:pointer-events-auto",
                    positions[i].top === "20%" ? "bottom-12 -translate-x-[45%]" : 
                    positions[i].top === "80%" ? "top-12 -translate-x-[45%]" :
                    "top-12 -translate-x-[45%]"
                )}
              >
                 <div className="p-6 text-center">
                    <div className="text-5xl font-mono font-bold text-primary/5 absolute -top-4 left-1/2 -translate-x-1/2 select-none -z-10">
                        {step.number}
                    </div>
                    <h3 className="font-sans font-medium text-xl mb-3 text-foreground tracking-tight">{step.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed font-light">
                        {step.description}
                    </p>
                 </div>
              </div>
            </div>
          );
        })}

        {/* SVG Path Redefinition to match positions */}
        {/* 
            0% -> 10% (50%Y) 
            10% -> 30% (20%Y)
            30% -> 50% (80%Y)
            50% -> 70% (20%Y)
            70% -> 90% (50%Y)
            90% -> 100%
         */}
         <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
        >
          <path
            ref={lineRef}
            d="M0,250 C50,250 50,250 100,250 C150,250 200,100 300,100 C400,100 400,400 500,400 C600,400 600,100 700,100 C800,100 850,250 900,250 C950,250 950,250 1000,250"
            fill="none"
            stroke="currentColor" 
            className="text-primary/30"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

      </div>
    </div>
  );
}
