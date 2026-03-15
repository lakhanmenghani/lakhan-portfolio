"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Got a hard problem?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">Let&apos;s talk.</p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="mailto:lakhan.menghani@gmail.com"
              className="text-sm font-medium hover:underline"
            >
              lakhan.menghani@gmail.com
            </a>
            <span className="text-muted-foreground">·</span>
            <a
              href="https://linkedin.com/in/lakhanmenghani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline"
            >
              linkedin.com/in/lakhanmenghani
            </a>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
            </div>
            <Input placeholder="Subject" />
            <Textarea placeholder="Your message" rows={5} />
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Send message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
