import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Outlaw Industrial privacy policy for customer information, service communications, and SMS consent."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="section-dark page-hero">
        <div className="container">
          <div className="eyebrow-line">Privacy Policy</div>
          <h1>Customer information stays tied to customer service.</h1>
          <p>
            Outlaw Industrial LLC uses customer information to respond to facility
            service requests, coordinate active work, and communicate with customers
            who choose to contact us.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container policy-layout">
          <aside className="policy-summary">
            <span className="section-label">Last updated</span>
            <p>May 31, 2026</p>
            <span className="section-label">Company</span>
            <p>Outlaw Industrial LLC</p>
            <span className="section-label">Contact</span>
            <p>
              <a href="mailto:will@outlawindustrial.com">will@outlawindustrial.com</a>
            </p>
            <p>
              <a href="tel:+13076774232">307-677-4232</a>
            </p>
          </aside>

          <div className="policy-copy">
            <section>
              <h2>Information we collect</h2>
              <p>
                We may collect your name, company name, email address, phone number,
                service address or general location, and the details you choose to
                provide about janitorial, supply, maintenance, or facility service
                needs.
              </p>
              <p>
                If you call, text, email, or submit a form, we may keep records of
                that communication so we can respond, provide service, schedule work,
                answer questions, and maintain accurate customer history.
              </p>
            </section>

            <section>
              <h2>How we use information</h2>
              <p>
                We use customer information to respond to inquiries, provide quotes,
                coordinate service, deliver supplies, schedule site visits, resolve
                account questions, and communicate about work that a customer has
                requested or is already receiving.
              </p>
              <p>
                Outlaw Industrial does not use text messaging for promotional or
                marketing campaigns. Text messages are used for customer care,
                customer-initiated conversations, service coordination, scheduling,
                and account-related communication.
              </p>
            </section>

            <section>
              <h2>SMS consent and phone numbers</h2>
              <p>
                If you text Outlaw Industrial, ask us to contact you by text, or
                choose SMS communication through a form or direct conversation, we may
                reply by text about your request or active service relationship.
              </p>
              <p>
                Mobile phone numbers, SMS opt-in records, and SMS consent details are
                not sold, rented, or shared with third parties or affiliates for their
                own marketing or promotional purposes. SMS opt-in data and consent are
                used only to support Outlaw Industrial customer communications and the
                service providers necessary to deliver those messages.
              </p>
            </section>

            <section>
              <h2>When information may be shared</h2>
              <p>
                We may share limited information with service providers who help us
                operate the business, such as website hosting, form processing,
                phone and messaging systems, scheduling, accounting, or customer
                support tools. These providers are used to perform services for
                Outlaw Industrial and are not authorized by us to use customer
                information for unrelated marketing.
              </p>
              <p>
                We may also disclose information if required by law, to protect our
                rights, to prevent misuse of our services, or as part of a legitimate
                business transfer involving Outlaw Industrial.
              </p>
            </section>

            <section>
              <h2>Your choices</h2>
              <p>
                You can opt out of SMS messages at any time by replying STOP. You may
                reply HELP for assistance, call us at 307-677-4232, or email{" "}
                <a href="mailto:will@outlawindustrial.com">will@outlawindustrial.com</a>.
              </p>
              <p>
                You may also contact us to request an update or correction to your
                customer contact information.
              </p>
            </section>

            <section>
              <h2>SMS terms</h2>
              <p>
                Our customer text message terms are available at{" "}
                <Link href="/sms-terms">outlawindustrial.com/sms-terms</Link>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
