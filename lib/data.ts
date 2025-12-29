
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
    slug: "enterprise-workflow",
    summary: "Decoupling a monolith into an API-first engine. Reduced onboarding time by 33%.",
    tags: ["B2B SaaS", "0-to-1 Launch", "Operational Efficiency"],
    metric: "2M+ Annual Transactions",
    category: "SaaS Platform",
  },
  {
    title: "Predictive Recovery Intelligence",
    slug: "predictive-recovery",
    summary: "Pivoting from descriptive dashboards to predictive models with 90% accuracy.",
    tags: ["AI Strategy", "Revenue Optimization", "Product Discovery"],
    metric: "$30M Revenue Impact",
    category: "AI & Data",
  },
];
