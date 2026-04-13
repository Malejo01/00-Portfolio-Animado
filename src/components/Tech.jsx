import { SectionWrapper } from "./hoc"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
          <div className="w-28  h-28" 
              key={technology.name}
          >
            <div className="w-full h-full rounded-full bg-[#1a1a2e] border border-[#2e2e4f] flex items-center justify-center p-4">
              <img src={technology.icon} alt={technology.name} className="w-full h-full object-contain" />
            </div>
          </div>
        ))}
    </div>
  )
}

export default SectionWrapper (Tech,"")