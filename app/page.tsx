import { CTA } from "./components/CTA";
import { QuoteForm } from "./components/QuoteForm";
import { WyomingMap } from "./contact/wyoming-map";

const outcomes = [
  {
    title: "Keep facilities running",
    text: "Cleaning programs and supply schedules built around active operations."
  },
  {
    title: "Catch problems early",
    text: "Crews inside the facility can flag needs before they become larger issues."
  },
  {
    title: "Proactively maintain",
    text: "Recurring service creates consistency across the spaces people rely on."
  },
  {
    title: "Maintain a strong work environment",
    text: "Clean, stocked facilities support the people who keep the operation moving."
  }
];

const janitorial = [
  "Daily and recurring cleaning",
  "Restroom servicing and restocking",
  "Floor care and refinishing",
  "Carpet cleaning",
  "Window cleaning",
  "Trash and recycling handling",
  "After-hours and weekend service",
  "One-time and post-construction cleaning"
];

const supply = [
  "Cleaning chemicals and solutions",
  "Paper goods and dispensers",
  "Trash bags and liners",
  "Hand soap and sanitizer",
  "Floor pads and equipment supplies",
  "PPE and safety supplies",
  "Custom orders for facility needs",
  "Recurring scheduled delivery"
];

const operating = [
  {
    title: "Safety orientation",
    text: "Crews are prepared for site-specific safety requirements."
  },
  {
    title: "Compliance",
    text: "Documentation, insurance, and licensing are handled with care."
  },
  {
    title: "Live-facility work",
    text: "Cleaning programs are scheduled around operations, not the other way around."
  },
  {
    title: "Secured access",
    text: "Badging, access protocols, and facility expectations are treated seriously."
  }
];

const industries = [
  {
    number: "01",
    title: "Power generation",
    text: "Cleaning programs and supply for power plants and energy generation facilities. Designed around plant operations, scheduled outages, and the access protocols that come with critical infrastructure."
  },
  {
    number: "02",
    title: "Mining",
    text: "Industrial cleaning and supply for mining operations across southwest Wyoming. Built for facilities where uptime matters and vendors need to operate around active worksites."
  },
  {
    number: "03",
    title: "Oil refining",
    text: "Janitorial and supply services for refining operations. Scheduled for facilities where safety standards are non-negotiable and operations do not stop."
  },
  {
    number: "04",
    title: "Government and state facilities",
    text: "Cleaning and supply programs for federal, state, and municipal buildings. Professional crews, clear communication, and documentation that supports public-sector requirements."
  },
  {
    number: "05",
    title: "Commercial office",
    text: "Recurring cleaning programs for commercial office buildings. Professional appearance, consistent quality, and scheduling that respects tenant operations."
  }
];

const principles = [
  {
    title: "Take pride in your work.",
    text: "Show up, provide good work, and stand behind it. The job is the proof."
  },
  {
    title: "Finish what you start.",
    text: "A walkthrough is a promise. A bid is a promise. A contract is a promise. We deliver what we said we would."
  },
  {
    title: "Talk less. Say more.",
    text: "Plain dealing over salesmanship. Specific answers over vague claims. The work speaks for itself."
  },
  {
    title: "Ride for the brand.",
    text: "Every crew member represents the company. We hire people who carry that responsibility well."
  }
];

