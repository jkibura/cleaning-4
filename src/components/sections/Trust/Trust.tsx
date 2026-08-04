import type { TrustBarContent } from "../../../types/index";
import styles from './Trust.module.css'

export interface TrustProps {
    content: TrustBarContent
}

function Trust ( { content } : TrustProps ) {
    return (
        <div className={styles.trust}>
            {content.heading && (
                <h2 className={styles.heading}>{content.heading}</h2>
            )}
            <div className={styles.stats}>
                {content.stats.map(stat => (
                    <div className={styles.stat} key={stat.label}>
                        <p className={styles.value}>{stat.value}</p>
                        <p className={styles.label}>{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trust