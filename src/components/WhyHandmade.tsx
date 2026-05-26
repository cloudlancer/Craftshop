"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: "🤲",
    title: "Handcrafted",
    description:
      "Every bracelet is carefully crafted by hand, ensuring attention to detail and premium quality in every bead.",
  },
  {
    icon: "💫",
    title: "One of a Kind",
    description:
      "No two pieces are identical. Your bracelet is as unique as your personality and style.",
  },
  {
    icon: "💝",
    title: "Made With Love",
    description:
      "Each creation carries warmth, intention, and love — from our hands to your wrist.",
  },
  {
    icon: "🎁",
    title: "Gift Ready",
    description:
      "Perfect for birthdays, anniversaries, or just because. We make gifting magical and personal.",
  },
];

export default function WhyHandmade() {
  return (
    <section
      id="why-handmade"
      className="py-20 sm:py-28 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-pink-lavender opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-semibold uppercase tracking-[4px] text-xs mb-3">
            Our Promise
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4">
            Why Handmade?
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted max-w-lg mx-auto text-sm leading-relaxed">
            In a world of mass production, we choose to slow down and create
            something meaningful — one bracelet at a time.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="text-center group"
            >
              <div className="glass rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:shadow-pink/10 transition-all duration-400 border border-pink/20 hover:border-gold/30 h-full">
                <motion.span
                  className="text-4xl sm:text-5xl block mb-4"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {reason.icon}
                </motion.span>
                <h3 className="font-[family-name:var(--font-display)] text-lg sm:text-xl text-charcoal mb-2 font-semibold">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
