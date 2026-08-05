import styles from './Footer.module.css'
import type {  FooterContent } from "../../../types/index";

export type FooterProps = {
  content: FooterContent
}

const Footer = ({ content }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <strong>{content.brand.name}</strong>
          <p>{content.brand.description}</p>
        </div>

        <div className={styles.contact}>
          <p><strong>Contact</strong></p>
          <a href={`tel:${content.contact.phoneNumber}`}>{content.contact.phoneNumber}</a>
          <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
          {content.contact.address && <p>{content.contact.address}</p>}
        </div>

        <div className={styles.socials}>
          <p><strong>Follow</strong></p>
          {content.socials.facebook && <a href={content.socials.facebook} target="_blank" rel="noreferrer">Facebook</a>}
          {content.socials.instagram && <a href={content.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>}
          {content.socials.linkedin && <a href={content.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
        </div>
      </div>
      <p className={styles.copy}>{content.legal.copyright}</p>
    </footer>
  )
}

export default Footer