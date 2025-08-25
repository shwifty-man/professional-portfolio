import { useState } from "react"

function Contact() {
  const [status, setStatus] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("Sending...")

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    }

    try {
      const response = await fetch(
        "https://portfoliobackend.12thsoldier-08.workers.dev/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )

      if (response.ok) {
        setStatus("Message sent successfully!")
        e.target.reset()
      } else {
        setStatus("Failed to send message.")
      }
    } catch (error) {
      setStatus("Error sending message.")
      console.error(error)
    }
  }

  return (
    <>
      <h2 id="Contact-h2">Contact me</h2>
      <section className="Contact-container">
        <div className="Contact-text">
          <p>
            Have a question or want to work together? Leave your details <br />
            and I'll get back to you as soon as possible.
          </p>
        </div>
        <form className="Contact-message" onSubmit={handleSubmit}>
          <input placeholder="Name" type="text" required />
          <input placeholder="Email" type="email" required />
          <textarea placeholder="Message" required></textarea>
          <button className="submit-button" type="submit">
            <span>Submit</span>
          </button>
        </form>
        <p>{status}</p>
      </section>
    </>
  )
}

export default Contact
