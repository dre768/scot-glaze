"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Narrative street scene for the navy About band:
 * Lunox fitter installing a window, branded van, neighbours watching.
 */
export function InstallationScene() {
  const reduce = useReducedMotion();

  return (
    <div className="installation-scene relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[#062a45]">
      <svg
        viewBox="0 0 1200 520"
        className="h-auto w-full"
        role="img"
        aria-label="Lunox installer fitting a UPVC window while neighbours watch and a Lunox van waits on the street"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a3a5c" />
            <stop offset="55%" stopColor="#0d4f73" />
            <stop offset="100%" stopColor="#11729a" />
          </linearGradient>
          <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a2a36" />
            <stop offset="100%" stopColor="#0f1820" />
          </linearGradient>
          <linearGradient id="brickA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c4a484" />
            <stop offset="100%" stopColor="#9e7d5c" />
          </linearGradient>
          <linearGradient id="brickB" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b7c4cb" />
            <stop offset="100%" stopColor="#8fa0ab" />
          </linearGradient>
          <linearGradient id="brickC" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d7b49a" />
            <stop offset="100%" stopColor="#b08968" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Sky */}
        <rect width="1200" height="520" fill="url(#skyGrad)" />

        {/* Soft distant hills */}
        <path
          d="M0 300 C180 250 320 270 480 255 C650 238 780 275 960 250 C1080 235 1160 255 1200 245 L1200 360 L0 360 Z"
          fill="#0b4566"
          opacity="0.55"
        />

        {/* Clouds */}
        <motion.g
          animate={reduce ? undefined : { x: [0, 40, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          opacity="0.35"
        >
          <ellipse cx="160" cy="78" rx="70" ry="22" fill="#8fccf9" />
          <ellipse cx="210" cy="72" rx="42" ry="18" fill="#b7e1ff" />
          <ellipse cx="720" cy="58" rx="80" ry="24" fill="#8fccf9" />
          <ellipse cx="780" cy="52" rx="48" ry="18" fill="#b7e1ff" />
          <ellipse cx="1040" cy="90" rx="60" ry="18" fill="#8fccf9" />
        </motion.g>

        {/* Ground / pavement */}
        <rect y="360" width="1200" height="160" fill="url(#roadGrad)" />
        <rect y="360" width="1200" height="18" fill="#2c3f4d" />
        <motion.g
          animate={reduce ? undefined : { x: [0, -40] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        >
          {[0, 80, 160, 240, 320, 400, 480, 560, 640, 720, 800, 880, 960, 1040, 1120, 1200].map(
            (x) => (
              <rect
                key={x}
                x={x}
                y="430"
                width="42"
                height="6"
                rx="2"
                fill="#d6df21"
                opacity="0.55"
              />
            )
          )}
        </motion.g>

        {/* Left house — neighbours watching */}
        <g transform="translate(40,168)">
          <path d="M20 70 L140 10 L260 70 V210 H20 Z" fill="url(#brickA)" />
          <path d="M20 70 L140 10 L260 70" fill="none" stroke="#5c4030" strokeWidth="8" />
          <rect x="40" y="95" width="70" height="55" rx="3" fill="#16324a" stroke="#051e36" strokeWidth="4" />
          <rect x="170" y="95" width="70" height="55" rx="3" fill="#16324a" stroke="#051e36" strokeWidth="4" />
          {/* Neighbour couple at left window */}
          <g>
            <circle cx="62" cy="122" r="9" fill="#f0c7a4" />
            <rect x="52" y="132" width="20" height="18" rx="4" fill="#00aeef" />
            <circle cx="88" cy="120" r="8" fill="#e8b896" />
            <rect x="78" y="130" width="18" height="20" rx="4" fill="#d6df21" />
            <motion.g
              animate={reduce ? undefined : { rotate: [-6, 8, -6] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "95px 118px" }}
            >
              <path d="M95 118 L112 108" stroke="#f0c7a4" strokeWidth="4" strokeLinecap="round" />
            </motion.g>
          </g>
          {/* Child peeking right window */}
          <g>
            <circle cx="205" cy="128" r="8" fill="#f3d2b5" />
            <rect x="196" y="136" width="18" height="14" rx="3" fill="#00aeef" />
            <motion.circle
              cx="218"
              cy="118"
              r="3"
              fill="#fff"
              animate={reduce ? undefined : { opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
          </g>
          <rect x="115" y="150" width="40" height="60" rx="2" fill="#3b2a1d" />
          <circle cx="148" cy="180" r="3" fill="#d6df21" />
        </g>

        {/* Centre house — installation in progress */}
        <g transform="translate(330,120)">
          <path d="M30 90 L210 8 L390 90 V250 H30 Z" fill="url(#brickC)" />
          <path d="M30 90 L210 8 L390 90" fill="none" stroke="#4a3222" strokeWidth="10" />
          <rect x="55" y="118" width="90" height="70" rx="3" fill="#0b2438" stroke="#051e36" strokeWidth="5" />
          {/* Open reveal / new frame being fitted */}
          <motion.g
            animate={reduce ? undefined : { y: [0, -3, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect
              x="250"
              y="118"
              width="100"
              height="78"
              rx="4"
              fill="#ebf5fd"
              stroke="#00aeef"
              strokeWidth="6"
              filter="url(#softGlow)"
            />
            <line x1="300" y1="118" x2="300" y2="196" stroke="#00aeef" strokeWidth="4" />
            <line x1="250" y1="157" x2="350" y2="157" stroke="#00aeef" strokeWidth="4" />
          </motion.g>
          {/* Old opening outline */}
          <rect x="248" y="116" width="104" height="82" rx="4" fill="none" stroke="#051e36" strokeWidth="3" strokeDasharray="6 5" opacity="0.45" />
          <rect x="175" y="175" width="48" height="75" rx="2" fill="#2b1d14" />
          <circle cx="213" cy="215" r="3.5" fill="#d6df21" />
          {/* Ladder */}
          <g transform="translate(360,145)">
            <line x1="8" y1="0" x2="-10" y2="175" stroke="#c8a45a" strokeWidth="6" strokeLinecap="round" />
            <line x1="34" y1="0" x2="16" y2="175" stroke="#c8a45a" strokeWidth="6" strokeLinecap="round" />
            {[20, 45, 70, 95, 120, 145].map((y) => (
              <line
                key={y}
                x1={8 - (y / 175) * 18}
                y1={y}
                x2={34 - (y / 175) * 18}
                y2={y}
                stroke="#e6c57a"
                strokeWidth="4"
              />
            ))}
          </g>
          {/* Installer on ladder */}
          <g transform="translate(355,150)">
            {/* body */}
            <circle cx="28" cy="18" r="11" fill="#e8b896" />
            <rect x="16" y="30" width="24" height="34" rx="6" fill="#051e36" />
            <rect x="18" y="34" width="20" height="8" rx="2" fill="#d6df21" />
            {/* hard hat */}
            <path d="M16 14 C16 4 40 4 40 14 L42 18 H14 Z" fill="#d6df21" />
            {/* boots */}
            <rect x="16" y="62" width="10" height="10" rx="2" fill="#1a1a1a" />
            <rect x="30" y="62" width="10" height="10" rx="2" fill="#1a1a1a" />
            {/* arms fitting window */}
            <motion.g
              animate={reduce ? undefined : { rotate: [-12, 10, -12] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "20px 38px" }}
            >
              <path d="M18 38 L-8 20" stroke="#e8b896" strokeWidth="6" strokeLinecap="round" />
              <rect x="-18" y="12" width="16" height="10" rx="2" fill="#5d6c7b" />
            </motion.g>
            <motion.g
              animate={reduce ? undefined : { rotate: [8, -8, 8] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              style={{ transformOrigin: "38px 38px" }}
            >
              <path d="M38 38 L58 24" stroke="#e8b896" strokeWidth="6" strokeLinecap="round" />
            </motion.g>
          </g>
        </g>

        {/* Right house — more neighbours */}
        <g transform="translate(780,175)">
          <path d="M20 70 L150 5 L280 70 V205 H20 Z" fill="url(#brickB)" />
          <path d="M20 70 L150 5 L280 70" fill="none" stroke="#44555f" strokeWidth="8" />
          <rect x="45" y="95" width="72" height="52" rx="3" fill="#102838" stroke="#051e36" strokeWidth="4" />
          <rect x="175" y="95" width="72" height="52" rx="3" fill="#102838" stroke="#051e36" strokeWidth="4" />
          {/* Neighbour waving */}
          <g>
            <circle cx="81" cy="118" r="9" fill="#f0c7a4" />
            <rect x="70" y="128" width="22" height="19" rx="4" fill="#fff" />
            <motion.g
              animate={reduce ? undefined : { rotate: [0, -25, 0, -25, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "92px 132px" }}
            >
              <path d="M92 132 L110 118" stroke="#f0c7a4" strokeWidth="4" strokeLinecap="round" />
            </motion.g>
          </g>
          {/* Dog in other window */}
          <g>
            <ellipse cx="211" cy="132" rx="14" ry="10" fill="#8b6914" />
            <circle cx="222" cy="126" r="7" fill="#8b6914" />
            <circle cx="224" cy="124" r="1.5" fill="#051e36" />
            <motion.g
              animate={reduce ? undefined : { rotate: [0, 18, 0] }}
              transition={{ duration: 0.7, repeat: Infinity }}
              style={{ transformOrigin: "200px 132px" }}
            >
              <path d="M198 132 L188 122" stroke="#8b6914" strokeWidth="3" strokeLinecap="round" />
            </motion.g>
          </g>
          <rect x="125" y="145" width="38" height="60" rx="2" fill="#24343f" />
        </g>

        {/* Lunox van */}
        <g transform="translate(70,355)">
          <motion.g
            animate={reduce ? undefined : { y: [0, -1.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* body */}
            <rect x="40" y="20" width="210" height="70" rx="12" fill="#051e36" />
            <rect x="40" y="20" width="210" height="18" rx="8" fill="#0a2a45" />
            <path d="M250 35 H300 L320 70 H250 Z" fill="#051e36" />
            <rect x="262" y="42" width="40" height="22" rx="3" fill="#8fccf9" opacity="0.85" />
            {/* lime stripe */}
            <rect x="40" y="55" width="210" height="10" fill="#d6df21" />
            <text
              x="145"
              y="48"
              textAnchor="middle"
              fill="#d6df21"
              fontFamily="Poppins, Arial, sans-serif"
              fontSize="16"
              fontWeight="700"
            >
              LUNOX
            </text>
            <text
              x="145"
              y="78"
              textAnchor="middle"
              fill="#ffffff"
              fontFamily="Plus Jakarta Sans, Arial, sans-serif"
              fontSize="10"
              fontWeight="600"
            >
              WINDOWS & DOORS
            </text>
            {/* wheels */}
            <circle cx="90" cy="95" r="16" fill="#111" />
            <circle cx="90" cy="95" r="7" fill="#5d6c7b" />
            <circle cx="230" cy="95" r="16" fill="#111" />
            <circle cx="230" cy="95" r="7" fill="#5d6c7b" />
            {/* window rack on roof */}
            <rect x="70" y="8" width="120" height="8" rx="2" fill="#2b3d4a" />
            <rect x="85" y="0" width="18" height="12" rx="1" fill="#ebf5fd" stroke="#00aeef" strokeWidth="2" />
            <rect x="115" y="0" width="18" height="12" rx="1" fill="#ebf5fd" stroke="#00aeef" strokeWidth="2" />
            <rect x="145" y="0" width="18" height="12" rx="1" fill="#ebf5fd" stroke="#00aeef" strokeWidth="2" />
          </motion.g>
        </g>

        {/* Tool crate / frames on ground */}
        <g transform="translate(520,405)">
          <rect x="0" y="10" width="70" height="28" rx="3" fill="#3a2a1c" />
          <rect x="8" y="0" width="54" height="16" rx="2" fill="#ebf5fd" stroke="#00aeef" strokeWidth="3" />
          <rect x="80" y="8" width="40" height="30" rx="2" fill="#051e36" />
          <rect x="86" y="14" width="28" height="6" fill="#d6df21" />
        </g>

        {/* Sparkles / work activity */}
        {!reduce &&
          [
            { cx: 620, cy: 210, delay: 0 },
            { cx: 640, cy: 230, delay: 0.4 },
            { cx: 600, cy: 225, delay: 0.8 },
          ].map((spark) => (
            <motion.circle
              key={`${spark.cx}-${spark.delay}`}
              cx={spark.cx}
              cy={spark.cy}
              r="3"
              fill="#d6df21"
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.3, 0.5] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                delay: spark.delay,
                ease: "easeInOut",
              }}
            />
          ))}

        {/* Caption chip */}
        <g transform="translate(820,430)">
          <rect width="320" height="44" rx="22" fill="#051e36" opacity="0.92" />
          <circle cx="28" cy="22" r="8" fill="#d6df21" />
          <text
            x="48"
            y="27"
            fill="#ffffff"
            fontFamily="Plus Jakarta Sans, Arial, sans-serif"
            fontSize="14"
            fontWeight="600"
          >
            Live install day · Neighbours approved
          </text>
        </g>
      </svg>
    </div>
  );
}
