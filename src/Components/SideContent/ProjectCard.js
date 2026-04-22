export function ProjectCard({Url, image, title, description}) {
    return (
      <div className="Projects-top-container Project-cards">
        <div className="project-box top-project-box">
          <h2>{title}</h2>
          <div className="img-div">
            <img
              className="project-image"
              src={image}
              alt="project screenshot"
              onClick={() => window.open(Url, "_blank")}
            />
          </div>
        </div>
        <div className="project-text">
          <p className="project-p">{description}</p>
        </div>
      </div>
    )
}