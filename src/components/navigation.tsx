"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Briefcase,
  FileText,
  Mail,
  Handshake,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { projectsData } from "@/lib/projects-data";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "My Resume", href: "/about", icon: FileText },
  { name: "The Right Fit", href: "/services", icon: Handshake },
  { name: "Contact Us", href: "/contact", icon: Mail },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowProjects(false);
      }
    }

    if (showProjects) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProjects]);

  // Close dropdown when pathname changes
  useEffect(() => {
    setShowProjects(false);
  }, [pathname]);

  return (
    <>
      {/* Desktop - Right Side Elegant Vertical Dock */}
      <nav className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-2 p-3 rounded-full bg-foreground/[0.03] backdrop-blur-2xl border border-white/[0.08]">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setShowProjects(false)}
              className={cn(
                "group relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 ease-out",
                "hover:scale-105",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.06]",
              )}
              title={item.name}
            >
              <Icon
                className="h-[18px] w-[18px]"
                strokeWidth={isActive ? 2 : 1.5}
              />

              {/* Animated Tooltip */}
              <span className="absolute right-full mr-3 flex items-center gap-2 px-3 py-2 rounded-full bg-foreground text-background text-xs font-medium opacity-0 scale-95 origin-right pointer-events-none transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-100 whitespace-nowrap">
                <span>{item.name}</span>
                <span className="w-1 h-1 rounded-full bg-background/50"></span>
              </span>
            </Link>
          );
        })}

        {/* Work Dropdown Trigger */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowProjects(!showProjects)}
            className={cn(
              "group relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 ease-out",
              "hover:scale-105",
              showProjects ||
                pathname.startsWith("/case-studies") ||
                pathname === "/projects"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.06]",
            )}
            title="Work"
          >
            <Briefcase
              className="h-[18px] w-[18px]"
              strokeWidth={showProjects ? 2 : 1.5}
            />

            {/* Animated Tooltip */}
            <span className="absolute right-full mr-3 flex items-center gap-2 px-3 py-2 rounded-full bg-foreground text-background text-xs font-medium opacity-0 scale-95 origin-right pointer-events-none transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-100 whitespace-nowrap">
              <span>Work</span>
              <span className="w-1 h-1 rounded-full bg-background/50"></span>
            </span>
          </button>

          {/* Projects Dropdown / Flyout */}
          {showProjects && (
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 w-64 p-2 rounded-2xl bg-foreground/[0.03] backdrop-blur-2xl border border-white/[0.08] shadow-2xl animate-in slide-in-from-right-4 fade-in duration-200">
              <div className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto custom-scrollbar">
                {projectsData.map((project, idx) => (
                  <Link
                    key={idx}
                    href={project.href}
                    onClick={() => setShowProjects(false)}
                    className="flex items-center gap-3 p-3 rounded-full hover:bg-white/5 transition-colors group/item"
                  >
                    <div className="flex items-center justify-center min-w-8 min-h-8 rounded-full bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                      <span className="font-mono text-xs font-bold">
                        {idx + 1}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground line-clamp-1">
                        {project.title}
                      </p>
                      <p className="text-[10px] text-muted-foreground line-clamp-1">
                        {project.category}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Minimal Divider */}
        <div className="w-6 h-px bg-foreground/10 my-1" />
      </nav>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <Link
              href="/"
              className="font-sans text-lg font-bold hover:text-primary transition-colors"
            >
              Asad Masood
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-foreground/5 border border-white/10 transition-all duration-300 hover:scale-105 hover:bg-foreground/10"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-background/90 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />
          <nav className="fixed top-14 left-0 right-0 bg-background/95 border-b border-border/40 max-h-[calc(100vh-3.5rem)] overflow-y-auto">
            <div className="container mx-auto px-6 py-8">
              <div className="grid grid-cols-2 gap-3 mb-6">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex flex-col items-center gap-2 py-6 rounded-2xl transition-all duration-300 border border-transparent",
                        isActive
                          ? "bg-primary/5 border-primary/20 text-primary"
                          : "bg-surface hover:bg-surface-secondary text-muted-foreground hover:text-foreground",
                      )}
                    >
                      <Icon
                        className="h-6 w-6"
                        strokeWidth={isActive ? 2 : 1.5}
                      />
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground pl-1">
                  Work
                </p>
                <div className="grid gap-3">
                  {projectsData.map((project, idx) => (
                    <Link
                      key={idx}
                      href={project.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 p-4 rounded-xl bg-surface hover:bg-surface-secondary border border-transparent hover:border-border transition-colors group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-mono text-sm font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {project.category}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
