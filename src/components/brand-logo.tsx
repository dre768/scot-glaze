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
        x="1.25"
        y="1.25"
        width="37.5"
        height="37.5"
        stroke={stroke}
        strokeWidth="1.25"
      />
      {/* Window — left half, 4 lights */}
      <rect
        x="5.5"
        y="6.5"
        width="13.5"
        height="27"
        stroke={stroke}
        strokeWidth="1.15"
      />
      <line x1="12.25" y1="6.5" x2="12.25" y2="33.5" stroke={stroke} strokeWidth="1" />
      <line x1="5.5" y1="20" x2="19" y2="20" stroke={stroke} strokeWidth="1" />
      {/* Door — right half */}
      <rect
        x="21.5"
        y="6.5"
        width="13"
        height="27"
        stroke={stroke}
        strokeWidth="1.15"
      />
      {/* Door panels */}
      <rect
        x="23.75"
        y="9"
        width="8.5"
        height="9"
        stroke={stroke}
        strokeWidth="0.9"
      />
      <rect
        x="23.75"
        y="20.5"
        width="8.5"
        height="10.5"
        stroke={stroke}
        strokeWidth="0.9"
      />
      {/* Handle */}
      <circle cx="30.75" cy="21.5" r="1.1" fill={stroke} />
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
