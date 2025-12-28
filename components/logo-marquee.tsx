"use client";

import { motion } from "framer-motion";

const logos = [
  "MICROSOFT",
  "INFINX",
  "IIM UDAIPUR",
  "MIT PUNE",
  "MAQ SOFTWARE",
];

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15,
        ease: "linear",
      },
    },
  },
};

export function LogoMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-12">
      <motion.div
        className="flex"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex-shrink-0 whitespace-nowrap">
            <span className="font-bold text-slate-500 text-2xl mx-8 opacity-50 hover:opacity-100 transition-opacity">
              {logo}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
