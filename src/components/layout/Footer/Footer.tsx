import styles from './Footer.module.css'
import type {  FooterContent } from "../../../types/index";

export type FooterProps = {
  content: FooterContent
}

const Footer = ( { content }: FooterProps) => {
  return (
    <div className={styles.footer}>
      <div>
        <strong>{content.brand.name}</strong>
        <p>{content.brand.description}</p>
      </div>
      <div>
        <p></p>
        <p></p>
      </div>
      <div>
        <p>{content.legal.copyright}</p>
      </div>
    </div>
  )
}

export default Footer