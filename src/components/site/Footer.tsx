import { event, organisers, sponsors } from "@/data/site";
import { ImageSlot } from "./ImageSlot";

export function Footer() {
  const links = [
    { label: "Registration", href: event.registrationUrl, external: true },
    { label: "Programme", href: "#programme" },
    { label: "Venue", href: "#venue" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-3xl leading-tight font-medium">
              {event.title}:<br />
              <span className="italic text-limestone">{event.subtitle}</span>
            </p>
            <p className="mt-4 text-sm text-ivory/60">
              {event.dateLabel} · {event.venueShort}
            </p>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[0.62rem] tracking-[0.2em] text-ivory/50 uppercase">Organised by</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {organisers.map((o) => (
                <li key={o.name} className="h-12 w-24">
                  <ImageSlot src={o.logo} alt={o.name} aspect="" fit="contain" label={o.name} tone="dark" className="h-full w-full" />
                </li>
              ))}
            </ul>
            {sponsors.length > 0 && (
              <>
                <p className="mt-8 text-[0.62rem] tracking-[0.2em] text-ivory/50 uppercase">Sponsored by</p>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {sponsors.map((s) => (
                    <li key={s.name} className="h-9 w-20">
                      <ImageSlot src={s.logo} alt={s.name} aspect="" fit="contain" label={s.name} tone="dark" className="h-full w-full" />
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <nav className="lg:col-span-3" aria-label="Footer">
            <p className="text-[0.62rem] tracking-[0.2em] text-ivory/50 uppercase">Quick links</p>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noreferrer" : undefined}
                    className="font-serif text-lg text-ivory/85 hover:text-lime"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-ivory/15 pt-6 text-xs text-ivory/50 md:flex-row md:justify-between">
          <p>IIT Bombay · CTIKS · Deccan College PGRI Pune</p>
          <p>© {new Date().getFullYear()} {event.title}: {event.subtitle}</p>
        </div>
      </div>
    </footer>
  );
}
