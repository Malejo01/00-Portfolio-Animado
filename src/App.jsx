import { BrowserRouter } from "react-router-dom"
import {About, Contact, Hero, Navbar, Tech, Works, StarsCanvas, } from './components'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <div className="pt-20 sm:pt-24 bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <div className="relative z-0">
          <Hero />
        </div>
      </div>
      <div className="bg-primary">
        <About />
      </div>
      <div className="bg-primary">
        <Tech />
      </div>
      <div className="relative z-10 bg-primary">
        <Works />
      </div>
      <div className="relative z-0">
        <Contact />
        <StarsCanvas/>
      </div>
    </BrowserRouter>
  )
}

export default App
