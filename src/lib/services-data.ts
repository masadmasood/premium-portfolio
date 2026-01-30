export type Service = {
  icon: any;
  title: string;
  description: string;
  features: string[];
};

export type EngagementModel = {
  title: string;
  description: string;
  ideal: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export const services: Service[] = [
  {
    icon: null, // supplied by page or component
    title: "Frontend Development",
    description:
      "Custom web application development using React.js and Next.js. Building scalable, maintainable, and performant user interfaces.",
    features: [
      "React.js & Next.js applications",
      "TypeScript implementation",
      "Responsive design",
      "Component library development",
    ],
  },
  {
    icon: null,
    title: "Performance Optimization",
    description:
      "Improving application speed and user experience through code optimization, lazy loading, and best practices.",
    features: [
      "Core Web Vitals optimization",
      "Bundle size reduction",
      "Code splitting & lazy loading",
      "Performance audits",
    ],
  },
  {
    icon: null,
    title: "UI/UX Implementation",
    description:
      "Transforming designs into pixel-perfect, accessible interfaces that users love to interact with.",
    features: [
      "Design system implementation",
      "Accessibility (WCAG) compliance",
      "Animation & interactions",
      "Cross-browser compatibility",
    ],
  },
];

export const engagementModels: EngagementModel[] = [
  {
    title: "Project-Based",
    description: "Fixed scope projects with defined deliverables and timeline.",
    ideal: "Well-defined projects with clear requirements",
  },
  {
    title: "Hourly Consulting",
    description: "Flexible hourly arrangement for ongoing support and development.",
    ideal: "Code reviews, technical consultation, bug fixes",
  },
  {
    title: "Retainer Agreement",
    description: "Monthly retainer for continuous development and support.",
    ideal: "Long-term partnerships and ongoing development",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We discuss your project goals, requirements, timeline, and budget.",
  },
  {
    number: "02",
    title: "Proposal & Planning",
    description: "I provide a detailed proposal with scope, timeline, and cost breakdown.",
  },
  {
    number: "03",
    title: "Development & Updates",
    description: "Regular progress updates with demo links and opportunities for feedback.",
  },
  {
    number: "04",
    title: "Testing & Deployment",
    description: "Comprehensive testing, optimization, and smooth deployment to production.",
  },
  {
    number: "05",
    title: "Handoff & Support",
    description: "Complete documentation, knowledge transfer, and post-launch support.",
  },
];

export const faqs: FAQ[] = [
  {
    question: "What's your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. A simple landing page might take 1-2 weeks, while a complex web application could take 8-12 weeks. I'll provide a detailed timeline during our discovery call.",
  },
  {
    question: "Do you work with existing codebases?",
    answer:
      "Yes! I regularly work with existing React/Next.js projects for feature additions, bug fixes, performance optimization, and refactoring. I can quickly get up to speed with your codebase.",
  },
  {
    question: "What's included in your development services?",
    answer:
      "Development services include code implementation, testing, documentation, and deployment support. I follow best practices for clean, maintainable code and provide regular updates throughout the project.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes, I offer ongoing maintenance and support through monthly retainer agreements. This includes bug fixes, updates, performance monitoring, and feature enhancements.",
  },
  {
    question: "What information do you need to get started?",
    answer:
      "I'll need project requirements, any existing designs or wireframes, technical specifications, timeline expectations, and budget range. We'll refine these details during our discovery call.",
  },
];