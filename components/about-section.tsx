"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-8">
            About
          </p>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Technology product leader with a decade of turning enterprise data chaos into products that drive real business decisions. I build where the problems are complex: data platforms, AI systems, and automation that operates at scale.
            </p>
            <p>
              At Microsoft, I owned analytics products that informed $50M in monthly revenue decisions for CVP-level stakeholders. When your data model drives cloud spend decisions at scale, there&apos;s no room for guesswork.
            </p>
            <p>
              At Infinx, I went into the operations floor, mapped human workflows step by step, and found exactly where an AI agent could replace manual work without breaking the process. 20% capacity gain. Not from a strategy deck. From being in the room.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
