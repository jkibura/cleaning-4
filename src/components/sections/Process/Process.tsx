import styles from './Process.module.css'
import type { ProcessContent } from '../../../types/index'

interface ProcessProps {
  content: ProcessContent
}

const Process = ({ content }: ProcessProps) => {
  return (
    <section id="process" className={styles.process}>
      <div className={styles.header}>
        <h2>{content.heading}</h2>
      </div>

      <div className={styles.steps}>
        {content.steps.map(step => (
          <article className={styles.step} key={step.title}>
            <div className={styles.marker}>{step.stage}</div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Process
