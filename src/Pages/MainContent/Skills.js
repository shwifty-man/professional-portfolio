import { SkillCard } from "../../Components/SkillComponents/SkillCard.jsx"

function Skills() {
  return (
    <>
      <div className="container">
        <h2 id="Skills-h2">Skills</h2>
        <h3 id="Skills-h3">My professional work skills at a glance.</h3>
        <section className="Skills-container">
          <SkillCard
            title="Frontend"
            list={[
              "HTML5",
              "CSS3",
              "JavaScript (ES6+)",
              "React",
              "Responsive Design",
              "Mobile-First Design",
              "Accessibility (a11y)",
            ]}
          />

          <SkillCard
            title="Backend"
            list={[
              "Node.js",
              "Express.js",
              "RESTful APIs",
              "Middleware",
              "JSON Handling",
            ]}
          />

          <SkillCard
            title="Database"
            list={["PostgreSQL", "SQL", "CRUD Operations", "Data Modeling"]}
          />

          <SkillCard
            title="Tools & Technologies"
            list={[
              "Git",
              "GitHub",
              "Version Control",
              "Command Line",
              "Linux",
              "Figma",
            ]}
          />
        </section>
      </div>
    </>
  )
}

export default Skills
