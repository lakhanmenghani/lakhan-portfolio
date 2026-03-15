"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type ExperienceCard = {
  company: string;
  role: string;
  metrics: string[];
  oneLiner: string;
  href: string | null;
};

const cards: ExperienceCard[] = [
  {
    company: "Infinx Healthcare",
    role: "Product Manager",
    metrics: [
      "20% capacity gain via agentic AI",
      "600 DAUs · 50% adoption in 3 months",
    ],
    oneLiner:
      "Built a unified RCM platform from scratch, analytics suite to AI-powered automation, serving 16 enterprise clients.",
    href: "/case-studies/infinx-rcm",
  },
  {
    company: "Microsoft M&O",
    role: "Product & Program Manager",
    metrics: ["Influenced $50M monthly revenue decisions"],
    oneLiner:
      "Owned the product roadmap for Sales and Spend Analytics suites used by CVP-level stakeholders across Microsoft's cloud portfolio.",
    href: "/case-studies/microsoft-mo",
  },
  {
    company: "Vodafone (VOIS)",
    role: "Product Engineer",
    metrics: [],
    oneLiner: "Building consumer-facing websites for Vodafone customers.",
    href: null,
  },
];

export function ExperienceCards() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
            Experience
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="pb-4">
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    {card.role}
                  </p>
                  <h3 className="text-xl font-bold mt-1">{card.company}</h3>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 gap-4">
                  {card.metrics.length > 0 && (
                    <ul className="space-y-1">
                      {card.metrics.map((m) => (
                        <li
                          key={m}
                          className="text-sm font-medium text-foreground bg-muted rounded px-2 py-1 inline-block"
                        >
                          {m}
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="text-sm text-muted-foreground flex-1">
                    {card.oneLiner}
                  </p>
                  {card.href && (
                    <Link
                      href={card.href}
                      className="flex items-center gap-1 text-sm font-semibold hover:underline mt-auto"
                    >
                      View case study <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
