"use client";

import React from "react";
import { Service } from "@/lib/services-data";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <div className="group relative py-8 lg:py-12 border-b border-border/40 last:border-0 lg:last:border-b lg:border-r border-r-0 lg:[&:nth-child(3n)]:border-r-0">
       <div className="md:px-8 h-full flex flex-col">
          <div className="flex items-start justify-between mb-8">
            {service.icon ? 
              <service.icon className="h-12 w-12 text-primary stroke-[1.5]" /> : 
              <div className="h-12 w-12 rounded bg-primary/10" />
            }
            <span className="font-mono text-xs text-muted-foreground/50 tracking-widest">0{index + 1}</span>
          </div>

          <h3 className="font-sans text-3xl font-medium mb-4 text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 flex-grow font-light">{service.description}</p>

          <ul className="space-y-3 mt-auto">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
}
