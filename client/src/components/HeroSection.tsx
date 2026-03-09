/* ============================================================
   HeroSection — Amber Hideaway Design
   Full-viewport hero with parallax bar image and elegant typography
   ============================================================ */
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663083030511/mTPo25uMnZinNjYi9c7NEy/hero-bar-hraCeqVoHHFispNFXZ3knF.webp";

export default function HeroSection() {
  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.10 0.005 60 / 0.85) 0%, oklch(0.14 0.005 60 / 0.70) 50%, oklch(0.10 0.005 60 / 0.80) 100%)",
        }}
      />

      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
          opacity: 0.4,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <div
              className="h-px w-12"
              style={{ background: "oklch(0.72 0.12 75)" }}
            />
            <span
              style={{
                fontFamily: "'Cormorant SC', serif",
                color: "oklch(0.72 0.12 75)",
                fontSize: "0.8rem",
                letterSpacing: "0.25em",
              }}
            >
              Nishi-Asakusa, Tokyo
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "oklch(0.94 0.02 80)",
              lineHeight: 1.05,
            }}
            className="text-6xl md:text-8xl font-light mb-2"
          >
            Music
            <br />
            <span style={{ color: "oklch(0.72 0.12 75)", fontStyle: "italic" }}>
              & Space
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
            <h1
              style={{
                fontFamily: "'Cormorant SC', serif",
                color: "oklch(0.94 0.02 80)",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                letterSpacing: "0.15em",
                lineHeight: 1,
              }}
              className="font-medium mb-8"
            >
              Bar D
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{
              fontFamily: "'Noto Serif JP', serif",
              color: "oklch(0.80 0.015 80)",
              fontSize: "1rem",
              lineHeight: 1.9,
              fontWeight: 300,
            }}
            className="mb-10 max-w-md"
          >
            本格カクテルと音楽、そして人との出会い。
            <br />
            西浅草の夜に寄り添う、心地よい隠れ家。
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => {
                const el = document.querySelector("#drinks");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-amber-filled"
              style={{
                background: "oklch(0.72 0.12 75)",
                border: "1px solid oklch(0.72 0.12 75)",
                color: "oklch(0.16 0.005 60)",
                padding: "0.75rem 2rem",
                fontFamily: "'Cormorant SC', serif",
                fontSize: "0.875rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
              }}
            >
              Drinks Menu
            </button>
            <button
              onClick={() => {
                const el = document.querySelector("#access");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                background: "transparent",
                border: "1px solid oklch(0.72 0.12 75)",
                color: "oklch(0.72 0.12 75)",
                padding: "0.75rem 2rem",
                fontFamily: "'Cormorant SC', serif",
                fontSize: "0.875rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
              }}
            >
              Access
            </button>
          </motion.div>
        </div>
      </div>

      {/* Business hours badge */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute right-8 bottom-24 hidden md:block"
        style={{
          background: "oklch(1 0 0 / 5%)",
          backdropFilter: "blur(12px)",
          border: "1px solid oklch(0.72 0.12 75 / 30%)",
          padding: "1.25rem 1.5rem",
        }}
      >
        <p
          style={{
            fontFamily: "'Cormorant SC', serif",
            color: "oklch(0.72 0.12 75)",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            marginBottom: "0.5rem",
          }}
        >
          Open Hours
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "oklch(0.94 0.02 80)",
            fontSize: "1.5rem",
            letterSpacing: "0.05em",
            lineHeight: 1.2,
          }}
        >
          20:00 — 5:00
        </p>
        <p
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            color: "oklch(0.60 0.010 75)",
            fontSize: "0.7rem",
            marginTop: "0.25rem",
          }}
        >
          年中無休（年始を除く）
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          style={{
            fontFamily: "'Cormorant SC', serif",
            color: "oklch(0.60 0.010 75)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} style={{ color: "oklch(0.72 0.12 75)" }} />
        </motion.div>
      </motion.button>
    </section>
  );
}
