import {
  ArrowUpRightIcon,
  BriefcaseIcon,
  BroadcastIcon,
  BusIcon,
  CheckIcon,
  CodeIcon,
  DownloadSimpleIcon,
  EnvelopeSimpleIcon,
  GitBranchIcon,
  GithubLogoIcon,
  GraduationCapIcon,
  HardDrivesIcon,
  MapPinIcon,
  PhoneIcon,
  SparkleIcon,
  UsersThreeIcon,

} from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";
import Image from "next/image";
import { HeroPhoto } from "./components/hero-photo";
import { IslandNav } from "./components/island-nav";
import { Reveal } from "./components/reveal";
import {
  CssLogo,
  GitLogo,
  HtmlLogo,
  JavaLogo,
  JavaScriptLogo,
  NetBeansLogo,
  NextLogo,
  ExpoLogo,
  NodeLogo,
  PlSqlLogo,
  ReactNativeLogo,
  SpringLogo,
  SqlLogo,
  TypeScriptLogo,
  VsCodeLogo,
} from "./components/tech-logos";

/* ─── Content ───────────────────────────────────────────── */

const EMAIL = "Laxinkulul3ko@gmail.com";
const PHONE_HREF = "tel:0678062924";
const PHONE_LABEL = "067 806 2924";
const CV_HREF = "/Nkululeko_Ndlwana_cv.pdf";
const GITHUB_HREF = "https://github.com/LaxinGroup";
const GITHUB_LABEL = "github.com/LaxinGroup";

type TechItem = { name: string; logo: React.ReactNode; href: string };

const languages: TechItem[] = [
  { name: "Java", logo: <JavaLogo />, href: "https://www.java.com/" },
  { name: "TypeScript", logo: <TypeScriptLogo />, href: "https://www.typescriptlang.org/" },
  { name: "HTML", logo: <HtmlLogo />, href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", logo: <CssLogo />, href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", logo: <JavaScriptLogo />, href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
];

const frameworks: TechItem[] = [
  { name: "Node.js", logo: <NodeLogo />, href: "https://nodejs.org/" },
  { name: "Spring Boot", logo: <SpringLogo />, href: "https://spring.io/projects/spring-boot" },
  { name: "Next.js", logo: <NextLogo />, href: "https://nextjs.org/" },
  { name: "React Native", logo: <ReactNativeLogo />, href: "https://reactnative.dev/" },
  { name: "Expo", logo: <ExpoLogo />, href: "https://expo.dev/" },
];

const databases: TechItem[] = [
  { name: "SQL", logo: <SqlLogo />, href: "https://docs.oracle.com/en/database/oracle/oracle-database/" },
  { name: "PL/SQL", logo: <PlSqlLogo />, href: "https://www.oracle.com/database/technologies/appdev/plsql.html" },
];

const tools: TechItem[] = [
  { name: "Git", logo: <GitLogo />, href: "https://git-scm.com/" },
  { name: "VS Code", logo: <VsCodeLogo />, href: "https://code.visualstudio.com/" },
  { name: "Apache NetBeans", logo: <NetBeansLogo />, href: "https://netbeans.apache.org/" },
];

const repos = [
  { label: "Frontend repo", href: "https://github.com/Gorillmac/smartbus-front-end" },
  { label: "Backend repo", href: "https://github.com/Gorillmac/smartbus-backend" },
];

type Project = {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "Blood Donation Drive Coordinator",
    description:
      "Full-stack platform that replaces paper sign-up sheets for campus blood donation drives. Donors pass an eligibility pre-screen and book 30-minute slots, medical staff run a live check-in queue, and organisers track turnout analytics with CSV and PDF reports.",
    tech: ["Next.js", "Express.js", "PostgreSQL", "Neon Auth"],
    repo: "https://github.com/LaxinGroup/CS-Blood-Donation-Drive-Coordinator-",
    live: "https://my-app-tau-five-91.vercel.app",
  },
  {
    title: "Mupho the Cleaner",
    description:
      "Booking platform for a solo cleaning business. Customers choose services with live prices and one of three daily time windows. Each confirmed booking is saved to Neon PostgreSQL and synced to Google Calendar, with a cap of three bookings per day.",
    tech: ["Next.js", "Express.js", "TypeScript", "Neon PostgreSQL", "Google Calendar API"],
    repo: "https://github.com/LaxinGroup/MphoCleaningService",
    live: "https://client-sayh.vercel.app",
  },
  {
    title: "AgriAdvisorAI",
    description:
      "Multilingual workplace support assistant for IT and benefits questions. It answers only from an approved knowledge base with cited sources, never decides eligibility, and hands uncertain questions to a human specialist with context.",
    tech: ["Expo", "React Native", "Express.js", "PostgreSQL", "Gemini API"],
    repo: "https://github.com/LaxinGroup/AgriAdvisorAI",
  },
];

