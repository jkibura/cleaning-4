import styles from './Header.module.css'
import type { HeaderContent } from "../../../types/index";

export interface HeaderProps {
  content: HeaderContent
}

const Header = ( { content }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <a href={content.brand.href}>
        {content.brand.name}
      </a>

      <nav>
        {
          Object.entries(content.navLinks).map(([key, value]) => (
            <a href={value.href} key={key}>
              {value.label}
            </a>
          ))
        }
      </nav>

      <a href={content.cta.href}>{content.cta.label}</a>

      <button>
        <span></span>
      </button>

    </div>
  )
}

export default Header