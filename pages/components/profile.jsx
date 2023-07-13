import Image from "next/image"

export const Profile = () => {
  return (
    <div className="h-screen gap-10 flex flex-col md:flex-row items-center justify-center">
      <Image
        src="/nathalie.jpg"
        alt="Nathalie Dessirier"
        className="w-96 h-96 rounded-full object-cover"
        width={500}
        height={500}
      />
      <div className="flex flex-col gap-5 items-center md:items-start">
        <h1 className="text-4xl tracking-[0.3em]">
          Nathalie<br/>Dessirier
        </h1>
        <h2 className="text-2xl tracking-widest">
          Marketing Solutioniste
        </h2>
      </div>
    </div>
  )
}

export default Profile