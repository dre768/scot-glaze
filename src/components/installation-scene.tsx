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

        {/* ========== FAMILY (left, watching right) ========== */}
        <g filter="url(#tinyShadow)" transform="translate(120,470)">
          {/* Dad */}
          <g>
            <ellipse cx="28" cy="95" rx="18" ry="6" fill="#c9d5df" opacity="0.5" />
            <circle cx="28" cy="28" r="14" fill="#f0d2b4" stroke="#051e36" strokeWidth="2" />
            <path d="M14 44 C14 44 10 90 16 95 L40 95 C46 90 42 44 42 44 Z" fill="#f7fafc" stroke="#051e36" strokeWidth="2.2" />
            <path d="M18 55 L8 78" stroke="#051e36" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M38 55 L50 72" stroke="#051e36" strokeWidth="2.2" strokeLinecap="round" />
            <rect x="18" y="48" width="20" height="8" rx="2" fill="#051e36" />
          </g>
          {/* Mum */}
          <g transform="translate(55,8)">
            <ellipse cx="26" cy="90" rx="16" ry="5" fill="#c9d5df" opacity="0.5" />
            <circle cx="26" cy="24" r="13" fill="#efc7a4" stroke="#051e36" strokeWidth="2" />
            <path d="M10 38 C12 38 8 70 14 88 L38 88 C44 70 40 38 42 38 Z" fill="#eef3f7" stroke="#051e36" strokeWidth="2.2" />
            <path d="M14 50 L4 68" stroke="#051e36" strokeWidth="2.2" strokeLinecap="round" />
            <motion.g
              animate={reduce ? undefined : { rotate: [0, -22, 0, -22, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "38px 50px" }}
            >
              <path d="M38 50 L54 40" stroke="#051e36" strokeWidth="2.2" strokeLinecap="round" />
            </motion.g>
          </g>
          {/* Kid 1 */}
          <g transform="translate(110,28)">
            <circle cx="18" cy="18" r="10" fill="#f3d2b5" stroke="#051e36" strokeWidth="2" />
            <path d="M8 30 C8 30 6 62 10 68 L26 68 C30 62 28 30 28 30 Z" fill="#fff" stroke="#051e36" strokeWidth="2" />
            <path d="M10 40 L2 52" stroke="#051e36" strokeWidth="2" strokeLinecap="round" />
            <path d="M26 40 L36 50" stroke="#051e36" strokeWidth="2" strokeLinecap="round" />
          </g>
          {/* Kid 2 */}
          <g transform="translate(150,36)">
            <circle cx="14" cy="14" r="9" fill="#f0d2b4" stroke="#051e36" strokeWidth="2" />
            <path d="M5 24 C5 24 4 52 8 56 L20 56 C24 52 23 24 23 24 Z" fill="#f7fafc" stroke="#051e36" strokeWidth="2" />
          </g>
          {/* Dog */}
          <g transform="translate(200,68)">
            <ellipse cx="22" cy="28" rx="22" ry="12" fill="#d4a574" stroke="#051e36" strokeWidth="2" />
            <circle cx="40" cy="20" r="9" fill="#d4a574" stroke="#051e36" strokeWidth="2" />
            <circle cx="43" cy="18" r="1.6" fill="#051e36" />
            <path d="M46 22 L52 24" stroke="#051e36" strokeWidth="2" strokeLinecap="round" />
            <motion.path
              d="M2 24 L-8 10"
              stroke="#d4a574"
              strokeWidth="4"
              strokeLinecap="round"
              animate={reduce ? undefined : { rotate: [0, 20, 0] }}
              transition={{ duration: 0.7, repeat: Infinity }}
              style={{ transformOrigin: "2px 24px" }}
            />
            <line x1="12" y1="38" x2="10" y2="48" stroke="#051e36" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="28" y1="38" x2="30" y2="48" stroke="#051e36" strokeWidth="2.5" strokeLinecap="round" />
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
        <g filter="url(#tinyShadow)" transform="translate(980,455)">
          <ellipse cx="36" cy="118" rx="28" ry="8" fill="#c5d0d9" opacity="0.55" />
          {/* legs */}
          <path d="M24 78 L20 112 L32 112 L34 78 Z" fill="#eef3f7" stroke="#051e36" strokeWidth="2" />
          <path d="M40 78 L42 112 L54 112 L50 78 Z" fill="#eef3f7" stroke="#051e36" strokeWidth="2" />
          {/* boots */}
          <ellipse cx="24" cy="114" rx="10" ry="5" fill="#2a3440" />
          <ellipse cx="50" cy="114" rx="10" ry="5" fill="#2a3440" />
          {/* torso */}
          <path d="M18 40 C18 40 14 78 22 78 L50 78 C58 78 54 40 54 40 Z" fill="#ffffff" stroke="#051e36" strokeWidth="2.2" />
          {/* logo on chest */}
          <rect x="28" y="50" width="16" height="12" rx="2" fill="#051e36" />
          <rect x="30" y="52" width="12" height="3" fill="#d6df21" />
          <rect x="30" y="57" width="12" height="3" fill="#00aeef" />
          {/* head */}
          <circle cx="36" cy="28" r="14" fill="#efc7a4" stroke="#051e36" strokeWidth="2" />
          {/* cap */}
          <path d="M22 24 C22 12 50 12 50 24 L54 28 H20 Z" fill="#00aeef" stroke="#051e36" strokeWidth="2" />
          <rect x="48" y="24" width="14" height="5" rx="1.5" fill="#00aeef" stroke="#051e36" strokeWidth="1.5" />
          {/* arms + drill */}
          <path d="M20 48 L6 68" stroke="#efc7a4" strokeWidth="5" strokeLinecap="round" />
          <motion.g
            animate={reduce ? undefined : { rotate: [-8, 6, -8] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "52px 48px" }}
          >
            <path d="M52 48 L78 58" stroke="#efc7a4" strokeWidth="5" strokeLinecap="round" />
            <rect x="74" y="50" width="28" height="14" rx="3" fill="#5d6c7b" stroke="#051e36" strokeWidth="1.5" />
            <rect x="98" y="54" width="10" height="6" rx="1" fill="#2a3440" />
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
