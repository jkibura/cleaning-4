import type { HeroContent } from "../../../types/index";
import styles from "./Hero.module.css"

interface HeroProps {
    content: HeroContent
}

function Hero ( {content }: HeroProps ) {
    return (
        <div className={styles.hero}>
            <div className={styles["hero-content"]}>
                <p className={styles["eyebrow"]}>{content.eyebrow}</p>

                <h1 className={styles["title"]}>
                    {content.title}{' '}<span className={styles["highlight"]}>{content.highlight}</span>
                </h1>

                {content.subtitle && (
                    <p className={styles["subtitle"]}>{content.subtitle}</p>
                )}

                <div className={styles["cta-group"]}>
                    <button className={styles["cta-pri"]}>{content.primaryCta.label}</button>
                    {content.secondaryCta && (
                        <button className={styles["cta-sec"]}>{content.secondaryCta.label}</button>
                    )}
                </div>
            </div>

            <div className={styles["image"]}>
                {content.image && (
                    <img src={content.image?.src} alt={content.image?.alt} />
                )}
            </div>
        </div>
    )

}

export default Hero