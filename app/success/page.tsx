import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Request Sent",
  description: "Your request has been received by Outlaw Industrial."
};

export default function SuccessPage() {
  return (
    <section className="section-dark hero">
      <div className="container hero-content">
        <div className="eyebrow-line">Request received</div>
        <h1>Thanks. We received your request.</h1>
        <p>
          Outlaw Industrial will review what you sent and follow up. If something
          is urgent, call us directly at 307-677-4232.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/#contact">
            Back to Contact
          </Link>
          <a className="button button-secondary" href="tel:+13076774232">
            Call 307-677-4232
          </a>
        </div>
      </div>
    </section>
  );
}
