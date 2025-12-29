"use client";
import { motion, useScroll } from "framer-motion";

const timelineData = [
  {
    role: "Product Manager (Enterprise SaaS & AI Platform)",
    company: "Infinx Healthcare",
    date: "2021 - Present",
    summary: "Directing product strategy for a dual-portfolio of RCM SaaS & AI solutions.",
    impact: "Led the strategic initiative to decouple core logic, enabling an API-first roadmap for Agentic AI integration.",
  },
  {
    role: "Product & Program Manager",
    company: "MAQ Software (Client: Microsoft M&O)",
    date: "2019 - 2021",
    summary: "Embedded PM for Microsoft's Marketing & Operations group.",
    impact: "Defined requirements for a scalable data platform on Azure that influenced $50M in monthly revenue decisions.",
  },
  {
    role: "Product Engineer / Senior Executive",
    company: "Vodafone (VOIS)",
    date: "2014 - 2017",
    summary: "Owner of Internal Tool Development & Billing System Requirements.",
    impact: "Translated business requirements into technical specs, ensuring 100% alignment between business needs and engineering delivery.",
  },
];

const TimelineCard = ({ role, company, date, summary, impact, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-8"
    >
      <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-serif font-bold">{role}</h3>
        <p className="text-md text-muted-foreground">
          {company} | {date}
        </p>
        <p className="mt-4">{summary}</p>
        <p className="mt-2 text-sm text-gray-400">
          <span className="font-bold">Impact:</span> {impact}
        </p>
      </div>
    </motion.div>
  );
};

export function CareerTimeline() {
  const { scrollYProgress } = useScroll();

  return (
    <section id="timeline" className="py-24">
      <div className="container relative">
        <motion.div
          className="absolute left-1/2 top-0 h-full w-1 bg-gray-700 origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <div className="relative">
          {timelineData.map((item, index) => (
            <TimelineCard {...item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
