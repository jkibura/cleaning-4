import styles from './Testimonials.module.css'
import type { TestimonialsContent } from '../../../types/index'

interface TestimonialsProps {
  content: TestimonialsContent
}

const Testimonials = ({ content }: TestimonialsProps) => {
  return (
    <section id="reviews" className={styles.testimonials}>
      <div className={styles.headingGroup}>
        <h2>{content.heading}</h2>
      </div>

      <div className={styles.cards}>
        {content.testimonials.map(testimonial => (
          <article className={styles.card} key={testimonial.customer}>
            <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>
            <div className={styles.meta}>
              <p className={styles.customer}>{testimonial.customer}</p>
              <p className={styles.location}>{testimonial.location}</p>
            </div>
            <p className={styles.rating}>{testimonial.rating}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
