import heroImg from '../assets/clean-unsplash.jpg'
import type {
  NavLinks,
  HeaderContent,
  HeroContent,
  TrustBarContent,
  ServicesContent,
  FooterContent,
  AboutContent,
  ProcessContent,
  TestimonialsContent,
  PricingContent,
  FAQContent,
  ContactContent,
} from '../types/index'
import { Home, Sparkles, WashingMachine, Warehouse, ShieldCheck } from 'lucide-react'

export const navLinks: NavLinks = {
  home: {
    label: 'Home',
    href: '#home',
  },
  about: {
    label: 'About',
    href: '#about',
  },
  services: {
    label: 'Services',
    href: '#services',
  },
  process: {
    label: 'How It Works',
    href: '#process',
  },
  reviews: {
    label: 'Reviews',
    href: '#reviews',
  },
  pricing: {
    label: 'Pricing',
    href: '#pricing',
  },
  faq: {
    label: 'FAQ',
    href: '#faq',
  },
  contact: {
    label: 'Contact',
    href: '#contact',
  },
}

export const headerContent: HeaderContent = {
  brand: {
    name: 'Harbor City Elite Cleaning',
    href: '#home',
  },
  navLinks,
  cta: {
    label: 'Book Now',
    href: '#contact',
  },
}

export const heroContent: HeroContent = {
  eyebrow: 'Luxury cleaning for South Florida homes and offices',
  title: 'Clean, calm, confident spaces',
  highlight: 'delivered every visit',
  subtitle:
    'Harbor City Elite Cleaning provides insured teams, white-glove attention, and a 100% satisfaction guarantee across Miami, Fort Lauderdale, and Palm Beach.',
  primaryCta: {
    label: 'Request a quote',
    href: '#contact',
  },
  secondaryCta: {
    label: 'See packages',
    href: '#pricing',
  },
  image: {
    src: heroImg,
    alt: 'Cleaning professional preparing a luxury living space',
  },
}

export const trustBarContent: TrustBarContent = {
  heading: 'Trusted by South Florida homes and businesses',
  stats: [
    {
      value: '4.9/5',
      label: 'average rating',
    },
    {
      value: '3,500+',
      label: 'cleanings completed',
    },
    {
      value: '10+',
      label: 'years serving the region',
    },
    {
      value: '100%',
      label: 'satisfaction guarantee',
    },
  ],
}

export const servicesContent: ServicesContent = {
  heading: 'Services designed for premium spaces',
  services: [
    {
      id: '1',
      icon: Home,
      title: 'Residential Cleaning',
      description:
        'Ongoing home cleaning for kitchens, bathrooms, living areas, and bedrooms, designed for busy South Florida households.',
      price: 'from $159',
      popular: true,
    },
    {
      id: '2',
      icon: Sparkles,
      title: 'Deep Refresh',
      description:
        'A full deep clean that restores your home with attention to baseboards, vents, and high-touch surfaces.',
      price: 'from $249',
    },
    {
      id: '3',
      icon: WashingMachine,
      title: 'Office & Commercial',
      description:
        'Professional cleaning for offices and commercial spaces that keeps your workplace healthy and presentable.',
      price: 'from $189',
    },
    {
      id: '4',
      icon: Warehouse,
      title: 'Move-In / Move-Out',
      description:
        'Move-ready service for apartments and homes, delivering a spotless finish for every transition.',
      price: 'from $279',
    },
    {
      id: '5',
      icon: ShieldCheck,
      title: 'Disinfection',
      description:
        'EPA-approved sanitization for homes and businesses, ideal for shared spaces and high-traffic areas.',
      price: 'from $299',
    },
  ],
}

export const footerContent: FooterContent = {
  brand: {
    name: 'Harbor City Elite Cleaning',
    href: '#home',
    description:
      'South Florida’s luxury cleaning partner for homes, offices, and rentals with insured teams and a satisfaction guarantee.',
  },
  contact: {
    office: 'Miami, FL',
    phoneNumber: '+15551234567',
    email: 'hello@harborcityclean.com',
    address: 'Serving South Florida communities',
  },
  socials: {
    facebook: 'https://www.facebook.com/HarborCityEliteCleaning',
    instagram: 'https://www.instagram.com/harborcityeliteclean',
    linkedin: 'https://www.linkedin.com/company/harbor-city-elite-cleaning',
  },
  legal: {
    copyright: '© 2026 Harbor City Elite Cleaning. All rights reserved.',
    terms: 'Terms & Conditions',
    privacy: 'Privacy Policy',
  },
}

