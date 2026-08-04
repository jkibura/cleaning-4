import styles from './Services.module.css'
import type { ServicesContent } from "../../../types/index";

export interface ServicesProps {
    content: ServicesContent
}

const Services = ( { content }: ServicesProps) => {
  return (
    <div className={styles.services}>
        {content.heading && (<h2 className={styles.heading}>{content.heading}</h2>)}

        <div className={styles.cards}>
            {content.services.map(service => (
                <div className={styles.service} key={service.id}>
                    <div className={styles.icon}><service.icon size={28}/></div>
                    <h3 className={styles.title}>{service.title}</h3>
                    <p className={styles.description}>{service.description}</p>
                    {service.price && (<p className={styles.price}>{service.price}</p>)}
                    {service.popular && (<p className={styles.popular}>Popular</p>)}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services