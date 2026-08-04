import { MessageCircle } from "lucide-react"
import type { WhatsAppConfig } from "../../types/index";
import styles from './WhatsAppButton.module.css'

export interface WhatsAppButtonProps {
    content: WhatsAppConfig
}


const WhatsAppButton = ( { content }: WhatsAppButtonProps) => {

    
    const waLink = `https://wa.me/${content.phoneNumber}?text=${encodeURIComponent(content.message)}`

  return (
    <a href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={styles.floating}
        >
        <MessageCircle className={styles.icon} size={28}/>
    </a>
  )
}

export default WhatsAppButton