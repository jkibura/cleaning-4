import type { IconType } from "react-icons"
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
    [key: string]: navLink
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


export interface AboutContent {
    eyebrow: string
    heading: string
    description: string
    points: string[]
    guarantee: string
}

export interface ProcessStep {
    stage: string
    title: string
    description: string
}

export interface ProcessContent {
    heading: string
    steps: ProcessStep[]
}

export interface Testimonial {
    quote: string
    customer: string
    location: string
    rating: string
}

export interface TestimonialsContent {
    heading: string
    testimonials: Testimonial[]
}

export interface PricingPackage {
    id: string
    name: string
    price: string
    features: string[]
    highlight?: boolean
}

export interface PricingContent {
    heading: string
    description: string
    packages: PricingPackage[]
}

export interface FAQItem {
    question: string
    answer: string
}

export interface FAQContent {
    heading: string
    items: FAQItem[]
}

export interface ContactContent {
    heading: string
    description: string
    phone: string
    email: string
    area?: string
}

//WhatsApp 
export interface WhatsAppConfig {
    phoneNumber: string
    message: string
    label?: string
}


//Footer
export interface SocialLink {
    icon: IconType
    href: string
    arialabel?: string
}

export interface contact {
    office?: string
    address?: string
    email: string
    phoneNumber: string
}

export interface socials {
    facebook?: SocialLink
    instagram?: SocialLink
    twitter?: SocialLink
    linkedin?: SocialLink
    youtube?: SocialLink
    pinterest?: SocialLink
}

export interface legal {
    copyright: string
    terms?: string
    privacy?: string
    termsHref?: string
    privacyHref?: string
}

export interface FooterContent {
    brand: brand
    contact: contact
    socials: socials
    legal: legal
}