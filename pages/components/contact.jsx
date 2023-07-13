import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { medias } from "../../data/media"
import classNames from "classnames"

const Contact = () => {
  return (
    <div className="flex flex-col h-screen gap-10 items-center justify-center">
      <h1 className="uppercase text-3xl tracking-[0.3em]">
        {"Contactez-moi !"}
      </h1>
      <div className="flex gap-10">
        {medias.map((media, index) => {
          return <a key={index}
            href={media.link}
          >
            <FontAwesomeIcon
              icon={media.icon}
              className={classNames(media.color, "w-10 h-10")}
            />
          </a>
        })}
      </div>
    </div>
  )
}

export default Contact