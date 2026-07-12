import styles from "./Contact.module.css";
import InquiryForm from "./InquiryForm";
import Reveal from "./Reveal";

const WHATSAPP_NUMBER = "918076904213"; // placeholder — replace with real number, digits only, country code first
const EMAIL = "sehgalaayu@gmail.com";
const PUNEET_EMAIL = "puneet@gmail.com";
const PUNEET_PHONE_DISPLAY = "+91 85708 91432";
const PUNEET_PHONE_TEL = "+918570891432";

export default function Contact() {
  return (
    <section id="inquire" className={styles.section}>
      <div className={styles.wrap}>
        <Reveal className={styles.copy}>
          <div className={`font-mono ${styles.label}`}>
            03 — Start a conversation
          </div>
          <h2 className={`font-display ${styles.heading}`}>
            Ask about samples, pricing, or a specific weave.
          </h2>
          <p className={styles.lede}>
            There&apos;s no cart and no obligation. Tell us a little about your
            shop and what you&apos;re looking for, and we&apos;ll reply
            personally — usually within a day.
          </p>
          <div className={`font-mono ${styles.details}`}>
            <div>
              <span className={styles.detailKey}>Email</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div>
              <span className={styles.detailKey}>Based</span>
              Panipat, Haryana, India
            </div>
            <div>
              <span className={styles.detailKey}>Ships</span>
              Direct to the UK &amp; EU
            </div>
          </div>
          <a
            className={`font-mono ${styles.whatsapp}`}
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Message us on WhatsApp →
          </a>

          <div className={styles.contactCards}>
            <div className={styles.contactCard}>
              <div className={`font-mono ${styles.contactRole}`}>UK &amp; sales — Aayu</div>
              <a className={styles.contactLine} href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </div>
            <div className={styles.contactCard}>
              <div className={`font-mono ${styles.contactRole}`}>Panipat &amp; production — Puneet</div>
              <a className={styles.contactLine} href={`mailto:${PUNEET_EMAIL}`}>
                {PUNEET_EMAIL}
              </a>
              <a className={styles.contactLine} href={`tel:${PUNEET_PHONE_TEL}`}>
                {PUNEET_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className={styles.formCol}>
          <InquiryForm />
        </Reveal>
      </div>
    </section>
  );
}
