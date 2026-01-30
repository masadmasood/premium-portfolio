import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Management System Case Study - Asad Masood",
  description: "In-depth case study of building a comprehensive ERP-style platform with Next.js and React.",
};

const tableOfContents = [
  { title: "Context & Problem", id: "context" },
  { title: "System Scope", id: "scope" },
  { title: "Frontend Architecture", id: "architecture" },
  { title: "Key Modules", id: "modules" },
  { title: "Challenges & Solutions", id: "challenges" },
  { title: "Results & Learnings", id: "results" },
];

export default function EnterpriseManagementCaseStudy() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 md:pb-20">
        <div className="container mx-auto max-w-[1120px] px-6">
          <Link
            href="/projects"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          <h1 className="font-sans text-4xl md:text-5xl font-bold mb-6">
            Enterprise Management System
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Building a comprehensive ERP-style platform to streamline business operations
            across multiple departments and workflows.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-[1120px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Table of Contents */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="font-sans font-semibold mb-4">Contents</h2>
              <nav>
                <ul className="space-y-2">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-3 space-y-16 pb-20">
            {/* Context & Problem */}
            <section id="context">
              <h2 className="font-sans text-3xl font-bold mb-6">Context & Problem</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A growing enterprise needed a unified platform to manage their increasingly
                  complex business operations. Their existing system consisted of disconnected
                  tools and manual processes, leading to inefficiencies, data silos, and
                  scalability issues.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The primary challenges included:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Fragmented data across multiple legacy systems</li>
                  <li>• Lack of real-time visibility into business operations</li>
                  <li>• Complex approval workflows requiring manual intervention</li>
                  <li>• Difficulty scaling to accommodate rapid business growth</li>
                  <li>• Need for role-based access control across departments</li>
                </ul>
              </div>
            </section>

            {/* System Scope */}
            <section id="scope">
              <h2 className="font-sans text-3xl font-bold mb-6">System Scope</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The platform encompasses eight core modules integrated into a cohesive system:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "User & Role Management",
                    "Inventory Control",
                    "Order Processing",
                    "Financial Reporting",
                    "Project Management",
                    "Document Management",
                    "Analytics Dashboard",
                    "Communication Hub",
                  ].map((module) => (
                    <div
                      key={module}
                      className="p-4 rounded-lg border border-border bg-surface"
                    >
                      {module}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Frontend Architecture */}
            <section id="architecture">
              <h2 className="font-sans text-3xl font-bold mb-6">Frontend Architecture</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Built with Next.js 14 (App Router) to leverage server-side rendering,
                  optimized routing, and enhanced performance. The architecture prioritizes
                  modularity, maintainability, and scalability.
                </p>
                <h3 className="font-sans text-xl font-semibold mt-6 mb-4">Tech Stack:</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Next.js 14",
                    "React 18",
                    "TypeScript",
                    "Tailwind CSS",
                    "shadcn/ui",
                    "Zustand",
                    "React Query",
                    "Zod",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 rounded-full bg-surface border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="font-sans text-xl font-semibold mb-4">Key Architectural Decisions:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Server Components for data-heavy pages to reduce client-side JavaScript</li>
                  <li>• Client Components for interactive features with state management</li>
                  <li>• Route-based code splitting for optimal bundle sizes</li>
                  <li>• Optimistic UI updates for improved perceived performance</li>
                  <li>• Centralized error boundary handling for graceful error recovery</li>
                </ul>
              </div>
            </section>

            {/* Key Modules */}
            <section id="modules">
              <h2 className="font-sans text-3xl font-bold mb-6">Key Modules</h2>
              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-border bg-surface">
                  <h3 className="font-sans text-xl font-semibold mb-3">
                    User & Role Management
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Implemented granular permission system with role-based access control (RBAC).
                    Features include user provisioning, role assignment, permission inheritance,
                    and audit logging for compliance.
                  </p>
                </div>
                <div className="p-6 rounded-xl border border-border bg-surface">
                  <h3 className="font-sans text-xl font-semibold mb-3">
                    Real-Time Analytics Dashboard
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Built interactive dashboard with real-time data visualization using Chart.js.
                    Includes customizable widgets, export functionality, and drill-down capabilities
                    for detailed analysis.
                  </p>
                </div>
                <div className="p-6 rounded-xl border border-border bg-surface">
                  <h3 className="font-sans text-xl font-semibold mb-3">
                    Workflow Automation Engine
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Developed flexible workflow system supporting multi-step approval processes,
                    conditional routing, and automated notifications. Reduced manual processing
                    time by 60%.
                  </p>
                </div>
              </div>
            </section>

            {/* Challenges & Solutions */}
            <section id="challenges">
              <h2 className="font-sans text-3xl font-bold mb-6">Challenges & Solutions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-sans text-xl font-semibold mb-3 flex items-start gap-2">
                    <span className="text-primary">1.</span>
                    <span>Complex State Management Across Modules</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-2 ml-7">
                    <strong>Challenge:</strong> Managing shared state across eight interconnected
                    modules without creating tight coupling or prop drilling.
                  </p>
                  <p className="text-muted-foreground leading-relaxed ml-7">
                    <strong>Solution:</strong> Implemented Zustand for lightweight global state
                    management combined with React Query for server state. Created module-specific
                    stores with clear boundaries and selective subscriptions.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-xl font-semibold mb-3 flex items-start gap-2">
                    <span className="text-primary">2.</span>
                    <span>Performance with Large Datasets</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-2 ml-7">
                    <strong>Challenge:</strong> Rendering and interacting with tables containing
                    10,000+ records without UI lag.
                  </p>
                  <p className="text-muted-foreground leading-relaxed ml-7">
                    <strong>Solution:</strong> Implemented virtualized lists using
                    @tanstack/react-virtual, server-side pagination, and intelligent data
                    prefetching. Added debounced search and optimized re-renders with React.memo.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-xl font-semibold mb-3 flex items-start gap-2">
                    <span className="text-primary">3.</span>
                    <span>Real-Time Updates Synchronization</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-2 ml-7">
                    <strong>Challenge:</strong> Keeping multiple users' views synchronized when
                    data changes occur.
                  </p>
                  <p className="text-muted-foreground leading-relaxed ml-7">
                    <strong>Solution:</strong> Integrated WebSocket connections for real-time
                    push updates. Implemented optimistic updates with rollback on error, and
                    cache invalidation strategies to maintain data consistency.
                  </p>
                </div>
              </div>
            </section>

            {/* Results & Learnings */}
            <section id="results">
              <h2 className="font-sans text-3xl font-bold mb-6">Results & Learnings</h2>
              <div className="prose prose-lg max-w-none">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="p-6 rounded-xl border border-border bg-primary/5">
                    <div className="text-3xl font-sans font-bold text-primary mb-2">40%</div>
                    <div className="text-sm text-muted-foreground">
                      Faster Load Times
                    </div>
                  </div>
                  <div className="p-6 rounded-xl border border-border bg-primary/5">
                    <div className="text-3xl font-sans font-bold text-primary mb-2">10,000+</div>
                    <div className="text-sm text-muted-foreground">
                      Active Users
                    </div>
                  </div>
                  <div className="p-6 rounded-xl border border-border bg-primary/5">
                    <div className="text-3xl font-sans font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">
                      Uptime Achieved
                    </div>
                  </div>
                </div>

                <h3 className="font-sans text-xl font-semibold mb-4">Key Takeaways:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • <strong>Modular Architecture:</strong> Building with clear module boundaries
                    and interfaces enables independent development and testing.
                  </li>
                  <li>
                    • <strong>Performance Matters:</strong> Early performance optimization and
                    monitoring prevents major refactoring later.
                  </li>
                  <li>
                    • <strong>Type Safety:</strong> TypeScript and Zod validation caught numerous
                    bugs before production and improved developer experience.
                  </li>
                  <li>
                    • <strong>User Feedback:</strong> Regular user testing sessions led to UI/UX
                    improvements that significantly increased adoption rates.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA Card */}
            <div className="p-8 rounded-xl bg-primary text-primary-foreground text-center">
              <h3 className="font-sans text-2xl font-bold mb-4">
                Interested in Working Together?
              </h3>
              <p className="mb-6 opacity-90">
                Let's discuss how I can help bring your project to life.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
