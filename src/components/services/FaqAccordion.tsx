"use client";

import React, { useState } from "react";
import { FAQ } from "@/lib/services-data";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-0 divide-y divide-border border-y border-border">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full py-6 text-left flex items-start justify-between gap-4 group"
          >
            <div className="flex items-start gap-6">
              <span className="font-mono text-sm text-muted-foreground pt-1">0{i + 1}</span>
              <span className={`font-sans text-lg font-medium transition-colors ${open === i ? 'text-primary' : 'group-hover:text-primary'}`}>
                {faq.question}
              </span>
            </div>
            <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 shrink-0 mt-1 ${open === i ? 'rotate-180 text-primary' : ''}`} />
          </button>

          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
            <p className="text-muted-foreground leading-relaxed pl-12 pr-8">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
