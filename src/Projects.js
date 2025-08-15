function Projects() {
  return (
    <>
      <h2 id="Projects-h2">
        My Work <span className="Main-body-im h2-arrow">↓</span>
      </h2>
      <section className="Projects-container">
        <div className="Projects-top-container Project-cards">
          <div className="project-box top-project-box">
            <h2>Project Name</h2>
            <div className="img-div">
              <img
                className="project-image"
                src="/IMGs/image.png"
                alt="project screenshot"
              />
            </div>
          </div>
          <div className="project-text">
            <p className="project-p">
              Lorem ipsum is a dummy or placeholder text commonly used in
              graphic design, publishing, and web development. Its purpose is to
              permit a page layout to be designed
            </p>
          </div>
        </div>
        <div className="Projects-bottom-container Project-cards">
          <div className="project-box bottom-project-box">
            <h2>Project Name</h2>
            <div className="img-div">
              <img
                className="project-image"
                src="/IMGs/image.png"
                alt="project screenshot"
              />
            </div>
          </div>
          <div className="project-text bottom-project-text">
            <p className="project-p">
              Lorem ipsum is a dummy or placeholder text commonly used in
              graphic design, publishing, and web development. Its purpose is to
              permit a page layout to be designed
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
