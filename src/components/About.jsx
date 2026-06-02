import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from './hoc';
import { useLanguage } from '../context/LanguageContext';


const ServiceCard = ({index,title,description,icon}) => {
  const { t } = useLanguage();
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
          <h3 className='text-white text-[20px] font-bold text-center'>{t(`about.service${index + 1}_title`)}</h3>
          <p className='mt-3 text-secondary text-[14px] leading-6 text-center'>
            {t(`about.service${index + 1}_desc`)}
          </p>
        </div>
    </motion.div>
    </Tilt>
  )
}


const About = () => {
  const { t } = useLanguage();

  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>{t('about.subtext')}</p>
      <h2 className={styles.sectionHeadText}> {t('about.title')}</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","", 0.1,1)}
    className='mt-4 text-secondary text-[14px] sm:text-[17px] max-w-3xl leading-[24px] sm:leading-[30px]'
    >
      {t('about.desc1')}
    </motion.p>
    <motion.p
    variants={fadeIn("","", 0.15,1)}
    className='mt-4 text-secondary text-[14px] sm:text-[17px] max-w-3xl leading-[24px] sm:leading-[30px]'
    >
      {t('about.desc2')}
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