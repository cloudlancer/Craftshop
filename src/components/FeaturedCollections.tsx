"use client";

import { motion } from "framer-motion";

const collections = [
  {
    title: "Charm Bracelets",
    emoji: "✨",
    color: "from-pink to-rose",
    description: "Elegant charms that tell your story",
  },
  {
    title: "Pastel Bead Bracelets",
    emoji: "🌸",
    color: "from-lavender to-lavender-light",
    description: "Soft hues, dreamy vibes",
  },
  {
    title: "Minimal Wire Jewelry",
    emoji: "🌿",
    color: "from-mint to-sky",
    description: "Delicate wire artistry",
  },
  {
    title: "Cute Character Bracelets",
    emoji: "🎀",
    color: "from-peach to-pink",
    description: "Kawaii-inspired adorable pieces",
  },
  {
    title: "Handmade Gift Collection",
    emoji: "🎁",
    color: "from-gold-light to-gold",
    description: "Perfect presents, made with love",
  },
];

export default function FeaturedCollections() {
  return (
    <section id="collections" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-gold font-semibold uppercase tracking-[4px] text-xs mb-3">
            Curated For You
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4">
            Our Collections
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Collection Cards - Horizontal Scroll on Mobile */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-3 lg:grid-cols-5 sm:overflow-visible">
          {collections.map((collection, index) => (
            <motion.a
              key={collection.title}
              href="#products"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="snap-center flex-shrink-0 w-[200px] sm:w-auto group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden p-6 sm:p-8 text-center glass hover:shadow-xl hover:shadow-pink/10 transition-all duration-400 border border-pink/20 hover:border-gold/30 h-full">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-10 group-hover:opacity-20 transition-opacity duration-400`} />
                
                <div className="relative z-10">
                  <span className="text-4xl mb-4 block">{collection.emoji}</span>
                  <h3 className="font-[family-name:var(--font-display)] text-base sm:text-lg text-charcoal mb-2 font-semibold leading-tight">
                    {collection.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {collection.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
