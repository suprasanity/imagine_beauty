import Profile from "./components/profile"
import Experience from "./components/experience"
import Services from "./components/services"
import Testimony from "./components/testimony"
import Contact from "./components/contact"

const Home = () => {
  return (
    <div className="flex flex-col">
      <Profile/>
      <Experience/>
      <Services/>
      <Testimony/>
      <Contact/>
    </div>
  )
}

export default Home
