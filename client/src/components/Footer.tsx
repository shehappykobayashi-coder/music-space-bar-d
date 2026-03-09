/* ============================================================
   Footer — Amber Hideaway Design
   Minimal footer with bar info and navigation
   ============================================================ */
import { motion } from "framer-motion";

export default function Footer() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Drinks", href: "#drinks" },
    { label: "Master", href: "#master" },
    { label: "Access", href: "#access" },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative py-16 overflow-hidden"
      style={{ background: "oklch(0.12 0.004 60)" }}
    >
      {/* Gold top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / 50%), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex flex-col items-start mb-4"
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "oklch(0.72 0.12 75)",
                  fontSize: "0.9rem",
                  letterSpacing: "0.15em",
                  lineHeight: 1,
                }}
              >
                Music & Space
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant SC', serif",
                  color: "oklch(0.94 0.02 80)",
                  fontSize: "2rem",
                  letterSpacing: "0.2em",
                  lineHeight: 1,
                }}
              >
                Bar D
              </span>
            </button>
            <p
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                color: "oklch(0.50 0.008 75)",
                fontSize: "0.75rem",
                lineHeight: 1.8,
              }}
            >
              西浅草の隠れ家バー。
              <br />
              本格カクテルとカラオケで
              <br />
              夜を彩る特別な場所。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontFamily: "'Cormorant SC', serif",
                color: "oklch(0.72 0.12 75)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                marginBottom: "1rem",
              }}
            >
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left transition-colors duration-200 hover:text-[oklch(0.72_0.12_75)]"
                  style={{
                    fontFamily: "'Cormorant SC', serif",
                    color: "oklch(0.55 0.010 75)",
                    fontSize: "0.85rem",
                    letterSpacing: "0.12em",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p
              style={{
                fontFamily: "'Cormorant SC', serif",
                color: "oklch(0.72 0.12 75)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                marginBottom: "1rem",
              }}
            >
              Info
            </p>
            <div className="space-y-3">
              <div>
                <p
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    color: "oklch(0.50 0.008 75)",
                    fontSize: "0.65rem",
                    marginBottom: "0.2rem",
                  }}
                >
                  住所
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif JP', serif",
                    color: "oklch(0.72 0.015 80)",
                    fontSize: "0.8rem",
                    lineHeight: 1.6,
                  }}
                >
                  東京都台東区西浅草３丁目３−１
                  <br />
                  金子ビル 2F
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    color: "oklch(0.50 0.008 75)",
                    fontSize: "0.65rem",
                    marginBottom: "0.2rem",
                  }}
                >
                  営業時間
                </p>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "oklch(0.72 0.015 80)",
                    fontSize: "1rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  20:00 — 翌5:00
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    color: "oklch(0.50 0.008 75)",
                    fontSize: "0.7rem",
                  }}
                >
                  年中無休（年始を除く）
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    color: "oklch(0.50 0.008 75)",
                    fontSize: "0.65rem",
                    marginBottom: "0.2rem",
                  }}
                >
                  アクセス
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif JP', serif",
                    color: "oklch(0.72 0.015 80)",
                    fontSize: "0.8rem",
                  }}
                >
                  つくばエクスプレス 浅草駅 徒歩2分
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div
          className="mb-8"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / 30%), transparent)",
          }}
        />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              color: "oklch(0.40 0.006 60)",
              fontSize: "0.7rem",
            }}
          >
            © 2025 Music & Space Bar D. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Cormorant SC', serif",
              color: "oklch(0.40 0.006 60)",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
            }}
          >
            Nishi-Asakusa, Tokyo
          </p>
        </div>
      </div>
    </footer>
  );
}
