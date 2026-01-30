export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Asad Masood",
    jobTitle: "Frontend Engineer",
    description: "Frontend Engineer specializing in React.js and Next.js. Building scalable, performant web applications.",
    url: "https://asadmasood.dev",
    sameAs: [
      "https://linkedin.com/in/asadmasood",
      "https://github.com/asadmasood",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Web Development",
      "UI/UX Development",
      "Performance Optimization",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Asad Masood - Frontend Engineer",
    description: "Professional portfolio showcasing frontend development expertise in React.js and Next.js",
    url: "https://asadmasood.dev",
    author: {
      "@type": "Person",
      name: "Asad Masood",
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}
