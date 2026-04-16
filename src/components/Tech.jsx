import { motion } from 'framer-motion'
import { SectionWrapper } from "./hoc"
import { technologies } from "../constants"
import { styles } from "../styles"
import { textVariant } from "../utils/motion"

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Stack</p>
        <h2 className={styles.sectionHeadText}>Tecnologías</h2>
      </motion.div>

      <div className="mt-10 grid grid-cols-3 sm:flex sm:flex-row sm:flex-wrap sm:justify-center gap-6 sm:gap-10">
        {technologies.map((technology) => (
            <div className="flex flex-col items-center gap-2"
                key={technology.name}
            >
              <div className="w-full sm:w-28 aspect-square rounded-full bg-[#1a1a2e] border border-[#2e2e4f] flex items-center justify-center p-3 sm:p-4">
                <img src={technology.icon} alt={technology.name} className="w-full h-full object-contain" />
              </div>
              <p className="text-center text-[10px] sm:text-[12px] text-secondary leading-tight">
                {technology.name}
              </p>
            </div>
          ))}
      </div>
    </>
  )
}

export default SectionWrapper (Tech,"")