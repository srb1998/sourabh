import { BallCanvas } from "./canvas"
import SectionWrapper from "../hoc/SectionWrapper"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-[108px] h-[108px]" key={technology.name}>
          <BallCanvas icon={technology.icon} loading="lazy" />
          <p className="flex justify-center text-secondary font-semibold">{technology.name}</p>
        </div>
      ))}

    </div>
  )
}

export default SectionWrapper(Tech , "")