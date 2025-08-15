
function Contact() {
    return (
      <>
        <h2 id="Contact-h2"> Contact me</h2>
        <section className="Contact-container">
          <div className="Contact-text">
            <p>
              Lorem ipsum is a dummy or placeholder text commonly used in
              graphic design, publishing, and web development.
            </p>
          </div>
          <form className="Contact-message">
            <input placeholder="Name"></input>
            <input placeholder="Email"></input>

            <textarea placeholder="Message"></textarea>
            <button className="submit-button" type="submit">
              <span>Submit</span>
            </button>
          </form>
        </section>
      </>
    )
}

export default Contact