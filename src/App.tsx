import Header from "./components/layout/Header/Header"
import Hero from "./components/sections/Hero/Hero"
import Trust from "./components/sections/Trust/Trust"
import Services from "./components/sections/Services/Services"
import WhatsAppButton from "./components/ui/WhatsAppButton"
import Footer from "./components/layout/Footer/Footer"
import { headerContent, heroContent, trustBarContent, servicesContent, footerContent } from "./data/siteContent"
import { whatsAppConfig } from "./config/site"


function App() {
  return (
    <>
      <Header content={headerContent}/>
      <main>
        <Hero content={heroContent}/>
        <Trust content={trustBarContent} />
        <Services content={servicesContent}/>
        <WhatsAppButton content={whatsAppConfig}/>
      </main>
      <Footer content={footerContent}/>
    </>
  )
}

export default App