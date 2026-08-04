import Header from "./components/layout/Header/Header"
import Hero from "./components/sections/Hero/Hero"
import Trust from "./components/sections/Trust/Trust"
import Services from "./components/sections/Services/Services"
import WhatsAppButton from "./components/ui/WhatsAppButton"
import Footer from "./components/layout/Footer/Footer"
import { heroContent, trustBarContent, servicesContent } from "./data/siteContent"


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero content={heroContent}/>
        <Trust content={trustBarContent} />
        <Services content={servicesContent}/>
        <WhatsAppButton />
      </main>
      <Footer />
    </>
  )
}

export default App