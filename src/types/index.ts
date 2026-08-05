import type { LucideIcon } from "lucide-react"


// Header Content
export interface brand {
    name?: string
    logo?: string
    span?: string
    description?: string  //For footer
    href: string
}
export interface navLink {
    label: string
    href: string
}

export interface CTALink {
    label: string
    href: string
}

export interface NavLinks {
    home: navLink
    about: navLink
    services: navLink
}

export interface HeaderContent {
    brand: brand
    navLinks: NavLinks
    cta: CTALink
}



// Hero Content

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


//WhatsApp 
export interface WhatsAppConfig {
    phoneNumber: string
    message: string
    label?: string
}


//Footer
export interface contact {
    office?: string
    address?: string
    email: string
    phoneNumber: string
}

export interface socials {
    facebook?: string
    instagram?: string
    twitter?: string
    linkedin?: string
    youtube?: string
    pinterest?: string
}

export interface legal {
    copyright: string
    terms?: string
    privacy?: string
}

export interface FooterContent {
    brand: brand
    contact: contact
    socials: socials
    legal: legal
}