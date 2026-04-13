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
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
    Soy Mauro Lizarraga, Software Developer con foco en frontend y experiencia construyendo soluciones en entornos
    corporativos. Mi base analítica y formación matemática me permiten resolver problemas con criterio lógico,
    estructura y atención al detalle. En Accenture consolidé experiencia trabajando con estándares enterprise,
    colaboración multidisciplinaria y entregas orientadas a calidad, mantenibilidad y escalabilidad. Actualmente
    estoy ampliando ese enfoque hacia un perfil fullstack con .NET 9, C#, APIs RESTful y PostgreSQL para diseñar
    productos digitales de punta a punta con visión técnica y de negocio.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10 '>
      {services.map((service,index) => {
        return <ServiceCard key={service.title} index={index} {...service}/>
      })}
    </div>
    </> 
  )
}

export default SectionWrapper (About,"about")