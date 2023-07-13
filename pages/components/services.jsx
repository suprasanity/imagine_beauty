import Image from "next/image"
import { services } from "../../data/services"

const isArray = (arr) => {
  return Array.isArray(arr)
}

const Services = () => {
  return (
    <div className="h-screen flex flex-col justify-evenly items-center">
      <h1 className="uppercase text-3xl tracking-[0.3em]">
        Mes services
      </h1>
      <div className="flex flex-col gap-10 md:w-2/3 lg:w-1/2">
        {services.map((service, index) => (
          <div key={index} className="flex justify-evenly">
            {isArray(service) && service.length > 1 ? (
              <div className="flex justify-evenly w-full">
                {service.map((subService, subIndex) => (
                  <div key={subIndex}>
                    {subService === "logo" ?
                      <Image
                        src="/logo.png"
                        alt="logo"
                        width={200}
                        height={200}
                      />
                      :
                      <div className="h-28 w-28 bg-gray-200 rounded-full flex justify-center items-center">
                        {subService}
                      </div>}
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-28 w-28 bg-gray-200 rounded-full flex justify-center items-center">
                {service}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Services