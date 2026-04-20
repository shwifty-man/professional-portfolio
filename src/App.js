import "./Styles/App.css"
import "./Styles/Header.css"
import "./Styles/Home.css"
import "./Styles/About.css"
import "./Styles/Skills.css"
import "./Styles/Projects.css"
import "./Styles/Contact.css"
import "./Styles/Footer.css"
import "./Styles/App.scss"
import "./Components/Helpers/HandleButtons.js"
import Header from "./Components/MainContent/Header.js"
import Home from "./Components/MainContent/Home.js"
import About from "./Components/MainContent/About.js"
import Skills from "./Components/MainContent/Skills.js"
import Projects from "./Components/MainContent/Projects.js"
import Contact from "./Components/SideContent/Contact.js"
import Footer from "./Components/SideContent/Footer.js"
import { useEffect } from "react"
import { initHeaderAnimation } from "./Components/Helpers/gsap.js"

function App() {
  useEffect(() => {
    initHeaderAnimation()
  }, [])

  return (
    <>
      <div className="page-background">
        <div className="animation-wrapper">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>
      </div>

      <div className="App">
        <Header />
        <Home />
        {/* <About /> */}
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
