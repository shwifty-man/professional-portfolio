function Projects() {
  return (
    <>
      <h2 id="Projects-h2">My Work</h2>
      <section className="Projects-container">
        <div className="Projects-top-container Project-cards">
          <div className="project-box top-project-box">
            <h2>Coming soon!</h2>
            <div className="img-div">
              <img
                className="project-image"
                src="/IMGs/image.png"
                alt="project screenshot"
                onClick={() => window.open("https://example.com/", "_blank")}
              />
            </div>
          </div>
          <div className="project-text">
            <p className="project-p">
              New projects are currently in development and will be featured
              here soon. Please check back later to explore my latest work.
            </p>
          </div>
        </div>
        <div className="Projects-bottom-container Project-cards">
          <div className="project-box bottom-project-box">
            <h2>Coming soon!</h2>
            <div className="img-div">
              <img
                className="project-image"
                src="/IMGs/image.png"
                alt="project screenshot"
                onClick={() => window.open("https://example.com/", "_blank")}
              />
            </div>
          </div>
          <div className="project-text bottom-project-text">
            <p className="project-p">
              New projects are currently in development and will be featured
              here soon. Please check back later to explore my latest work.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
