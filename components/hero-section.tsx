"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="flex items-center justify-center min-h-screen py-20 md:py-32 text-center">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
            Product Leader
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
            Lakhan Menghani
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Enterprise SaaS. AI Platforms. Data that actually drives decisions.
          </p>
          <p className="text-base md:text-lg text-muted-foreground/70 italic max-w-2xl mx-auto mb-12">
            &ldquo;Building at the intersection of enterprise data, AI, and automation workflows. The messy, real-world kind.&rdquo;
          </p>
          <Link href="#experience">
            <Button size="lg">See how I think</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
