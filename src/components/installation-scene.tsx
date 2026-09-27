"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Cléra-style volumetric street scene for the Lunox hero. */
export function InstallationScene({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 780"
        className="h-full w-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f4f7fa" />
            <stop offset="55%" stopColor="#eef3f7" />
            <stop offset="100%" stopColor="#e4ebf1" />
          </linearGradient>
          <linearGradient id="wallL" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#d8e0e7" />
          </linearGradient>
          <linearGradient id="wallR" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#d2dbe3" />
          </linearGradient>
          <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c5d0d9" />
            <stop offset="100%" stopColor="#9aabba" />
          </linearGradient>
          <linearGradient id="glassGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8ebfb" />
            <stop offset="100%" stopColor="#7ec8ea" />
          </linearGradient>
          <linearGradient id="vanBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e8eef3" />
          </linearGradient>
          <linearGradient id="vanSide" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f7fafc" />
            <stop offset="100%" stopColor="#d7e1ea" />
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#051e36" floodOpacity="0.12" />
          </filter>
          <filter id="liteShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#051e36" floodOpacity="0.1" />
          </filter>
          <filter id="tinyShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#051e36" floodOpacity="0.14" />
          </filter>
        </defs>

        <rect width="1440" height="780" fill="url(#heroSky)" />

        {/* Ground plane with depth */}
        <ellipse cx="720" cy="700" rx="820" ry="90" fill="#dfe7ee" opacity="0.7" />
        <path d="M0 560 C360 540 1080 540 1440 560 L1440 780 L0 780 Z" fill="#e8eef3" />
        <path d="M0 560 C360 548 1080 548 1440 560" fill="none" stroke="#c9d5df" strokeWidth="2" />

        {/* Sun */}
        <motion.g
          animate={reduce ? undefined : { scale: [1, 1.04, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "720px 78px" }}
        >
          <circle cx="720" cy="78" r="28" fill="#f5d76e" opacity="0.95" filter="url(#liteShadow)" />
          <circle cx="720" cy="78" r="18" fill="#ffe9a0" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="720"
              y1="78"
              x2={720 + Math.cos((deg * Math.PI) / 180) * 48}
              y2={78 + Math.sin((deg * Math.PI) / 180) * 48}
              stroke="#f5d76e"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.55"
            />
          ))}
        </motion.g>

        {/* Clouds */}
        <motion.g
          animate={reduce ? undefined : { x: [0, 24, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          opacity="0.9"
        >
          <g filter="url(#tinyShadow)">
            <ellipse cx="180" cy="110" rx="58" ry="22" fill="#fff" />
            <ellipse cx="220" cy="102" rx="34" ry="18" fill="#fff" />
            <ellipse cx="150" cy="104" rx="28" ry="14" fill="#fff" />
          </g>
          <g filter="url(#tinyShadow)">
            <ellipse cx="1180" cy="120" rx="64" ry="24" fill="#fff" />
            <ellipse cx="1225" cy="112" rx="36" ry="18" fill="#fff" />
            <ellipse cx="1145" cy="114" rx="30" ry="15" fill="#fff" />
          </g>
          <g filter="url(#tinyShadow)">
            <ellipse cx="980" cy="70" rx="40" ry="14" fill="#fff" />
            <ellipse cx="1005" cy="66" rx="22" ry="11" fill="#fff" />
          </g>
        </motion.g>

        {/* ========== LEFT HOUSE ========== */}
        <g filter="url(#softShadow)">
          {/* main volume */}
          <path d="M70 320 L70 520 L290 520 L290 320 L180 230 Z" fill="url(#wallL)" stroke="#9aabba" strokeWidth="2.5" />
          {/* side depth wall */}
          <path d="M290 320 L340 350 L340 545 L290 520 Z" fill="#c5d0d9" stroke="#9aabba" strokeWidth="2" />
          {/* roof */}
          <path d="M55 325 L180 220 L305 325 L290 320 L180 230 L70 320 Z" fill="url(#roofGrad)" stroke="#8a9bab" strokeWidth="2" />
          <path d="M305 325 L350 350 L340 350 L290 320 Z" fill="#a8b7c4" stroke="#8a9bab" strokeWidth="2" />
          {/* windows with depth */}
          <g>
            <rect x="100" y="350" width="55" height="48" rx="3" fill="#f7fafc" stroke="#7f93a4" strokeWidth="2.5" />
            <rect x="105" y="355" width="45" height="38" rx="2" fill="#d7eaf5" />
            <line x1="127.5" y1="355" x2="127.5" y2="393" stroke="#9bb8c9" strokeWidth="1.5" />
            <line x1="105" y1="374" x2="150" y2="374" stroke="#9bb8c9" strokeWidth="1.5" />
            <rect x="105" y="355" width="45" height="10" fill="#fff" opacity="0.35" />
          </g>
          <g>
            <rect x="200" y="350" width="55" height="48" rx="3" fill="#f7fafc" stroke="#7f93a4" strokeWidth="2.5" />
            <rect x="205" y="355" width="45" height="38" rx="2" fill="#d7eaf5" />
            <line x1="227.5" y1="355" x2="227.5" y2="393" stroke="#9bb8c9" strokeWidth="1.5" />
            <line x1="205" y1="374" x2="250" y2="374" stroke="#9bb8c9" strokeWidth="1.5" />
          </g>
          {/* door with depth */}
          <rect x="155" y="430" width="42" height="90" rx="3" fill="#eef3f7" stroke="#7f93a4" strokeWidth="2.5" />
          <rect x="160" y="436" width="32" height="78" rx="2" fill="#d5dee6" />
          <circle cx="186" cy="478" r="3" fill="#051e36" />
          {/* chimney */}
          <rect x="240" y="245" width="22" height="40" fill="#b7c4cf" stroke="#8a9bab" strokeWidth="2" />
        </g>

        {/* Tree left */}
        <g filter="url(#liteShadow)" opacity="0.85">
          <rect x="40" y="430" width="12" height="90" rx="3" fill="#a8b7c4" />
          <ellipse cx="46" cy="400" rx="38" ry="55" fill="#c5d3c8" stroke="#9aabba" strokeWidth="2" />
          <ellipse cx="30" cy="420" rx="22" ry="30" fill="#d5e0d8" />
        </g>

        {/* Bike */}
        <g transform="translate(300,500)" opacity="0.75" stroke="#7f93a4" fill="none" strokeWidth="2.5">
          <circle cx="0" cy="30" r="14" />
          <circle cx="48" cy="30" r="14" />
          <path d="M0 30 L18 8 L40 8 L48 30 M18 8 L28 30 M28 30 L12 30" />
          <path d="M40 8 L48 0" />
        </g>

        {/* ========== FAMILY (left, watching install) ========== */}
        <g filter="url(#tinyShadow)" transform="translate(95,445)">
          {/* Dad — arms crossed / watching */}
          <g transform="translate(0,8)">
            <ellipse cx="32" cy="148" rx="22" ry="7" fill="#c9d5df" opacity="0.45" />
            {/* shoes */}
            <ellipse cx="22" cy="145" rx="11" ry="5" fill="#2a3440" />
            <ellipse cx="44" cy="145" rx="11" ry="5" fill="#2a3440" />
            {/* legs */}
            <path d="M18 95 L16 140 L28 140 L30 95 Z" fill="#e8eef3" stroke="#051e36" strokeWidth="2" />
            <path d="M36 95 L38 140 L50 140 L48 95 Z" fill="#e8eef3" stroke="#051e36" strokeWidth="2" />
            {/* torso */}
            <path d="M14 48 C14 48 10 95 18 95 H48 C56 95 52 48 52 48 Z" fill="#f7fafc" stroke="#051e36" strokeWidth="2.2" />
            <path d="M20 58 H46" stroke="#c5d0d9" strokeWidth="2" />
            {/* neck + head */}
            <rect x="26" y="38" width="12" height="12" rx="3" fill="#f0d2b4" />
            <circle cx="32" cy="28" r="15" fill="#f0d2b4" stroke="#051e36" strokeWidth="2" />
            {/* short hair */}
            <path d="M17 24 C18 10 46 10 47 24 L44 22 C40 14 24 14 20 22 Z" fill="#3a2a1c" stroke="#051e36" strokeWidth="1.5" />
            {/* face accents looking right */}
            <circle cx="38" cy="28" r="1.8" fill="#051e36" />
            <path d="M36 34 Q40 36 42 34" fill="none" stroke="#c48a6a" strokeWidth="1.4" strokeLinecap="round" />
            {/* crossed arms with hands */}
            <path d="M16 62 C6 70 8 82 18 84" fill="none" stroke="#f0d2b4" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M50 62 C60 70 58 82 48 84" fill="none" stroke="#f0d2b4" strokeWidth="5.5" strokeLinecap="round" />
            {/* hands (simple mitts + thumb) */}
            <g transform="translate(12,78)">
              <ellipse cx="6" cy="6" rx="7" ry="5.5" fill="#f0d2b4" stroke="#051e36" strokeWidth="1.5" />
              <ellipse cx="0" cy="4" rx="3" ry="2.5" fill="#f0d2b4" stroke="#051e36" strokeWidth="1.2" />
            </g>
            <g transform="translate(42,78)">
              <ellipse cx="6" cy="6" rx="7" ry="5.5" fill="#efc7a4" stroke="#051e36" strokeWidth="1.5" />
              <ellipse cx="12" cy="4" rx="3" ry="2.5" fill="#efc7a4" stroke="#051e36" strokeWidth="1.2" />
            </g>
          </g>

          {/* Mum — pointing / gesturing toward install */}
          <g transform="translate(72,0)">
            <ellipse cx="30" cy="152" rx="20" ry="6" fill="#c9d5df" opacity="0.45" />
            <ellipse cx="22" cy="149" rx="10" ry="4.5" fill="#2a3440" />
            <ellipse cx="40" cy="149" rx="10" ry="4.5" fill="#2a3440" />
            <path d="M18 100 L16 145 L28 145 L29 100 Z" fill="#eef3f7" stroke="#051e36" strokeWidth="2" />
            <path d="M34 100 L36 145 L48 145 L46 100 Z" fill="#eef3f7" stroke="#051e36" strokeWidth="2" />
            {/* dress/coat silhouette */}
            <path d="M12 50 C12 50 8 100 16 100 H46 C54 100 50 50 50 50 Z" fill="#ffffff" stroke="#051e36" strokeWidth="2.2" />
            <path d="M16 62 H48" stroke="#d6df21" strokeWidth="3" strokeLinecap="round" />
            <rect x="25" y="40" width="11" height="12" rx="3" fill="#efc7a4" />
            <circle cx="30" cy="28" r="14" fill="#efc7a4" stroke="#051e36" strokeWidth="2" />
            {/* longer hair */}
            <path d="M16 24 C16 8 44 8 44 24 L46 48 C42 42 18 42 14 48 Z" fill="#5c4030" stroke="#051e36" strokeWidth="1.5" />
            <circle cx="36" cy="28" r="1.7" fill="#051e36" />
            <path d="M34 33 Q38 35 40 33" fill="none" stroke="#c48a6a" strokeWidth="1.3" strokeLinecap="round" />
            {/* left arm down */}
            <path d="M14 58 C6 72 4 88 10 96" fill="none" stroke="#efc7a4" strokeWidth="5" strokeLinecap="round" />
            <g transform="translate(4,92)">
              <ellipse cx="6" cy="5" rx="6.5" ry="5" fill="#efc7a4" stroke="#051e36" strokeWidth="1.4" />
              <path d="M2 2 L0 -2 M6 1 L6 -3 M10 2 L12 -1" stroke="#efc7a4" strokeWidth="2" strokeLinecap="round" />
            </g>
            {/* right arm pointing */}
            <motion.g
              animate={reduce ? undefined : { rotate: [0, -10, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "48px 58px" }}
            >
              <path d="M48 58 C62 52 78 48 92 46" fill="none" stroke="#efc7a4" strokeWidth="5" strokeLinecap="round" />
              <g transform="translate(88,40)">
                <ellipse cx="8" cy="6" rx="7" ry="5.5" fill="#efc7a4" stroke="#051e36" strokeWidth="1.4" />
                {/* pointing finger */}
                <path d="M14 5 L24 3" stroke="#efc7a4" strokeWidth="3" strokeLinecap="round" />
                <path d="M12 8 L18 10 M12 10 L16 13" stroke="#efc7a4" strokeWidth="2" strokeLinecap="round" />
              </g>
            </motion.g>
          </g>

          {/* Older child */}
          <g transform="translate(175,36)">
            <ellipse cx="22" cy="118" rx="16" ry="5" fill="#c9d5df" opacity="0.4" />
            <ellipse cx="16" cy="115" rx="8" ry="3.5" fill="#2a3440" />
            <ellipse cx="30" cy="115" rx="8" ry="3.5" fill="#2a3440" />
            <path d="M12 72 L10 112 L18 112 L20 72 Z" fill="#eef3f7" stroke="#051e36" strokeWidth="1.8" />
            <path d="M26 72 L28 112 L36 112 L34 72 Z" fill="#eef3f7" stroke="#051e36" strokeWidth="1.8" />
            <path d="M10 40 C10 40 8 72 14 72 H32 C38 72 36 40 36 40 Z" fill="#ffffff" stroke="#051e36" strokeWidth="2" />
            <rect x="18" y="32" width="9" height="10" rx="2" fill="#f3d2b5" />
            <circle cx="22" cy="24" r="11" fill="#f3d2b5" stroke="#051e36" strokeWidth="1.8" />
            <path d="M11 20 C12 10 32 10 33 20 L30 18 C28 13 16 13 14 18 Z" fill="#3a2a1c" />
            <circle cx="27" cy="24" r="1.4" fill="#051e36" />
            {/* arms holding sibling hand feel / pockets */}
            <path d="M12 48 C4 58 4 70 10 76" fill="none" stroke="#f3d2b5" strokeWidth="4.2" strokeLinecap="round" />
            <path d="M34 48 C42 56 44 68 40 74" fill="none" stroke="#f3d2b5" strokeWidth="4.2" strokeLinecap="round" />
            <ellipse cx="10" cy="78" rx="5.5" ry="4.5" fill="#f3d2b5" stroke="#051e36" strokeWidth="1.2" />
            <ellipse cx="40" cy="76" rx="5.5" ry="4.5" fill="#f3d2b5" stroke="#051e36" strokeWidth="1.2" />
          </g>

          {/* Younger child */}
          <g transform="translate(230,52)">
            <ellipse cx="18" cy="100" rx="14" ry="4.5" fill="#c9d5df" opacity="0.4" />
            <ellipse cx="13" cy="97" rx="7" ry="3" fill="#2a3440" />
            <ellipse cx="24" cy="97" rx="7" ry="3" fill="#2a3440" />
            <path d="M10 62 L8 94 L16 94 L17 62 Z" fill="#eef3f7" stroke="#051e36" strokeWidth="1.6" />
            <path d="M20 62 L22 94 L30 94 L28 62 Z" fill="#eef3f7" stroke="#051e36" strokeWidth="1.6" />
            <path d="M8 36 C8 36 6 62 12 62 H26 C32 62 30 36 30 36 Z" fill="#f7fafc" stroke="#051e36" strokeWidth="1.8" />
            <circle cx="19" cy="22" r="10" fill="#f0d2b4" stroke="#051e36" strokeWidth="1.6" />
            <path d="M9 18 C10 9 28 9 29 18 L27 16 C25 12 13 12 11 16 Z" fill="#5c4030" />
            <circle cx="24" cy="22" r="1.2" fill="#051e36" />
            <path d="M10 44 C4 52 4 62 8 66" fill="none" stroke="#f0d2b4" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M28 44 C34 50 36 60 32 66" fill="none" stroke="#f0d2b4" strokeWidth="3.5" strokeLinecap="round" />
            <ellipse cx="7" cy="68" rx="4.5" ry="3.8" fill="#f0d2b4" stroke="#051e36" strokeWidth="1.1" />
            <ellipse cx="33" cy="67" rx="4.5" ry="3.8" fill="#f0d2b4" stroke="#051e36" strokeWidth="1.1" />
          </g>

          {/* Golden retriever — sitting, looking right */}
          <g transform="translate(290,95)">
            <ellipse cx="36" cy="58" rx="34" ry="8" fill="#c9d5df" opacity="0.4" />
            {/* haunch / sitting body */}
            <ellipse cx="28" cy="34" rx="26" ry="18" fill="#d4a574" stroke="#051e36" strokeWidth="2" />
            <ellipse cx="18" cy="40" rx="14" ry="16" fill="#c8965c" stroke="#051e36" strokeWidth="1.8" />
            {/* chest */}
            <ellipse cx="42" cy="36" rx="14" ry="13" fill="#e0b887" stroke="#051e36" strokeWidth="1.6" />
            {/* front legs tucked */}
            <path d="M34 46 C34 54 36 58 40 58" fill="none" stroke="#051e36" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M46 46 C48 54 50 58 54 58" fill="none" stroke="#051e36" strokeWidth="3.5" strokeLinecap="round" />
            <ellipse cx="40" cy="58" rx="6" ry="3.5" fill="#c8965c" stroke="#051e36" strokeWidth="1.3" />
            <ellipse cx="54" cy="58" rx="6" ry="3.5" fill="#c8965c" stroke="#051e36" strokeWidth="1.3" />
            {/* back paw */}
            <ellipse cx="8" cy="52" rx="7" ry="4" fill="#c8965c" stroke="#051e36" strokeWidth="1.3" />
            {/* neck */}
            <path d="M48 28 C58 22 64 18 68 20" fill="none" stroke="#d4a574" strokeWidth="10" strokeLinecap="round" />
            {/* head */}
            <ellipse cx="74" cy="18" rx="14" ry="12" fill="#d4a574" stroke="#051e36" strokeWidth="2" />
            {/* snout */}
            <ellipse cx="86" cy="22" rx="9" ry="6" fill="#e0b887" stroke="#051e36" strokeWidth="1.5" />
            <ellipse cx="92" cy="22" rx="3" ry="2.2" fill="#2a3440" />
            <path d="M84 26 Q88 28 90 26" fill="none" stroke="#a87a4a" strokeWidth="1.2" />
            {/* eye */}
            <circle cx="78" cy="16" r="2" fill="#051e36" />
            <circle cx="78.7" cy="15.3" r="0.7" fill="#fff" />
            {/* floppy ear */}
            <path d="M64 12 C58 8 54 16 58 24 C62 28 68 22 68 16 Z" fill="#c8965c" stroke="#051e36" strokeWidth="1.5" />
            {/* collar */}
            <path d="M58 26 C62 30 70 30 74 26" fill="none" stroke="#00aeef" strokeWidth="3" strokeLinecap="round" />
            <circle cx="66" cy="30" r="2.5" fill="#d6df21" stroke="#051e36" strokeWidth="1" />
            {/* wagging tail */}
            <motion.g
              animate={reduce ? undefined : { rotate: [-18, 22, -18] }}
              transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "4px 28px" }}
            >
              <path
                d="M4 28 C-6 18 -14 8 -10 0"
                fill="none"
                stroke="#d4a574"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M4 28 C-6 18 -14 8 -10 0"
                fill="none"
                stroke="#051e36"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.35"
              />
            </motion.g>
          </g>
        </g>

        {/* ========== RIGHT HOUSE ========== */}
        <g filter="url(#softShadow)" transform="translate(860,250)">
          <path d="M80 80 L80 300 L340 300 L340 80 L210 0 Z" fill="url(#wallR)" stroke="#9aabba" strokeWidth="2.5" />
          {/* depth side */}
          <path d="M340 80 L390 105 L390 318 L340 300 Z" fill="#bcc8d2" stroke="#9aabba" strokeWidth="2" />
          <path d="M65 85 L210 -8 L355 85 L340 80 L210 0 L80 80 Z" fill="url(#roofGrad)" stroke="#8a9bab" strokeWidth="2" />
          <path d="M355 85 L400 108 L390 105 L340 80 Z" fill="#a8b7c4" stroke="#8a9bab" strokeWidth="2" />
          {/* upper windows */}
          <rect x="115" y="105" width="50" height="42" rx="3" fill="#f7fafc" stroke="#7f93a4" strokeWidth="2.5" />
          <rect x="120" y="110" width="40" height="32" rx="2" fill="#d7eaf5" />
          <rect x="250" y="105" width="50" height="42" rx="3" fill="#f7fafc" stroke="#7f93a4" strokeWidth="2.5" />
          <rect x="255" y="110" width="40" height="32" rx="2" fill="#d7eaf5" />
          {/* NEW WINDOW being installed — accent color + glow */}
          <motion.g
            animate={reduce ? undefined : { y: [0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="200" y="175" width="78" height="70" rx="4" fill="#fff" stroke="#00aeef" strokeWidth="5" filter="url(#liteShadow)" />
            <rect x="208" y="183" width="62" height="54" rx="2" fill="url(#glassGrad)" />
            <line x1="239" y1="183" x2="239" y2="237" stroke="#fff" strokeWidth="3" opacity="0.7" />
            <line x1="208" y1="210" x2="270" y2="210" stroke="#fff" strokeWidth="3" opacity="0.7" />
            <rect x="208" y="183" width="62" height="14" fill="#fff" opacity="0.28" />
          </motion.g>
          {/* door */}
          <rect x="115" y="210" width="40" height="90" rx="3" fill="#eef3f7" stroke="#7f93a4" strokeWidth="2.5" />
          <circle cx="145" cy="258" r="3" fill="#051e36" />
        </g>

        {/* Tree right with bird */}
        <g filter="url(#liteShadow)" transform="translate(1280,380)" opacity="0.9">
          <rect x="18" y="80" width="14" height="100" rx="3" fill="#a8b7c4" />
          <ellipse cx="25" cy="55" rx="48" ry="70" fill="#c5d3c8" stroke="#9aabba" strokeWidth="2" />
          <ellipse cx="0" cy="75" rx="28" ry="40" fill="#d5e0d8" />
          <motion.g
            animate={reduce ? undefined : { y: [0, -4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <ellipse cx="55" cy="30" rx="7" ry="4" fill="#051e36" />
            <path d="M60 30 L70 26" stroke="#051e36" strokeWidth="2" strokeLinecap="round" />
          </motion.g>
        </g>

        {/* ========== LUNOX VAN ========== */}
        <g filter="url(#softShadow)" transform="translate(560,470)">
          <motion.g
            animate={reduce ? undefined : { y: [0, -1.5, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* chassis shadow */}
            <ellipse cx="150" cy="118" rx="145" ry="14" fill="#c5d0d9" opacity="0.55" />
            {/* body */}
            <path
              d="M20 40 H230 C250 40 268 55 275 75 L295 75 C310 75 320 88 320 100 L320 110 H20 Z"
              fill="url(#vanBody)"
              stroke="#7f93a4"
              strokeWidth="2.5"
            />
            {/* cabin */}
            <path d="M230 40 L275 40 L295 75 H230 Z" fill="url(#vanSide)" stroke="#7f93a4" strokeWidth="2.5" />
            <path d="M240 48 H268 L282 72 H240 Z" fill="#9fd4ef" stroke="#5aa8cc" strokeWidth="2" />
            {/* side panel branding */}
            <rect x="40" y="55" width="160" height="42" rx="6" fill="#051e36" />
            <text
              x="120"
              y="73"
              textAnchor="middle"
              fill="#d6df21"
              fontFamily="Poppins, Arial, sans-serif"
              fontSize="15"
              fontWeight="700"
            >
              LUNOX
            </text>
            <text
              x="120"
              y="88"
              textAnchor="middle"
              fill="#ffffff"
              fontFamily="Plus Jakarta Sans, Arial, sans-serif"
              fontSize="8"
              fontWeight="600"
              letterSpacing="0.5"
            >
              window and door installations
            </text>
            {/* lime accent stripe */}
            <rect x="20" y="100" width="300" height="6" fill="#d6df21" />
            {/* wheels with depth */}
            <circle cx="70" cy="118" r="22" fill="#2a3440" />
            <circle cx="70" cy="118" r="12" fill="#8a9bab" />
            <circle cx="70" cy="118" r="5" fill="#dfe7ee" />
            <circle cx="250" cy="118" r="22" fill="#2a3440" />
            <circle cx="250" cy="118" r="12" fill="#8a9bab" />
            <circle cx="250" cy="118" r="5" fill="#dfe7ee" />
            {/* roof rack with frames */}
            <rect x="50" y="28" width="150" height="8" rx="2" fill="#9aabba" />
            <rect x="70" y="18" width="22" height="14" rx="2" fill="url(#glassGrad)" stroke="#00aeef" strokeWidth="2" />
            <rect x="100" y="18" width="22" height="14" rx="2" fill="url(#glassGrad)" stroke="#00aeef" strokeWidth="2" />
            <rect x="130" y="18" width="22" height="14" rx="2" fill="url(#glassGrad)" stroke="#00aeef" strokeWidth="2" />
          </motion.g>
        </g>

        {/* ========== INSTALLER ========== */}
        <g filter="url(#tinyShadow)" transform="translate(970,440)">
          <ellipse cx="40" cy="140" rx="32" ry="9" fill="#c5d0d9" opacity="0.5" />
          {/* boots */}
          <ellipse cx="28" cy="136" rx="12" ry="6" fill="#2a3440" />
          <ellipse cx="56" cy="136" rx="12" ry="6" fill="#2a3440" />
          {/* legs */}
          <path d="M22 88 L20 130 L36 130 L36 88 Z" fill="#eef3f7" stroke="#051e36" strokeWidth="2" />
          <path d="M44 88 L46 130 L62 130 L58 88 Z" fill="#eef3f7" stroke="#051e36" strokeWidth="2" />
          {/* belt */}
          <rect x="20" y="84" width="42" height="8" rx="2" fill="#051e36" />
          <rect x="36" y="85" width="10" height="6" rx="1" fill="#d6df21" />
          {/* torso / overalls */}
          <path d="M18 42 C18 42 14 86 22 86 H60 C68 86 64 42 64 42 Z" fill="#ffffff" stroke="#051e36" strokeWidth="2.2" />
          <path d="M28 42 V86 M54 42 V86" stroke="#c5d0d9" strokeWidth="2" />
          {/* chest logo */}
          <rect x="32" y="54" width="18" height="14" rx="2" fill="#051e36" />
          <rect x="34" y="56" width="14" height="4" fill="#d6df21" />
          <rect x="34" y="62" width="14" height="4" fill="#00aeef" />
          {/* neck + head */}
          <rect x="34" y="34" width="12" height="12" rx="3" fill="#efc7a4" />
          <circle cx="40" cy="24" r="15" fill="#efc7a4" stroke="#051e36" strokeWidth="2" />
          <circle cx="46" cy="24" r="1.7" fill="#051e36" />
          <path d="M44 30 Q48 32 50 30" fill="none" stroke="#c48a6a" strokeWidth="1.3" strokeLinecap="round" />
          {/* cap with brim */}
          <path d="M24 20 C24 8 56 8 56 20 L60 25 H22 Z" fill="#00aeef" stroke="#051e36" strokeWidth="2" />
          <path d="M56 20 H72 C74 20 74 26 70 26 H56 Z" fill="#00aeef" stroke="#051e36" strokeWidth="1.6" />
          {/* left arm resting near hip + hand */}
          <path d="M20 52 C8 64 6 84 14 94" fill="none" stroke="#efc7a4" strokeWidth="5.5" strokeLinecap="round" />
          <g transform="translate(8,90)">
            <ellipse cx="6" cy="6" rx="7" ry="5.5" fill="#efc7a4" stroke="#051e36" strokeWidth="1.4" />
            <path d="M2 3 L0 -1 M6 2 L6 -2 M10 3 L12 0" stroke="#efc7a4" strokeWidth="2.1" strokeLinecap="round" />
          </g>
          {/* right arm with drill + detailed hand */}
          <motion.g
            animate={reduce ? undefined : { rotate: [-6, 5, -6] }}
            transition={{ duration: 1.35, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "60px 52px" }}
          >
            <path d="M60 52 C76 56 92 62 104 66" fill="none" stroke="#efc7a4" strokeWidth="5.5" strokeLinecap="round" />
            {/* gripping hand */}
            <g transform="translate(98,58)">
              <ellipse cx="8" cy="8" rx="8" ry="6.5" fill="#efc7a4" stroke="#051e36" strokeWidth="1.4" />
              <path d="M4 4 L2 0 M8 3 L8 -1 M12 4 L14 1" stroke="#efc7a4" strokeWidth="2.2" strokeLinecap="round" />
              <ellipse cx="2" cy="10" rx="3" ry="2.5" fill="#efc7a4" stroke="#051e36" strokeWidth="1.1" />
            </g>
            {/* power drill */}
            <g transform="translate(108,54)">
              <rect x="0" y="4" width="34" height="14" rx="3" fill="#5d6c7b" stroke="#051e36" strokeWidth="1.5" />
              <rect x="6" y="18" width="10" height="16" rx="2" fill="#2a3440" stroke="#051e36" strokeWidth="1.2" />
              <rect x="32" y="8" width="14" height="6" rx="1" fill="#8a9bab" stroke="#051e36" strokeWidth="1.1" />
              <circle cx="48" cy="11" r="3" fill="#d6df21" stroke="#051e36" strokeWidth="1" />
              <rect x="8" y="6" width="12" height="4" rx="1" fill="#00aeef" />
            </g>
          </motion.g>
        </g>

        {/* Toolbox + ladder */}
        <g transform="translate(1085,545)" filter="url(#tinyShadow)">
          <rect x="0" y="8" width="48" height="28" rx="3" fill="#051e36" stroke="#7f93a4" strokeWidth="2" />
          <rect x="0" y="8" width="48" height="8" fill="#00aeef" />
          <rect x="18" y="4" width="12" height="8" rx="2" fill="#d6df21" />
          {/* step ladder */}
          <g transform="translate(70,-30)" stroke="#9aabba" strokeWidth="3" fill="none" strokeLinecap="round">
            <line x1="0" y1="0" x2="-8" y2="70" />
            <line x1="28" y1="0" x2="20" y2="70" />
            <line x1="-2" y1="18" x2="26" y2="18" />
            <line x1="-4" y1="36" x2="24" y2="36" />
            <line x1="-6" y1="54" x2="22" y2="54" />
          </g>
        </g>

        {/* Work sparkles near window */}
        {!reduce &&
          [
            { x: 1090, y: 430, d: 0 },
            { x: 1110, y: 450, d: 0.35 },
            { x: 1075, y: 455, d: 0.7 },
          ].map((s) => (
            <motion.circle
              key={`${s.x}-${s.d}`}
              cx={s.x}
              cy={s.y}
              r="3.5"
              fill="#d6df21"
              animate={{ opacity: [0, 1, 0], scale: [0.4, 1.2, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: s.d }}
            />
          ))}
      </svg>
    </div>
  );
}
