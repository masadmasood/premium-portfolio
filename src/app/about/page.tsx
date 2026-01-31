"use client";

import {
  Download,
  ArrowUpRight,
  Layout,
  Code2,
  Rocket,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Data ---

const techStack = {
  frontend: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)"],
  styling: ["Tailwind CSS", "CSS3", "Sass", "shadcn/ui", "Framer Motion"],
  tools: ["Git", "VS Code", "Vite", "Webpack", "Figma"],
  testing: ["Jest", "RxJS", "Playwright", "React Testing Library"],
};

const workingPrinciples = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "Deep dive into requirements and user needs to build a solid foundation.",
  },
  {
    icon: Layout,
    title: "Architecture",
    description:
      "Crafting scalable component systems for performance and maintainability.",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Iterative coding with rigorous testing and pixel-perfect implementation.",
  },
  {
    icon: Rocket,
    title: "Optimization",
    description:
      "Smooth deployment pipelines and post-launch performance monitoring.",
  },
];

const experiences = [
  {
    role: "Frontend Engineer",
    company: "Tech Solutions Inc.",
    period: "2022 — Present",
    description:
      "Leading frontend development for enterprise applications, focusing on React.js and Next.js solutions. Driving architectural decisions and engineering culture.",
    achievements: [
      "Architected and delivered 3 major enterprise applications serving 10,000+ users",
      "Improved application performance by 40% through advanced code splitting and caching",
      "Mentored junior developers and established strict code quality standards",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Frontend Engineer",
    company: "Digital Innovations Ltd.",
    period: "2020 — 2022",
    description:
      "Developed and maintained multiple client-facing web applications with distinct focus on interaction design and accessibility.",
    achievements: [
      "Built responsive, WCAG 2.1 compliant web applications for diverse clients",
      "Reduced page load times by 35% through asset optimization and server-side rendering",
      "Collaborated closely with UX/UI designers to implement complex animations",
    ],
    technologies: ["React", "JavaScript", "CSS3", "Redux"],
  },
  {
    role: "Junior Frontend Developer",
    company: "WebTech Solutions",
    period: "2019 — 2020",
    description:
      "Contributed to frontend development while mastering industry best practices and modern JavaScript frameworks.",
    achievements: [
      "Developed reusable UI component library used across 5 internal projects",
      "Implemented responsive mobile-first designs across different browsers",
      "Assisted in migrating legacy jQuery codebase to modern React 16",
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3"],
  },
];

const education = [
  {
    degree: "Master of Science in Software Engineering",
    institution: "Stanford University",
    period: "2017 — 2019",
    description:
      "Advanced studies in software architecture, distributed systems, and modern development methodologies. Focused on building scalable systems for the web.",
    highlights: [
      "Scalable Frontend Architectures",
      "Performance Optimization",
    ],
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2013 — 2017",
    description:
      "Comprehensive foundation in computer science fundamentals, algorithms, and software development. Specialized in Human-Computer Interaction.",
    highlights: ["First Class Honours", "Real-time Collaboration Capstone"],
  },
  {
    degree: "UI/UX Design Specialization",
    institution: "Design Institute of Arts",
    period: "2016 — 2017",
    description:
      "Intensive program focusing on user-centered design principles, prototyping, and modern interface design systems for digital products.",
    highlights: ["Interactive Prototyping", "Design Systems Architecture"],
  },
];

// --- Components ---

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("introduction");
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.ceil(workingPrinciples.length / 2),
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(workingPrinciples.length / 2)) %
        Math.ceil(workingPrinciples.length / 2),
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate resume sections coming into view
      const sections = document.querySelectorAll(".resume-section");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          },
        );
      });
    }, containerRef);

    // Intersection Observer for Active State
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }, // Highlights when section is towards top of viewport
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      ctx.revert();
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for sticky header/padding
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Combined skills & fixed 8x4 grid (32 slots)
  const allSkills = [
    ...techStack.frontend,
    ...techStack.styling,
    ...techStack.tools,
    ...techStack.testing,
  ];
  const gridCols = 8;
  const gridRows = 4;
  const gridSize = gridCols * gridRows;
  const skillsGrid = Array.from({ length: gridSize }, (_, i) => allSkills[i] ?? "");

  // Rich icon mapping for major techs (fallback to Code2 icon)
  const skillIcons: Record<string, ReactNode> = {
    react: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="12" rx="6" ry="2.6" transform="rotate(0 12 12)"/>
          <ellipse cx="12" cy="12" rx="6" ry="2.6" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="6" ry="2.6" transform="rotate(120 12 12)"/>
          <circle cx="12" cy="12" r="1.4" fill="currentColor" />
        </g>
      </svg>
    ),
    nextjs: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.2" />
        <path d="M8 12h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    typescript: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#0ea5e9" strokeWidth="1.2" />
        <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#0ea5e9" fontWeight="700">TS</text>
      </svg>
    ),
    javascript: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#f59e0b" strokeWidth="1.2" />
        <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#f59e0b" fontWeight="700">JS</text>
      </svg>
    ),
    tailwind: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M4 13c4-2 6-2 10 0 4 2 6 2 10 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 9c4-2 6-2 10 0 4 2 6 2 10 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85"/>
      </svg>
    ),
    css3: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M4 3h16l-1.4 15.4L12 21l-6.6-2.6L4 3z" stroke="#0ea5e9" strokeWidth="1.2" />
        <path d="M8 8h8M8 12h8" stroke="#0ea5e9" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    sass: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M12 21c4-1 7-3 8-7 0-2-1-4-3-5-2-1-5 0-5 2 0 2 1 3 3 4" stroke="#ec4899" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    framer: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M4 12c4-6 8-6 16 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    git: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 7a2 2 0 11-4 0 2 2 0 014 0zM7 14a2 2 0 11-4 0 2 2 0 014 0zM18 17a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.5 11.5L14.5 14.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    code2: <Code2 className="h-6 w-6" />,
  };

  function getSkillIcon(skill?: string) {
    if (!skill) return <Code2 className="h-6 w-6" />;
    const norm = skill.toLowerCase();
    // find first mapping key that appears in the skill string
    const match = Object.keys(skillIcons).find((k) => norm.includes(k));
    return (match && skillIcons[match]) ?? <Code2 className="h-6 w-6" />;
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full bg-background selection:bg-primary/20 font-sans overflow-x-hidden"
    >
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-primary/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 xl:gap-24">
          {/* Sticky Sidebar (Desktop) */}
          <aside className="hidden lg:flex flex-col py-24 h-screen sticky top-0 justify-between">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-b from-surface/8 to-transparent">
                <h1 className="text-4xl font-bold tracking-tight mb-1 text-foreground">
                  My Resume
                </h1>
                <p className="text-muted-foreground">Detailed professional history</p>
              </div>

              <nav className="flex flex-col w-full space-y-3 mt-6">
                {[
                  { label: "Introduction", id: "introduction" },
                  { label: "Experience", id: "experience" },
                  { label: "Skills", id: "skills" },
                  { label: "Education", id: "education" },
                ].map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "group flex items-center justify-between py-3 px-6 rounded-full text-sm font-medium transition-all duration-300 w-full text-left",
                      activeSection === item.id
                        ? "bg-primary/6 text-primary shadow-md"
                        : "text-muted-foreground hover:bg-surface-secondary/20 hover:text-foreground"
                    )}
                  >
                    <span className="tracking-widest uppercase">{item.label}</span>
                    {activeSection === item.id && (
                      <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            <div className="space-y-6">
              
            </div>
          </aside>

          {/* Mobile Header */}
          <div className="lg:hidden pt-32 pb-8 border-b border-border/40">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              My Resume
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Frontend Engineer
            </p>
          </div>

          {/* Main Content */}
          <main className="py-12 lg:py-24 space-y-32 max-w-5xl">
            {/* Introduction */}
            <section id="introduction" className="resume-section scroll-mt-32">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-24">
                
                {/* About Content */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.9]">
                      Engineer. <br/>
                      <span className="text-muted-foreground/40">Minimalist.</span> <br/>
                      <span className="text-primary">Problem Solver.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                      I build accessible, pixel-perfect, and performant web experiences that bridge the gap between design and technology.
                    </p>
                  </div>

                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <p className="font-light leading-relaxed text-muted-foreground/80 text-base">
                      With <span className="text-foreground font-medium">2+ years of frontend engineering experience</span>, I specialize in the React ecosystem, crafting scalable architectures. My philosophy: write clean code, optimize for performance, never compromise on UX.
                    </p>
                  </div>
                </div>

                {/* Photo / Visual */}
                <div className="relative lg:h-full min-h-[400px] rounded-3xl overflow-hidden bg-surface-secondary/30 border border-white/5 group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-blue-500/10 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Abstract Techno-Pattern Overlay */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                           <div className="w-48 h-48 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-sm relative z-10">
                              <span className="text-7xl">👨‍💻</span>
                           </div>
                           {/* Orbiting Elements */}
                           <div className="absolute inset-0 border border-dashed border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
                           <div className="absolute -inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        </div>
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        <div className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            <p className="text-xs font-mono uppercase tracking-widest text-white/70">
                                Open to new opportunities
                            </p>
                        </div>
                    </div>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section id="experience" className="resume-section scroll-mt-32">
              <div className="flex items-center gap-4 mb-20">
                <h2 className="text-sm font-mono tracking-[0.2em] text-primary uppercase">
                  Career History
                </h2>
                <div className="h-px bg-border flex-1 max-w-[200px]"></div>
              </div>

              <div className="relative border-l border-primary/10 ml-3 md:ml-0 space-y-24">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 md:pl-16 group">
                    {/* Timeline Node */}
                    <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-border group-hover:bg-primary transition-colors duration-500 ring-4 ring-background" />
                    <div className="absolute left-[-1px] top-2 h-full w-[2px] bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-start">
                      <span className="font-mono text-sm text-muted-foreground uppercase tracking-wider py-1.5">
                        {exp.period}
                      </span>

                      <div>
                        <h3 className="text-3xl font-bold mb-2">
                          {exp.company}
                        </h3>
                        <div className="text-primary text-xl font-medium mb-8">
                          {exp.role}
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                          {exp.description}
                        </p>

                        <ul className="space-y-4 mb-8">
                          {exp.achievements.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-base text-muted-foreground/80 group-hover:text-muted-foreground transition-colors"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-2.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-sm px-4 py-1.5 rounded-full bg-surface-secondary border border-border/50 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section id="skills" className="resume-section scroll-mt-32">
              <div className="flex items-center gap-4 mb-20">
                <h2 className="text-sm font-mono tracking-[0.2em] text-primary uppercase">
                  Technical Arsenal
                </h2>
                <div className="h-px bg-border flex-1 max-w-[200px]"></div>
              </div>

              <div className="space-y-20">
                {[
                  { title: "Frontend Core", skills: techStack.frontend },
                  { title: "Styling & UI", skills: techStack.styling },
                  { title: "Tools & Workflow", skills: techStack.tools },
                  { title: "Testing & Quality", skills: techStack.testing },
                ].map((category, idx) => (
                  <div key={idx}>
                    <h3 className="text-sm font-mono text-primary/50 mb-8 uppercase tracking-widest">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-8 gap-y-4">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-3xl md:text-5xl font-bold text-foreground/80 hover:text-primary transition-colors cursor-default tracking-tight"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education - "Apple Cards" Style Slider */}
            <section id="education" className="resume-section scroll-mt-32">
              <div className="flex items-center justify-between mb-12">
                 <div className="flex items-center gap-4">
                    <h2 className="text-sm font-mono tracking-[0.2em] text-primary uppercase">
                      Education
                    </h2>
                    <div className="h-px bg-border w-24 hidden md:block"></div>
                 </div>
                 
                 {/* Slider Controls */}
                 <div className="hidden md:flex gap-4">
                    <button 
                         onClick={() => document.getElementById('education-slider')?.scrollBy({ left: -420, behavior: 'smooth' })}
                         className="p-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-primary/50 transition-colors text-muted-foreground hover:text-primary active:scale-95"
                         aria-label="Previous Slide"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                           <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button 
                         onClick={() => document.getElementById('education-slider')?.scrollBy({ left: 420, behavior: 'smooth' })}
                         className="p-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-primary/50 transition-colors text-muted-foreground hover:text-primary active:scale-95"
                         aria-label="Next Slide"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                           <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                 </div>
              </div>

              {/* Slider Container */}
              <div className="relative w-full -mx-4 md:mx-0">
                <div 
                    id="education-slider"
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 px-4 md:px-0 scroll-pl-4 md:scroll-pl-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {education.map((edu, idx) => (
                    <div 
                      key={idx} 
                      className="snap-start shrink-0 w-[85vw] md:w-[420px] md:h-[340px] group relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/5 hover:border-white/20 p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 select-none cursor-grab active:cursor-grabbing"
                    >
                       <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                       
                       <div className="relative z-10 h-full flex flex-col">
                          <div className="flex justify-between items-start mb-6">
                              <span className="text-6xl font-bold text-white/5 group-hover:text-primary/10 transition-colors duration-500">
                                  0{idx + 1}
                              </span>
                          </div>

                          <div className="space-y-2 mb-4">
                              <span className="font-mono text-xs text-primary/80 tracking-widest uppercase">
                                  {edu.period}
                              </span>
                              <h3 className="text-2xl font-semibold leading-tight group-hover:text-white transition-colors duration-300">
                                  {edu.degree}
                              </h3>
                              <p className="text-sm text-muted-foreground font-medium">
                                  {edu.institution}
                              </p>
                          </div>

                          <div className="grow">
                             <p className="text-sm text-muted-foreground/60 leading-relaxed line-clamp-4">
                                {edu.description}
                             </p>
                          </div>

                          <div className="flex flex-wrap gap-2 mt-6">
                               {edu.highlights.map((h, i) => (
                                  <span key={i} className="text-[10px] font-medium px-2.5 py-1 bg-white/5 border border-white/5 rounded-full text-muted-foreground group-hover:text-white group-hover:border-white/10 transition-all duration-300">
                                      {h}
                                  </span>
                               ))}
                          </div>
                       </div>
                    </div>
                  ))}
                  
                   {/* Spacer for ending padding */}
                   <div className="w-1 shrink-0 md:hidden" />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
