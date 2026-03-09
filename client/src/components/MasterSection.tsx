/* ============================================================
   MasterSection — Amber Hideaway Design
   Master Daisuke Kobayashi profile and story
   ============================================================ */
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const MASTER_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663083030511/mTPo25uMnZinNjYi9c7NEy/master-bar-FU27mxuy7G8G5MNvx95cTn.webp";

const timeline = [
  { year: "24歳", event: "バーテンダーとしてのキャリアをスタート", place: "三ノ輪のバーで4年半修行" },
  { year: "その後", event: "銀座の名門バーへヘッドハンティング", place: "バーテンダーの「かっこよさと難しさ」を学ぶ" },
  { year: "30歳", event: "独立・「リトルバード」をオープン", place: "文京区で4年間営業" },
  { year: "その後", event: "浅草に戻り経験を積む", place: "浅草の某有名バーで修行" },
  { year: "2018年", event: "Music & Space Bar D をオープン", place: "西浅草・今年で8年目" },
];

export default function MasterSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="master"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "oklch(0.16 0.005 60)" }}
    >
      {/* Decorative gradient */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at left center, oklch(0.72 0.12 75 / 3%) 0%, transparent 60%)",
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
              The Master
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
            マスター・
            <span style={{ color: "oklch(0.72 0.12 75)", fontStyle: "italic" }}>
              小林大輔
            </span>
            さんの歩み
          </motion.h2>
        </div>

        {/* Main content: image + bio */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={MASTER_IMAGE}
                alt="マスター 小林大輔"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.16 0.005 60 / 0.6) 0%, transparent 60%)",
                }}
              />
            </div>
            {/* Decorative border */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full pointer-events-none"
              style={{ border: "1px solid oklch(0.72 0.12 75 / 20%)", zIndex: -1 }}
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "oklch(0.94 0.02 80)",
                  fontSize: "2rem",
                  fontWeight: 400,
                  marginBottom: "0.25rem",
                }}
              >
                Daisuke Kobayashi
              </h3>
              <p
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  color: "oklch(0.72 0.12 75)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  marginBottom: "1.5rem",
                }}
              >
                小林 大輔 — オーナーバーテンダー
              </p>
              <div
                className="h-px mb-6"
                style={{ background: "oklch(0.72 0.12 75 / 30%)" }}
              />
            </div>

            <div className="space-y-4 mb-8">
              <p
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  color: "oklch(0.72 0.015 80)",
                  fontSize: "0.9rem",
                  lineHeight: 2,
                  fontWeight: 300,
                }}
              >
                台東区出身。三ノ輪、銀座、入谷と様々なバーで経験を積み、30歳で独立。2018年に西浅草に『Music & Space Bar D』をオープンし、今年で8年目を迎えました。
              </p>
              <p
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  color: "oklch(0.72 0.015 80)",
                  fontSize: "0.9rem",
                  lineHeight: 2,
                  fontWeight: 300,
                }}
              >
                音楽や映画の知識を常にアップデートし、来店する人との会話の種を欠かさないように心掛けています。地元出身だからこそ、昔の友人や地元の常連が訪れ、時には何十年ぶりの再会が生まれることも。
              </p>
              <p
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  color: "oklch(0.72 0.015 80)",
                  fontSize: "0.9rem",
                  lineHeight: 2,
                  fontWeight: 300,
                }}
              >
                プライベートでは三人の子どもの父親でもあり、子育ての話題で盛り上がることもしばしば。
              </p>
            </div>

            {/* Quote */}
            <div
              style={{
                borderLeft: "2px solid oklch(0.72 0.12 75)",
                paddingLeft: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "oklch(0.94 0.02 80)",
                  fontSize: "1.2rem",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                「カラオケと本格的なお酒の両方を楽しめるのはここだけだと思います！」
              </p>
            </div>

            {/* Respect note */}
            <div
              className="p-4"
              style={{
                background: "oklch(1 0 0 / 4%)",
                border: "1px solid oklch(0.72 0.12 75 / 20%)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  color: "oklch(0.60 0.010 75)",
                  fontSize: "0.75rem",
                  lineHeight: 1.8,
                }}
              >
                🎵 宇多田ヒカルをリスペクト。店内には集めたレコードやミュージシャンのポスターが飾られています。
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <span
              style={{
                fontFamily: "'Cormorant SC', serif",
                color: "oklch(0.72 0.12 75)",
                fontSize: "0.75rem",
                letterSpacing: "0.25em",
              }}
            >
              Career Timeline
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "oklch(0.72 0.12 75 / 30%)" }}
            />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[5.5rem] top-0 bottom-0 w-px hidden md:block"
              style={{ background: "oklch(0.72 0.12 75 / 20%)" }}
            />

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8"
                >
                  <span
                    className="md:w-20 md:text-right shrink-0"
                    style={{
                      fontFamily: "'Cormorant SC', serif",
                      color: "oklch(0.72 0.12 75)",
                      fontSize: "0.8rem",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {item.year}
                  </span>
                  <div className="hidden md:flex items-center shrink-0">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "oklch(0.72 0.12 75)" }}
                    />
                  </div>
                  <div
                    className="flex-1 p-4"
                    style={{
                      background: "oklch(1 0 0 / 4%)",
                      border: "1px solid oklch(1 0 0 / 8%)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Noto Serif JP', serif",
                        color: "oklch(0.90 0.02 80)",
                        fontSize: "0.9rem",
                        fontWeight: 400,
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.event}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        color: "oklch(0.55 0.010 75)",
                        fontSize: "0.75rem",
                      }}
                    >
                      {item.place}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
