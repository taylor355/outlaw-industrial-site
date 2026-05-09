"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const encodedData = new URLSearchParams();

    formData.forEach((value, key) => {
      encodedData.append(key, value.toString());
    });

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData.toString()
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <form className="contact-form" name="quote-request" method="POST" onSubmit={handleSubmit}>
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
      <button className="button button-primary" type="submit" disabled={submitState === "submitting"}>
        {submitState === "submitting" ? "Sending..." : "Send Request"}
      </button>
      {submitState === "success" ? (
        <p className="form-status">Thanks. Your request was sent.</p>
      ) : null}
      {submitState === "error" ? (
        <p className="form-status form-status-error">
          Something went wrong. Please call 307-677-4232 or email will@outlawindustrial.com.
        </p>
      ) : null}
    </form>
  );
}
