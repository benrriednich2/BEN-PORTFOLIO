
export default function About() {
  return (
    <section id="about" className="section">
      <p className="eyebrow">GET TO KNOW ME</p>

      <h2 className="sectionTitle">
        About <span>Me</span>
      </h2>

      <div className="aboutContent">
        <p>
          I'm a beginner Full-Stack Developer who is passionate
          about technology and web development.
        </p>

        <p>
          I'm currently learning how to build modern web
          applications, improve my programming skills, and
          understand how frontend and backend technologies work
          together.
        </p>

        <p>
          My goal is to become a skilled developer by continuously
          learning, practicing, and creating projects that solve
          real-world problems.
        </p>
      </div>

      {/* PERSONAL INFORMATION */}
      <div className="aboutDetails">
        <h3 className="aboutSubtitle">
          Personal <span>Information</span>
        </h3>

        <div className="aboutInfoGrid">
          <div className="aboutInfoCard">
            <span>Full Name</span>
            <p>Benhur P. Tomas Jr.</p>
          </div>

          <div className="aboutInfoCard">
            <span>Age</span>
            <p>21</p>
          </div>

          <div className="aboutInfoCard">
            <span>Birthdate</span>
            <p>07/24/2005</p>
          </div>

          <div className="aboutInfoCard">
            <span>Address</span>
            <p>Brgy. Sinimbaan Cuyapo Nueva Ecija</p>
          </div>
        </div>
      </div>

     
{/* EDUCATION */}
<div className="educationSection">
  <h3 className="aboutSubtitle">
    <span>Education</span>
  </h3>

  <div className="educationCards">

    <div className="educationCard">
      <p className="educationLevel">College</p>
      <h4>COLLEGE FOR RESEARCH AND TECHNOLOGY</h4>
      <p className="educationDescription">
        Bachelor of Science in Information Technology
      </p>
      <p className="educationYear">2023 - 2027</p>
    </div>

    <div className="educationCard">
      <p className="educationLevel">High School</p>
      <h4>CUYAPO NATIONAL HIGH SCHOOL</h4>
      <p className="educationDescription">
        Senior High School - ABM Strand
      </p>
      <p className="educationYear">2017 - 2021</p>
    </div>

    <div className="educationCard">
      <p className="educationLevel">Elementary</p>
      <h4>SINIMBAAN ELEMENTARY SCHOOL</h4>
      <p className="educationDescription">
        Elementary Education
      </p>
      <p className="educationYear">2011 - 2017</p>
    </div>

  </div>
</div>

      
    </section>
    
  );
}
