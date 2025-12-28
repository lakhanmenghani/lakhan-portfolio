"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 text-center">
      <div className="container">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          Shipping AI that survives the Enterprise.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
          Product Leader bridging Business Strategy & Engineering Reality.
          Currently building Agentic AI at Infinx.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/projects">
            <Button size="lg">View Case Studies</Button>
          </Link>
          <Link href="/chat">
            <Button size="lg" variant="outline">
              Ask My Resume
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
