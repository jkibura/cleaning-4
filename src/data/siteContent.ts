import heroImg from '../assets/hero.png'
import type { NavLinks, HeroContent, TrustBarContent } from '../types/index';

export const navLinks: NavLinks = {
    home: {
        label: 'Home',
        href: '#'
    },
    about: {
        label: 'About',
        href: '#'
    },
    services: {
        label: 'Services',
        href: '#'
    }
}

export const heroContent: HeroContent = {
    eyebrow: 'Premium Cleaning Services',
    title: 'Immaculate Spaces',
    highlight: 'Every Time',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    primaryCta: {
        label: 'Book Now',
        href: '#'
    },
    secondaryCta: {
        label: 'Learn More',
        href: '#'
    },
    image: {
        src: heroImg,
        alt: 'hero image'
    }
}

export const trustBarContent: TrustBarContent = {
    heading: 'Why Choose Us',
    stats: [
        {
            value: '4.9/5',
            label: 'Avrage Client Rating'
        },
        {
            value: '2000+',
            label: 'Homes Transformed'
        },
        {
            value: '12',
            label: 'Years of Expertise'
        },
        {
            value: '100%',
            label: 'Satisfaction Guarantee'
        }
    ]
}