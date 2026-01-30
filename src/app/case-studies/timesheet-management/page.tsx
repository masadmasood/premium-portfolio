import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timesheet Management System Case Study - Asad Masood",
  description: "Case study on building a streamlined time tracking and management application.",
};

const tableOfContents = [
  { title: "Context & Problem", id: "context" },
  { title: "System Scope", id: "scope" },
  { title: "Frontend Architecture", id: "architecture" },
  { title: "Key Features", id: "features" },
  { title: "Challenges & Solutions", id: "challenges" },
  { title: "Results & Learnings", id: "results" },
];

export default function TimesheetManagementCaseStudy() {
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
            Timesheet Management System
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A comprehensive time tracking solution with automated workflows, approval systems,
            and powerful analytics for modern teams.
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
                  Organizations were struggling with manual time tracking processes that were
                  time-consuming, error-prone, and difficult to audit. Employees spent excessive
                  time filling out timesheets, managers faced delays in approval workflows, and
                  finance teams struggled with accurate billing and reporting.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Key pain points identified:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Manual data entry leading to frequent errors and inaccuracies</li>
                  <li>• Lack of real-time visibility into team capacity and utilization</li>
                  <li>• Complex approval chains causing bottlenecks</li>
                  <li>• Difficulty generating reports for billing and analysis</li>
                  <li>• Poor mobile experience for remote workers</li>
                </ul>
              </div>
            </section>

            {/* System Scope */}
            <section id="scope">
              <h2 className="font-sans text-3xl font-bold mb-6">System Scope</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The platform provides comprehensive time tracking capabilities:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Time Entry & Tracking",
                    "Calendar Integration",
                    "Approval Workflows",
                    "Project Association",
                    "Analytics Dashboard",
                    "Reporting & Export",
                    "Mobile Responsiveness",
                    "Email Notifications",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="p-4 rounded-lg border border-border bg-surface"
                    >
                      {feature}
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
                  Built with Next.js and React to deliver a fast, responsive user experience.
                  The architecture emphasizes simplicity, reliability, and mobile-first design.
                </p>
                <h3 className="font-sans text-xl font-semibold mt-6 mb-4">Tech Stack:</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "shadcn/ui",
                    "Tailwind CSS",
                    "React Hook Form",
                    "Chart.js",
                    "date-fns",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 rounded-full bg-surface border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="font-sans text-xl font-semibold mb-4">Design Principles:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Mobile-first responsive design for on-the-go time entry</li>
                  <li>• Intuitive calendar-based interface for quick navigation</li>
                  <li>• Form validation with real-time feedback</li>
                  <li>• Offline-capable with local storage sync</li>
                  <li>• Progressive enhancement for broader browser support</li>
                </ul>
              </div>
            </section>

            {/* Key Features */}
            <section id="features">
              <h2 className="font-sans text-3xl font-bold mb-6">Key Features</h2>
              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-border bg-surface">
                  <h3 className="font-sans text-xl font-semibold mb-3">
                    Smart Time Entry
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Intuitive interface with calendar integration, project quick-select, and
                    copy-from-previous-day functionality. Auto-save prevents data loss and
                    validation ensures accuracy before submission.
                  </p>
                </div>
                <div className="p-6 rounded-xl border border-border bg-surface">
                  <h3 className="font-sans text-xl font-semibold mb-3">
                    Automated Approval Workflow
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Configurable multi-level approval system with email notifications, bulk
                    approval capabilities, and automated reminders. Managers can approve, reject,
                    or request modifications with comments.
                  </p>
                </div>
                <div className="p-6 rounded-xl border border-border bg-surface">
                  <h3 className="font-sans text-xl font-semibold mb-3">
                    Comprehensive Analytics
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Real-time dashboard showing utilization rates, project time allocation, and
                    team capacity. Export reports in multiple formats (PDF, Excel, CSV) for
                    billing and analysis.
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
                    <span>Complex Date Handling & Time Zones</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-2 ml-7">
                    <strong>Challenge:</strong> Managing time entries across different time zones
                    for distributed teams while maintaining accuracy.
                  </p>
                  <p className="text-muted-foreground leading-relaxed ml-7">
                    <strong>Solution:</strong> Implemented date-fns for consistent date handling,
                    storing all times in UTC on the backend, and displaying in user's local timezone.
                    Added clear timezone indicators in the UI.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-xl font-semibold mb-3 flex items-start gap-2">
                    <span className="text-primary">2.</span>
                    <span>Form State Management</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-2 ml-7">
                    <strong>Challenge:</strong> Handling complex form state with multiple time
                    entries, validations, and draft saving.
                  </p>
                  <p className="text-muted-foreground leading-relaxed ml-7">
                    <strong>Solution:</strong> Used React Hook Form for performant form state
                    management with Zod schema validation. Implemented auto-save to localStorage
                    every 30 seconds to prevent data loss.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-xl font-semibold mb-3 flex items-start gap-2">
                    <span className="text-primary">3.</span>
                    <span>Mobile User Experience</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-2 ml-7">
                    <strong>Challenge:</strong> Creating an efficient time entry experience on
                    small screens without sacrificing functionality.
                  </p>
                  <p className="text-muted-foreground leading-relaxed ml-7">
                    <strong>Solution:</strong> Designed mobile-first interface with bottom sheet
                    modals, swipe gestures, and thumb-friendly touch targets. Implemented
                    progressive disclosure to reduce visual clutter.
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
                    <div className="text-3xl font-sans font-bold text-primary mb-2">60%</div>
                    <div className="text-sm text-muted-foreground">
                      Time Entry Reduction
                    </div>
                  </div>
                  <div className="p-6 rounded-xl border border-border bg-primary/5">
                    <div className="text-3xl font-sans font-bold text-primary mb-2">95%</div>
                    <div className="text-sm text-muted-foreground">
                      Accuracy Rate
                    </div>
                  </div>
                  <div className="p-6 rounded-xl border border-border bg-primary/5">
                    <div className="text-3xl font-sans font-bold text-primary mb-2">4.8/5</div>
                    <div className="text-sm text-muted-foreground">
                      User Satisfaction
                    </div>
                  </div>
                </div>

                <h3 className="font-sans text-xl font-semibold mb-4">Key Takeaways:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • <strong>User Testing:</strong> Regular feedback sessions with actual users
                    led to significant UX improvements and higher adoption.
                  </li>
                  <li>
                    • <strong>Mobile Matters:</strong> 70% of users accessed the system via mobile,
                    validating our mobile-first approach.
                  </li>
                  <li>
                    • <strong>Auto-Save:</strong> Preventing data loss dramatically improved user
                    trust and satisfaction.
                  </li>
                  <li>
                    • <strong>Clear Feedback:</strong> Visual indicators for pending approvals and
                    validation errors reduced support tickets.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA Card */}
            <div className="p-8 rounded-xl bg-primary text-primary-foreground text-center">
              <h3 className="font-sans text-2xl font-bold mb-4">
                Let's Build Something Together
              </h3>
              <p className="mb-6 opacity-90">
                Have a project in mind? Let's discuss how I can help.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
