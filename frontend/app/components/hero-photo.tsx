"use client";

import { useEffect, useState } from "react";

const heroImages = [
  "/hero-1.jpg",
  "/hero-2.jpg",
  "/hero-3.jpg",
  "/hero-4.jpg",
  "/hero-5.jpg",
  "/hero-6.jpg",
];

export function HeroPhoto() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 5000);
    return () => window.clearInterval(rotation);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`hero-photo ${index === activeImage ? "is-active" : ""}`}
          style={{ backgroundImage: `url("${image}")` }}
        />
      ))}
      {/* legibility veils */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.94)_0%,rgba(5,5,5,0.7)_45%,rgba(5,5,5,0.25)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,5,5,0.9)_0%,transparent_60%)]" />
    </div>
  );
}
