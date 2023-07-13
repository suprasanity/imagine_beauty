import { testimony } from "../../data/testimony"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"

const Testimony = () => {
  const [index, setIndex] = useState(0)

  const handlePrev = () => {
    setIndex(index > 0 ? index - 1 : testimony.length - 1)
  }

  const handleNext = () => {
    setIndex(index < testimony.length - 1 ? index + 1 : 0)
  }

  return (
    <div className="px-5 bg-gray-100 flex flex-col justify-evenly items-center h-screen">
      <h1 className="text-center uppercase text-3xl tracking-[0.3em]">
        {"Ce qu'ils disent de moi"}
      </h1>
      <div className="flex gap-10 justify-center items-center w-full px-5">
        <ChevronLeftIcon className="h-10 w-10" onClick={() => handlePrev()}/>
        <div className="bg-white rounded-lg flex flex-col gap-5 shadow-xl px-10 py-8 justify-start min-h-80 max-w-80 md:max-w-[500px] lg:max-w-[700px]">
          <div className="text-2xl tracking-widest text-center">
            {testimony[index].name}
          </div>
          <div>
            <FontAwesomeIcon icon={faQuoteLeft} className="h-6 w-6 text-gray-500"/>
          </div>
          <div className="text-justify">
            {testimony[index].description}
          </div>
          <div>
            <FontAwesomeIcon icon={faQuoteRight} className="h-6 w-6 text-gray-500"/>
          </div>
        </div>
        <ChevronRightIcon className="h-10 w-10" onClick={() => handleNext()}/>
      </div>
    </div>
  )
}

export default Testimony