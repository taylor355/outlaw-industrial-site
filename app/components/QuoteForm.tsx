export function QuoteForm() {
  return (
    <form
      className="contact-form"
      name="quote-request"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/success"
    >
      <input type="hidden" name="form-name" value="quote-request" />
      <p hidden>
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className="field-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">What can we help with?</label>
        <textarea id="message" name="message" required />
      </div>
      <button className="button button-primary" type="submit">
        Send Request
      </button>
    </form>
  );
}
