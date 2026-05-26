export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  tag?: string;
}

export const categories = [
  "All",
  "Charm Bracelets",
  "Cute Character Bracelets",
  "Pastel Bead Bracelets",
  "Minimal Wire Jewelry",
  "Handmade Gift Collection",
];

export const products: Product[] = [
  {
    id: 1,
    name: "Emerald Leaf Wire Necklace",
    category: "Minimal Wire Jewelry",
    image: "/images/product-1.jpeg",
    description:
      "Delicate gold wire necklace adorned with emerald green leaf charms and magenta crystal accents. A statement piece inspired by nature.",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Cinnamoroll Crystal Charm Bracelet",
    category: "Cute Character Bracelets",
    image: "/images/product-2.jpeg",
    description:
      "Playful crystal bead bracelet featuring a Cinnamoroll charm with dangling evil eye chain. Colorful and kawaii-inspired.",
    tag: "New Arrival",
  },
  {
    id: 3,
    name: "Hello Kitty Cherry Bead Bracelet",
    category: "Cute Character Bracelets",
    image: "/images/product-3.jpeg",
    description:
      "Vibrant cherry red bead bracelet with an adorable Hello Kitty charm and matching evil eye dangle. Bold and cute.",
    tag: "Popular",
  },
  {
    id: 4,
    name: "Sunset Heart Magnetic Couple Set",
    category: "Handmade Gift Collection",
    image: "/images/product-4.jpeg",
    description:
      "Matching pair of coral red and butter yellow bead bracelets connected by a magnetic heart charm. Perfect for couples and best friends.",
    tag: "Gift Ready",
  },
  {
    id: 5,
    name: "Signature Charm Collection",
    category: "Charm Bracelets",
    image: "/images/product-5.jpeg",
    description:
      "Stunning collection of 8 colorful charm bracelets with gold accents, featuring sunflower, guitar, cupcake, star, and bow charms.",
    tag: "Collection",
  },
  {
    id: 6,
    name: "Rainbow Stack Collection",
    category: "Pastel Bead Bracelets",
    image: "/images/product-6.jpeg",
    description:
      "A gorgeous display of woven bead bracelets and charm stacks in every color of the rainbow. Mix, match, and stack your style.",
    tag: "Trending",
  },
  {
    id: 7,
    name: "Ocean Heart Crystal Bracelet",
    category: "Charm Bracelets",
    image: "/images/product-7.jpeg",
    description:
      "Beautiful ocean blue crystal bead bracelet with a gold sunflower connector and enamel heart charm. Serene and elegant.",
    tag: "Bestseller",
  },
  {
    id: 8,
    name: "Flora Wire Necklace Collection",
    category: "Minimal Wire Jewelry",
    image: "/images/product-8.jpeg",
    description:
      "Set of 4 handcrafted wire necklaces with gemstone floral charms in emerald, sapphire, ruby, and amethyst tones.",
    tag: "Exclusive",
  },
];

export const WHATSAPP_NUMBER = "919342558824";

export function generateWhatsAppUrl(product: Product): string {
  const message = `Hi Jeevi's Signature Stacks,\nI'm interested in this bracelet:\n\nProduct: ${product.name}\n\nPlease share price and availability.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generateGenericWhatsAppUrl(): string {
  const message = `Hi Jeevi's Signature Stacks,\nI'd like to know more about your handmade bracelets. Please share your latest collection!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
