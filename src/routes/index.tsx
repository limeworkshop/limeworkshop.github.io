import { createFileRoute } from "@tanstack/react-router";
import { BrandingBar, Nav } from "@/components/site/Header";
import { Hero, InfoBand } from "@/components/site/Hero";
import { About, Highlights, Practicals, Programme } from "@/components/site/Content";
import { Contact, Gallery, Speakers, Sponsors, Team, Venue } from "@/components/site/People";
import { Footer } from "@/components/site/Footer";
import { event } from "@/data/site";

const title = `${event.title}: ${event.subtitle} — Workshop, ${event.dateLabel}`;
const description = `A two-day academic workshop on lime as a traditional, sustainable and conservation-compatible construction material. ${event.dateLabel}, ${event.venueShort}. Organised by ${event.organisedByLong}.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <BrandingBar />
      <Nav />
      <main>
        <Hero />
        <InfoBand />
        <About />
        <Highlights />
        <Practicals />
        <Programme />
        <Speakers />
        <Sponsors />
        <Team />
        <Venue />
        <Contact />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
