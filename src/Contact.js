
function Contact() {
    return (
      <>
        <h2 id="Contact-h2"> Contact me</h2>
        <section className="Contact-container">
          <div className="Contact-text">
            <p>
              Have a question or want to work together? Leave your details <br />
              and I'll get back to you as soon as possible.
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