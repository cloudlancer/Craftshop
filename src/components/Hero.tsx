"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden"
    >
      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[8%] w-16 h-16 rounded-full bg-lavender/30 blur-sm"
        />
        <motion.div
          animate={{ y: [8, -8, 8], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[25%] right-[10%] w-12 h-12 rounded-full bg-pink/40 blur-sm"
        />
        <motion.div
          animate={{ y: [-6, 12, -6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[30%] left-[15%] w-20 h-20 rounded-full bg-gold/10 blur-md"
        />
        <motion.div
          animate={{ y: [5, -10, 5], x: [-3, 3, -3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[12%] w-14 h-14 rounded-full bg-peach/40 blur-sm"
        />
        {/* Sparkle dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold"
            style={{
              top: `${20 + (i * 13) % 60}%`,
              left: `${10 + (i * 17) % 80}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-20">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-8 relative"
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden shadow-2xl shadow-pink/30 border-4 border-white/60">
            <Image
              src="/images/logo.jpeg"
              alt="Jeevi's Signature Stacks Logo"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
            />
          </div>
          {/* Gold ring around logo */}
          <div className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-full border-2 border-gold/30 animate-pulse-glow" />
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-[family-name:var(--font-script)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal mb-3 leading-tight"
        >
          Jeevi&apos;s Signature Stacks
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-[family-name:var(--font-display)] text-xl sm:text-2xl md:text-3xl text-gold font-semibold mb-2 tracking-wide italic"
        >
          Style Your Story
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-sm sm:text-base uppercase tracking-[4px] text-muted mb-10 font-medium"
        >
          Handmade With Love ♥
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="section-divider mb-10"
        />

        {/* CTA Button */}
        <motion.a
          href="#products"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="btn-gold inline-block text-base sm:text-lg"
        >
          ✨ Shop Collection
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted/60"
          >
            <span className="text-xs uppercase tracking-[3px]">Scroll</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
