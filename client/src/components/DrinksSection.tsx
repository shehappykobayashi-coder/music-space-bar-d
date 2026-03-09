/* ============================================================
   DrinksSection — Amber Hideaway Design
   Cocktail menu showcase with seasonal drinks
   ============================================================ */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const GIN_TONIC_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663083030511/mTPo25uMnZinNjYi9c7NEy/cocktail-hero-Xa8upLNhe6wFDtVqCrLn7y.webp";
const SEASONAL_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663083030511/mTPo25uMnZinNjYi9c7NEy/seasonal-cocktail-nBHsHhdYRusf3EJExifEEt.webp";

const drinks = [
  {
    name: "Gin & Tonic",
    nameJa: "ジントニック",
    desc: "バーの顔ともなる看板メニュー。ジントニックの元祖「ゴードン」を使い、小林さんの経験と拘りが詰まった至高の一杯。初めての方にぜひ試してほしい自信作。",
    tag: "Signature",
    image: GIN_TONIC_IMAGE,
  },
  {
    name: "Seasonal Fruit Cocktail",
    nameJa: "季節のフルーツカクテル",
    desc: "夏はすいかのソルティドッグ、秋は梨やぶどう、冬は柑橘類と、旬の果物をふんだんに使ったカクテルが登場。ノンアルコール対応も可能。",
    tag: "Seasonal",
    image: SEASONAL_IMAGE,
  },
];

const menuItems = [
  {
    category: "Signature",
    items: [
      { name: "ジントニック", desc: "ゴードンジン使用の看板カクテル" },
      { name: "氷なしハイボール", desc: "凍らせたウイスキーで最後まで薄まらない" },
    ],
  },
  {
    category: "Seasonal",
    items: [
      { name: "すいかのソルティドッグ", desc: "夏季限定・甘みと塩気の絶妙なバランス" },
      { name: "梨・ぶどうカクテル", desc: "秋の旬の果物を使用" },
      { name: "柑橘カクテル", desc: "冬の柑橘をふんだんに" },
    ],
  },
  {
    category: "Classic",
    items: [
      { name: "ウーロンハイ", desc: "親しみやすいチューハイ" },
      { name: "レモンサワー", desc: "定番の一杯" },
      { name: "各種カクテル", desc: "ご要望に応じてご提供" },
    ],
  },
];

export default function DrinksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="drinks"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "oklch(0.14 0.005 60)" }}
    >
      {/* Decorative background element */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at right top, oklch(0.72 0.12 75 / 4%) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div ref={ref} className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12" style={{ background: "oklch(0.72 0.12 75)" }} />
            <span
              style={{
                fontFamily: "'Cormorant SC', serif",
                color: "oklch(0.72 0.12 75)",
                fontSize: "0.75rem",
                letterSpacing: "0.25em",
              }}
            >
              Drinks
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "oklch(0.94 0.02 80)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.1,
              fontWeight: 300,
            }}
          >
            季節を映す
            <span style={{ color: "oklch(0.72 0.12 75)", fontStyle: "italic" }}>
              {" "}カクテル
            </span>
            と
            <br />
            工夫を凝らした一杯
          </motion.h2>
        </div>

        {/* Featured drinks */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {drinks.map((drink, i) => (
            <motion.div
              key={drink.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative overflow-hidden"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/5" }}
              >
                <img
                  src={drink.image}
                  alt={drink.nameJa}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.14 0.005 60) 0%, transparent 50%)",
                  }}
                />
                {/* Tag */}
                <div
                  className="absolute top-4 left-4 px-3 py-1"
                  style={{
                    background: "oklch(0.72 0.12 75)",
                    fontFamily: "'Cormorant SC', serif",
                    color: "oklch(0.16 0.005 60)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                  }}
                >
                  {drink.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6" style={{ background: "oklch(0.20 0.006 60)" }}>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "oklch(0.94 0.02 80)",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    marginBottom: "0.25rem",
                  }}
                >
                  {drink.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    color: "oklch(0.72 0.12 75)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.05em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {drink.nameJa}
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif JP', serif",
                    color: "oklch(0.72 0.015 80)",
                    fontSize: "0.85rem",
                    lineHeight: 1.9,
                    fontWeight: 300,
                  }}
                >
                  {drink.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gold divider */}
        <div
          className="mb-20"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, oklch(0.72 0.12 75), transparent)",
          }}
        />

        {/* Menu list */}
        <div className="grid md:grid-cols-3 gap-12">
          {menuItems.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  style={{
                    fontFamily: "'Cormorant SC', serif",
                    color: "oklch(0.72 0.12 75)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.2em",
                  }}
                >
                  {category.category}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: "oklch(0.72 0.12 75 / 30%)" }}
                />
              </div>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="pb-4"
                    style={{ borderBottom: "1px solid oklch(1 0 0 / 8%)" }}
                  >
                    <p
                      style={{
                        fontFamily: "'Noto Serif JP', serif",
                        color: "oklch(0.90 0.02 80)",
                        fontSize: "0.95rem",
                        fontWeight: 400,
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        color: "oklch(0.55 0.010 75)",
                        fontSize: "0.75rem",
                        fontWeight: 300,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            color: "oklch(0.50 0.008 75)",
            fontSize: "0.8rem",
          }}
        >
          ※ ノンアルコール対応可能です。お気軽にご相談ください。
        </motion.p>
      </div>
    </section>
  );
}
