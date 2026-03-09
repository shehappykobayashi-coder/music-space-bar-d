/* ============================================================
   Home Page — Music & Space Bar D
   Design: "Amber Hideaway" — Deep charcoal + amber gold
   Sections: Hero → About → Drinks → Master → Access → Footer
   ============================================================ */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DrinksSection from "@/components/DrinksSection";
import MasterSection from "@/components/MasterSection";
import AccessSection from "@/components/AccessSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.16 0.005 60)" }}
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DrinksSection />
      <MasterSection />
      <AccessSection />
      <Footer />
    </div>
  );
}