export default function Home() {
  return (
    <>
      <section id="top" className="section-dark hero anchor-section">
        <div className="container hero-content">
          <div className="eyebrow-line">Serving southwest Wyoming since 2002</div>
          <h1>Industrial and commercial building services.</h1>
          <p>
            Outlaw Industrial provides maintenance support, janitorial services,
            and product supply for power plants, mines, refineries, government
            facilities, and commercial offices across southwest Wyoming.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Request a Quote
            </a>
            <a className="button button-secondary" href="#services">
              View Services
            </a>
          </div>
        </div>
      </section>

      <section aria-label="Company proof points">
        <div className="container stats-grid">
          <div className="stat">
            <span className="stat-label">Serving southwest Wyoming since</span>
            <span className="stat-value">2002</span>
          </div>
          <div className="stat">
            <span className="stat-label">Team members</span>
            <span className="stat-value">30+</span>
          </div>
          <div className="stat">
            <span className="stat-label">Industries served</span>
            <span className="stat-value">5</span>
          </div>
        </div>
      </section>

      <section id="services" className="section anchor-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">Services</span>
            <div>
              <h2>What we provide today.</h2>
              <p>
                Two service lines for facilities that need consistency: commercial
                janitorial programs and product supply.
              </p>
            </div>
          </div>

          <div className="split-row" style={{ marginTop: "clamp(54px, 8vw, 90px)" }}>
            <div>
              <span className="row-number">01</span>
              <h3 className="row-title">Commercial Janitorial</h3>
            </div>
            <div className="row-content">
              <p>
                Recurring cleaning programs for industrial sites, office buildings,
                and government facilities. Trained crews, consistent quality,
                after-hours availability, and schedules built around the way your
                facility operates.
              </p>
              <ul className="feature-list" aria-label="Commercial janitorial services">
                {janitorial.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="callout">
                <strong>Who it is for</strong>
                <p>
                  Power plants, mines, refineries, government and state facilities,
                  and commercial offices that need consistent, professional cleaning
                  programs from a vendor that understands live facilities.
                </p>
              </div>
            </div>
          </div>

          <div className="split-row">
            <div>
              <span className="row-number">02</span>
              <h3 className="row-title">Product Supply</h3>
            </div>
            <div className="row-content">
              <p>
                Cleaning products, paper goods, and facility consumables delivered
                on a schedule that matches how your facility runs. Stocked correctly,
                delivered on time, billed clearly.
              </p>
              <ul className="feature-list" aria-label="Product supply categories">
                {supply.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="callout">
                <strong>How it works</strong>
                <p>
                  Available bundled with janitorial service or as a standalone supply
                  program. We learn your facility&apos;s usage patterns and help keep
                  you stocked without unnecessary back-and-forth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bone">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">What we are built for</span>
            <div>
              <h2>Facilities need more than a cleaner.</h2>
              <p>
                They need a vendor that understands operations, schedules, people,
                and the standard expected inside commercial and industrial spaces.
              </p>
            </div>
          </div>
          <div className="outcomes-grid">
            {outcomes.map((outcome) => (
              <article className="outcome" key={outcome.title}>
                <h3>{outcome.title}</h3>
                <p>{outcome.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="section section-dark anchor-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">Industries</span>
            <div>
              <h2 style={{ color: "var(--white)" }}>Where we work.</h2>
              <p style={{ color: "#d8d2c6" }}>
                Outlaw Industrial operates inside live industrial and commercial
                facilities across southwest Wyoming. Each one comes with its own
                access requirements, safety standards, and operating windows.
              </p>
            </div>
          </div>
          <div className="operate-grid">
            {operating.map((item) => (
              <article className="operate-item dark-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="map-panel map-panel-dark">
            <WyomingMap tone="dark" />
            <div className="map-copy">
              <span className="section-label">Service Area</span>
              <p>
                Primary service communities include Kemmerer, Evanston, Rock
                Springs, Green River, Lyman, Diamondville, and nearby industrial
                and commercial facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bone">
        <div className="container">
          {industries.map((industry) => (
            <div className="split-row" key={industry.title}>
              <div>
                <span className="row-number">{industry.number}</span>
                <h3 className="row-title">{industry.title}</h3>
              </div>
              <div className="row-content">
                <p>{industry.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section anchor-section">
        <div className="container split-row">
          <div>
            <span className="section-label">About</span>
            <h2 className="row-title">Built in Wyoming. Run by Wyoming.</h2>
          </div>
          <div className="article-copy">
            <p>
              Outlaw Industrial was founded in 2002 by Kristi and Scott MaGee,
              longtime Kemmerer locals who built the business from the ground up.
              For over two decades, they provided cleaning programs and facility
              supplies to power plants, mines, refineries, government facilities,
              and commercial offices across southwest Wyoming.
            </p>
            <p>
              In 2026, ownership transitioned to Will and Paige Barker, longtime
              Evanston locals who wanted to stay invested in southwest Wyoming. The
              crew, the relationships, and the standard stay the same. What is
              changing is the scope. Outlaw Industrial is built to grow into broader
              building and facility services over time.
            </p>
            <p>
              Outlaw Industrial has more than 30 team members operating across
              southwest Wyoming. Many have been with the company for years. They are
              trained, dependable, and trusted to represent the company inside
              customer facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-bone">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">The Code of the West</span>
            <div>
              <h2>A practical standard.</h2>
              <p>
                The Code of the West is not decoration for us. It is a plain way to
                talk about how work should be handled: practical, direct, and honest.
              </p>
            </div>
          </div>
          <div className="principles-grid">
            {principles.map((principle) => (
              <article className="principle" key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      <section id="contact" className="section anchor-section">
        <div className="container contact-layout">
          <div>
            <span className="section-label">Contact</span>
            <h2 className="row-title">Tell us about your facility.</h2>
            <p style={{ color: "var(--muted)", marginTop: 22 }}>
              Keep it simple. Tell us who you are and what you need help with.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="section section-bone">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-item">
              <span className="section-label">Call</span>
              <a href="tel:+13076774232">307-677-4232</a>
              <p>Call directly to talk through your facility needs.</p>
            </div>
            <div className="contact-item">
              <span className="section-label">Email</span>
              <a href="mailto:will@outlawindustrial.com">will@outlawindustrial.com</a>
              <p>Send a note and we will follow up.</p>
            </div>
            <div className="contact-item">
              <span className="section-label">Location</span>
              <strong>Kemmerer, Wyoming</strong>
              <p>Serving southwest Wyoming and the surrounding region.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
