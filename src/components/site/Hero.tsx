import { CalendarDays, MapPin, Landmark } from "lucide-react";
import { event, hero } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-charcoal text-ivory">
      {/* Background: your photograph, or a quiet drafting texture until it is uploaded */}
      <div className="absolute inset-0 -z-10">
        {hero.image ? (
          <div
            aria-hidden="true"
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${hero.image})` }}
          />
        ) : (
          <div
            className="h-full w-full opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(oklch(1 0 0 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.5) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36 lg:py-44">
        <p className="eyebrow !text-lime">A two-day academic workshop</p>
        <h1 className="mt-5 max-w-4xl text-5xl leading-[0.98] font-medium tracking-tight md:text-7xl">
          {event.title}:
          <br />
          <span className="font-normal italic text-limestone">{event.subtitle}</span>
        </h1>

        <dl className="mt-10 grid max-w-3xl gap-5 border-t border-ivory/20 pt-8 sm:grid-cols-3">
          <div className="flex gap-3">
            <CalendarDays className="mt-0.5 size-4 shrink-0 text-lime" />
            <div>
              <dt className="text-[0.62rem] tracking-[0.2em] text-ivory/60 uppercase">Dates</dt>
              <dd className="mt-1 font-serif text-xl">{event.dateLabel}</dd>
            </div>
          </div>
          <div className="flex gap-3">
            <MapPin className="mt-0.5 size-4 shrink-0 text-lime" />
            <div>
              <dt className="text-[0.62rem] tracking-[0.2em] text-ivory/60 uppercase">Venue</dt>
              <dd className="mt-1 font-serif text-xl">{event.venueShort}</dd>
            </div>
          </div>
          <div className="flex gap-3">
            <Landmark className="mt-0.5 size-4 shrink-0 text-lime" />
            <div>
              <dt className="text-[0.62rem] tracking-[0.2em] text-ivory/60 uppercase">Organized by</dt>
              <dd className="mt-1 font-serif text-xl">{event.organisedBy}</dd>
            </div>
          </div>
        </dl>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-terracotta px-7 py-3.5 text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition-colors transition-transform duration-200 hover:scale-105 hover:bg-terracotta-deep"
          >
            Register Now
          </a>
          <a
            href="/schedule.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-ivory/50 px-7 py-3.5 text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition-colors transition-transform duration-200 hover:scale-105 hover:border-ivory hover:bg-ivory/10"
          >
            View Schedule
          </a>
        </div>
      </div>

      {!hero.image && (
        <p className="absolute right-4 bottom-3 text-[0.6rem] tracking-[0.18em] text-ivory/40 uppercase">
          Hero image area · set hero.image in src/data/site.ts
        </p>
      )}
    </section>
  );
}

export function InfoBand() {
  const items = [
    { k: "Dates", v: event.dateLabel },
    { k: "Venue", v: "Department of A.I.H.C. and Archaeology, Deccan College P.G.R.I., Pune" },
    { k: "City", v: event.city },
    { k: "Organisers", v: event.organisedByLong },
  ];
  return (
    <div className="border-y bg-limestone">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-limestone-dark/60 px-0 md:grid-cols-4">
        {items.map((it, i) => (
          <div key={it.k} className={i >= 2 ? "border-t border-limestone-dark/60 px-5 py-6 md:border-t-0 md:px-8" : "px-5 py-6 md:px-8"}>
            <dt className="eyebrow">{it.k}</dt>
            <dd className="mt-2 font-serif text-lg leading-snug font-medium text-charcoal md:text-xl">{it.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
