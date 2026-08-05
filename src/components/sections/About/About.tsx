import styles from './About.module.css'
import type { AboutContent } from '../../../types/index'

interface AboutProps {
  content: AboutContent
}

const About = ({ content }: AboutProps) => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h2 className={styles.heading}>{content.heading}</h2>
        <p className={styles.description}>{content.description}</p>

        <ul className={styles.points}>
          {content.points.map(point => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <p className={styles.guarantee}>{content.guarantee}</p>
      </div>
    </section>
  )
}

export default About