export const aboutContent: AboutContent = {
  eyebrow: 'Premium care, trusted teams',
  heading: 'Built for homeowners and businesses who expect more',
  description:
    'Harbor City Elite Cleaning pairs local expertise with insured teams, white-glove attention, and flexible scheduling for every premium property.',
  points: [
    'Background-screened, uniformed professionals with luxury cleaning standards',
    'Fully insured service for homes, offices, and rental properties',
    'Concierge booking and arrival windows for reliable service',
    'Eco-conscious products and careful handling of upscale finishes',
  ],
  guarantee:
    'If anything is missed, we return within 24 hours at no extra charge — guaranteed.',
}

export const processContent: ProcessContent = {
  heading: 'How it works',
  steps: [
    {
      stage: 'Book',
      title: 'Select your premium clean',
      description:
        'Choose a package, share your details, and pick a convenient date for your service.',
    },
    {
      stage: 'Clean',
      title: 'Our insured team arrives',
      description:
        'We show up on time with premium supplies and a clear room-by-room plan.',
    },
    {
      stage: 'Enjoy',
      title: 'Relax in a refreshed space',
      description:
        'Review the results, and let us know if anything needs touch-up within 24 hours.',
    },
  ],
}

export const testimonialsContent: TestimonialsContent = {
  heading: 'What clients say',
  testimonials: [
    {
      quote:
        'Harbor City Elite Cleaning consistently delivers a flawless experience. Our rental property has never looked better.',
      customer: 'Sofia R.',
      location: 'Fort Lauderdale',
      rating: '★★★★★',
    },
    {
      quote:
        'Our office feels refreshed and polished after every visit. The team is professional and respectful of our space.',
      customer: 'Marcus D.',
      location: 'Coral Gables',
      rating: '★★★★★',
    },
    {
      quote:
        'The move-out clean was exceptional. They handled our home with care and left it spotless for the walkthrough.',
      customer: 'Anita K.',
      location: 'West Palm Beach',
      rating: '★★★★★',
    },
  ],
}

export const pricingContent: PricingContent = {
  heading: 'Packages with clear value',
  description:
    'Select a package that fits your property and lifestyle. Every service includes premium products and our satisfaction guarantee.',
  packages: [
    {
      id: 'signature',
      name: 'Signature Clean',
      price: '$159',
      features: [
        '2-hour premium cleaning',
        'Kitchen, bathroom, and living area care',
        'Eco-conscious products',
        'Flexible scheduling',
      ],
    },
    {
      id: 'refresh',
      name: 'Executive Refresh',
      price: '$249',
      highlight: true,
      features: [
        '3-hour deep refresh',
        'Detailed dusting and high-touch surface care',
        'Appliance attention',
        'Recommended for busy households',
      ],
    },
    {
      id: 'concierge',
      name: 'Concierge Clean',
      price: '$339',
      features: [
        '4-hour luxury cleaning',
        'Upholstery and finish care',
        'Monthly inspection report',
        'Priority booking',
      ],
    },
  ],
}

export const faqContent: FAQContent = {
  heading: 'Frequently asked questions',
  items: [
    {
      question: 'Are your teams insured and background checked?',
      answer:
        'Yes. Every team member is background-screened, trained on premium standards, and covered by liability insurance.',
    },
    {
      question: 'Which areas do you serve?',
      answer:
        'We serve Miami, Fort Lauderdale, Palm Beach, and surrounding South Florida neighborhoods.',
    },
    {
      question: 'Can I request the same team each visit?',
      answer:
        'Yes. We do our best to assign a consistent team for repeat clients to ensure familiarity and quality.',
    },
    {
      question: 'Do you bring your own cleaning supplies?',
      answer:
        'Yes. We bring premium, eco-conscious products and can also accommodate your preferred supplies.',
    },
    {
      question: 'What if I’m not satisfied with the service?',
      answer:
        'We offer a 100% satisfaction guarantee. If anything is missed, we return within 24 hours at no extra cost.',
    },
  ],
}

export const contactContent: ContactContent = {
  heading: 'Ready to book your premium clean?',
  description:
    'Request a quote, schedule a service, or speak with our concierge team for custom South Florida cleaning.',
  phone: '+15551234567',
  email: 'hello@harborcityclean.com',
  area: 'Serving Miami, Fort Lauderdale, Palm Beach, and surrounding communities',
}
