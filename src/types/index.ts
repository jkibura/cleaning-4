import type { LucideIcon } from "lucide-react"

export interface navLink {
    label: string
    href: string
}

export interface NavLinks {
    home: navLink
    about: navLink
    services: navLink
}


// Hero Content
export interface CTALink {
    label: string
    href: string
}

export interface HeroContent {
    eyebrow: string
    title: string
    highlight?: string
    subtitle: string
    primaryCta: CTALink
    secondaryCta?: CTALink
    image?: {
        src: string
        alt: string
    }
}


// TrustBar Content
export interface TrustStat {
    value: string
    label: string
}

export interface TrustBarContent {
    heading?: string
    stats: TrustStat[]
}


// Services Content
export interface ServiceContent {
    id: string
    icon: LucideIcon
    title: string
    description: string
    price?: string
    popular?: boolean
}

export interface ServicesContent {
    heading?: string
    services: ServiceContent[]
}