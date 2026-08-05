import styles from './Pricing.module.css'
import type { PricingContent } from '../../../types/index'

interface PricingProps {
  content: PricingContent
}

const Pricing = ({ content }: PricingProps) => {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.header}>
        <h2>{content.heading}</h2>
        <p>{content.description}</p>
      </div>

      <div className={styles.packages}>
        {content.packages.map(pkg => (
          <article className={`${styles.package} ${pkg.highlight ? styles.highlight : ''}`} key={pkg.id}>
            <div className={styles.top}>
              <h3>{pkg.name}</h3>
              <p className={styles.price}>{pkg.price}</p>
            </div>
            <ul className={styles.features}>
              {pkg.features.map(feature => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a className={styles.cta} href="#contact">Book this package</a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Pricing
