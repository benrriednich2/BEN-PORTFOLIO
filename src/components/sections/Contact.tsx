
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <p className="eyebrow">HAVE A PROJECT IN MIND?</p>

      <h2>
        Let's Work <span>Together</span>
      </h2>

      <p className="contactDescription">
        I'm open to learning opportunities, collaborations,
        and connecting with other developers.
      </p>

      <a
        href={`mailto:${personalInfo.email}`}
        className="primaryButton"
      >
        Send Me an Email
      </a>

      <p className="email">
        {personalInfo.email}
      </p>
    </section>
  );
}
