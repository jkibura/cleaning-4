import styles from './Contact.module.css'
import type { ContactContent } from '../../../types/index'

interface ContactProps {
  content: ContactContent
}

const Contact = ({ content }: ContactProps) => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.wrapper}>
        <div className={styles.details}>
          <h2>{content.heading}</h2>
          <p>{content.description}</p>

          <div className={styles.list}>
            <div className={styles.detailItem}>
              <strong>Phone</strong>
              <a href={`tel:${content.phone}`}>{content.phone}</a>
            </div>
            <div className={styles.detailItem}>
              <strong>Email</strong>
              <a href={`mailto:${content.email}`}>{content.email}</a>
            </div>
            <div className={styles.detailItem}>
              <strong>Service Area</strong>
              <p>{content.area}</p>
            </div>
          </div>
        </div>

        <div className={styles.form}>
          <h2>Request a quote</h2>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" placeholder="Jane Doe" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" placeholder="jane@example.com" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="details">Service details</label>
              <textarea id="details" placeholder="Tell us about your home or office" />
            </div>
            <button type="submit" className={styles.submit}>Send request</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
