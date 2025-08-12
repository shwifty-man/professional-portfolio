function Header() {
  return (
    <header className="Header">
      <div className="Header-title">
        <h2 className="Header-h2-name">Timothy Williams</h2>
      </div>
      <div>
        <h2 className="Header-a">
          <a href=":root">Home</a>
        </h2>
      </div>
      <div>
        <h2 className="Header-a">
          <a href="#Skills-h2">Skills</a>
        </h2>
      </div>
      <div>
        <h2 className="Header-a Header-projects">
          <a href="#Projects-h2">View my work</a>
        </h2>
      </div>
      <div>
        <h2 className="Header-a">
          <a href="#Contact-h2">Contact</a>
        </h2>
      </div>
    </header>
  )
}

export default Header
