import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VCCS AI Career Platform Case Study - Asad Masood",
  description: "Building an AI-powered career guidance platform with intelligent matching and personalized recommendations.",
};

const tableOfContents = [
  { title: "Context & Problem", id: "context" },
  { title: "System Scope", id: "scope" },
  { title: "Frontend Architecture", id: "architecture" },
  { title: "Key Features", id: "features" },
  { title: "Challenges & Solutions", id: "challenges" },
  { title: "Results & Learnings", id: "results" },
];

export default function VCCSCaseStudy() {
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
            VCCS — AI Career Platform
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            An innovative career guidance platform powered by AI, helping users discover their
            ideal career paths through intelligent matching and personalized recommendations.
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
                  Many individuals struggle to identify suitable career paths that align with
                  their skills, interests, and aspirations. Traditional career counseling is
                  often expensive, time-consuming, and limited in scope. There was a clear need
                  for an accessible, data-driven solution.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Primary challenges addressed:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Lack of personalized career guidance at scale</li>
                  <li>• Difficulty matching skills and interests to career opportunities</li>
                  <li>• Limited awareness of emerging career paths</li>
                  <li>• Need for interactive, engaging assessment experience</li>
                  <li>• Requirement for evidence-based recommendations</li>
                </ul>
              </div>
            </section>

            {/* System Scope */}
            <section id="scope">
              <h2 className="font-sans text-3xl font-bold mb-6">System Scope</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The platform provides comprehensive career exploration tools:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Matching",
                    "Interactive Assessments",
                    "Personalized Recommendations",
                    "Career Path Explorer",
                    "Skills Gap Analysis",
                    "Resource Library",
                    "Progress Tracking",
                    "User Dashboard",
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
                  Built with Next.js and modern React patterns to create an engaging,
                  performant user experience. The architecture emphasizes smooth animations,
                  responsive design, and seamless AI integration.
                </p>
                <h3 className="font-sans text-xl font-semibold mt-6 mb-4">Tech Stack:</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Framer Motion",
                    "Recharts",
                    "Zustand",
                    "AI SDK",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 rounded-full bg-surface border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="font-sans text-xl font-semibold mb-4">Design Philosophy:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Engaging micro-interactions to maintain user interest</li>
                  <li>• Progressive disclosure to avoid overwhelming users</li>
                  <li>• Visual feedback for AI processing states</li>
                  <li>• Gamification elements to encourage completion</li>
                  <li>• Accessible design following WCAG guidelines</li>
                </ul>
              </div>
            </section>

            {/* Key Features */}
            <section id="features">
              <h2 className="font-sans text-3xl font-bold mb-6">Key Features</h2>
              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-border bg-surface">
                  <h3 className="font-sans text-xl font-semibold mb-3">
                    AI-Powered Career Matching
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Intelligent algorithm analyzes user responses, skills, and preferences to
                    recommend suitable career paths. Machine learning model continuously improves
                    matching accuracy based on user feedback and outcomes.
                  </p>
                </div>
                <div className="p-6 rounded-xl border border-border bg-surface">
                  <h3 className="font-sans text-xl font-semibold mb-3">
                    Interactive Assessment Modules
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Multi-stage assessment covering personality traits, skills inventory,
                    interests exploration, and values alignment. Dynamic question flow adapts
                    based on previous answers for personalized experience.
                  </p>
                </div>
                <div className="p-6 rounded-xl border border-border bg-surface">
                  <h3 className="font-sans text-xl font-semibold mb-3">
                    Comprehensive Career Profiles
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Detailed career information including role descriptions, required skills,
                    education pathways, salary ranges, and growth projections. Integration with
                    learning resources and job market data.
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
                    <span>AI Response Time & User Experience</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-2 ml-7">
                    <strong>Challenge:</strong> AI processing delays could frustrate users
                    waiting for career recommendations.
                  </p>
                  <p className="text-muted-foreground leading-relaxed ml-7">
                    <strong>Solution:</strong> Implemented optimistic UI with skeleton loaders
                    and progress indicators. Added background processing with real-time updates
                    using Server-Sent Events. Cached common patterns to reduce API calls.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-xl font-semibold mb-3 flex items-start gap-2">
                    <span className="text-primary">2.</span>
                    <span>Assessment Engagement</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-2 ml-7">
                    <strong>Challenge:</strong> Keeping users engaged through lengthy assessment
                    process without abandonment.
                  </p>
                  <p className="text-muted-foreground leading-relaxed ml-7">
                    <strong>Solution:</strong> Broke assessment into bite-sized modules with
                    progress tracking. Added smooth transitions using Framer Motion, gamification
                    elements, and ability to save and resume. Each section takes 3-5 minutes max.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-xl font-semibold mb-3 flex items-start gap-2">
                    <span className="text-primary">3.</span>
                    <span>Data Visualization</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-2 ml-7">
                    <strong>Challenge:</strong> Presenting complex career data and skills mapping
                    in an understandable, visually appealing way.
                  </p>
                  <p className="text-muted-foreground leading-relaxed ml-7">
                    <strong>Solution:</strong> Created custom visualizations using Recharts for
                    skills radar charts, career path trees, and match percentage displays.
                    Implemented interactive tooltips and drill-down capabilities.
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
                    <div className="text-3xl font-sans font-bold text-primary mb-2">10,000+</div>
                    <div className="text-sm text-muted-foreground">
                      Career Matches Made
                    </div>
                  </div>
                  <div className="p-6 rounded-xl border border-border bg-primary/5">
                    <div className="text-3xl font-sans font-bold text-primary mb-2">92%</div>
                    <div className="text-sm text-muted-foreground">
                      Match Accuracy
                    </div>
                  </div>
                  <div className="p-6 rounded-xl border border-border bg-primary/5">
                    <div className="text-3xl font-sans font-bold text-primary mb-2">75%</div>
                    <div className="text-sm text-muted-foreground">
                      Completion Rate
                    </div>
                  </div>
                </div>

                <h3 className="font-sans text-xl font-semibold mb-4">Key Takeaways:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • <strong>User Experience First:</strong> Even the best AI is useless if the
                    UX doesn't keep users engaged through the process.
                  </li>
                  <li>
                    • <strong>Progressive Enhancement:</strong> Building features incrementally
                    allowed us to test and validate each component with real users.
                  </li>
                  <li>
                    • <strong>Animation Matters:</strong> Thoughtful animations significantly
                    improved perceived performance and user satisfaction.
                  </li>
                  <li>
                    • <strong>Clear Value:</strong> Showing users immediate value at each step
                    dramatically improved completion rates.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA Card */}
            <div className="p-8 rounded-xl bg-primary text-primary-foreground text-center">
              <h3 className="font-sans text-2xl font-bold mb-4">
                Have a Project in Mind?
              </h3>
              <p className="mb-6 opacity-90">
                Let's discuss how I can help bring your vision to life.
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
