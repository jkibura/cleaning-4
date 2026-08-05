import Header from "./components/layout/Header/Header"
import Hero from "./components/sections/Hero/Hero"
import About from "./components/sections/About/About"
import Process from "./components/sections/Process/Process"
import Testimonials from "./components/sections/Testimonials/Testimonials"
import Pricing from "./components/sections/Pricing/Pricing"
import FAQ from "./components/sections/FAQ/FAQ"
import Services from "./components/sections/Services/Services"
import Trust from "./components/sections/Trust/Trust"
import Contact from "./components/sections/Contact/Contact"
import WhatsAppButton from "./components/ui/WhatsAppButton"
import Footer from "./components/layout/Footer/Footer"
import {
  headerContent,
  heroContent,
  aboutContent,
  processContent,
  testimonialsContent,
  pricingContent,
  faqContent,
  trustBarContent,
  servicesContent,
  contactContent,
  footerContent,
} from "./data/siteContent"
import { whatsAppConfig } from "./config/site"


function App() {
  return (
    <>
      <Header content={headerContent} />
      <main>
        <Hero content={heroContent} />
        <Trust content={trustBarContent} />
        <About content={aboutContent} />
        <Services content={servicesContent} />
        <Process content={processContent} />
        <Testimonials content={testimonialsContent} />
        <Pricing content={pricingContent} />
        <FAQ content={faqContent} />
        <Contact content={contactContent} />
        <WhatsAppButton content={whatsAppConfig} />
      </main>
      <Footer content={footerContent} />
    </>
  )
}

export default App