"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { products, categories } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-background to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-gold font-semibold uppercase tracking-[4px] text-xs mb-3">
            Handcrafted With Love
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4">
            Our Bracelets
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-muted max-w-md mx-auto text-sm leading-relaxed">
            Each piece is handmade with love, making every bracelet as unique as
            the person wearing it.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 snap-x scrollbar-hide justify-start sm:justify-center"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`snap-center flex-shrink-0 text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-charcoal text-white border-charcoal shadow-lg shadow-charcoal/10"
                  : "bg-white/70 text-muted border-pink/30 hover:border-gold/40 hover:text-charcoal"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted text-lg">
              No products in this category yet. Check back soon! 🌸
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
