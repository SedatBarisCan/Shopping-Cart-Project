function ContactPage() {

  return (
    <main className="contact-page">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Fill out the form below or reach out directly.</p>

      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>

        <label>
          Email:
          <input type="email" name="email" required />
        </label>

        <label>
          Message:
          <textarea name="message" rows="5" required />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </main>
  )
}

export default ContactPage