const education = [
  {
    image: "/tut.jpg",
    alt: "Tshwane University of Technology",
    date: "2022—2026",
    name: ["Tshwane University", "of Technology"],
    href: "https://www.tut.ac.za/",
    detail: "Diploma in Computer Science · NQF 6",
    active: true,
  },
  {
    image: "/springsbhs.jpg",
    alt: "Springs Boys High School",
    date: "2017—2021",
    name: ["Springs Boys", "High School"],
    href: "https://www.sbhs.co.za/",
    detail: "National Senior Certificate",
    active: false,
  },
];

const references = [
  { initials: "VM", name: "Vuyisile Memani", role: "Lecturer · TUT", email: "MemaniV@tut.ac.za" },
  { initials: "ML", name: "Marlo Liebenberg", role: "Lecturer · TUT", email: "liebenbergm@tut.ac.za" },
  { initials: "NRM", name: "Ndivho Revaldo Mphaphuli", role: "Programme Coordinator · 4IR Research Lab", email: "ndivhorevaldo@gmail.com" },
];

const experience = [
  {
    org: "4IR Research Lab",
    role: "Full Stack Web Developer",
    date: "28 June 2026 — Present",
    points: [
      "Worked on secure, database-driven and scalable web applications using latest technologies and tools in web development including deployment and testing, assigned by the lab mentor",
      "Developed secure, API-driven and scalable cross-platform mobile applications using modern Expo and React Native tooling, including EAS build/deployment and testing on iOS and Android, as assigned by the lab mentor.",
    ],
  },
];

/* ─── Primitives ────────────────────────────────────────── */

