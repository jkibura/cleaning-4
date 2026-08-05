import { useState } from 'react'
import styles from './Header.module.css'
import type { HeaderContent } from "../../../types/index";

export interface HeaderProps {
  content: HeaderContent
}

const Header = ({ content }: HeaderProps) => {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <a href={content.brand.href} className={styles.brand}>
        {content.brand.name}
      </a>

      <nav className={styles.nav} aria-label="Primary navigation">
        {Object.entries(content.navLinks).map(([key, value]) => (
          <a className={styles.link} href={value.href} key={key}>
            {value.label}
          </a>
        ))}
      </nav>

      <a className={styles.cta} href={content.cta.href}>
        {content.cta.label}
      </a>

      <button
        type="button"
        className={styles.menuToggle}
        aria-expanded={open}
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setOpen(prev => !prev)}
      >
        {open ? 'Close' : 'Menu'}
      </button>

      <div className={`${styles.mobileNav} ${open ? styles.open : ''}`}>
        {Object.entries(content.navLinks).map(([key, value]) => (
          <a
            className={styles.link}
            key={key}
            href={value.href}
            onClick={() => setOpen(false)}
          >
            {value.label}
          </a>
        ))}
        <a className={styles.cta} href={content.cta.href} onClick={() => setOpen(false)}>
          {content.cta.label}
        </a>
      </div>
    </header>
  )
}

export default Header