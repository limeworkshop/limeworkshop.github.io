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
  venueShort: "Department of A.I.H.C. and Archaeology, Deccan College P.G.R.I., Pune",
  city: "Pune, Maharashtra",
  organisedBy: "CTIKS, IIT Bombay × Deccan College PGRI Pune",
  organisedByLong: "CTIKS, IIT Bombay & Deccan College PGRI Pune",
  registrationUrl: "https://forms.gle/cS7suJqW9Ja3WbV29",
  /** Replace with the PDF URL or external link for the schedule. */
  scheduleUrl: "/schedule.pdf",
  scheduleFileLabel: "Workshop Schedule.pdf",
};

/* ── Institutional logos (top branding + footer) ───────────────────────── */
export const organisers: Logo[] = [
  { name: "IIT Bombay", logo: "/logos/iitb.png", url: "https://www.iitb.ac.in" },
  { name: "CTIKS", logo: "/logos/ctiks.png", url: "https://ctiks.iitb.ac.in/" },
  { name: "Deccan College PGRI Pune", logo: "/logos/deccan.png", url: "https://www.dcpune.ac.in" },
];

/* ── Hero ──────────────────────────────────────────────────────────────── */
export const hero = {
  /** Upload your hero photograph (recommended ≥ 2400 × 1350 px). */
  image: "/about-the-workshop.jpeg" as ImageSrc,
};

/* ── About ─────────────────────────────────────────────────────────────── */
export const about = {
  heading: "About the Workshop",
  paragraphs: [
    "The workshop aims to provide participants with an interdisciplinary understanding of lime as a traditional, sustainable, and conservation-compatible construction material. It will introduce participants to the historical significance, architectural applications, and scientific aspects of lime, and provide practical exposure to its preparation, use, and benefits.",
    "The program will integrate expert lectures, demonstrations, and hands-on training, enabling participants to connect theoretical knowledge with traditional construction practices. Particular emphasis will be placed on lime-based mortars, plasters, renders, and fine-finishing techniques relevant to heritage conservation and traditional construction.",
  ],
  image: "/workshop.jpeg" as ImageSrc,
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
  { title: "Lime Slaking", text: "", image: "/lime-slaking.jpeg" },
  { title: "Coarse Plaster", text: "", image: "/coarse-plaster.jpeg" },
  { title: "Fine Plaster", text: "", image: "/fine-plaster.jpeg" },
];

/* ── Speakers ──────────────────────────────────────────────────────────── */
export const speakers: Person[] = [
  {
    name: "Dr. Manager Rajdeo Singh",
    role: "",
    institution: "",
    bio: `<strong>Professor Manager Rajdeo Singh</strong> is now working as <strong>Sr. Fellow, ICSSR</strong> in the Department of Tourism Administration. He has previously worked as <strong>Director General in the National Research Laboratory for Conservation of Cultural Properties</strong>, Lucknow; and <strong>Professor and Head, National Museum Institute</strong> (now Indian Institute of Heritage), New Delhi. He retired from the <strong>Archaeological Survey of India, Science Branch</strong> after serving for more than 36 years in various capacities. He has to his credit <strong>162 published research papers</strong> in mostly in International journals, <strong>three patents, and six books</strong> published by Indian and international Journals. He has to his credit six books and three patents in archaeological science. His area of interest is <strong>heritage conservation, ancient plasters and pigments</strong>, tourism and analytical investigation for sustainable preservation of ancient sites and monuments. He was closely associated with the <strong>conservation of mural arts from Ajanta</strong> and other Buddhist sites of India, china, Sri lanka and Mynamor.`,
    image: "/manager.jpeg",
  },
  {
    name: "Prof. Pandurang Digambar Sabale",
    role: "",
    institution: "",
    bio: `<strong>Prof. Pandurang Digambar Sabale</strong> is working as a <strong>Professor in Geoarchaeology</strong> (Environmental Archaeology), and the <strong>Controller of Examination</strong> at the Deccan College Post Graduate and Research Institute in Pune. He has a diverse background of <strong>Geology, Engineering Geology, Rock Mechanics, Ground Water, Hydrology and Geomorphology</strong> with geospatial knowledge. With over <strong>28 years of core academic experience</strong>, he specializes in evaluating the physical landscapes (Natural) and cultural heritages of different periods by using a blend of <strong>earth sciences and archaeology</strong>. He is also coordinating two important heritage courses concerned with different landscape characters, such as <strong>Underwater Archaeology</strong> (water submerged) and <strong>Built Heritage Structures</strong> (on the terrestrial) since last decades.`,
    image: "/sabale.jpeg",
  },
  {
    name: "Dr. Abhishek Tripathi",
    role: "",
    institution: "",
    bio: `Dr. Abhishek Tripathi is a Project Scientist at the Centre for Traditional Indian Knowledge and Skills (CTIKS), IIT Bombay, specializing in <strong>traditional lime-based construction materials, technologies, and heritage conservation</strong>. He holds a <strong>Ph.D. in Chemistry</strong> from the joint Ph.D. degree programme of IIT Bombay, India, and Monash University, Australia.

With over 10 years of interdisciplinary research experience, Dr. Tripathi has worked across <strong>Synthetic Chemistry, Main Group and Organometallic Chemistry, Bioorganic Chemistry, Materials Chemistry, Soft and Functional Materials, Biotechnology, Construction and Building Materials, and Sustainable Materials</strong>, with his current research focusing on <strong>lime chemistry, traditional building materials, heritage science, and scientific heritage conservation</strong>.

His research in lime-based construction encompasses the chemistry and characterization of traditional lime binders, mortars and plasters; lime slaking and maturation; carbonation and binder transformation; pozzolanic and mineral additives; natural and organic admixtures; material compatibility; durability and deterioration mechanisms; and the performance of traditional lime-based construction systems. He integrates <strong>chemical, mineralogical, thermal, spectroscopic, microscopic, and chromatographic techniques</strong> to investigate historic building materials and understand the relationship between their composition, processing, traditional craftsmanship, and long-term performance.

A significant aspect of his work is the integration of scientific characterization with traditional knowledge and field-based conservation practice. His recent work includes the <strong>conservation of a nearly 125-year-old residential building using traditional lime-based materials and conservation methods</strong>, bringing together material characterization, traditional lime preparation, craftsmanship, and on-site conservation.

Dr. Tripathi has 17 research publications and 4 patents to his credit. His broader research interests lie at the interface of chemistry, materials science, traditional knowledge, sustainable construction, and heritage conservation, with an emphasis on the <strong>scientific documentation, validation, conservation, and sustainable revival of India's traditional lime-based building practices and indigenous construction knowledge</strong>.`,
    image: "/abhishek.jpeg",
  },

  {
    name: "Ashwin R Chari",
    role: "",
    institution: "",
    bio: `Ashwin R Chari holds a B-Arch from Mumbai University and is the co-founder of Aalep Enterprises, focused on reviving traditional and vernacular surface renders based on Vedic texts. With over a decade of experience in architecture, interiors, and landscape projects, Ashwin has worked extensively on public projects and integrated land development initiatives. A proponent of sustainable development and resilient systems, Ashwin actively promotes natural building and vernacular architecture through projects and skill development programs.`,
    image: "/ashwin.jpeg",
  },
];
/** Number of "to be announced" slots shown after the listed speakers. */
export const speakersToBeAnnounced = 0;

