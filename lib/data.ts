
export type Project = {
  title: string;
  summary: string;
  tags: string[];
  metric: string;
  category: string;
  slug: string;
};

export const projects: Project[] = [
  {
    title: "Enterprise Workflow Orchestrator",
    summary: "Decoupling a monolith into an API-first engine processing 2M+ transactions.",
    tags: ["SaaS", "Agentic AI", "Microservices"],
    metric: "30% Faster Automation",
    category: "B2B Platform",
    slug: "enterprise-workflow-orchestrator",
  },
  {
    title: "Predictive Recovery Intelligence",
    summary: "Moving from descriptive dashboards to 90% accurate predictive models.",
    tags: ["AI/ML", "Python", "Predictive Analytics"],
    metric: "$30M Revenue Impact",
    category: "AI & Data",
    slug: "predictive-recovery-intelligence",
  },
  {
    title: "Automated Underwriting Engine",
    summary:
      "A no-code rules engine that allows business users to build and deploy complex underwriting logic.",
    tags: ["Fintech", "Low-Code", "Rules Engine"],
    metric: "95% Auto-Decision Rate",
    category: "B2B Platform",
    slug: "automated-underwriting-engine",
  },
  {
    title: "On-Demand Logistics Platform",
    summary:
      "A two-sided marketplace connecting shippers and carriers for just-in-time freight.",
    tags: ["Marketplace", "Logistics", "React Native"],
    metric: "20% Cost Reduction",
    category: "Mobile & Web App",
    slug: "on-demand-logistics-platform",
  },
  {
    title: "Healthcare CRM",
    summary:
      "A patient relationship management tool for small to medium-sized clinics.",
    tags: ["Healthcare", "CRM", "Vue.js"],
    metric: "50% Higher Patient Engagement",
    category: "B2B Platform",
    slug: "healthcare-crm",
  },
  {
    title: "Computer Vision for Retail",
    summary:
      "Using CV to analyze foot traffic and optimize store layouts for a major retailer.",
    tags: ["AI/ML", "Computer Vision", "Retail"],
    metric: "15% Sales Uplift",
    category: "AI & Data",
    slug: "computer-vision-for-retail",
  },
];
