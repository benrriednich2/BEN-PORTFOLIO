
import { personalInfo } from "@/data/portfolio";
import "@/styles/hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">

      {/* LEFT SIDE - CONTENT */}
      <div className="heroContent">

        <h1>
          Hello, I'm <span>{personalInfo.name}</span>
        </h1>

        <h2>{personalInfo.role}</h2>

        <p className="heroDescription">
          I'm an aspiring Full-Stack Developer who is continuously
          learning and exploring modern web technologies. I'm
          passionate about building functional, responsive, and
          user-friendly applications.
        </p>

        <div className="heroButtons">
          <a href="#projects" className="primaryButton">
            View My Projects
          </a>

          <a href="#contact" className="secondaryButton">
            Contact Me
          </a>
        </div>

        <p className="heroTagline">
          {personalInfo.introduction}
        </p>

      </div>

      {/* RIGHT SIDE - PROFILE IMAGE */}
      <div className="heroImage">
        <img
          src="/images/profile.png"
          alt="My Profile Picture"
        />
      </div>

    </section>
  );
}
