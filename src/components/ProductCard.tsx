"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Product, generateWhatsAppUrl } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const whatsappUrl = generateWhatsAppUrl(product);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="product-card group"
    >
      {/* Image Container */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-square overflow-hidden"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-6">
          <span className="text-white text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
            View on WhatsApp →
          </span>
        </div>
        {/* Tag badge */}
        {product.tag && (
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-gold/90 text-charcoal px-3 py-1 rounded-full shadow-md">
              {product.tag}
            </span>
          </div>
        )}
      </a>

      {/* Content */}
      <div className="p-4 sm:p-5">
        {/* Category */}
        <span className="text-[10px] uppercase tracking-[2px] text-gold font-semibold">
          {product.category}
        </span>
        {/* Product Name */}
        <h3 className="font-[family-name:var(--font-display)] text-base sm:text-lg text-charcoal mt-1 mb-2 leading-snug font-semibold">
          {product.name}
        </h3>
        {/* Description */}
        <p className="text-xs text-muted leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp w-full justify-center text-sm py-2.5"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Order on WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
