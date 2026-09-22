import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  align?: "left" | "center";
}

export function Section({ id, eyebrow, title, intro, children, className, contentClassName, align = "left" }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 md:py-28", className)}>
      <div className={cn("mx-auto max-w-6xl px-5 md:px-8", contentClassName)}>
        <header className={cn("mb-12 max-w-2xl md:mb-16", align === "center" && "mx-auto text-center")}>
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h2 className="text-4xl leading-[1.05] font-medium tracking-tight text-foreground md:text-5xl">
            {title}
          </h2>
          <div className={cn("mt-5 h-px w-16 bg-terracotta", align === "center" && "mx-auto")} />
          {intro && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
