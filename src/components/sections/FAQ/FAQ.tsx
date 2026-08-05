import styles from './FAQ.module.css'
import type { FAQContent } from '../../../types/index'

interface FAQProps {
  content: FAQContent
}

const FAQ = ({ content }: FAQProps) => {
  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.header}>
        <h2>{content.heading}</h2>
      </div>

      <div className={styles.items}>
        {content.items.map(item => (
          <details className={styles.item} key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FAQ
