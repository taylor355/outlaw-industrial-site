import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMS Terms",
  description:
    "Customer care SMS terms for Outlaw Industrial service-related text messaging."
};

export default function SmsTermsPage() {
  return (
    <>
      <section className="section-dark page-hero">
        <div className="container">
          <div className="eyebrow-line">SMS Terms</div>
          <h1>Texting is for customer service, not marketing.</h1>
          <p>
            Outlaw Industrial LLC uses SMS to respond to customers, coordinate
            requested work, and support active customer relationships.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container policy-layout">
          <aside className="policy-summary">
            <span className="section-label">Last updated</span>
            <p>May 31, 2026</p>
            <span className="section-label">Messaging type</span>
            <p>Customer care and service coordination</p>
            <span className="section-label">Support</span>
            <p>
              <a href="tel:+13076774232">307-677-4232</a>
            </p>
            <p>
              <a href="mailto:will@outlawindustrial.com">will@outlawindustrial.com</a>
            </p>
          </aside>

          <div className="policy-copy">
            <section>
              <h2>Program description</h2>
              <p>
                Outlaw Industrial text messages are used for customer care. Messages
                may include replies to customer questions, quote follow-up, service
                scheduling, site visit coordination, supply delivery coordination,
                account questions, and updates related to services a customer has
                requested or is receiving.
              </p>
              <p>
                We do not use SMS for advertising blasts, coupons, promotional
                campaigns, lead nurturing, or unrelated marketing.
              </p>
            </section>

            <section>
              <h2>Consent to receive texts</h2>
              <p>
                By texting Outlaw Industrial, asking us to text you, providing your
                mobile number for service-related contact, or selecting an SMS consent
                option on our website, you agree that Outlaw Industrial may send
                customer care text messages to that mobile number.
              </p>
              <p>
                Consent is not a condition of purchase. You can continue to work with
                us by phone or email if you prefer not to receive text messages.
              </p>
            </section>

            <section>
              <h2>Message frequency and charges</h2>
              <p>
                Message frequency varies based on your request, active service needs,
                and the conversation you start with us. Message and data rates may
                apply according to your mobile carrier plan.
              </p>
            </section>

            <section>
              <h2>Opt out and help</h2>
              <p>
                You may opt out of SMS messages at any time by replying STOP. After
                you send STOP, we will send a confirmation text and will stop sending
                SMS messages unless you later ask us to text you again.
              </p>
              <p>
                For help, reply HELP, call 307-677-4232, or email{" "}
                <a href="mailto:will@outlawindustrial.com">will@outlawindustrial.com</a>.
              </p>
            </section>

            <section>
              <h2>Privacy and data sharing</h2>
              <p>
                We do not sell or rent mobile numbers. Mobile phone numbers, SMS
                opt-in records, and SMS consent details are not shared with third
                parties or affiliates for their own marketing or promotional use.
                SMS consent information is used only for Outlaw Industrial customer
                communications and the service providers necessary to deliver those
                communications.
              </p>
              <p>
                Our full privacy policy is available at{" "}
                <Link href="/privacy-policy">outlawindustrial.com/privacy-policy</Link>.
              </p>
            </section>

            <section>
              <h2>Carrier disclaimer</h2>
              <p>
                Wireless carriers are not liable for delayed or undelivered messages.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
