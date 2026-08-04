
export interface navLink {
    label: string
    href: string
}

export interface NavLinks {
    home: navLink
    about: navLink
    services: navLink
}


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


export interface TrustStat {
    value: string
    label: string
}

export interface TrustBarContent {
    heading?: string
    stats: TrustStat[]
}