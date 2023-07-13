import { experience } from "../../data/experience"
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import { useState } from "react"

const Experience = () => {
  const [index, setIndex] = useState(0)

  const prevExp = () => {
    setIndex(index > 0 ? index - 1 : experience.length - 1)
  }

  const nextExp = () => {
    setIndex(index < experience.length - 1 ? index + 1 : 0)
  }

  return (
    <div className="bg-gray-100 flex flex-col justify-evenly items-center h-screen">
      <h1 className="uppercase text-3xl tracking-[0.3em]">
        Mon parcours
      </h1>
      <div className="relative">
        <Image
          src={experience[index].src}
          alt={experience[index].src.split("/").slice(-1)[0].split(".")[0]}
          className="rounded-lg object-cover h-[400px] md:w-[500px] w-[500px] md:w-[700px] bg-white opacity-50"
          width={800}
          height={400}
        />
        <div className="absolute text-2xl font-bold tracking-widest top-10 left-10 right-10 text-center">
          {experience[index].title}
        </div>
        <ChevronLeftIcon
          className="h-10 w-10 absolute left-10 top-1/2 -translate-y-1/2"
          onClick={() => prevExp()}
        />
        <ChevronRightIcon
          className="h-10 w-10 absolute right-10 top-1/2 -translate-y-1/2"
          onClick={() => nextExp()}
        />
        <div className="absolute bottom-10 left-10 right-10 text-justify">
          {experience[index].description}
        </div>
      </div>
    </div>
  )
}

export default Experience