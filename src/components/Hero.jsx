import {motion} from 'framer-motion'
import { useState, useEffect } from "react";
import {styles} from '../styles'
import { ComputersCanvas } from './canvas'


const Hero = () => {
  const [isMobile,SetIsMobile] = useState(false)

  useEffect(() => {
    //Añadimos un eventlistener para los cambios en el tamaño de la pantalla
   const mediaQuery = window.matchMedia('(max-width:500px)');
  // Inicializamos la variable isMobile
    SetIsMobile(mediaQuery.matches);
    // Definimos una funcion callback para ver cambios en el mediaQuery
    const handleMediaQueryChange = (event) => {
      SetIsMobile(event.matches)
    }
    //añadimos la funcion callback como listener para cambios en el mediaQuery
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    // Removemos el listener una vez que el componente ya a sido montado
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  },[])

  return (
    <section className="relative w-full h-screen mx-auto" >
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        |
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hola! soy <span className='text-[#915eff]'>Mauro</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Soy desarrollador web con React <br className='sm:block hidden'/> de aplicaciones FrontEnd</p>
        </div>

      </div>
        {isMobile ?<ComputersCanvas/> : ""}

      <div className='absolute xs:bottom-10 bottom -32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
          <motion.dev
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}

              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero