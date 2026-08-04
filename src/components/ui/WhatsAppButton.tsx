import { MessageCircle } from "lucide-react"
import styles from './WhatsAppButton.module.css'

const WhatsAppButton = () => {
  return (
    <a href="wa.me">
        <MessageCircle className={styles.floating}/>
    </a>
  )
}

export default WhatsAppButton