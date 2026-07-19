import { Link } from 'react-router'
import anonomogus from '../assets/anonomogus.png'
import './CrewmateCard.css'

function CrewmateCard(props) {
  return (
    <div className="card" style={{ borderColor: props.color }}>
      <Link to={`/details/${props.id}`} className="cardBody">
        <img src={anonomogus} alt="Amogus anonomogus" className="cardImg" />
        <h2>Name: {props.name}</h2>
        <h2>Speed: {props.speed} mph</h2>
        <h2>Color: {props.color}</h2>
      </Link>
      <Link to={`/edit/${props.id}`} className="cardButton">Edit Crewmate</Link>
    </div>
  )
}

export default CrewmateCard
