import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from './hoc';


const ServiceCard = ({index,title,description,icon}) => {
  return (
    <Tilt className= "xs:w-[250px] w-full" >
      <motion.div
        variants={fadeIn("rigth","spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        options ={{
          max:45,
          scale:1,
          speed:450
        }} 
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain'/>
          <h3 className='text-white text- [20px] font-bold text-center'>{title}</h3>
          <p className='mt-3 text-secondary text-[14px] leading-6 text-center'>
            {description}
          </p>
        </div>
    </motion.div>
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
    className='mt-4 text-secondary text-[14px] sm:text-[17px] max-w-3xl leading-[24px] sm:leading-[30px]'
    >
      Soy Mauro Lizarraga, Fullstack Developer, Licenciado en Educación y Profesor de Matemática. Mi formación pedagógica y base analítica me otorgan una ventaja competitiva única: la capacidad de traducir problemas lógicos complejos y abstractos en arquitecturas de software claras, predecibles y mantenibles.
    </motion.p>
    <motion.p
    variants={fadeIn("","", 0.15,1)}
    className='mt-4 text-secondary text-[14px] sm:text-[17px] max-w-3xl leading-[24px] sm:leading-[30px]'
    >
      Tras consolidar experiencia en Accenture construyendo interfaces web corporativas bajo estándares de alto rendimiento (Angular, React, Vue), hoy en día diseño soluciones de punta a punta integrando .NET, bases de datos y flujos de Inteligencia Artificial. Actualmente, aplico este perfil híbrido tanto en la docencia de nivel Terciario (donde enseño Álgebra Lineal, Análisis Matemático, Inteligencia Artificial y Ciencia de Datos) como en la digitalización institucional y capacitación de más de 120 educadores, uniendo la psicología del aprendizaje con un diseño de interfaces (UX/UI) fluido y centrado en el usuario.
    </motion.p>

    <div className='mt-20 flex flex-wrap justify-center gap-10'>
      {services.map((service,index) => {
        return <ServiceCard key={service.title} index={index} {...service}/>
      })}
    </div>
    </> 
  )
}

export default SectionWrapper (About,"about")