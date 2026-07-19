import { useState } from 'react'
import amogus from './assets/amogus.png'
import './HomePage.css'

function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="homePage">
        <h1>Wekcome to the Amogus Crewmate Maker</h1>
        <p>Here is where you can create your very own set of crewmates before sending them off into space!</p>
        <img src={amogus} alt="Amogus crewmate" className="homePage-img" />
      </div>
    </>
  )
}

export default HomePage
