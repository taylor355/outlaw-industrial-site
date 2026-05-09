export function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <span className="section-label">Request a Quote</span>
          <h2>Tell us about your facility.</h2>
          <p>
            Most of our work starts with a walkthrough. Send a request and we will
            follow up.
          </p>
        </div>
        <div className="cta-actions">
          <a className="button button-primary" href="#contact">
            Request a Quote
          </a>
          <a className="phone-note" href="tel:+13076774232">
            Or call 307-677-4232
          </a>
        </div>
      </div>
    </section>
  );
}
