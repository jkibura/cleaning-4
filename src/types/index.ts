
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