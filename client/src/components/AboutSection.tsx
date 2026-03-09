/* ============================================================
   AboutSection — Amber Hideaway Design
   Bar concept, features, and atmosphere
   ============================================================ */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Music, Clock, Users, Mic2 } from "lucide-react";

const ATMOSPHERE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663083030511/mTPo25uMnZinNjYi9c7NEy/bar-atmosphere-kkeV9Cfr92hrJ4Pta7BgSG.webp";

const features = [
  {
    icon: Music,
    title: "Music & Vinyl",
    titleJa: "音楽とレコード",
    desc: "マスターが集めたレコードやミュージシャンのポスターが並ぶ、音楽を愛する人のための空間。",
  },
  {
    icon: Mic2,
    title: "Karaoke",
    titleJa: "カラオケ",
    desc: "本格バーでカラオケが楽しめる唯一無二の場所。歌わなくても、ただ語り合うだけでも歓迎。",
  },
  {
    icon: Clock,
    title: "Late Night",
    titleJa: "深夜の終着点",
    desc: "20:00〜翌5:00まで年中無休。浅草の飲食店スタッフも仕事終わりに集まる「深夜の終着点」。",
  },
  {
    icon: Users,
    title: "Community",
    titleJa: "人とのつながり",
    desc: "知らない人同士が自然に言葉を交わし、新しいつながりが生まれる温かな場所。",
  },
];

function FeatureCard({ icon: Icon, title, titleJa, desc, index }: {
  icon: typeof Music;
  title: string;
  titleJa: string;
  desc: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="group p-6 border transition-all duration-300 hover:border-[oklch(0.72_0.12_75/60%)]"
      style={{
        background: "oklch(1 0 0 / 4%)",
        borderColor: "oklch(1 0 0 / 10%)",
      }}
    >
      <div
        className="w-10 h-10 flex items-center justify-center mb-4 transition-colors duration-300"
        style={{ border: "1px solid oklch(0.72 0.12 75 / 40%)" }}
      >
        <Icon size={18} style={{ color: "oklch(0.72 0.12 75)" }} />
      </div>
      <h3
        style={{
          fontFamily: "'Cormorant SC', serif",
          color: "oklch(0.94 0.02 80)",
          fontSize: "1rem",
          letterSpacing: "0.12em",
          marginBottom: "0.25rem",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "'Noto Sans JP', sans-serif",
          color: "oklch(0.60 0.010 75)",
          fontSize: "0.7rem",
          letterSpacing: "0.05em",
          marginBottom: "0.75rem",
        }}
      >
        {titleJa}
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
        {desc}
      </p>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "oklch(0.16 0.005 60)" }}
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
            <div
              className="h-px w-12"
              style={{ background: "oklch(0.72 0.12 75)" }}
            />
            <span
              style={{
                fontFamily: "'Cormorant SC', serif",
                color: "oklch(0.72 0.12 75)",
                fontSize: "0.75rem",
                letterSpacing: "0.25em",
              }}
            >
              About the Bar
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "oklch(0.94 0.02 80)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  lineHeight: 1.1,
                  fontWeight: 300,
                }}
              >
                西浅草に根づく、
                <br />
                <span style={{ color: "oklch(0.72 0.12 75)", fontStyle: "italic" }}>
                  日常に寄り添う
                </span>
                バー
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <p
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  color: "oklch(0.72 0.015 80)",
                  fontSize: "0.95rem",
                  lineHeight: 2,
                  fontWeight: 300,
                }}
                className="mb-4"
              >
                観光地の喧騒から少し離れた西浅草の一角。大通りから一本入った路地に佇む、知る人ぞ知る隠れ家的な存在です。
              </p>
              <p
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  color: "oklch(0.72 0.015 80)",
                  fontSize: "0.95rem",
                  lineHeight: 2,
                  fontWeight: 300,
                }}
              >
                近隣の常連客や仕事を終えた人たちが自然に集まり、歌い、語り合い、今宵を過ごしていく。観光客にとっても浅草の"リアル"に触れられる場所。
              </p>
            </motion.div>
          </div>
        </div>

        {/* Image + Quote */}
        <div className="grid md:grid-cols-5 gap-8 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="md:col-span-3 relative overflow-hidden"
            style={{ aspectRatio: "16/10" }}
          >
            <img
              src={ATMOSPHERE_IMAGE}
              alt="Bar D の雰囲気"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 60%, oklch(0.16 0.005 60) 100%)",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="md:col-span-2 flex flex-col justify-center"
          >
            <div
              className="mb-6"
              style={{
                borderLeft: "2px solid oklch(0.72 0.12 75)",
                paddingLeft: "1.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "oklch(0.94 0.02 80)",
                  fontSize: "1.4rem",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                「歌わなくても、お話をするだけでもいいし、もちろんカラオケでワイワイ楽しんでもらってもいい。にぎやかな時もあれば、静かな時もある。どちらの顔も持っているのが、この店の魅力です」
              </p>
            </div>
            <p
              style={{
                fontFamily: "'Cormorant SC', serif",
                color: "oklch(0.72 0.12 75)",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
              }}
            >
              — Master Daisuke Kobayashi
            </p>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
