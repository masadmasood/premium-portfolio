"use client";

import React from "react";
import ServiceCard from "./ServiceCard";
import { Service } from "@/lib/services-data";

export default function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-border/40">
      {services.map((s, i) => (
        <ServiceCard key={s.title} service={s} index={i} />
      ))}
    </div>
  );
}
