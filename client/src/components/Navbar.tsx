/* ============================================================
   Navbar — Amber Hideaway Design
   Fixed top navigation with glass morphism effect
   ============================================================ */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", labelJa: "バーについて", href: "#about" },
  { label: "Drinks", labelJa: "ドリンク", href: "#drinks" },
  { label: "Master", labelJa: "マスター", href: "#master" },
  { label: "Access", labelJa: "アクセス", href: "#access" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[oklch(0.16_0.005_60/0.95)] backdrop-blur-md border-b border-[oklch(0.72_0.12_75/15%)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-start group"
          >
            <span
              className="font-display text-xl tracking-[0.15em] text-amber-gold leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.72 0.12 75)" }}
            >
              Music & Space
            </span>
            <span
              className="font-display-sc text-3xl tracking-[0.2em] leading-none"
              style={{ fontFamily: "'Cormorant SC', serif", color: "oklch(0.94 0.02 80)" }}
            >
              Bar D
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="group flex flex-col items-center gap-0.5"
              >
                <span
                  className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
                  style={{
                    fontFamily: "'Cormorant SC', serif",
                    color: "oklch(0.60 0.010 75)",
                  }}
                >
                  {item.label}
                </span>
                <span
                  className="text-xs transition-colors duration-300 group-hover:text-[oklch(0.72_0.12_75)]"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    color: "oklch(0.80 0.015 80)",
                    fontSize: "0.65rem",
                  }}
                >
                  {item.labelJa}
                </span>
                <span
                  className="h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: "oklch(0.72 0.12 75)" }}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "oklch(0.94 0.02 80)" }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-40 border-b"
            style={{
              background: "oklch(0.16 0.005 60 / 0.97)",
              backdropFilter: "blur(16px)",
              borderColor: "oklch(0.72 0.12 75 / 20%)",
            }}
          >
            <div className="flex flex-col py-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center gap-4 px-8 py-4 text-left hover:bg-[oklch(1_0_0/5%)] transition-colors"
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant SC', serif",
                      color: "oklch(0.72 0.12 75)",
                      fontSize: "1.1rem",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      color: "oklch(0.60 0.010 75)",
                      fontSize: "0.8rem",
                    }}
                  >
                    {item.labelJa}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
