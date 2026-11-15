
import { skillCategories, otherSkills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="eyebrow">WHAT I'M LEARNING</p>

      <h2 className="sectionTitle">
        My <span>Skills</span>
      </h2>

      <p className="sectionDescription">
        Technologies, programming languages, and tools
        I'm currently learning and exploring.
      </p>

      {/* SKILL CATEGORIES */}
      <div className="skillCategories">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="skillCategory"
          >
            <h3 className="categoryTitle">
              {category.title}
            </h3>

            <p className="categoryDescription">
              {category.description}
            </p>

            <div className="skillsGrid">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="skillCard"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="skillIcon"
                  />

                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* OTHER SKILLS */}
      <div className="otherSkillsSection">
        <h3 className="categoryTitle">
          Other Skills
        </h3>

        <p className="categoryDescription">
          Additional skills and technologies I'm exploring.
        </p>

        {otherSkills.length > 0 ? (
          <div className="skillsGrid">
            {otherSkills.map((skill) => (
              <div
                key={skill.name}
                className="skillCard"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="skillIcon"
                />

                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="otherSkillsPlaceholder">
            More skills will be added here.
          </p>
        )}
      </div>
    </section>
  );
}
