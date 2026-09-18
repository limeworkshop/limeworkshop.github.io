/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT — edit everything here.
 *
 *  • Text, links, dates, people and sponsors all live in this one file.
 *  • Images: drop files into  src/assets/  and import them at the top, then
 *    set the `image`/`logo`/`src` field to the imported value. Leaving a field
 *    `null` renders a clean, labelled empty placeholder on the site.
 *
 *    Example:
 *      import heroImage from "@/assets/hero.jpg";
 *      hero: { image: heroImage, ... }
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type ImageSrc = string | null;

export interface Person {
  name: string;
  role: string; // designation / role
  institution: string;
  bio?: string;
  image: ImageSrc;
  email?: string;
  phone?: string;
}

export interface Sponsor {
  name: string;
  tagline?: string;
  logo: ImageSrc;
  url?: string;
}

export interface Logo {
  name: string;
  logo: ImageSrc;
  url?: string;
}

/* ── Event ─────────────────────────────────────────────────────────────── */
export const event = {
  title: "Lime-Based Construction",
  subtitle: "Science, Practice and Benefits",
  dateLabel: "10–11 October 2026",
  venueShort: "Seminar Hall, Deccan College, Pune",
  city: "Pune, Maharashtra",
  organisedBy: "CTIKS, IIT Bombay × Deccan College PGRI Pune",
  organisedByLong: "CTIKS, IIT Bombay & Deccan College PGRI Pune",
  registrationUrl: "https://forms.gle/cS7suJqW9Ja3WbV29",
  /** Replace with the PDF URL or external link for the schedule. */
  scheduleUrl: "#programme",
  scheduleFileLabel: "Workshop Schedule.pdf",
};

/* ── Institutional logos (top branding + footer) ───────────────────────── */
export const organisers: Logo[] = [
  { name: "IIT Bombay", logo: null, url: "https://www.iitb.ac.in" },
  { name: "CTIKS", logo: null },
  { name: "Deccan College PGRI Pune", logo: null },
];

/* ── Hero ──────────────────────────────────────────────────────────────── */
export const hero = {
  /** Upload your hero photograph (recommended ≥ 2400 × 1350 px). */
  image: null as ImageSrc,
};

/* ── About ─────────────────────────────────────────────────────────────── */
export const about = {
  heading: "About the Workshop",
  paragraphs: [
    "The workshop aims to provide participants with an interdisciplinary understanding of lime as a traditional, sustainable, and conservation-compatible construction material. It will introduce participants to the historical significance, architectural applications, and scientific aspects of lime, and provide practical exposure to its preparation, use, and benefits.",
    "The program will integrate expert lectures, demonstrations, and hands-on training, enabling participants to connect theoretical knowledge with traditional construction practices. Particular emphasis will be placed on lime-based mortars, plasters, renders, and fine-finishing techniques relevant to heritage conservation and traditional construction.",
  ],
  image: null as ImageSrc,
  imageCaption: "",
};

/* ── Highlights ────────────────────────────────────────────────────────── */
export const highlights = [
  { title: "Keynote Addresses", text: "by internationally acclaimed speakers" },
  { title: "Workshops & Tutorials", text: "on advanced topics and tools" },
  { title: "Hands-on Training Sessions", text: "" },
  { title: "Rare Opportunity to Participate", text: "" },
];

/* ── Target audience ───────────────────────────────────────────────────── */
export const audience = [
  "Researchers & Academicians",
  "Heritage Professionals & Technologists",
  "PhD Scholars, Postgraduates & Students",
  "Entrepreneurs & Independent Consultants",
  "Institutional Leaders & Policy Makers",
];

/* ── Practical sessions ────────────────────────────────────────────────── */
export interface Practical {
  title: string;
  text: string;
  image: ImageSrc;
}
export const practicals: Practical[] = [
  { title: "Fine Plaster", text: "Here you will learn how to finish the work.", image: null },
  { title: "Coarse Plaster", text: "Here you will learn how to use masala.", image: null },
  // Add further activities here, e.g.:
  // { title: "Lime Slaking", text: "", image: null },
];

/* ── Speakers ──────────────────────────────────────────────────────────── */
export const speakers: Person[] = [
  { name: "Dr. Manager Rajdeo Singh", role: "", institution: "", bio: "", image: null },
  { name: "Dr. Abhishek Tripathi", role: "", institution: "", bio: "", image: null },
  { name: "Prof. P. D. Sabale", role: "", institution: "", bio: "", image: null },
  // Add a new speaker by copying a line above.
];
/** Number of "to be announced" slots shown after the listed speakers. */
export const speakersToBeAnnounced = 1;

/* ── Sponsors ──────────────────────────────────────────────────────────── */
export const sponsors: Sponsor[] = [
  { name: "Vertiv Energy Pvt. Ltd.", tagline: "CSR Partner", logo: null },
];
/** Empty slots kept open for future sponsors. */
export const sponsorOpenSlots = 2;

/* ── Organising team ───────────────────────────────────────────────────── */
export const team: Person[] = [
  { name: "Om Pandharinath Jamdar", role: "Overall Management", institution: "", image: null },
  { name: "Sandeep Misra", role: "Event Coordinator", institution: "", image: null },
  { name: "", role: "Volunteer", institution: "Deccan College", image: null },
  { name: "", role: "Volunteer", institution: "Deccan College", image: null },
];

/* ── Venue ─────────────────────────────────────────────────────────────── */
export const venue = {
  name: "Deccan College",
  hall: "Seminar Hall",
  addressLines: ["Deccan College Road,", "Yerawada, Pune 411 006,", "Maharashtra, India"],
  mapEmbedUrl:
    "https://www.google.com/maps?q=Deccan+College+Post-Graduate+and+Research+Institute,+Yerawada,+Pune&output=embed",
  mapLink: "https://maps.google.com/?q=Deccan+College+Post-Graduate+and+Research+Institute,+Yerawada,+Pune",
  image: null as ImageSrc,
};

/* ── Contact ───────────────────────────────────────────────────────────── */
export const contact = {
  person: "",
  email: "",
  phone: "",
  institution: "",
};

/* ── Gallery (optional) ────────────────────────────────────────────────── */
export const gallery: { src: ImageSrc; caption?: string }[] = [
  { src: null },
  { src: null },
  { src: null },
  { src: null },
  { src: null },
  { src: null },
];

/* ── Navigation ────────────────────────────────────────────────────────── */
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Programme", href: "#programme" },
  { label: "Speakers", href: "#speakers" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Organising Team", href: "#team" },
  { label: "Venue", href: "#venue" },
  { label: "Contact", href: "#contact" },
];
