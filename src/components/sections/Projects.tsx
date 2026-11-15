
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="eyebrow">MY RECENT WORK</p>

      <h2 className="sectionTitle">
        Featured <span>Projects</span>
      </h2>

      <div className="projectsGrid">
        {projects.map((project) => (
          <article
            key={project.number}
            className="projectCard"
          >
            <span className="projectNumber">
              {project.number}
            </span>

            <p className="projectCategory">
              {project.category}
            </p>

            <h3>{project.title}</h3>

            <p className="projectDescription">
              {project.description}
            </p>

            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
