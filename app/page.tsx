"use client";
import Typewriter from "./components/Typewriter";
import { useState } from "react";

export default function HomePage() {
  const [showSecond, setShowSecond] = useState(false);
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="avatar-wrapper">
          <img src="/edward.png" alt="Edward Ko" className="avatar" />
        </div>

        <div className="hero-text">
          <p className="eyebrow">
            Hi, I&apos;m <span className="highlight">Edward Ko</span>.
          </p>

          <h1>Engineer with a passion for analytics and people</h1>

          <p className="tagline">
            <Typewriter
              text="I love playing with data, exploring machine learning concepts, and designing human-centered interfaces."
              onComplete={() => setShowSecond(true)}
            />
          </p>

          {showSecond && (
            <p className="tagline">
              <Typewriter text="Boston University — B.A. in Computer Science, Class of 2026" />
            </p>
          )}

          {/* Social links */}
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/edward-ko-b91655260/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/linkedin.png" alt="LinkedIn" />
            </a>

            <a
              href="https://github.com/Edwardko2004"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/github.png" alt="GitHub" />
            </a>

            <a href="mailto:koedward1019@gmail.com">
              <img src="/icons/email.png" alt="Email" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
