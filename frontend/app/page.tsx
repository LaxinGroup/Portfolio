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

const languages = ["Java", "HTML", "CSS", "JavaScript"];
const frameworks = ["Node.js", "Spring Boot", "Next.js"];
const tools = ["Git", "VS Code", "Apache NetBeans"];
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

function TagGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="eyebrow mb-3">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span className="skill-tag" key={item}>{item}</span>
        ))}
      </div>
    </div>
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
                <p className="eyebrow mb-4">Computer Science / 2021—26</p>
                <h1 className="hero-title">Nkululeko<br /><em>Njabulo</em> Ndlwana</h1>
                <p className="hero-subtitle">Computer Science Student <span>/</span> Developer</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a className="primary-button" href="mailto:Laxinkulul3ko@gmail.com"><Mail size={16} /> Email me <ArrowUpRight size={15} /></a>
                <a className="icon-button" href="tel:0678062924" aria-label="Call Nkululeko"><Phone size={17} /></a>
                <a className="icon-button" href="#resume" aria-label="Download resume"><Download size={17} /></a>
              </div>
            </div>
          </section>

          <section className="bento-card objective-card">
            <SectionLabel icon={Sparkles}>01 / Objective</SectionLabel>
            <p className="objective-copy">Motivated and hardworking student with a passion for building useful digital experiences. Seeking an opportunity as a <strong>Software Developer</strong> to apply theoretical knowledge in a professional environment and grow through meaningful, hands-on work.</p>
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
