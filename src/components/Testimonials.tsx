"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Priya S.",
    text: "Absolutely love my pastel bead bracelet! The quality is amazing and it looks exactly like the pictures. Will definitely order again! 💕",
    rating: 5,
    avatar: "🌸",
  },
  {
    name: "Ananya R.",
    text: "Ordered the couple bracelet set for my anniversary — my partner loved it! The magnetic heart is such a cute touch. Highly recommend! 💗",
    rating: 5,
    avatar: "🌷",
  },
  {
    name: "Meera K.",
    text: "The Hello Kitty charm bracelet is so adorable! My daughter absolutely adores it. Beautiful craftsmanship and fast delivery. ✨",
    rating: 5,
    avatar: "🌺",
  },
  {
    name: "Divya M.",
    text: "The wire necklace collection is stunning! Such delicate and unique pieces. Jeevi's Signature Stacks is my new favorite brand! 🌟",
    rating: 5,
    avatar: "💐",
  },
  {
    name: "Kavya P.",
    text: "Got a custom gift bracelet for my best friend's birthday. She couldn't stop smiling! The packaging was lovely too. Pure joy! 🎀",
    rating: 5,
    avatar: "🌻",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream/50 to-white pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-gold font-semibold uppercase tracking-[4px] text-xs mb-3">
            Happy Customers
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4">
            What They Say
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-8 sm:p-10 text-center border border-pink/20"
            >
              {/* Avatar */}
              <span className="text-5xl block mb-4">{testimonials[current].avatar}</span>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal/80 text-base sm:text-lg leading-relaxed mb-6 font-[family-name:var(--font-display)] italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Name */}
              <p className="text-sm font-semibold text-gold uppercase tracking-wider">
                — {testimonials[current].name}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-gold w-8"
                    : "bg-pink-deep/30 hover:bg-pink-deep/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