/* ── Sponsors ──────────────────────────────────────────────────────────── */
export const sponsors: Sponsor[] = [
  { name: "Vertiv Energy Private Limited", tagline: "CSR Partner", logo: "/logos/vertiv.png" },
];
/** Empty slots kept open for future sponsors. */
export const sponsorOpenSlots = 2;

/* ── Organising team ───────────────────────────────────────────────────── */
export const team: Person[] = [
  { name: "Om Pandharinath Jamdar", role: "Overall Coordinator\nIIT Bombay", institution: "", image: null },
  { name: "Sandeep Kumar Mishra", role: "Event Coordinator\nIIT Bombay", institution: "", image: "/sandeep.jpeg" },
  {
    name: "Ms. Mukta Shinde",
    role: "Students coordinator\nDept of AIHC and Archaeology, Deccan College PGRI, Pune",
    image: "/mukta.jpeg" as ImageSrc,
  },
  {
    name: "Dilip Davari",
    role: "Students coordinator\nDiploma course\nDept of AIHC and Archaeology, Deccan College PGRI, Pune",
    image: "/dilip.jpeg" as ImageSrc,
  },
];

/* ── Venue ─────────────────────────────────────────────────────────────── */
export const venue = {
  name: "Deccan College P.G.R.I., Pune",
  hall: "Department of A.I.H.C. and Archaeology",
  addressLines: ["GVXC+2HR, Deccan College Rd, Yerawada, Pune, Maharashtra 411006, India"],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1101.4257373161145!2d73.8704677514608!3d18.547675733646688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0eea7e90885%3A0xa9c9ea11ad4d39b7!2sDepartment%20of%20Ancient%20Indian%20History%2C%20Culture%20and%20Archaeology!5e0!3m2!1sen!2sus!4v1790056832869!5m2!1sen!2sus",
  mapLink: "https://maps.app.goo.gl/NVbmB5W8rRYPEfcn8",
  image: "/venue.jpg" as ImageSrc,
};

/* ── Contact ───────────────────────────────────────────────────────────── */
export const contacts = [
  {
    person: "Dr. Abhishek Tripathi",
    email: "30007373@iitb.ac.in",
    phone: "+91 93212 42481",
    institution: "CTIKS, IIT Bombay",
  },
  {
    person: "Prof. Pandurang Digambar Sabale",
    email: "pandurang.sabale@dcpune.ac.in",
    phone: "+91 98224 18696",
    institution: "Dept. of AIHC & Archaeology, Deccan College PGRI, Pune",
  },
];

/* ── Gallery (optional) ────────────────────────────────────────────────── */
export const gallery: { src: ImageSrc; caption?: string }[] = [
  { src: "/1.jpeg" },
  { src: "/2.jpeg" },
  { src: "/3.jpeg" },
  { src: "/4.jpeg" },
  { src: "/5.jpeg" },
  { src: "/6.jpeg" },
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
