import { Suspense, lazy, useEffect, useRef, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import {About, Hero, Navbar, Tech } from './components'

const Works = lazy(() => import("./components/Works"))
const Contact = lazy(() => import("./components/Contact"))
const StarsCanvas = lazy(() => import("./components/canvas/Stars"))

const DeferredSection = ({ className, minHeight, children }) => {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element || isVisible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      {
        root: null,
        rootMargin: "300px 0px",
        threshold: 0.01,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [isVisible])

  return (
    <div ref={containerRef} className={className}>
      {isVisible ? (
        <Suspense fallback={<div style={{ minHeight }} />}>
          {children}
        </Suspense>
      ) : (
        <div style={{ minHeight }} />
      )}
    </div>
  )
}

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
      <DeferredSection className="relative z-10 bg-primary" minHeight="680px">
        <Works />
      </DeferredSection>
      <DeferredSection className="relative z-0" minHeight="860px">
        <Contact />
        <StarsCanvas/>
      </DeferredSection>
    </BrowserRouter>
  )
}

export default App
