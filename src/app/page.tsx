import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedBook from "@/components/sections/FeaturedBook";
import JourneySection from "@/components/sections/JourneySection";
import AboutSection from "@/components/sections/AboutSection";
import VoicesSection from "@/components/sections/VoicesSection";
import TedxSection from "@/components/sections/TedxSection";
import PassionsSection from "@/components/sections/PassionsSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Deepika Gorji — Survive. Learn. Move On.",
  description:
    "Author, Speaker & Lifelong Learner. Sharing stories of resilience from India to Iraq to Canada to the USA.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedBook />
      <JourneySection />
      <AboutSection />
      <VoicesSection />
      <TedxSection />
      <PassionsSection />
      <Footer />
    </div>
  );
}
