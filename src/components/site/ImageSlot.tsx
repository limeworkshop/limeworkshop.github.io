import { cn } from "@/lib/utils";
import type { ImageSrc } from "@/data/site";

interface ImageSlotProps {
  src: ImageSrc;
  alt: string;
  /** Tailwind aspect class, e.g. "aspect-[4/5]". */
  aspect?: string;
  /** Label shown inside the empty state. */
  label?: string;
  /** Recommended pixel size shown in the empty state. */
  hint?: string;
  className?: string;
  /** "cover" crops to fill; "contain" keeps the whole image (for logos). */
  fit?: "cover" | "contain";
  /** Use a tinted empty state for placement over dark backgrounds. */
  tone?: "light" | "dark";
}

/**
 * A fixed-ratio image area. Renders the image with professional cropping when
 * `src` is set, otherwise a clean, labelled empty state that never stretches.
 */
export function ImageSlot({
  src,
  alt,
  aspect = "aspect-[4/3]",
  label = "Image",
  hint,
  className,
  fit = "cover",
  tone = "light",
}: ImageSlotProps) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden", aspect, className)}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn("h-full w-full", fit === "cover" ? "object-cover" : "object-contain")}
        />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={`${label} (to be added)`}
      className={cn(
        "relative flex items-center justify-center overflow-hidden border",
        tone === "light" ? "texture-drafting border-limestone-dark" : "border-ivory/25 bg-ivory/5",
        aspect,
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col items-center gap-1.5 px-4 text-center",
          tone === "light" ? "text-charcoal-soft" : "text-ivory/70",
        )}
      >
        <span className="h-px w-8 bg-current opacity-50" />
        <span className="line-clamp-2 text-[0.6rem] leading-tight font-medium tracking-[0.14em] uppercase">{label}</span>
        {hint && <span className="text-[0.65rem] opacity-70">{hint}</span>}
        <span className="h-px w-8 bg-current opacity-50" />
      </div>
    </div>
  );
}
