import type { HeroContent } from "../../../types/index";
import styles from "./Hero.module.css"

interface HeroProps {
    content: HeroContent
}

function Hero ( { content}: HeroProps ) {
    return (
        <div className={styles.hero}>
            <div className={styles["hero-content"]}>
                <p className={styles["eyebrow"]}>{content.eyebrow}</p>
                <div className={styles["title-group"]}>
                    <h1 className={styles["title"]}>{content.title}</h1>
                    <span className={styles["highlight"]}>{content.highlight}</span>
                </div>
                <h1 className={styles["title"]}>
                    {content.title} <span className={styles["highlight"]}>{content.highlight}</span></h1>
                <p className={styles["subtitle"]}>{content.subtitle}</p>
                <div className={styles["cta-group"]}>
                    <button className={styles["pri-btn"]}>{content.primaryCta.label}</button>
                    <button className={styles["sec-btn"]}>{content.secondaryCta?.label}</button>
                </div>
            </div>
            <div>
                <img src={content.image?.src} alt={content.image?.alt} />
            </div>
        </div>
    )

}

export default Hero