import Hero from "./components/sections/Hero/Hero"
import { heroContent } from "./data/siteContent"


function App() {
  return (
    <>
      <main>
        <Hero content={heroContent}/>
      </main>
    </>
  )
}

export default App