/** Double-bezel: aluminium tray (outer shell) holding a glass plate (inner core). */
function Bezel({ children, className = "", innerClassName = "" }: { children: React.ReactNode; className?: string; innerClassName?: string }) {
  return (
    <div className={`h-full rounded-[2rem] bg-white/[0.03] p-1.5 ring-1 ring-white/[0.07] ${className}`}>
      <div
        className={`relative h-full overflow-hidden rounded-[calc(2rem-0.375rem)] bg-[#0a0b0d] shadow-[inset_0_1px_1px_rgba(255,255,255,0.09),0_30px_60px_-30px_rgba(0,0,0,0.7)] ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}

function Eyebrow({ icon: IconCmp, children }: { icon?: Icon; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted ring-1 ring-white/10">
      {IconCmp && <IconCmp size={12} weight="light" className="text-ice" />}
      {children}
    </span>
  );
}

function PrimaryButton({ href, children, download }: { href: string; children: React.ReactNode; download?: string }) {
  return (
    <a
      href={href}
      download={download}
      className="group inline-flex items-center gap-3 rounded-full bg-foreground py-1.5 pl-6 pr-1.5 text-sm font-medium text-background transition-transform duration-500 ease-spring hover:scale-[1.02] active:scale-[0.98]"
    >
      {children}
      <span className="grid h-9 w-9 place-items-center rounded-full bg-black/[0.08] transition-transform duration-500 ease-spring group-hover:-translate-y-[1px] group-hover:translate-x-1 group-hover:scale-105">
        <ArrowUpRightIcon size={16} weight="light" />
      </span>
    </a>
  );
}

function GhostButton({ href, icon: IconCmp, children, download, external }: { href: string; icon: Icon; children: React.ReactNode; download?: string; external?: boolean }) {
  return (
    <a
      href={href}
      download={download}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="group inline-flex items-center gap-3 rounded-full bg-white/[0.05] py-1.5 pl-5 pr-1.5 text-sm text-foreground ring-1 ring-white/10 transition-all duration-500 ease-spring hover:bg-white/[0.09] active:scale-[0.98]"
    >
      {children}
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition-transform duration-500 ease-spring group-hover:-translate-y-[1px] group-hover:translate-x-1 group-hover:scale-105">
        <IconCmp size={16} weight="light" />
      </span>
    </a>
  );
}

function TagGroup({ label, items }: { label: string; items: TechItem[] }) {
  return (
    <div>
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Visit the official ${item.name} website`}
            className="group inline-flex items-center gap-2 rounded-full bg-white/[0.04] py-1.5 pl-1.5 pr-3.5 text-[13px] text-foreground/85 ring-1 ring-white/[0.08] transition-all duration-500 ease-spring hover:bg-ice hover:text-background active:scale-[0.97]"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/[0.06] text-ice transition-colors duration-500 ease-spring group-hover:bg-black/10 group-hover:text-background [&_svg]:h-3.5 [&_svg]:w-3.5">
              {item.logo}
            </span>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────── */

export default function Home() {
  return (
    <div id="top" className="relative min-h-[100dvh] overflow-x-clip">
      <div className="atmosphere" />
      <div className="grain" />
      <IslandNav />

      <main className="relative z-10 mx-auto w-full max-w-[1280px] px-4 md:px-8">
        {/* ── Hero + Objective ───────────────────────────── */}
        <section className="grid grid-cols-1 gap-4 pt-28 pb-24 md:gap-5 md:pt-36 md:pb-32 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <Bezel innerClassName="min-h-[620px] md:min-h-[680px]">
              <HeroPhoto />
              <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-between gap-16 p-6 md:p-12">
                <div className="flex items-start justify-between gap-4">
                  <div className="relative h-16 w-16 rounded-full p-1 ring-1 ring-white/15">
                    <div className="relative h-full w-full overflow-hidden rounded-full">
                      <Image
                        src="/IMG_20260121_165048.jpg"
                        alt="Nkululeko Njabulo Ndlwana"
                        fill
                        sizes="64px"
                        preload
                        className="object-cover object-[50%_37%]"
                      />
                    </div>
                    <span className="absolute right-0.5 bottom-0.5 h-3 w-3 rounded-full bg-emerald ring-2 ring-[#0a0b0d]" />
                  </div>
                  <Eyebrow icon={CodeIcon}>Software Developer</Eyebrow>
                </div>

                <div>
                  <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-muted">Mr</p>
                  <h1 className="text-[clamp(3rem,9vw,6.25rem)] font-medium leading-[0.88] tracking-[-0.055em] text-foreground">
                    Nkululeko
                    <br />
                    <span className="font-serif font-normal italic tracking-[-0.02em] text-ice">Njabulo</span> Ndlwana
                  </h1>
                  <p className="mt-6 text-base text-muted md:text-lg">Full Stack Developer</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <PrimaryButton href={`mailto:${EMAIL}`}>Email me</PrimaryButton>
                  <GhostButton href={CV_HREF} download="Nkululeko_Ndlwana_cv.pdf" icon={DownloadSimpleIcon}>
                    Download CV
                  </GhostButton>
                  <a
                    href={PHONE_HREF}
                    aria-label="Call Nkululeko"
                    className="grid h-12 w-12 place-items-center rounded-full bg-white/[0.05] ring-1 ring-white/10 transition-all duration-500 ease-spring hover:bg-white/10 active:scale-[0.95]"
                  >
                    <PhoneIcon size={18} weight="light" />
                  </a>
                </div>
              </div>
            </Bezel>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={120} id="objective">
            <Bezel innerClassName="flex flex-col justify-between gap-10 p-7 md:p-9">
              <div>
                <Eyebrow icon={SparkleIcon}>01 / Objective</Eyebrow>
                <p className="mt-8 text-[15px] leading-[1.7] tracking-[-0.005em] text-foreground/80">
                  I am a Full-Stack Software Engineer dedicated to designing and delivering resilient, high-performance web applications. My core strength lies in bridging the gap between complex backend architectures and intuitive, pixel-perfect user experiences. Whether optimizing database queries for speed, crafting RESTful APIs, or engineering slick frontend interfaces, I prioritize scalable solutions, maintainable code standards, and seamless user interaction. Driven by a product-focused mindset, I transform technical challenges into streamlined digital products that deliver real value to users and business operations
                </p>
              </div>
              <p className="flex items-center gap-2 text-[13px] text-muted">
                <MapPinIcon size={16} weight="light" className="text-ice" /> Springs, Johannesburg, South Africa
              </p>
            </Bezel>
          </Reveal>
        </section>

        {/* ── Project · Toolkit · Assessments ─────────────── */}
        <section className="grid grid-cols-1 gap-4 py-24 md:gap-5 md:py-32 lg:grid-cols-12">
          <Reveal className="lg:col-span-7 lg:row-span-2" id="project">
            <Bezel innerClassName="flex flex-col gap-10 p-7 md:p-10">
              <div className="flex items-center justify-between gap-4">
                <Eyebrow icon={BroadcastIcon}>03 / Featured project</Eyebrow>
                <span className="font-mono text-[11px] text-faint">2025</span>
              </div>

              {/* Live map visual — nested bezel */}
              <div className="rounded-[1.5rem] bg-white/[0.03] p-1 ring-1 ring-white/[0.06]">
                <div className="relative h-56 overflow-hidden rounded-[calc(1.5rem-0.25rem)] bg-[radial-gradient(ellipse_at_60%_40%,#0f1c24,#07090b_70%)] md:h-64">
                  <div className="map-grid" />
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 260" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M-10 200 C 120 180, 180 90, 300 120 S 480 60, 610 40" fill="none" stroke="rgba(191,233,255,0.55)" strokeWidth="1" />
                    <path d="M-10 90 C 140 120, 220 220, 360 190 S 520 150, 610 210" fill="none" stroke="rgba(126,226,184,0.25)" strokeWidth="1" strokeDasharray="3 6" />
                    {[[150, 151], [300, 120], [470, 72]].map(([x, y]) => (
                      <circle key={x} cx={x} cy={y} r="4" fill="#0a0b0d" stroke="rgba(191,233,255,0.8)" strokeWidth="1" />
                    ))}
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -mt-5 -ml-5">
                    <div className="bus-travel">
                      <div className="bus-ping relative grid h-10 w-10 place-items-center rounded-full bg-ice text-background shadow-[0_0_30px_rgba(191,233,255,0.45)]">
                        <BusIcon size={18} weight="light" />
                      </div>
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ice/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Bus 04 · Live
                  </span>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.045em] md:text-5xl">
                  Bus Tracking
                  <br />
                  <span className="font-serif font-normal italic tracking-[-0.01em] text-ice">Application</span>
                </h2>
                <div className="mt-7 space-y-4 text-[14px] leading-[1.7] text-muted">
                  <p className="text-foreground/85">A collaborative student safety tool for live location tracking and smarter day planning.</p>
                  <p>At university, students frequently struggled with unpredictable shuttle schedules and waiting at bus stops late in the evening without knowing if the bus was delayed or already gone. This created anxiety and undermined trust in the transport system.</p>
                  <p>I collaborated with my team to build an end-to-end digital tracking system that gives students real-time visibility into bus locations and schedules</p>
                  <p>I contributed to the full stack—designing the data models for routes and stops, setting up the API layer to ingest GPS telemetry, and crafting an intuitive frontend map interface with live status updates.</p>
                  <p>The system successfully demonstrated accurate real-time tracking, eliminated uncertainty around departure times, and significantly improved transit planning and student safety</p>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                {repos.map((repo) => (
                  <GhostButton key={repo.href} href={repo.href} icon={GithubLogoIcon} external>
                    {repo.label}
                  </GhostButton>
                ))}
              </div>

              <div className="border-t border-white/[0.06] pt-8">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">More projects</p>
                <ul className="space-y-3">
                  {projects.map((project) => (
                    <li key={project.repo} className="rounded-[1.5rem] bg-white/[0.025] p-1 ring-1 ring-white/[0.05]">
                      <div className="flex flex-col gap-4 rounded-[calc(1.5rem-0.25rem)] bg-[#0d0e11] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] md:p-6">
                        <h3 className="text-xl font-medium leading-[1.15] tracking-[-0.03em]">{project.title}</h3>
                        <p className="text-[14px] leading-[1.7] text-muted">{project.description}</p>
                        <ul className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <li key={tech} className="rounded-full bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-foreground/75 ring-1 ring-white/[0.08]">
                              {tech}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-3">
                          <GhostButton href={project.repo} icon={GithubLogoIcon} external>
                            GitHub repo
                          </GhostButton>
                          {project.live && (
                            <GhostButton href={project.live} icon={ArrowUpRightIcon} external>
                              Live site
                            </GhostButton>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Bezel>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120} id="toolkit">
            <Bezel innerClassName="p-7 md:p-9">
              <Eyebrow icon={CodeIcon}>02 / Toolkit</Eyebrow>
              <div className="mt-8 space-y-7">
                <TagGroup label="Languages" items={languages} />
                <TagGroup label="Frameworks" items={frameworks} />
                <TagGroup label="Databases" items={databases} />
                <TagGroup label="Tools" items={tools} />
              </div>
            </Bezel>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={200}>
            <Bezel innerClassName="p-7 md:p-9">
              <Eyebrow icon={HardDrivesIcon}>04 / Assessments</Eyebrow>
              <h2 className="mt-8 text-3xl font-medium leading-[1] tracking-[-0.04em] md:text-4xl">
                Backend systems,
                <br />
                <span className="font-serif font-normal italic tracking-[-0.01em] text-ice">built with intent.</span>
              </h2>
              <p className="mt-5 text-[14px] leading-[1.7] text-muted">MVC model architecture web applications with security and data storage at the core.</p>
              <ul className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {["GlassFish server", "Application containers", "Security roles", "Apache Derby"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[13px] text-foreground/80">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald/10 text-emerald">
                      <CheckIcon size={11} weight="light" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Bezel>
          </Reveal>
        </section>

        {/* ── Education · Experience ──────────────────────── */}
        <section className="grid grid-cols-1 gap-4 py-24 md:gap-5 md:py-32 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" id="education">
            <Bezel innerClassName="p-7 md:p-9">
              <Eyebrow icon={GraduationCapIcon}>05 / Education</Eyebrow>
              <ol className="relative mt-8 space-y-10 before:absolute before:top-2 before:bottom-4 before:left-[5px] before:w-px before:bg-gradient-to-b before:from-ice/60 before:to-transparent">
                {education.map((school) => (
                  <li key={school.href} className="relative flex gap-6">
                    <span
                      className={`relative z-10 mt-1.5 h-[11px] w-[11px] flex-none rounded-full ring-1 ${school.active ? "bg-ice ring-ice shadow-[0_0_0_5px_rgba(191,233,255,0.1)]" : "bg-[#0a0b0d] ring-white/30"}`}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="mb-5 rounded-[1.25rem] bg-white/[0.03] p-1 ring-1 ring-white/[0.06]">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-[calc(1.25rem-0.25rem)]">
                          <Image src={school.image} alt={school.alt} fill sizes="(min-width: 1024px) 400px, 90vw" className="object-cover saturate-[0.8]" />
                        </div>
                      </div>
                      <p className="font-mono text-[11px] text-ice">{school.date}</p>
                      <h3 className="mt-2 text-xl font-medium leading-[1.15] tracking-[-0.03em]">
                        <a
                          href={school.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="underline decoration-white/20 underline-offset-4 transition-colors duration-500 ease-spring hover:text-ice hover:decoration-ice"
                        >
                          {school.name[0]}
                          <br />
                          {school.name[1]}
                        </a>
                      </h3>
                      <p className="mt-2 text-[13px] text-muted">{school.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Bezel>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120} id="experience">
            <Bezel innerClassName="flex flex-col gap-10 p-7 md:p-9">
              <div>
                <Eyebrow icon={BriefcaseIcon}>06 / Experience</Eyebrow>
              </div>
              {experience.map((job) => (
                <article key={job.org} className="flex flex-1 flex-col gap-8">
                  <div>
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] text-ice">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald shadow-[0_0_0_3px_rgba(126,226,184,0.15)]" />
                      {job.date}
                    </span>
                    <h2 className="mt-4 text-4xl font-medium leading-[0.95] tracking-[-0.045em] md:text-5xl">{job.org}</h2>
                    <p className="mt-3 font-serif text-2xl italic text-ice md:text-3xl">{job.role}</p>
                  </div>
                  <ul className="space-y-3">
                    {job.points.map((point) => (
                      <li key={point} className="rounded-[1.5rem] bg-white/[0.025] p-1 ring-1 ring-white/[0.05]">
                        <div className="flex gap-4 rounded-[calc(1.5rem-0.25rem)] bg-[#0d0e11] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] md:p-6">
                          <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-emerald/10 text-emerald">
                            <CheckIcon size={11} weight="light" />
                          </span>
                          <p className="text-[14px] leading-[1.7] text-foreground/80">{point}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </Bezel>
          </Reveal>
        </section>

        {/* ── References ──────────────────────────────────── */}
        <section className="py-24 md:py-32">
          <Reveal id="references">
            <Bezel innerClassName="p-7 md:p-9">
              <Eyebrow icon={UsersThreeIcon}>07 / References</Eyebrow>
              <ul className="mt-8 grid grid-cols-1 gap-3 lg:grid-cols-3">
                {references.map((ref, i) => (
                  <li key={ref.email} className="rounded-[1.5rem] bg-white/[0.025] p-1 ring-1 ring-white/[0.05]">
                    <div className="flex items-center gap-4 rounded-[calc(1.5rem-0.25rem)] bg-[#0d0e11] p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] md:gap-5 md:p-5">
                      <span className="grid h-12 w-12 flex-none place-items-center rounded-full bg-ice/[0.08] font-mono text-[11px] text-ice ring-1 ring-ice/15">
                        {ref.initials}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[15px] font-medium tracking-[-0.01em]">{ref.name}</h3>
                        <p className="mt-0.5 text-[12px] text-muted">{ref.role}</p>
                        <a
                          href={`mailto:${ref.email}`}
                          className="mt-1.5 block truncate text-[13px] text-ice/90 transition-colors duration-500 ease-spring hover:text-foreground"
                        >
                          {ref.email}
                        </a>
                      </div>
                      <span className="hidden font-mono text-[11px] text-faint sm:block">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Bezel>
          </Reveal>
        </section>

        {/* ── Contact ─────────────────────────────────────── */}
        <section id="contact" className="py-24 md:py-32">
          <Reveal>
            <Bezel innerClassName="px-7 py-16 md:px-16 md:py-24">
              <div className="pointer-events-none absolute -top-40 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(191,233,255,0.14),transparent_65%)]" />
              <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted ring-1 ring-white/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald shadow-[0_0_0_3px_rgba(126,226,184,0.15)]" />
                    Open to opportunity
                  </span>
                  <h2 className="mt-8 text-[clamp(2.75rem,8vw,6rem)] font-medium leading-[0.9] tracking-[-0.055em]">
                    Let&apos;s make
                    <br />
                    <span className="font-serif font-normal italic tracking-[-0.02em] text-ice">something useful.</span>
                  </h2>
                </div>
                <div className="flex flex-col gap-6 lg:col-span-4">
                  <div className="space-y-3 text-[14px] text-foreground/80">
                    <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 transition-colors duration-500 ease-spring hover:text-ice">
                      <EnvelopeSimpleIcon size={18} weight="light" className="text-ice" /> {EMAIL}
                    </a>
                    <a href={PHONE_HREF} className="flex items-center gap-3 transition-colors duration-500 ease-spring hover:text-ice">
                      <PhoneIcon size={18} weight="light" className="text-ice" /> {PHONE_LABEL}
                    </a>
                    <a
                      href={GITHUB_HREF}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-3 transition-colors duration-500 ease-spring hover:text-ice"
                    >
                      <GithubLogoIcon size={18} weight="light" className="text-ice" /> {GITHUB_LABEL}
                    </a>
                  </div>
                  <div>
                    <PrimaryButton href={`mailto:${EMAIL}`}>Email me</PrimaryButton>
                  </div>
                </div>
              </div>
            </Bezel>
          </Reveal>
        </section>
      </main>

      <footer className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-3 px-4 pb-10 font-mono text-[11px] uppercase tracking-[0.18em] text-faint sm:flex-row sm:justify-between md:px-8">
        <span>© 2026 Nkululeko Ndlwana</span>
        <span className="inline-flex items-center gap-2">
          <GitBranchIcon size={13} weight="light" /> Johannesburg, ZA
        </span>
      </footer>
    </div>
  );
}
