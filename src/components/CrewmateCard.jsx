import anonomogus from '../assets/anonomogus.png'
import './CrewmateCard.css'

const COLOR_MAP = {
  Red: '#e63946',
  Green: '#4caf50',
  Blue: '#2196f3',
  Purple: '#9c27b0',
  Yellow: '#ffd60a',
  Orange: '#ff8c1a',
  Pink: '#ff69b4',
  Black: '#3a3a3d',
  White: '#f2f2f2',
  Brown: '#8b5a2b',
  Cyan: '#00bcd4',
  Magenta: '#e91e8c',
}

function CrewmateCard(props) {
  const borderColor = COLOR_MAP[props.color] ?? '#6b6b6e'

  return (
    <div className="card" style={{ borderColor }}>
      <img src={anonomogus} alt="Amogus anonomogus" className="card-img" />
      <h2>Name: {props.name}</h2>
      <h2>Speed: {props.speed} mph</h2>
      <h2>Color: {props.color}</h2>
      <button className="card-btn">Edit Crewmate</button>
    </div>
  )
}

export default CrewmateCard
