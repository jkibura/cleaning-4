import type { HeroContent } from "../../../types/index";
import styles from "./Hero.module.css"

interface HeroProps {
    content: HeroContent
}

function Hero({ content }: HeroProps) {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles['hero-content']}>
        <div className={styles['hero-text']}>
          <p className={styles['eyebrow']}>{content.eyebrow}</p>

          <h1 className={styles['title']}>
            {content.title}{' '}
            <span className={styles['highlight']}>{content.highlight}</span>
          </h1>

          {content.subtitle && <p className={styles['subtitle']}>{content.subtitle}</p>}

          <div className={styles['cta-group']}>
            <a className={styles['cta-pri']} href={content.primaryCta.href}>
              {content.primaryCta.label}
            </a>
            {content.secondaryCta && (
              <a className={styles['cta-sec']} href={content.secondaryCta.href}>
                {content.secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      
        <div className={styles['image']}>
          {content.image && <img src={content.image?.src} alt={content.image?.alt} />}
        </div>
        
      </div>
    </section>
  )
}

export default Hero