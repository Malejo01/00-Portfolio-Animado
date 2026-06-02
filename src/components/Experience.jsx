import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"

import 'react-vertical-timeline-component/style.min.css'

import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "./hoc"
import { textVariant } from "../utils/motion"
import { useLanguage } from "../context/LanguageContext"


const ExperienceCard = ({experience}) => {
  const { t } = useLanguage();
  const companyKey = experience.company_name.toLowerCase();
  
  const title = t(`experience.${companyKey}_title`);
  const date = t(`experience.${companyKey}_date`);
  const points = t(`experience.${companyKey}_points`);

  return (
  <VerticalTimelineElement
  contentStyle={{background:'#1d1836', color:'#fff'}}
  contentArrowStyle={{borderRight: '7px solid #232631'}}
  date={Array.isArray(date) ? experience.date : date}
  iconStyle={{ background: experience.iconBg}}
  icon = {
    <div className="flex justify-center items-center w-full h-full">
      <img 
        src={experience.icon}
        alt={experience.company_name}
        className="w-[60%] h-[60%] object-contain"
      />
    </div>
         }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{Array.isArray(title) ? experience.title : title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>
      {experience.company_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
        {(Array.isArray(points) ? points : experience.points).map((point, index) => (
          <li key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
          {point}
          </li>
        ))}
    </ul>
  </VerticalTimelineElement>
  )
}

const Experience = () => {
  const { t, language } = useLanguage();

  return (
    <div key={language}>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>{t('experience.subtext')}</p>
      <h2 className={styles.sectionHeadText}> {t('experience.title')}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline key={language}>
          {experiences.map((experience, index) => {
            return <ExperienceCard key={index} experience={experience}/>
          })}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper (Experience,"experience")