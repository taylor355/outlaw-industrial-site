export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <a className="wordmark" href="#top" aria-label="Outlaw Industrial home">
            <span>Outlaw</span>
            <span>Industrial</span>
          </a>
          <div>
            <span className="footer-label">Location</span>
            <p>Kemmerer, Wyoming</p>
            <p>Serving southwest Wyoming</p>
          </div>
          <div>
            <span className="footer-label">Contact</span>
            <p>
              <a href="tel:+13076774232">307-677-4232</a>
            </p>
            <p>
              <a href="mailto:will@outlawindustrial.com">will@outlawindustrial.com</a>
            </p>
          </div>
          <div>
            <span className="footer-label">Company</span>
            <p>Outlaw Industrial LLC</p>
            <p>Licensed and insured</p>
            <p>
              <a href="/privacy-policy">Privacy Policy</a>
            </p>
            <p>
              <a href="/sms-terms">SMS Terms</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Outlaw Industrial LLC</span>
          <span>Wyoming LLC · Industrial and commercial building services</span>
        </div>
      </div>
    </footer>
  );
}
