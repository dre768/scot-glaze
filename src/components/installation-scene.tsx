"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Cléra-matched hero illustration.
 * Character anatomy follows the close-up refs: mitten hands with
 * finger ticks, dot eyes + smile, sitting tan dog with tongue out,
 * fitter on a step ladder with a caulking gun.
 */
export function InstallationScene({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const line = "#8a9bab";
  const ink = "#3d4f5c";

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
            <stop offset="0%" stopColor="#f7f9fb" />
            <stop offset="100%" stopColor="#e8eef3" />
          </linearGradient>
          <linearGradient id="glassGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8ebfb" />
            <stop offset="100%" stopColor="#7ec8ea" />
          </linearGradient>
          <linearGradient id="dogGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0d7a8" />
            <stop offset="100%" stopColor="#e2c07e" />
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#051e36" floodOpacity="0.1" />
          </filter>
          <filter id="liteShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#051e36" floodOpacity="0.1" />
          </filter>
        </defs>

        <rect width="1440" height="780" fill="url(#heroSky)" />

        {/* Ground */}
        <path d="M0 580 C400 560 1040 560 1440 580 L1440 780 L0 780 Z" fill="#eef3f7" />
        <path d="M0 580 C400 568 1040 568 1440 580" fill="none" stroke="#d0dae3" strokeWidth="2" />

        {/* Sun */}
        <g opacity="0.9">
          <circle cx="720" cy="72" r="22" fill="#f5d76e" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="720"
              y1="72"
              x2={720 + Math.cos((deg * Math.PI) / 180) * 38}
              y2={72 + Math.sin((deg * Math.PI) / 180) * 38}
              stroke="#f5d76e"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
          ))}
        </g>

        {/* Soft clouds */}
        <motion.g
          animate={reduce ? undefined : { x: [0, 18, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          opacity="0.85"
        >
          <ellipse cx="200" cy="100" rx="50" ry="18" fill="#fff" />
          <ellipse cx="235" cy="94" rx="28" ry="14" fill="#fff" />
          <ellipse cx="1200" cy="110" rx="55" ry="18" fill="#fff" />
          <ellipse cx="1238" cy="104" rx="30" ry="14" fill="#fff" />
        </motion.g>

        {/* ========== LEFT HOUSE (faint, behind family) ========== */}
        <g opacity="0.55" stroke={line} fill="none" strokeWidth="2.2">
          <path d="M40 360 L40 560 L260 560 L260 360 L150 280 Z" />
          <path d="M60 360 L150 290 L240 360" />
          <rect x="80" y="400" width="48" height="40" />
          <rect x="170" y="400" width="48" height="40" />
          <rect x="135" y="470" width="36" height="90" />
          <circle cx="40" cy="540" r="28" />
          <circle cx="40" cy="540" r="8" />
        </g>

        {/* ========== FAMILY + DOG ========== */}
        <g transform="translate(70,430)" filter="url(#liteShadow)">
          {/* Dad */}
          <g transform="translate(70,10)">
            {/* legs */}
            <path d="M18 95 L16 148 L30 148 L32 95 Z" fill="#fff" stroke={ink} strokeWidth="2.4" strokeLinejoin="round" />
            <path d="M36 95 L38 148 L52 148 L50 95 Z" fill="#fff" stroke={ink} strokeWidth="2.4" strokeLinejoin="round" />
            {/* shoes */}
            <path d="M12 148 H32 L30 154 H14 Z" fill="#fff" stroke={ink} strokeWidth="2" />
            <path d="M36 148 H56 L54 154 H38 Z" fill="#fff" stroke={ink} strokeWidth="2" />
            {/* torso */}
            <path d="M14 48 C14 48 12 95 18 95 H50 C56 95 54 48 54 48 Z" fill="#fff" stroke={ink} strokeWidth="2.4" strokeLinejoin="round" />
            {/* sleeve folds */}
            <path d="M14 62 H22 M46 62 H54" stroke={ink} strokeWidth="1.6" strokeLinecap="round" />
            {/* head — no neck, Cléra style */}
            <circle cx="34" cy="32" r="20" fill="#fff" stroke={ink} strokeWidth="2.4" />
            {/* wavy short hair */}
            <path
              d="M16 28 C18 10 28 6 34 8 C40 6 50 10 52 28 C48 18 40 14 34 16 C28 14 20 18 16 28 Z"
              fill="#fff"
              stroke={ink}
              strokeWidth="2.2"
            />
            {/* face */}
            <circle cx="28" cy="32" r="2.2" fill={ink} />
            <circle cx="40" cy="32" r="2.2" fill={ink} />
            <path d="M30 40 Q34 44 38 40" fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" />
            {/* left arm hanging + mitten hand with finger ticks */}
            <path d="M16 58 C8 72 8 92 12 108" fill="none" stroke={ink} strokeWidth="2.4" strokeLinecap="round" />
            <g transform="translate(4,104)">
              <ellipse cx="8" cy="8" rx="9" ry="7" fill="#fff" stroke={ink} strokeWidth="2.1" />
              <path d="M4 6 v6 M8 5 v7 M12 6 v6" stroke={ink} strokeWidth="1.6" strokeLinecap="round" />
            </g>
            {/* right arm on hip */}
            <path d="M52 58 C64 64 66 78 56 88" fill="none" stroke={ink} strokeWidth="2.4" strokeLinecap="round" />
            <g transform="translate(48,82)">
              <ellipse cx="8" cy="8" rx="8" ry="6.5" fill="#fff" stroke={ink} strokeWidth="2.1" />
              <path d="M5 6 v5 M8 5 v6 M11 6 v5" stroke={ink} strokeWidth="1.5" strokeLinecap="round" />
            </g>
          </g>

          {/* Mum */}
          <g transform="translate(155,18)">
            <path d="M16 108 L14 152 L28 152 L30 108 Z" fill="#fff" stroke={ink} strokeWidth="2.3" strokeLinejoin="round" />
            <path d="M34 108 L36 152 L50 152 L48 108 Z" fill="#fff" stroke={ink} strokeWidth="2.3" strokeLinejoin="round" />
            <path d="M10 152 H32 L30 157 H12 Z" fill="#fff" stroke={ink} strokeWidth="2" />
            <path d="M32 152 H54 L52 157 H34 Z" fill="#fff" stroke={ink} strokeWidth="2" />
            {/* skirt */}
            <path d="M12 78 C10 108 14 108 18 108 H46 C50 108 54 108 52 78 Z" fill="#fff" stroke={ink} strokeWidth="2.3" strokeLinejoin="round" />
            {/* top */}
            <path d="M16 48 C16 48 14 78 18 78 H46 C50 78 48 48 48 48 Z" fill="#fff" stroke={ink} strokeWidth="2.3" strokeLinejoin="round" />
            <path d="M16 60 H24 M40 60 H48" stroke={ink} strokeWidth="1.5" strokeLinecap="round" />
            {/* head + bangs/shoulder hair */}
            <circle cx="32" cy="30" r="18" fill="#fff" stroke={ink} strokeWidth="2.3" />
            <path
              d="M14 28 C14 10 24 6 32 8 C40 6 50 10 50 28 L52 52 C46 44 38 42 32 42 C26 42 18 44 12 52 Z"
              fill="#fff"
              stroke={ink}
              strokeWidth="2.2"
            />
            <path d="M18 22 H46" stroke={ink} strokeWidth="2" strokeLinecap="round" />
            <circle cx="26" cy="30" r="2" fill={ink} />
            <circle cx="38" cy="30" r="2" fill={ink} />
            <path d="M28 37 Q32 41 36 37" fill="none" stroke={ink} strokeWidth="1.8" strokeLinecap="round" />
            {/* arms + clasped mitten hands */}
            <path d="M18 56 C10 68 12 84 22 92" fill="none" stroke={ink} strokeWidth="2.3" strokeLinecap="round" />
            <path d="M46 56 C54 68 52 84 42 92" fill="none" stroke={ink} strokeWidth="2.3" strokeLinecap="round" />
            <g transform="translate(18,88)">
              <ellipse cx="10" cy="8" rx="8" ry="6.5" fill="#fff" stroke={ink} strokeWidth="2" />
              <ellipse cx="22" cy="8" rx="8" ry="6.5" fill="#fff" stroke={ink} strokeWidth="2" />
              <path d="M7 6 v5 M10 5 v6 M13 6 v5" stroke={ink} strokeWidth="1.4" strokeLinecap="round" />
              <path d="M19 6 v5 M22 5 v6 M25 6 v5" stroke={ink} strokeWidth="1.4" strokeLinecap="round" />
            </g>
          </g>

          {/* Boy */}
          <g transform="translate(250,48)">
            <path d="M14 88 L12 128 L24 128 L26 88 Z" fill="#fff" stroke={ink} strokeWidth="2.1" strokeLinejoin="round" />
            <path d="M28 88 L30 128 L42 128 L40 88 Z" fill="#fff" stroke={ink} strokeWidth="2.1" strokeLinejoin="round" />
            <path d="M8 128 H28 L26 133 H10 Z" fill="#fff" stroke={ink} strokeWidth="1.8" />
            <path d="M28 128 H48 L46 133 H30 Z" fill="#fff" stroke={ink} strokeWidth="1.8" />
            {/* shorts */}
            <path d="M12 72 C10 88 14 88 16 88 H38 C40 88 44 88 42 72 Z" fill="#fff" stroke={ink} strokeWidth="2.1" strokeLinejoin="round" />
            {/* shirt */}
            <path d="M14 42 C14 42 12 72 16 72 H38 C42 72 40 42 40 42 Z" fill="#fff" stroke={ink} strokeWidth="2.1" strokeLinejoin="round" />
            <circle cx="27" cy="28" r="15" fill="#fff" stroke={ink} strokeWidth="2.1" />
            <path d="M13 24 C14 12 22 10 27 11 C32 10 40 12 41 24 C38 16 32 14 27 15 C22 14 16 16 13 24 Z" fill="#fff" stroke={ink} strokeWidth="2" />
            <circle cx="22" cy="28" r="1.8" fill={ink} />
            <circle cx="32" cy="28" r="1.8" fill={ink} />
            <path d="M24 34 Q27 37 30 34" fill="none" stroke={ink} strokeWidth="1.6" strokeLinecap="round" />
            {/* arms at sides + mitten hands */}
            <path d="M14 50 C6 62 6 78 10 90" fill="none" stroke={ink} strokeWidth="2.1" strokeLinecap="round" />
            <path d="M40 50 C48 62 48 78 44 90" fill="none" stroke={ink} strokeWidth="2.1" strokeLinecap="round" />
            <g transform="translate(2,86)">
              <ellipse cx="8" cy="7" rx="7" ry="5.5" fill="#fff" stroke={ink} strokeWidth="1.8" />
              <path d="M5 5 v4 M8 4 v5 M11 5 v4" stroke={ink} strokeWidth="1.3" strokeLinecap="round" />
            </g>
            <g transform="translate(36,86)">
              <ellipse cx="8" cy="7" rx="7" ry="5.5" fill="#fff" stroke={ink} strokeWidth="1.8" />
              <path d="M5 5 v4 M8 4 v5 M11 5 v4" stroke={ink} strokeWidth="1.3" strokeLinecap="round" />
            </g>
          </g>

          {/* Dog — sitting, facing camera, tongue out (Cléra ref) */}
          <g transform="translate(0,95)">
            {/* body */}
            <ellipse cx="48" cy="48" rx="34" ry="28" fill="url(#dogGrad)" stroke={ink} strokeWidth="2.3" />
            {/* chest fur tufts */}
            <path d="M40 52 L44 58 L48 52 L52 58 L56 52" fill="none" stroke="#c9a46a" strokeWidth="1.6" strokeLinecap="round" />
            {/* back haunch */}
            <ellipse cx="22" cy="55" rx="16" ry="18" fill="#e2c07e" stroke={ink} strokeWidth="2" />
            {/* front paws */}
            <ellipse cx="40" cy="72" rx="10" ry="7" fill="#e8c98c" stroke={ink} strokeWidth="2" />
            <ellipse cx="60" cy="72" rx="10" ry="7" fill="#e8c98c" stroke={ink} strokeWidth="2" />
            <path d="M34 72 v4 M40 72 v5 M46 72 v4" stroke={ink} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M54 72 v4 M60 72 v5 M66 72 v4" stroke={ink} strokeWidth="1.4" strokeLinecap="round" />
            {/* back paw */}
            <ellipse cx="12" cy="68" rx="9" ry="6" fill="#e8c98c" stroke={ink} strokeWidth="2" />
            {/* tail with fur tip */}
            <motion.g
              animate={reduce ? undefined : { rotate: [-16, 18, -16] }}
              transition={{ duration: 0.65, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "16px 40px" }}
            >
              <path
                d="M16 40 C4 28 -4 22 2 12"
                fill="none"
                stroke="#e2c07e"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path d="M0 10 L4 4 L8 10" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" />
            </motion.g>
            {/* head */}
            <circle cx="58" cy="22" r="22" fill="url(#dogGrad)" stroke={ink} strokeWidth="2.3" />
            {/* head tuft */}
            <path d="M50 4 L54 -4 L58 4 L62 -2 L66 4" fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" />
            {/* floppy ears */}
            <path d="M38 14 C28 10 24 22 30 32 C36 36 42 28 42 20 Z" fill="#d4b06e" stroke={ink} strokeWidth="2" />
            <path d="M78 14 C88 10 92 22 86 32 C80 36 74 28 74 20 Z" fill="#d4b06e" stroke={ink} strokeWidth="2" />
            {/* eyes — large white with pupils */}
            <circle cx="50" cy="20" r="7" fill="#fff" stroke={ink} strokeWidth="1.8" />
            <circle cx="66" cy="20" r="7" fill="#fff" stroke={ink} strokeWidth="1.8" />
            <circle cx="52" cy="21" r="3" fill={ink} />
            <circle cx="68" cy="21" r="3" fill={ink} />
            <circle cx="53" cy="19.5" r="1" fill="#fff" />
            <circle cx="69" cy="19.5" r="1" fill="#fff" />
            {/* nose */}
            <path d="M54 30 L62 30 L58 36 Z" fill="#9aa5b0" stroke={ink} strokeWidth="1.4" />
            {/* open mouth + tongue */}
            <path d="M50 36 Q58 48 66 36" fill="#fff" stroke={ink} strokeWidth="1.8" />
            <ellipse cx="58" cy="42" rx="5" ry="4" fill="#c9899a" stroke={ink} strokeWidth="1.2" />
          </g>
        </g>

        {/* ========== CENTER TREE ========== */}
        <g transform="translate(620,320)" opacity="0.9" filter="url(#liteShadow)">
          <rect x="28" y="120" width="16" height="140" rx="4" fill="#c5d0d9" stroke={line} strokeWidth="2" />
          <ellipse cx="36" cy="90" rx="70" ry="85" fill="#d8e3da" stroke={line} strokeWidth="2.2" />
          <ellipse cx="0" cy="110" rx="40" ry="50" fill="#e4ebe4" stroke={line} strokeWidth="2" />
          <ellipse cx="72" cy="105" rx="36" ry="46" fill="#e4ebe4" stroke={line} strokeWidth="2" />
          {/* birds */}
          <motion.g
            animate={reduce ? undefined : { y: [0, -3, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            <path d="M70 40 Q78 34 86 40" fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" />
            <path d="M90 48 Q96 44 102 48" fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" />
          </motion.g>
        </g>

        {/* ========== LUNOX VAN ========== */}
        <g transform="translate(480,470)" filter="url(#softShadow)">
          <ellipse cx="150" cy="120" rx="140" ry="12" fill="#d5dee6" opacity="0.55" />
          {/* body three-quarter */}
          <path
            d="M30 50 H210 C235 50 255 68 262 88 H300 C318 88 330 102 330 118 V128 H30 Z"
            fill="#fff"
            stroke={line}
            strokeWidth="2.4"
          />
          <path d="M210 50 L262 50 L262 88 H210 Z" fill="#f4f7fa" stroke={line} strokeWidth="2.2" />
          <path d="M220 58 H250 L250 80 H220 Z" fill="#9fd4ef" stroke="#5aa8cc" strokeWidth="1.8" />
          {/* rear text panel */}
          <rect x="40" y="62" width="150" height="40" rx="4" fill="#051e36" />
          <text
            x="115"
            y="80"
            textAnchor="middle"
            fill="#d6df21"
            fontFamily="Poppins, Arial, sans-serif"
            fontSize="16"
            fontWeight="700"
          >
            LUNOX
          </text>
          <text
            x="115"
            y="94"
            textAnchor="middle"
            fill="#fff"
            fontFamily="Plus Jakarta Sans, Arial, sans-serif"
            fontSize="8"
            fontWeight="600"
          >
            window and door installations
          </text>
          <rect x="30" y="108" width="300" height="5" fill="#d6df21" />
          <circle cx="80" cy="128" r="20" fill="#2a3440" stroke={line} strokeWidth="2" />
          <circle cx="80" cy="128" r="9" fill="#a8b7c4" />
          <circle cx="250" cy="128" r="20" fill="#2a3440" stroke={line} strokeWidth="2" />
          <circle cx="250" cy="128" r="9" fill="#a8b7c4" />
        </g>

        {/* ========== RIGHT HOUSE ========== */}
        <g transform="translate(900,280)" filter="url(#softShadow)">
          <path d="M40 100 L40 320 L320 320 L320 100 L180 20 Z" fill="#fff" stroke={line} strokeWidth="2.5" />
          <path d="M320 100 L365 125 L365 338 L320 320 Z" fill="#e4ebf1" stroke={line} strokeWidth="2" />
          <path d="M28 105 L180 12 L332 105" fill="none" stroke={line} strokeWidth="3" strokeLinejoin="round" />
          {/* upper windows */}
          <rect x="70" y="120" width="52" height="42" fill="#fff" stroke={line} strokeWidth="2.2" />
          <rect x="74" y="124" width="44" height="34" fill="#e7f4fb" />
          <rect x="210" y="120" width="52" height="42" fill="#fff" stroke={line} strokeWidth="2.2" />
          <rect x="214" y="124" width="44" height="34" fill="#e7f4fb" />
          {/* new glazed unit — blue glass accent */}
          <rect x="150" y="185" width="100" height="95" fill="#fff" stroke="#00aeef" strokeWidth="5" />
          <rect x="158" y="193" width="84" height="79" fill="url(#glassGrad)" />
          <line x1="200" y1="193" x2="200" y2="272" stroke="#fff" strokeWidth="3" opacity="0.75" />
          <line x1="158" y1="232" x2="242" y2="232" stroke="#fff" strokeWidth="3" opacity="0.75" />
          {/* door */}
          <rect x="70" y="220" width="40" height="100" fill="#fff" stroke={line} strokeWidth="2.2" />
          <circle cx="100" cy="275" r="3" fill={ink} />
          {/* tiny topiary */}
          <g transform="translate(300,270)">
            <rect x="10" y="30" width="8" height="28" fill="#c5d0d9" stroke={line} strokeWidth="1.5" />
            <circle cx="14" cy="22" r="16" fill="#d8e3da" stroke={line} strokeWidth="1.8" />
            <rect x="4" y="56" width="20" height="10" fill="#fff" stroke={line} strokeWidth="1.5" />
          </g>
        </g>

        {/* ========== INSTALLER on step ladder with caulk gun ========== */}
        <g transform="translate(1020,430)" filter="url(#liteShadow)">
          {/* step ladder */}
          <g stroke={line} strokeWidth="3" fill="none" strokeLinecap="round">
            <line x1="70" y1="40" x2="58" y2="150" />
            <line x1="110" y1="40" x2="122" y2="150" />
            <line x1="68" y1="70" x2="112" y2="70" />
            <line x1="64" y1="100" x2="116" y2="100" />
            <line x1="60" y1="130" x2="120" y2="130" />
          </g>

          {/* fitter standing on 2nd step */}
          <g transform="translate(55,20)">
            {/* boots on step */}
            <ellipse cx="28" cy="92" rx="10" ry="5" fill="#2a3440" />
            <ellipse cx="52" cy="92" rx="10" ry="5" fill="#2a3440" />
            {/* legs */}
            <path d="M22 55 L20 90 L36 90 L36 55 Z" fill="#fff" stroke={ink} strokeWidth="2.2" strokeLinejoin="round" />
            <path d="M44 55 L46 90 L62 90 L58 55 Z" fill="#fff" stroke={ink} strokeWidth="2.2" strokeLinejoin="round" />
            {/* jumpsuit torso */}
            <path d="M18 18 C18 18 14 55 22 55 H58 C66 55 62 18 62 18 Z" fill="#fff" stroke={ink} strokeWidth="2.3" strokeLinejoin="round" />
            <path d="M28 18 V55 M52 18 V55" stroke="#c5d0d9" strokeWidth="1.8" />
            {/* logo patch */}
            <rect x="34" y="28" width="14" height="12" rx="2" fill="#051e36" />
            <rect x="36" y="30" width="10" height="3" fill="#d6df21" />
            <rect x="36" y="35" width="10" height="3" fill="#00aeef" />
            {/* head — Cléra dots + smile */}
            <circle cx="40" cy="8" r="16" fill="#fff" stroke={ink} strokeWidth="2.3" />
            <circle cx="34" cy="8" r="2" fill={ink} />
            <circle cx="46" cy="8" r="2" fill={ink} />
            <path d="M36 14 Q40 17 44 14" fill="none" stroke={ink} strokeWidth="1.8" strokeLinecap="round" />
            {/* blue flat cap */}
            <path d="M24 4 C24 -6 56 -6 56 4 L60 8 H22 Z" fill="#00aeef" stroke={ink} strokeWidth="2" />
            <path d="M56 4 H70 C72 4 72 9 68 9 H56 Z" fill="#00aeef" stroke={ink} strokeWidth="1.6" />

            {/* both arms holding caulking gun */}
            <motion.g
              animate={reduce ? undefined : { rotate: [-3, 3, -3] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "40px 30px" }}
            >
              <path d="M20 28 C8 34 0 42 4 52" fill="none" stroke={ink} strokeWidth="2.4" strokeLinecap="round" />
              <path d="M60 28 C78 32 96 38 110 42" fill="none" stroke={ink} strokeWidth="2.4" strokeLinecap="round" />
              {/* mitten hands on tool */}
              <g transform="translate(0,46)">
                <ellipse cx="8" cy="6" rx="8" ry="6" fill="#fff" stroke={ink} strokeWidth="1.8" />
                <path d="M5 4 v4 M8 3 v5 M11 4 v4" stroke={ink} strokeWidth="1.3" strokeLinecap="round" />
              </g>
              <g transform="translate(100,36)">
                <ellipse cx="8" cy="6" rx="8" ry="6" fill="#fff" stroke={ink} strokeWidth="1.8" />
                <path d="M5 4 v4 M8 3 v5 M11 4 v4" stroke={ink} strokeWidth="1.3" strokeLinecap="round" />
              </g>
              {/* caulking gun */}
              <g transform="translate(12,48)">
                <rect x="0" y="0" width="95" height="12" rx="3" fill="#fff" stroke={ink} strokeWidth="2" />
                <rect x="70" y="12" width="10" height="18" rx="2" fill="#fff" stroke={ink} strokeWidth="1.8" />
                <path d="M95 2 L112 0 L112 10 L95 10 Z" fill="#c5d0d9" stroke={ink} strokeWidth="1.6" />
                <circle cx="20" cy="6" r="3" fill="#00aeef" />
              </g>
            </motion.g>
          </g>

          {/* tool bag */}
          <g transform="translate(150,130)">
            <path d="M0 12 H48 L44 40 H4 Z" fill="#fff" stroke={ink} strokeWidth="2.1" strokeLinejoin="round" />
            <rect x="14" y="4" width="20" height="10" rx="2" fill="#fff" stroke={ink} strokeWidth="1.8" />
            <rect x="18" y="18" width="12" height="10" rx="1.5" fill="#051e36" />
            <rect x="20" y="20" width="8" height="2.5" fill="#d6df21" />
            <rect x="20" y="24" width="8" height="2.5" fill="#00aeef" />
          </g>
        </g>
      </svg>
    </div>
  );
}
