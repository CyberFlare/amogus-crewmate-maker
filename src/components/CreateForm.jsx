import { useState } from 'react'
import { supabase } from '../client'
import './CreateForm.css'

const COLORS = ['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange', 'Pink', 'Black', 'White', 'Brown', 'Cyan', 'Magenta']

function CreateForm() {
  const [name, setName] = useState('')
  const [speed, setSpeed] = useState(0)
  const [color, setColor] = useState('')


  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log({ name, speed, color })
    await supabase
        .from('crewmates')
        .insert({name: name, speed: speed, color: color})
        .select()
    window.location = '/' //maybe redirect to new details page in the future
  }

  return (
    <form className="createForm" onSubmit={handleSubmit}>
      <h1>Create a New Crewmate</h1>

      <div className="formContainer">
        <div className="formCard nameForm">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter crewmate's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="formCard speedForm">
          <label htmlFor="speed">Speed (mph):</label>
          <input
            id="speed"
            type="number"
            placeholder="Enter speed in mph"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </div>

        <div className="formCard colorPicker">
          <span className="formCard-title">Color:</span>
          {COLORS.map((c) => (
            <label key={c} className="colorOption">
              <input
                type="radio"
                name="color"
                value={c}
                checked={color === c}
                onChange={(e) => setColor(e.target.value)}
              />
              {c}
            </label>
          ))}
        </div>
      </div>

      <button type="submit" className="submitBtn">Create Crewmate</button>
    </form>
  )
}

export default CreateForm
