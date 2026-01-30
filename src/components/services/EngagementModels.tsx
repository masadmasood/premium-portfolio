"use client";

import React, { useState } from "react";
import { EngagementModel } from "@/lib/services-data";
import { ChevronDown } from "lucide-react";

export default function EngagementModels({ items }: { items: EngagementModel[] }) {
  // default open first item
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((m, idx) => {
        const isOpen = open === idx;
        const panelId = `eng-panel-${idx}`;

        return (
          <div key={m.title} className="reveal-on-scroll">
            <div className="rounded-2xl overflow-hidden bg-surface/20 border border-border">
              <button
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : idx)}
                className="w-full flex items-center justify-start p-6 gap-6 text-left group"
              >
                <span className="font-mono text-2xl font-bold text-border">0{idx + 1}</span>

                <div className="flex items-start gap-4">
                  <div className="flex flex-col">
                    <h3 className="font-sans text-2xl font-bold group-hover:text-primary">{m.title}</h3>
                    <span className="text-sm text-muted-foreground mt-1 hidden md:block">{m.description}</span>
                  </div>
                </div>

                <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ml-auto ${isOpen ? "rotate-180 text-primary" : ""}`} />
              </button>

              <div id={panelId} className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 p-6" : "max-h-0 opacity-0"}`}>
                <p className="text-muted-foreground mb-4">{m.description}</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">Ideal for</span>
                  <span className="h-px flex-1 bg-border"></span>
                </div>
                <p className="text-sm text-foreground/80">{m.ideal}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
