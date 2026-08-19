"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Download,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Radio,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type TechItem = {
  name: string;
  logo: React.ReactNode;
};

const languages: TechItem[] = [
  { name: "Java", logo: <JavaLogo /> },
  { name: "TypeScript", logo: <TypeScriptLogo /> },
  { name: "HTML", logo: <HtmlLogo /> },
  { name: "CSS", logo: <CssLogo /> },
  { name: "JavaScript", logo: <JavaScriptLogo /> },
];

const frameworks: TechItem[] = [
  { name: "Node.js", logo: <NodeLogo /> },
  { name: "Spring Boot", logo: <SpringLogo /> },
  { name: "Next.js", logo: <NextLogo /> },
];

const tools: TechItem[] = [
  { name: "Git", logo: <GitLogo /> },
  { name: "VS Code", logo: <VsCodeLogo /> },
  { name: "Apache NetBeans", logo: <NetBeansLogo /> },
];

const heroImages = [
  "/0x1900-000000-80-0-0.jpg",
  "/11441be1-343f-4f01-ab27-879ae19dbf00.webp",
  "/images.jpg",
];

function HeroPhoto() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(rotation);
  }, []);

  return (
    <div className="hero-photo-stack" aria-hidden="true">
      {heroImages.map((image, index) => (
        <div
          className={`hero-photo ${index === activeImage ? "hero-photo-active" : ""}`}
          key={image}
          style={{ backgroundImage: `url("${image}")` }}
        />
      ))}
    </div>
  );
}

function SectionLabel({ icon: Icon, children }: { icon: typeof Code2; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <Icon size={15} strokeWidth={2.2} />
      <span>{children}</span>
    </div>
  );
}

function TagGroup({ label, items }: { label: string; items: TechItem[] }) {
  return (
    <div>
      <p className="eyebrow mb-3">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span className="skill-tag" key={item.name}>
            <span className="skill-logo" aria-hidden="true">{item.logo}</span>
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function JavaLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 17c0-3.3 2.4-5.4 6.2-5.4S18 13.7 18 17s-2.4 5-6.2 5S6 20.3 6 17Zm2.5-9.5c1.1-1.2 2.3-1.9 4.1-1.9 2.4 0 4.1 1.1 4.1 2.7 0 1.9-1.8 2.7-4.1 2.7-2.2 0-4.1-1.1-4.1-2.7Zm2.3 2.1c.9 0 1.6-.4 1.6-1.2 0-.7-.7-1.1-1.6-1.1-.9 0-1.6.4-1.6 1.1 0 .8.7 1.2 1.6 1.2Z" fill="currentColor"/>
      <path d="M8.4 12.4h7.1v1.4H8.4zM6 19.4h12v1.4H6z" fill="currentColor" opacity=".7"/>
    </svg>
  );
}

function HtmlLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 3h16l-1.5 15.9L12 21l-6.5-2.1L4 3Zm3.2 4.3 1.1 10.5 4.7 1.4 4.7-1.4 1.1-10.5H7.2Zm7.4 2.2-1 4.4-.9 3.4h-2.1l-.9-3.4-1-4.4h6z" fill="currentColor"/>
    </svg>
  );
}

function CssLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 3h16l-1.5 15.8L12 21l-6.5-2.2L4 3Zm3 4.2h9.3l-.3 2.3-4.5 1.7H9.8l-.4 2.2 3.4 1.2 3.4-1.2.3-2.7H8.8L8 8.7h8.1L16.5 7H7.1z" fill="currentColor"/>
    </svg>
  );
}

function JavaScriptLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 3h18v18H3V3Zm4 4.7h10v1.7H10v7.8H8.6v-7.8H7zm7.6 0h2.8l-2.3 3.3 2.8 5.1h-2.5l-1.7-3.3-1.7 3.3H7.9l2.8-5.1-2.3-3.3h2.7l1.6 3.3 1.6-3.3Z" fill="currentColor"/>
    </svg>
  );
}

function TypeScriptLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 3h18v18H3V3Zm3.5 4.2h10.9v2H13v8.7h-2.2V6.2H6.5v1Zm9.1 0h2.8l-1.5 3.1 1.7 4.6h-2.3l-1-3.1-1 3.1h-2.3l1.7-4.6-1.5-3.1h2.5l.9 2.7.9-2.7Z" fill="currentColor"/>
    </svg>
  );
}

function NodeLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5 4.8 6.9v10.2L12 21.5l7.2-4.4V6.9L12 2.5Zm0 2.3 5.3 3.2-5.3 3.1-5.3-3.1L12 4.8Zm-6 4.9 5 3v6.1l-5-3.1V9.7Zm12 0v6.1l-5 3.1v-6.1l5-3.1Z" fill="currentColor"/>
    </svg>
  );
}

function SpringLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.7 10.8c-.5-3.1-3.1-5.4-6.8-5.4-2.4 0-4.4 1.1-5.6 2.8C4.4 9.8 3.8 12 4.3 14.3c.8 3.8 4 6.5 7.8 6.5 3.1 0 5.4-1.8 6.3-4.6.5-1.7.1-3.5-.7-5.4Zm-7.2 7.4c-2.3 0-4.5-1.5-5.1-3.7-.5-1.7.1-3.6 1.7-5.1.5-.4 1.3-.9 2.1-1.2-.5 1.2-.6 2.6-.2 3.9.8 2.9 3.6 4.7 6.4 4.1-.3.6-.8 1.1-1.6 1.6-.7.5-1.5.8-2.3.8Zm7.1-8.4c-1.4 1-3.3 1.2-5.2.7.2-.8.8-1.6 1.7-2.2 1.1-.8 2.6-1.2 4.1-1.1-.8 1.1-1.3 1.7-2.6 2.6Z" fill="currentColor"/>
    </svg>
  );
}

function NextLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.8c5.1 0 9.2 4.1 9.2 9.2s-4.1 9.2-9.2 9.2S2.8 17.1 2.8 12 6.9 2.8 12 2.8Zm0 2.2-6.1 9.1c1.2-1.6 3.1-2.7 5.3-2.7h.8V5Zm4.9 2.1 1.8 2.7v8.1h-2.5V9.1l.7-1.1Zm-9.8 7.1v4.4h2.2v-1.9l2.3-2.5h-4.5Z" fill="currentColor"/>
    </svg>
  );
}

function GitLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11.8 2.5a2.8 2.8 0 0 0-2.8 2.8v1.6L8 7.3l-3 3v1.9l3-3v1.3a2.8 2.8 0 1 0 1.9 4.8l1.6 1.6a2.8 2.8 0 1 0 2.2-1.1 2.9 2.9 0 0 0-1.5-.7l-1.7-1.7c.5-.3 1-.7 1.5-1.3h1.3v1.3A2.8 2.8 0 1 0 17 13.5V9.9l-1.5-1.5V6.9a2.8 2.8 0 0 0-2.7-2.8Zm-1.9 5.1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm0 8.6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm7.1-9.7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="currentColor"/>
    </svg>
  );
}

function VsCodeLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.9 2.7 9.5 9.2 6 6.6 3.7 7.7l4.7 4.2L3.7 16l2.3 1.1 3.5-2.6 8.4 6.5 2.4-1.1V3.8l-2.4-1.1Zm0 4.3v10l-6.4-5 6.4-5Z" fill="currentColor"/>
    </svg>
  );
}

function NetBeansLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5 20 7v10l-8 4.5L4 17V7l8-4.5Zm0 2.2L6.2 7.5l3.5 2 2.3-1.3L17.8 7.5 12 4.7Zm-5.5 4.4 4.8 2.7v6.1l-4.8-2.7V9.1Zm11 0v6.1L12 17.9v-6.1l5.5-2.7Z" fill="currentColor"/>
    </svg>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <main className="mx-auto w-full max-w-[1220px] px-5 py-6 sm:px-8 lg:px-10 lg:py-10">
        <nav className="mb-10 flex items-center justify-between text-sm">
          <h1 className="hero-title"><em>Software Developer</em></h1>
          <a className="nav-link" href="mailto:Laxinkulul3ko@gmail.com">Let&apos;s connect <ArrowUpRight size={15} /></a>
        </nav>

        <div id="top" className="bento-grid">
          <section className="bento-card hero-card">
            <HeroPhoto />
            <div className="hero-clouds" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-12">
              <div className="flex items-start justify-between">
                <div className="avatar"><Image src="/IMG_20260121_165048.jpg" alt="Nkululeko Njabulo Ndlwana" fill sizes="70px" priority /><span className="avatar-dot" /></div>
              </div>
              <div>
                <p className="eyebrow mb-4">Mr</p>
                <h1 className="hero-title">Nkululeko<br /><em>Njabulo</em> Ndlwana</h1>
                <p className="hero-subtitle">Full Stack Developer</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a className="primary-button" href="mailto:Laxinkulul3ko@gmail.com"><Mail size={16} /> Email me <ArrowUpRight size={15} /></a>
                <a className="icon-button" href="tel:0678062924" aria-label="Call Nkululeko"><Phone size={17} /></a>
                <a className="icon-button" href="/updated_cv.pdf" download="Nkululeko-Ndlwana-CV.pdf" aria-label="Download resume"><Download size={17} /></a>
              </div>
            </div>
          </section>

          <section className="bento-card objective-card">
            <SectionLabel icon={Sparkles}>01 / Objective</SectionLabel>
            <p className="objective-copy">Motivated and hardworking student with a passion for building useful digital experiences. Seeking an opportunity as a <strong>Software Developer</strong> to apply practical knowledge in a professional environment and grow through meaningful, hands-on work.</p>
            <div className="card-footer"><MapPin size={15} /> Springs, Johannesburg, South Africa</div>
          </section>

          <section className="bento-card skills-card">
            <SectionLabel icon={Code2}>02 / Toolkit</SectionLabel>
            <div className="space-y-7">
              <TagGroup label="Languages" items={languages} />
              <TagGroup label="Frameworks" items={frameworks} />
              <TagGroup label="Tools" items={tools} />
            </div>
            <div className="card-number">02</div>
          </section>

          <section className="bento-card project-card">
            <div className="flex items-start justify-between gap-4"><SectionLabel icon={Radio}>03 / Featured project</SectionLabel><span className="project-year">2025</span></div>
            <div className="tracking-visual"><div className="map-grid" /><div className="route route-a" /><div className="route route-b" /><span className="map-pin pin-one" /><span className="map-pin pin-two" /><span className="map-pin pin-three" /><div className="bus-marker"><Radio size={14} /></div><span className="map-label">BUS 04 · LIVE</span></div>
            <div><h2 className="card-title">Bus Tracking<br /><em>Application</em></h2><p className="card-description">A collaborative student safety tool for live location tracking and smarter day planning.</p></div>
            <a className="text-link" href="#project">View case study <ExternalLink size={14} /></a>
          </section>

          <section className="bento-card assessment-card">
            <SectionLabel icon={Server}>04 / Assessments</SectionLabel>
            <h2 className="small-title">Backend systems,<br /><em>built with intent.</em></h2>
            <p className="card-description">MVC model architecture web applications with security and data storage at the core.</p>
            <div className="tag-list"><span><Check size={12} /> GlassFish server</span><span><Check size={12} /> Application containers</span><span><Check size={12} /> Security roles</span><span><Check size={12} /> Apache Derby</span></div>
          </section>

          <section className="bento-card education-card">
            <SectionLabel icon={GraduationCap}>05 / Education</SectionLabel>
            <div className="timeline">
              <div className="timeline-item"><span className="timeline-dot active" /><div><p className="timeline-date">2021—2026</p><h3>Tshwane University<br />of Technology</h3><p>Diploma in Computer Science · NQF 6</p></div></div>
              <div className="timeline-item"><span className="timeline-dot" /><div><p className="timeline-date">2017—2021</p><h3>Springs Boys<br />High School</h3><p>National Senior Certificate</p></div></div>
            </div>
          </section>

          <section className="bento-card references-card">
            <SectionLabel icon={BriefcaseBusiness}>06 / References</SectionLabel>
            <div className="reference-list"><div className="reference"><div className="reference-initial">VM</div><div><h3>Vuyisile Memani</h3><p>Lecturer · TUT</p><a href="mailto:MemaniV@tut.ac.za">MemaniV@tut.ac.za</a></div><span>01</span></div><div className="reference"><div className="reference-initial">ML</div><div><h3>Marlo Liebenberg</h3><p>Lecturer · TUT</p><a href="mailto:liebenbergm@tut.ac.za">liebenbergm@tut.ac.za</a></div><span>02</span></div></div>
          </section>

          <section id="resume" className="bento-card contact-card"><div><SectionLabel icon={Wrench}>Open to opportunity</SectionLabel><h2 className="small-title">Let&apos;s make<br /><em>something useful.</em></h2></div><div className="contact-bottom"><p><Mail size={15} /> Laxinkulul3ko@gmail.com</p><p><Phone size={15} /> 067 806 2924</p><a className="contact-arrow" href="mailto:Laxinkulul3ko@gmail.com" aria-label="Contact Nkululeko"><ArrowUpRight size={22} /></a></div></section>
        </div>
        <footer className="mt-8 flex justify-between text-xs uppercase tracking-[0.18em] text-slate-500"><span>© 2026 Nkululeko Ndlwana</span><span><GitBranch size={14} className="inline" /> &nbsp;Johannesburg, ZA</span></footer>
      </main>
    </div>
  );
}
