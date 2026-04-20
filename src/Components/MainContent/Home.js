import HandleLetsTalk from "../Helpers/HandleButtons.js"
import { GithubIcon, LinkedinIcon } from "../Icons.js"

function Home() {
  return (
    <section className="Main-body">
      <div className="Main-body-container">
        <div>
          <div className="Main-body-div-text">
            <h2>
              Hello, <span className="Main-body-im">I'm</span>
            </h2>
            <h1 className="Main-body-title">Timothy Williams</h1>
            <h2>Student in Full Stack Engineering</h2>
            <p>
              Passionate about building responsive, efficient, and user-friendly
              web applications.
            </p>
          </div>
          <button className="Main-body-div-button" onClick={HandleLetsTalk}>
            <span>Let's Talk</span>
          </button>
          <h3>Check out my</h3>
          <div className="Main-body-div-links">
            <div
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/timothy--c--williams",
                  "_blank",
                )
              }
            >
              <LinkedinIcon />
            </div>
            <div
              onClick={() =>
                window.open("https://github.com/shwifty-man", "_blank")
              }
            >
              <GithubIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
