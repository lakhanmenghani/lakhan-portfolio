"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="flex items-center justify-center min-h-screen py-20 md:py-32 text-center">
      <div className="container">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          Aligning C-Suite Vision with Engineering Execution.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Technical Product Manager driving the roadmap for High-Growth SaaS & Enterprise AI Platforms.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="#timeline">
            <Button size="lg">My Journey</Button>
          </Link>
          <Link href="mailto:example@example.com">
            <Button size="lg" variant="secondary">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
