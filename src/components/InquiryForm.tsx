"use client";

import { useState, FormEvent } from "react";
import styles from "./InquiryForm.module.css";
import { supabase } from "@/lib/supabase";

const EMAIL = "hello@houseofsandg.com";
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

export default function InquiryForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Best-effort permanent record — notification below is what actually
    // alerts a human, so a Supabase hiccup should never block that.
    if (supabase) {
      try {
        await supabase.from("enquiries").insert({
          name: data.get("name"),
          shop: data.get("shop"),
          email: data.get("email"),
          interest: data.get("interest"),
          message: data.get("message"),
        });
      } catch {
        // swallow — the enquiry still gets emailed to us below
      }
    }

    if (FORM_ENDPOINT) {
      setSubmitting(true);
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("Submission failed");
        setSent(true);
      } catch {
        setError(true);
      } finally {
        setSubmitting(false);
      }
      return;
    }

    // No form backend configured yet — fall back to a prefilled email draft.
    const subject = `Wholesale inquiry — ${data.get("shop") || data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Shop: ${data.get("shop")}`,
      `Email: ${data.get("email")}`,
      `Interested in: ${data.get("interest")}`,
      "",
      `${data.get("message") || ""}`,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className={styles.confirm}>
        <div className={styles.confirmDot} />
        <h3 className={`font-display ${styles.confirmTitle}`}>Thank you — noted.</h3>
        <p className={styles.confirmBody}>
          {FORM_ENDPOINT
            ? "Your inquiry has been sent. We'll reply personally, usually within one working day."
            : "Your email client should have opened with your details filled in — send it across and we'll reply personally within a day."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="f-name" className={`font-mono ${styles.fieldLabel}`}>
          Your name
        </label>
        <input id="f-name" name="name" type="text" required className={styles.input} />
      </div>
      <div className={styles.field}>
        <label htmlFor="f-shop" className={`font-mono ${styles.fieldLabel}`}>
          Shop / boutique
        </label>
        <input id="f-shop" name="shop" type="text" className={styles.input} />
      </div>
      <div className={styles.field}>
        <label htmlFor="f-email" className={`font-mono ${styles.fieldLabel}`}>
          Email
        </label>
        <input id="f-email" name="email" type="email" required className={styles.input} />
      </div>
      <div className={styles.field}>
        <label htmlFor="f-interest" className={`font-mono ${styles.fieldLabel}`}>
          I&apos;m interested in
        </label>
        <select id="f-interest" name="interest" className={styles.input}>
          <option>A sample set</option>
          <option>Wholesale pricing</option>
          <option>A specific weave</option>
          <option>Custom / private label</option>
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor="f-msg" className={`font-mono ${styles.fieldLabel}`}>
          Anything else
        </label>
        <textarea id="f-msg" name="message" rows={3} className={styles.textarea} />
      </div>
      {error && (
        <p className={styles.error}>
          Something went wrong sending that — email {EMAIL} directly instead.
        </p>
      )}
      <button type="submit" disabled={submitting} className={styles.submit}>
        {submitting ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}
