import {motion} from 'framer-motion'
import {styles} from '../styles'
import { ComputersCanvas } from './canvas'


const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto flex flex-col pt-0">
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 pointer-events-none pt-0 shrink-0`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 h-24 sm:h-44 md:h-80 violet-gradient'/>
        </div>
        <div className='max-w-3xl'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Fullstack Developer <span className='text-[#915eff]'>| Analytical & AI Developer</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100 max-w-2xl`}>
            Creando experiencias digitales escalables con React, Angular y Vue, fusionando rigor matemático y lógica de Inteligencia Artificial.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center z-30 relative pointer-events-auto">
            <a
              href="/CV_Mauro_Lizarraga.pdf"
              download="Lizarraga_Mauro_CV.pdf"
              className="bg-[#915eff] hover:bg-[#7c4dff] text-white font-bold py-3 px-6 rounded-xl transition duration-300 ease-in-out inline-flex items-center gap-2 shadow-lg shadow-[#915eff]/30 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Descargar CV
            </a>
            <a
              href="https://linkedin.com/in/mauro-alejandro-lizarraga-8260711a3"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/20 hover:border-white/60 text-white font-bold py-3 px-6 rounded-xl transition duration-300 ease-in-out inline-flex items-center gap-2 cursor-pointer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Malejo01"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/20 hover:border-white/60 text-white font-bold py-3 px-6 rounded-xl transition duration-300 ease-in-out inline-flex items-center gap-2 cursor-pointer"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
      <div className="w-full flex-1 min-h-[58vh] sm:min-h-[50vh] md:min-h-[62vh] sm:-mt-10 md:-mt-2">
        <ComputersCanvas/>
      </div>

      <div className='w-full flex justify-center items-center z-20 mt-4 mb-6 sm:mt-0 sm:mb-0 sm:absolute sm:xs:bottom-10 sm:bottom-6'>
        <a href='#about'>
          <div className='w-[24px] h-[44px] sm:w-[35px] sm:h-[64px] rounded-3xl border-2 sm:border-4 border-secondary flex justify-center items-start p-1 sm:p-2'>
          <motion.div
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}

              className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero