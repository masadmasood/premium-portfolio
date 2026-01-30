import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/lib/projects-data";
import { CTASection } from "@/components/cta-section";

export default function ProjectsPage() {
  return (
    <>
      <div className="relative min-h-screen w-full bg-background overflow-hidden">
        {/* Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_800px_at_50%_0px,rgba(var(--primary),0.03),transparent)]"></div>

        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative z-10">
            <div className="container mx-auto px-6 text-center">
            <h1 className="font-sans font-bold text-6xl md:text-8xl lg:text-9xl tracking-tighter mb-8 text-foreground uppercase">
                Selected
                <span className="block text-stroke-primary text-transparent ml-2 md:text-foreground md:text-stroke-0">Works</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                A showcase of technical excellence and product thinking.
            </p>
            </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 relative z-10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 gap-32">
                {projectsData.map((project, index) => (
                    <div key={index} className="group grid lg:grid-cols-2 gap-12 items-center">

                        <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                            <div className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden bg-surface-secondary border border-border group-hover:border-primary/50 transition-colors">
                                {/* Placeholder for Image */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="font-sans text-9xl font-bold opacity-5 text-foreground">{index + 1}</span>
                                </div>
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
                            </div>
                        </div>
                        
                        <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} space-y-8`}>
                            <div className="flex items-center gap-4">
                                <span className="text-primary font-mono text-sm tracking-widest uppercase">{project.category}</span>
                                <span className="h-px w-8 bg-border"></span>
                                <span className="text-muted-foreground font-mono text-sm">{project.year}</span>
                            </div>
                            
                            <h2 className="font-sans text-4xl md:text-5xl font-bold leading-tight">
                                {project.title}
                            </h2>
                            
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {project.description}
                            </p>

                            <div className="space-y-4 border-l-2 border-primary/20 pl-6 py-2">
                                <h3 className="font-sans font-semibold text-foreground">Key Challenges:</h3>
                                <ul className="space-y-2">
                                    {project.challenges.map((c, i) => (
                                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-4">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 text-xs border border-border rounded-full font-mono text-muted-foreground uppercase opacity-80">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <Button asChild size="lg" className="rounded-full text-lg h-14 px-8 mt-4 group/btn">
                                <Link href={project.href}>
                                    View Case Study <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>

        <CTASection />
      </div>
    </>
  );
}
