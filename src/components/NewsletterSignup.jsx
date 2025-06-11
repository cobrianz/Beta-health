import React from "react";

export default function NewsletterSignup() {
  return (
    <section className="newsletter-section">
      <h2 className="newsletter-title">Subscribe to the updates!</h2>
      <p className="newsletter-description">
        Sign up to our newsletter and be the first to know about the latest
        news, special offers, events, and discounts.
      </p>
      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Your email address"
          className="newsletter-input"
        />
        <button type="submit" className="newsletter-button">
          Subscribe
        </button>
      </form>
    </section>
  );
}
