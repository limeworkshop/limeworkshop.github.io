import { about, audience, event, highlights, practicals } from "@/data/site";
import { ImageSlot } from "./ImageSlot";
import { Section } from "./Section";
import { FileText, ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <Section id="about" eyebrow="Introduction" title={about.heading}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "font-serif text-2xl leading-snug text-charcoal first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-terracotta md:text-[1.7rem]"
                  : "mt-6 text-base leading-relaxed text-charcoal-soft md:text-lg"
              }
            >
              {p}
            </p>
          ))}
        </div>
        <figure className="h-full w-full lg:col-span-5">
          <ImageSlot
            src={about.image}
            alt="Workshop"
            aspect=""
            label="Workshop image"
            hint="1200 × 1500 px"
            className="h-full w-full"
            imageClassName="w-full h-full object-cover object-center rounded-lg shadow-sm"
          />
          {about.imageCaption && (
            <figcaption className="mt-3 text-xs tracking-wide text-muted-foreground">{about.imageCaption}</figcaption>
          )}
        </figure>
      </div>
    </Section>
  );
}

export function Highlights() {
  return (
    <Section id="highlights" eyebrow="Highlights" title="Highlights of the Workshop" className="texture-plaster border-y">
      <ol className="grid gap-px border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((h, i) => (
          <li key={h.title} className="flex min-h-56 flex-col justify-between bg-card p-7">
            <span className="font-serif text-4xl text-limestone-dark">0{i + 1}</span>
            <div>
              <h3 className="font-serif text-2xl leading-tight font-medium">{h.title}</h3>
              {h.text && <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-20 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-3">Who should attend</p>
          <h3 className="font-serif text-3xl font-medium md:text-4xl">Target Audience</h3>
        </div>
        <ul className="lg:col-span-8 grid gap-x-10 sm:grid-cols-2">
          {audience.map((a) => (
            <li key={a} className="flex items-baseline gap-4 border-b py-4 font-serif text-xl">
              <span className="size-1.5 shrink-0 translate-y-[-3px] rotate-45 bg-terracotta" />
              {a}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Practicals() {
  return (
    <Section
      id="practicals"
      eyebrow="Hands-on"
      title="Workshop & Practical Sessions"
      intro="Practical sessions accompany the lectures, connecting theoretical knowledge with traditional construction practice."
    >
      <div className="mt-10 mb-12 grid grid-cols-1 gap-x-12 gap-y-2 text-left text-lg text-gray-700 sm:text-xl md:grid-cols-2">
        <ol className="list-inside list-decimal space-y-3">
          <li>Understanding Lime &amp; Its Benefits</li>
          <li>Lime Sources &amp; Types</li>
          <li>Quicklime Slaking &amp; Lime Putty Preparation</li>
          <li>Traditional Lime Tools &amp; Equipment</li>
          <li>Aggregates &amp; Pozzolanic Materials</li>
          <li>Traditional Organic Additives</li>
          <li>Natural Colours &amp; Mineral Pigments</li>
          <li>Traditional Lime Mortar Preparation</li>
        </ol>
        <ol start={9} className="list-inside list-decimal space-y-3">
          <li>Traditional Lime Plaster Preparation</li>
          <li>Fine Lime Plaster Preparation</li>
          <li>Hands-on Lime Application</li>
          <li>Traditional Finishing Techniques</li>
          <li>Curing &amp; Carbonation of Lime</li>
          <li>Visual Assessment of Traditional Lime Work</li>
          <li>Deterioration of Lime-Based Materials</li>
          <li>Traditional Lime Conservation &amp; Repair</li>
        </ol>
      </div>
      <div className="space-y-16">
        {practicals.map((p, i) => (
          <article key={p.title} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
            <div className={i % 2 === 0 ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"}>
              <ImageSlot
                src={p.image}
                alt={p.title}
                aspect="aspect-[16/10]"
                label={`${p.title} photograph`}
                hint="1920 × 1200 px"
                imageClassName={p.title === "Fine Plaster" || p.title === "Coarse Plaster" ? "object-center" : undefined}
              />
            </div>
            <div className={i % 2 === 0 ? "lg:col-span-5" : "lg:col-span-5 lg:order-1"}>
              <h3 className="mt-3 font-serif text-4xl font-medium">{p.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-charcoal-soft md:text-lg">{p.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Programme() {
  return (
    <Section id="programme" eyebrow="Programme" title="Workshop Schedule" className="bg-charcoal text-ivory [&_h2]:text-ivory [&_p]:text-ivory/70">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-serif text-2xl leading-snug text-ivory/90 md:text-3xl">
            The full two-day programme for {event.dateLabel} is published as a downloadable document.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={event.scheduleUrl}
              target={event.scheduleUrl.startsWith("#") ? undefined : "_blank"}
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-ivory px-7 py-3.5 text-xs font-semibold tracking-[0.18em] text-charcoal uppercase transition-colors hover:bg-limestone"
            >
              <FileText className="size-4" /> View Schedule
            </a>
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-ivory/40 px-7 py-3.5 text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition-colors hover:bg-ivory/10"
            >
              Register <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4 border border-ivory/20 p-5">
            <div className="flex size-14 shrink-0 items-center justify-center border border-ivory/30">
              <FileText className="size-6 text-lime" />
            </div>
            <div className="min-w-0">
              <p className="truncate font-medium !text-ivory">{event.scheduleFileLabel}</p>
              <p className="text-xs">Replace the link via <code className="text-lime">event.scheduleUrl</code></p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
