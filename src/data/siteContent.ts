import heroImg from '../assets/hero.png'
import type { NavLinks, HeaderContent, HeroContent, TrustBarContent, ServicesContent, FooterContent } from '../types/index';
import { Home, Sparkles, WashingMachine, Car, Warehouse, ShieldCheck } from 'lucide-react';

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

export const headerContent: HeaderContent = {
    brand: {
        name: 'Premium Cleaning Services',
        href: '#'
    },
    navLinks: navLinks,
    cta: {
        label: 'Book Now',
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
            label: 'Average Client Rating'
        },
        {
            value: '2,000+',
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

export const servicesContent: ServicesContent = {
    heading: 'Our Services',
    services: [
        {
            id: '1',
            icon: Home,
            title: 'Residential',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            price: 'from $129',
            popular: true
        },
        {
            id: '2',
            icon: Sparkles,
            title: 'Deep Cleaning',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            price: 'from $99'
        },
        {
            id: '3',
            icon: WashingMachine,
            title: 'Commercial / Laundry',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            price: 'from $99'
        },
        {
            id: '4',
            icon: Car,
            title: 'Car Detailing',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            price: 'from $99'
        },
        {
            id: '5',
            icon: Warehouse,
            title: 'Post Construction',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            price: 'from $99'
        },
        {
            id: '6',
            icon: ShieldCheck,
            title: 'Sanitization / Disinfection',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            price: 'from $99'
        }
    ]
}

export const footerContent: FooterContent = {
    brand: {
        name: 'Premium Cleaning Services',
        href: '#'
    },
    contact: {
        office: 'New York',
        phoneNumber: '123-456-7890',
        email: '2K3lP@example.com',
        address: '123 Main St, Anytown, USA'
    },
    socials: {
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/',
        twitter: 'https://twitter.com/',
        linkedin: 'https://www.linkedin.com/',
        youtube: 'https://www.youtube.com/',
        pinterest: 'https://www.pinterest.com/'
    },
    legal: {
        copyright: '© 2026 Premium Cleaning Services. All rights reserved.',
        terms: 'Terms & Conditions',
        privacy: 'Privacy Policy'
    }
}