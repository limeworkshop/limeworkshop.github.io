import { Mail, Phone, Plus } from "lucide-react";
import {
  contacts,
  gallery,
  speakers,
  speakersToBeAnnounced,
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
    <article className="group flex flex-col rounded-none border bg-card p-0">
      <div className="w-full">
        <ImageSlot
          src={person.image}
          alt={person.name || photoLabel}
          aspect="aspect-[4/5]"
          label={photoLabel}
          hint="800 × 1000 px"
          className="h-full w-full overflow-hidden rounded-none border-0 bg-muted"
          fit="cover"
        />
      </div>
      <div className="mt-4 flex w-full flex-col justify-start px-5 pb-5">
        <h3 className={empty ? "font-serif text-2xl font-medium text-muted-foreground" : "font-serif text-2xl leading-tight font-medium"}>
          {person.name || "Name to be added"}
        </h3>
        {(person.role || person.institution) && (
          <p className="mt-1.5 whitespace-pre-line text-sm text-charcoal-soft">
            {person.role}
            {person.role && person.institution && <span className="mx-1.5 text-limestone-dark">·</span>}
            {person.institution}
          </p>
        )}
        {person.bio && <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: person.bio }} />}
        {(person.email || person.phone) && (
          <ul className="mt-4 space-y-1 text-xs text-charcoal-soft">
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
    <Section id="speakers" eyebrow="Speakers" title="Invited Speakers">
      <div className="flex flex-col space-y-12">
        {speakers.map((s) => (
          <div key={s.name} className="flex flex-col gap-8 md:flex-row">
            <div className="w-full shrink-0 md:w-64">
              <ImageSlot
                src={s.image}
                alt={s.name}
                aspect="aspect-[4/5]"
                label="Speaker photograph"
                hint="800 × 1000 px"
                className="h-64 w-full overflow-hidden rounded-lg border-0 bg-muted md:w-64"
                fit="cover"
                imageClassName="object-top"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-serif text-2xl leading-tight font-medium">{s.name}</h3>
              {(s.role || s.institution) && (
                <p className="mt-1.5 text-sm text-charcoal-soft">
                  {s.role}
                  {s.role && s.institution && <span className="mx-1.5 text-limestone-dark">·</span>}
                  {s.institution}
                </p>
              )}
              {s.bio && <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: s.bio }} />}
            </div>
          </div>
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
    <Section
      id="sponsors"
      eyebrow="Support"
      title="Sponsored by"
      className="texture-plaster border-y"
      contentClassName="flex flex-col md:flex-row items-center justify-center md:justify-around gap-8 w-full max-w-5xl mx-auto"
      align="center"
    >
      <div className="mx-auto flex max-w-4xl justify-center">
        {sponsors.map((s) => (
          <div
            key={s.name}
            className="flex w-full max-w-md flex-col items-center justify-center bg-card p-8 text-center"
          >
            <img src="/logos/vertiv.png" alt="Vertiv Energy Private Limited Logo" className="mx-auto h-48 md:h-64 lg:h-72 w-auto object-contain" />
            <h3 className="mt-6 font-serif text-2xl font-medium">{s.name}</h3>
            {s.tagline && <p className="mt-1 text-xs tracking-[0.18em] text-terracotta-deep uppercase">{s.tagline}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Team() {
  return (
    <Section id="team" eyebrow="People" title="Organising Team">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m, i) => (
          <article key={m.name || i} className="flex flex-col overflow-hidden border bg-card">
            <div className="w-full">
              <ImageSlot
                src={m.image}
                alt={m.name || "Photograph"}
                aspect="aspect-[4/5]"
                label="Photograph"
                hint="800 × 1000 px"
                className="h-full w-full overflow-hidden border-0 bg-muted"
                fit="cover"
              />
            </div>
            <div className="mt-4 flex w-full flex-col px-5 pb-5">
              <h3 className="font-serif text-2xl leading-tight font-medium">{m.name || "Name to be added"}</h3>
              {(m.role || m.institution) && (
                <p className="mt-1.5 text-sm text-charcoal-soft">
                  {m.role}
                  {m.role && m.institution && <span className="mx-1.5 text-limestone-dark">·</span>}
                  {m.institution}
                </p>
              )}
            </div>
          </article>
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
            <ImageSlot
              src={venue.image}
              alt="Department of A.I.H.C. and Archaeology, Deccan College P.G.R.I., Pune"
              aspect="aspect-[4/3]"
              label="Venue photograph"
              hint="1600 × 1200 px"
              imageClassName="object-center rounded-lg"
            />
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="aspect-[4/3] w-full overflow-hidden border bg-card lg:h-full lg:aspect-auto">
            <iframe
              title="Map — Department of A.I.H.C. and Archaeology, Deccan College P.G.R.I., Pune"
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
  return (
    <Section id="contact" eyebrow="Get in touch" title="Contact Us">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {contacts.map((person) => (
          <dl key={person.person} className="divide-y border-y">
            <div className="grid gap-1 py-5 sm:grid-cols-3">
              <dt className="eyebrow sm:pt-1">Contact person</dt>
              <dd className="font-serif text-xl sm:col-span-2">{person.person}</dd>
            </div>
            <div className="grid gap-1 py-5 sm:grid-cols-3">
              <dt className="eyebrow sm:pt-1">Email</dt>
              <dd className="font-serif text-xl sm:col-span-2">
                <a href={`mailto:${person.email}`} className="break-words hover:text-terracotta">{person.email}</a>
              </dd>
            </div>
            <div className="grid gap-1 py-5 sm:grid-cols-3">
              <dt className="eyebrow sm:pt-1">Phone</dt>
              <dd className="font-serif text-xl sm:col-span-2">
                <a href={`tel:${person.phone}`} className="hover:text-terracotta">{person.phone}</a>
              </dd>
            </div>
            <div className="grid gap-1 py-5 sm:grid-cols-3">
              <dt className="eyebrow sm:pt-1">Institution</dt>
              <dd className="font-serif text-xl sm:col-span-2">{person.institution}</dd>
            </div>
          </dl>
        ))}
      </div>
    </Section>
  );
}

export function Gallery() {
  return (
    <Section id="gallery" eyebrow="Gallery" title="Workshop & Heritage Photographs" className="texture-plaster border-y">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {gallery.map((g, i) => (
          <figure key={i}>
            <ImageSlot
              src={g.src}
              alt={g.caption || `Gallery image ${i + 1}`}
              aspect="aspect-[4/3]"
              label={`Photo ${i + 1}`}
              imageClassName="object-center"
            />
            {g.caption && <figcaption className="mt-2 text-xs text-muted-foreground">{g.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </Section>
  );
}
