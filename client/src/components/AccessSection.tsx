/* ============================================================
   AccessSection — Amber Hideaway Design
   Location, hours, and access information
   ============================================================ */
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { MapPin, Clock, Train, Phone } from "lucide-react";

const infoItems = [
  {
    icon: MapPin,
    label: "Address",
    labelJa: "住所",
    value: "東京都台東区西浅草３丁目３−１",
    sub: "金子ビル 2F",
  },
  {
    icon: Clock,
    label: "Hours",
    labelJa: "営業時間",
    value: "20:00 — 翌5:00",
    sub: "年中無休（年始を除く）",
  },
  {
    icon: Train,
    label: "Access",
    labelJa: "アクセス",
    value: "つくばエクスプレス 浅草駅",
    sub: "徒歩2分",
  },
  {
    icon: Phone,
    label: "Note",
    labelJa: "ご注意",
    value: "4:00時点でノーゲスト・ご連絡なしの場合",
    sub: "閉店させていただきます",
  },
];

export default function AccessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.5!2d139.7946!3d35.7155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec7b7b7b7b7%3A0x0!2z5p2x5Lqs6YO95Y-w5p2x5Yy65LiJ5rWm6I2J77yT5LiB55uu77yT4oiS77yR!5e0!3m2!1sja!2sjp!4v1234567890`;

  return (
    <section
      id="access"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "oklch(0.14 0.005 60)" }}
    >
      {/* Decorative gradient */}
      <div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at right bottom, oklch(0.72 0.12 75 / 4%) 0%, transparent 60%)",
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
              Access
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
            西浅草の夜に
            <span style={{ color: "oklch(0.72 0.12 75)", fontStyle: "italic" }}>
              {" "}寄り添う
            </span>
            、
            <br />
            心地よい居場所
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info cards */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {infoItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-5"
                  style={{
                    background: "oklch(1 0 0 / 4%)",
                    border: "1px solid oklch(1 0 0 / 10%)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <item.icon size={14} style={{ color: "oklch(0.72 0.12 75)" }} />
                    <span
                      style={{
                        fontFamily: "'Cormorant SC', serif",
                        color: "oklch(0.72 0.12 75)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.15em",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Noto Serif JP', serif",
                      color: "oklch(0.90 0.02 80)",
                      fontSize: "0.85rem",
                      fontWeight: 400,
                      lineHeight: 1.6,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      color: "oklch(0.55 0.010 75)",
                      fontSize: "0.75rem",
                    }}
                  >
                    {item.sub}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Closing message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="p-6"
              style={{
                background: "oklch(0.72 0.12 75 / 8%)",
                border: "1px solid oklch(0.72 0.12 75 / 25%)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "oklch(0.94 0.02 80)",
                  fontSize: "1.3rem",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  fontWeight: 300,
                  marginBottom: "0.75rem",
                }}
              >
                「観光の合間や仕事帰りなど、シチュエーションに合わせてカジュアルに立ち寄れる場所。訪れる人それぞれにとっての居場所になる……そんな温もりを持ったバーです。」
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="h-px w-8"
                  style={{ background: "oklch(0.72 0.12 75)" }}
                />
                <span
                  style={{
                    fontFamily: "'Cormorant SC', serif",
                    color: "oklch(0.72 0.12 75)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                  }}
                >
                  Music & Space Bar D
                </span>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {/* Google Maps embed */}
            <div
              className="relative overflow-hidden flex-1"
              style={{
                minHeight: "350px",
                border: "1px solid oklch(0.72 0.12 75 / 20%)",
              }}
            >
              <iframe
                title="Music & Space Bar D の地図"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.0!2d139.79458!3d35.71543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec9b5d9b0d3%3A0x4c5e5e5e5e5e5e5e!2z5p2x5Lqs6YO95Y-w5p2x5Yy65LiJ5rWm6I2J77yT5LiB55uu77yT4oiS77yR!5e0!3m2!1sja!2sjp!4v1741478400000!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(80%) invert(90%) hue-rotate(180deg)", minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Google Maps link */}
            <a
              href="https://maps.google.com/?q=東京都台東区西浅草3-3-1+金子ビル2F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 transition-all duration-300"
              style={{
                background: "transparent",
                border: "1px solid oklch(0.72 0.12 75 / 40%)",
                color: "oklch(0.72 0.12 75)",
                fontFamily: "'Cormorant SC', serif",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
              }}
            >
              <MapPin size={14} />
              Google Maps で開く
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
