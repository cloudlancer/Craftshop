import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import ProductGrid from "@/components/ProductGrid";
import WhyHandmade from "@/components/WhyHandmade";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <FeaturedCollections />
      <ProductGrid />
      <WhyHandmade />
      <Testimonials />
      <InstagramGallery />
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </main>
  );
}
