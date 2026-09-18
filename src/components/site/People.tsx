import { Mail, Phone, Plus } from "lucide-react";
import {
  contact,
  gallery,
  speakers,
  speakersToBeAnnounced,
  sponsorOpenSlots,
  sponsors,
  team,
  venue,
  type Person,
} from "@/data/site";
import { ImageSlot } from "./ImageSlot";
import { Section } from "./Section";

/* ── Reusable person card (speakers + organising team) ─────────────────── */
function PersonCard({ person, photoLabel }: { person: Person; photoLabel: string }) {
  const empty = !person.name;
  return (
    <article className="group flex flex-col bg-card">
      <ImageSlot src={person.image} alt={person.name || photoLabel} aspect="aspect-[4/5]" label={photoLabel} hint="800 × 1000 px" />
      <div className="flex flex-1 flex-col border border-t-0 p-5">
        <h3 className={empty ? "font-serif text-2xl font-medium text-muted-foreground" : "font-serif text-2xl leading-tight font-medium"}>
          {person.name || "Name to be added"}
        </h3>
        {(person.role || person.institution) && (
          <p className="mt-1.5 text-sm text-charcoal-soft">
            {person.role}
            {person.role && person.institution && <span className="mx-1.5 text-limestone-dark">·</span>}
            {person.institution}
          </p>
        )}
        {person.bio && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{person.bio}</p>}
        {(person.email || person.phone) && (
          <ul className="mt-auto space-y-1 pt-4 text-xs text-charcoal-soft">
            {person.email && (
              <li className="flex items-center gap-2">
                <Mail className="size-3.5" />
                <a href={`mailto:${person.email}`} className="hover:text-terracotta">{person.email}</a>
              </li>
            )}
            {person.phone && (
              <li className="flex items-center gap-2">
                <Phone className="size-3.5" />
                <a href={`tel:${person.phone}`} className="hover:text-terracotta">{person.phone}</a>
              </li>
            )}
          </ul>
        )}
      </div>
    </article>
  );
}

function AddSlot({ label, aspect = "aspect-[4/5]" }: { label: string; aspect?: string }) {
  return (
    <div className="flex flex-col">
      <div className={`${aspect} flex items-center justify-center border border-dashed border-limestone-dark bg-plaster/60`}>
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="flex size-10 items-center justify-center rounded-full border border-current">
            <Plus className="size-4" />
          </span>
          <span className="text-[0.65rem] tracking-[0.2em] uppercase">{label}</span>
        </div>
      </div>
      <div className="border border-t-0 border-dashed border-limestone-dark p-5">
        <p className="font-serif text-2xl font-medium text-muted-foreground">To be announced</p>
      </div>
    </div>
  );
}

export function Speakers() {
  return (
    <Section id="speakers" eyebrow="Speakers" title="Invited Speakers" intro="Speaker details will be updated as they are confirmed.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {speakers.map((s) => (
          <PersonCard key={s.name} person={s} photoLabel="Speaker photograph" />
        ))}
        {Array.from({ length: speakersToBeAnnounced }).map((_, i) => (
          <AddSlot key={i} label="Add speaker" />
        ))}
      </div>
    </Section>
  );
}

export function Sponsors() {
  return (
    <Section id="sponsors" eyebrow="Support" title="Sponsored by" className="texture-plaster border-y" align="center">
      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sponsors.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target={s.url ? "_blank" : undefined}
            rel="noreferrer"
            className="flex flex-col items-center bg-card p-8 text-center"
          >
            <ImageSlot src={s.logo} alt={s.name} aspect="aspect-[3/1]" fit="contain" label="Sponsor logo" hint="Original ratio" className="w-full max-w-56 border-0 bg-transparent" />
            <h3 className="mt-6 font-serif text-2xl font-medium">{s.name}</h3>
            {s.tagline && <p className="mt-1 text-xs tracking-[0.18em] text-terracotta-deep uppercase">{s.tagline}</p>}
          </a>
        ))}
        {Array.from({ length: sponsorOpenSlots }).map((_, i) => (
          <div key={i} className="flex flex-col items-center justify-center border border-dashed border-limestone-dark p-8 text-center text-muted-foreground">
            <span className="flex size-10 items-center justify-center rounded-full border border-current">
              <Plus className="size-4" />
            </span>
            <p className="mt-4 text-[0.65rem] tracking-[0.2em] uppercase">Sponsor slot</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Team() {
  return (
    <Section id="team" eyebrow="People" title="Organising Team">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m, i) => (
          <PersonCard key={m.name || i} person={m} photoLabel="Photograph" />
        ))}
      </div>
    </Section>
  );
}

export function Venue() {
  return (
    <Section id="venue" eyebrow="Location" title="Venue" className="bg-limestone/50 border-y">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h3 className="font-serif text-3xl font-medium">{venue.name}</h3>
          <p className="mt-1 text-sm tracking-[0.16em] text-terracotta-deep uppercase">{venue.hall}</p>
          <address className="mt-6 text-base leading-relaxed text-charcoal-soft not-italic md:text-lg">
            {venue.addressLines.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </address>
          <a
            href={venue.mapLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block border-b border-terracotta pb-1 text-xs font-semibold tracking-[0.18em] text-terracotta-deep uppercase hover:text-charcoal"
          >
            Open in Google Maps
          </a>
          <div className="mt-10">
            <ImageSlot src={venue.image} alt="Deccan College" aspect="aspect-[4/3]" label="Venue photograph" hint="1600 × 1200 px" />
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="aspect-[4/3] w-full overflow-hidden border bg-card lg:h-full lg:aspect-auto">
            <iframe
              title="Map — Deccan College, Pune"
              src={venue.mapEmbedUrl}
              className="h-full min-h-96 w-full grayscale-[35%] sepia-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Contact() {
  const rows = [
    { k: "Contact person", v: contact.person },
    { k: "Email", v: contact.email, href: contact.email ? `mailto:${contact.email}` : undefined },
    { k: "Phone", v: contact.phone, href: contact.phone ? `tel:${contact.phone}` : undefined },
    { k: "Institution", v: contact.institution },
  ];
  return (
    <Section id="contact" eyebrow="Get in touch" title="Contact Us">
      <dl className="max-w-2xl divide-y border-y">
        {rows.map((r) => (
          <div key={r.k} className="grid gap-1 py-5 sm:grid-cols-3">
            <dt className="eyebrow sm:pt-1">{r.k}</dt>
            <dd className="sm:col-span-2 font-serif text-xl">
              {r.v ? (
                r.href ? <a href={r.href} className="hover:text-terracotta">{r.v}</a> : r.v
              ) : (
                <span className="text-muted-foreground/60">— to be added —</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Gallery() {
  return (
    <Section id="gallery" eyebrow="Gallery" title="Workshop & Heritage Photographs" className="texture-plaster border-y">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {gallery.map((g, i) => (
          <figure key={i}>
            <ImageSlot src={g.src} alt={g.caption || `Gallery image ${i + 1}`} aspect="aspect-[4/3]" label={`Photo ${i + 1}`} />
            {g.caption && <figcaption className="mt-2 text-xs text-muted-foreground">{g.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </Section>
  );
}
