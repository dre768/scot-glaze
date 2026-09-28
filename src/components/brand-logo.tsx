import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Larger lockup for footer / dark panels */
  size?: "sm" | "md" | "lg";
  /** Invert for light backgrounds */
  tone?: "light" | "dark";
};

export function BrandMark({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const stroke = tone === "light" ? "currentColor" : "currentColor";

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      {/* Outer architectural frame */}
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        stroke={stroke}
        strokeWidth="1.35"
      />

      {/* Window — left: raised sill so it reads as a window, not a door */}
      <rect
        x="5"
        y="6"
        width="13"
        height="22"
        stroke={stroke}
        strokeWidth="1.2"
      />
      <line x1="11.5" y1="6" x2="11.5" y2="28" stroke={stroke} strokeWidth="1.05" />
      <line x1="5" y1="17" x2="18" y2="17" stroke={stroke} strokeWidth="1.05" />
      {/* Window sill */}
      <line x1="4.25" y1="28.75" x2="18.75" y2="28.75" stroke={stroke} strokeWidth="1.35" />

      {/* Door — right: full height to ground, two panels + handle */}
      <path
        d="M22.5 6.5 H33.5 V33.5 H22.5 Z"
        stroke={stroke}
        strokeWidth="1.2"
      />
      <rect
        x="24.35"
        y="8.75"
        width="7.3"
        height="8.5"
        stroke={stroke}
        strokeWidth="1"
      />
      <rect
        x="24.35"
        y="19.5"
        width="7.3"
        height="11.25"
        stroke={stroke}
        strokeWidth="1"
      />
      {/* Lever handle */}
      <circle cx="31.15" cy="19.1" r="0.95" fill={stroke} />
      <line
        x1="31.15"
        y1="19.1"
        x2="28.4"
        y2="19.1"
        stroke={stroke}
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BrandLogo({
  className,
  size = "sm",
  tone = "light",
}: BrandLogoProps) {
  const sizes = {
    sm: {
      mark: "size-9",
      word: "text-[1.35rem] leading-none tracking-[0.04em]",
      sub: "text-[0.58rem] tracking-[0.32em]",
      gap: "gap-3",
    },
    md: {
      mark: "size-11",
      word: "text-[1.65rem] leading-none tracking-[0.045em]",
      sub: "text-[0.62rem] tracking-[0.34em]",
      gap: "gap-3.5",
    },
    lg: {
      mark: "size-14",
      word: "text-[2.15rem] leading-none tracking-[0.05em]",
      sub: "text-[0.7rem] tracking-[0.36em]",
      gap: "gap-4",
    },
  }[size];

  return (
    <span
      className={cn(
        "inline-flex items-center text-current",
        sizes.gap,
        className
      )}
    >
      <BrandMark className={sizes.mark} tone={tone} />
      <span className="flex flex-col justify-center gap-1">
        <span
          className={cn(
            "font-display font-normal uppercase",
            sizes.word
          )}
        >
          Lunox
        </span>
        <span
          className={cn(
            "font-sans font-medium uppercase opacity-70",
            sizes.sub
          )}
        >
          Services
        </span>
      </span>
    </span>
  );
}
