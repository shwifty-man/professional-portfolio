import './App.css';
import './gsap.js';
import './Header.css';
import './Home.css';
import './About.css';
import './Skills.css';
import './Projects.css';
import './Contact.css';
import './Footer.css';
import './App.scss';
import Header from './Header.js';
import Home from './Home.js';
import About from'./About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contact from'./Contact.js';
import Footer from'./Footer.js';

function App() {
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
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
