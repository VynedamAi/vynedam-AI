import React from "react";
import "./Legal.css";

export default function Terms() {
  return (
    <div className="legal-container">
      <h1>Terms of Service</h1>
      <p>Last updated: April 2026</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Vynedam AI. By accessing or using our platform, you agree
          to comply with these Terms of Service.
        </p>
      </section>

      <section>
        <h2>2. Use of Service</h2>
        <p>
          You agree to use the platform only for lawful purposes. You must not
          misuse, hack, or disrupt the system.
        </p>
      </section>

      <section>
        <h2>3. User Accounts</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account
          and any activities under it.
        </p>
      </section>

      <section>
        <h2>4. AI Generated Content</h2>
        <p>
          Vynedam AI provides AI-generated outputs. We do not guarantee accuracy,
          reliability, or completeness.
        </p>
      </section>

      <section>
        <h2>5. Limitation of Liability</h2>
        <p>
          We are not liable for any damages arising from use of the platform.
        </p>
      </section>

      <section>
        <h2>6. Changes to Terms</h2>
        <p>
          We may update these terms at any time. Continued use means acceptance.
        </p>
      </section>

      <section>
        <h2>7. Contact</h2>
        <p>Email: support@vynedam.ai</p>
      </section>
    </div>
  );
}