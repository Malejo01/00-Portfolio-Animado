import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion' 

import { styles } from '../styles'

import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'


const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className= "xs:w-[250px] w-full" >
      <motion.div
        variants={fadeIn("rigth","spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded - [20px] shadow-card'
      />
    </Tilt>
  )
}


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introducción</p>
      <h2 className={styles.sectionHeadText}> Descripción General</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","", 0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
    ¡Hola! Soy Lizarraga Mauro, un apasionado desarrollador web de 32 años. 
    Mi fascinación por las tecnologías me ha llevado a especializarme en lenguajes y herramientas como React,
    Node.js, JavaScript, HTML, CSS y Three.js. Me encanta estar en constante aprendizaje y explorar las infinitas
    posibilidades que ofrecen las nuevas tecnologías, tanto en el ámbito del desarrollo web como en el educativo.
    Estoy siempre listo para aplicar mis conocimientos en la creación de páginas web y aplicaciones útiles que 
    hagan una diferencia. ¡Gracias por visitar mi portfolio y espero que encuentres algo que te inspire! 
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10 '>
      {services.map((service,index) => {
        <ServiceCard key={service.title} index={index} {...service}/>
      })}
    </div>
    </> 
  )
}

export default About