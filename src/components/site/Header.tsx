import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { event, navItems, organisers, sponsors } from "@/data/site";
import { ImageSlot } from "./ImageSlot";
import { cn } from "@/lib/utils";

function LogoTile({ name, logo, url, size }: { name: string; logo: string | null; url?: string | undefined; size: "lg" | "sm" }) {
  const box = size === "lg" ? "h-14 w-28 md:h-20 md:w-40" : "h-10 w-20 md:h-12 md:w-28";
  const content = logo ? (
    <img src={logo} alt={name} className="h-full w-full object-contain" />
  ) : (
    <ImageSlot src={null} alt={name} label={name} className="h-full w-full" aspect="" fit="contain" />
  );
  return url ? (
    <a href={url} target="_blank" rel="noreferrer" className={cn("block shrink-0", box)} title={name}>
      {content}
    </a>
  ) : (
    <div className={cn("shrink-0", box)} title={name}>
      {content}
    </div>
  );
}

/** Institutional branding strip — organiser logos take precedence over sponsors. */
export function BrandingBar() {
  return (
    <div className="border-b bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8 md:py-5">
        <div className="flex flex-wrap items-center gap-4 md:gap-8">
          {organisers.map((o) => (
            <LogoTile key={o.name} {...o} size="lg" />
          ))}
        </div>
        {sponsors.length > 0 && (
          <div className="flex items-center gap-3 md:border-l md:pl-8">
            <span className="text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">Supported by</span>
            {sponsors.map((s) => (
              <LogoTile key={s.name} name={s.name} logo={s.logo} url={s.url} size="sm" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/** Sticky navigation with smooth in-page scrolling and a mobile hamburger. */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b bg-charcoal text-ivory transition-shadow",
        scrolled && "shadow-[0_6px_24px_-12px_oklch(0_0_0/0.5)]",
      )}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#home" className="py-3 font-serif text-lg font-medium tracking-wide md:hidden">
          {event.title}
        </a>
        <ul className="hidden items-center md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block px-3.5 py-4 text-[0.72rem] font-medium tracking-[0.16em] text-ivory/80 uppercase transition-colors hover:text-ivory lg:px-4"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={event.registrationUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden bg-terracotta px-5 py-2 text-[0.72rem] font-semibold tracking-[0.16em] text-ivory uppercase transition-colors hover:bg-terracotta-deep md:inline-block"
        >
          Register
        </a>
        <button
          type="button"
          className="p-2 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-ivory/10 bg-charcoal md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ivory/10 py-3 text-sm tracking-[0.14em] text-ivory/85 uppercase"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noreferrer"
                className="block bg-terracotta py-3 text-center text-xs font-semibold tracking-[0.16em] text-ivory uppercase"
              >
                Register Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
