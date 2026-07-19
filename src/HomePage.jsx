import amogus from './assets/amogus.png'
import './HomePage.css'

function HomePage() {
  return (
    <div className="pageCenter homePage">
      <h1>Welcome to the Amogus Crewmate Maker</h1>
      <p>Here is where you can create your very own set of crewmates before sending them off into space!</p>
      <img src={amogus} alt="Amogus crewmate" className="homePageImg" />
    </div>
  )
}

export default HomePage
