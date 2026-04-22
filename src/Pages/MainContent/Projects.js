import { ProjectCard } from "../../Components/SideContent/ProjectCard"

function Projects() {
  return (
    <>
      <h2 id="Projects-h2">My Work</h2>
      <section className="Projects-container">
        <ProjectCard
          url="https://example.com/"
          title="FeelClear"
          image="/IMGs/FeelClear.jpg"
          description="FeelClear is a mobile app that helps users 
          understand their emotions, improve communication, 
          and build stronger relationships through guided tools and insights."
        />
        <ProjectCard
          url="https://example.com/"
          title="FeelClear"
          image="/IMGs/QuestTracker.jpg"
          description="QuestTracker is an Android app that turns 
          daily tasks into RPG-style quests—earn EXP by completing them, 
          and face themed penalties when you don’t, keeping you motivated 
          and accountable."
        />
      </section>
    </>
  )
}

export default Projects
