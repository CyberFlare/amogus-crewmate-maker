import { useState } from 'react'
import { supabase } from '../client'
import { colors } from '../constants'
import './Form.css'
import './CreateForm.css'

function CreateForm() {
  const [name, setName] = useState('')
  const [speed, setSpeed] = useState(0)
  const [color, setColor] = useState('')


  const handleSubmit = async (event) => {
    event.preventDefault()
    await supabase
        .from('crewmates')
        .insert({name: name, speed: speed, color: color})
        .select()
    window.location = '/gallery' 
  }

  return (
    <form className="pageCenter createForm" onSubmit={handleSubmit}>
      <h1>Create a New Crewmate</h1>

      <div className="formContainer">
        <div className="formCard nameForm">
          <label className="formLabel" htmlFor="name">Name:</label>
          <input
            id="name"
            className="formInput"
            type="text"
            placeholder="Enter crewmate's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="formCard speedForm">
          <label className="formLabel" htmlFor="speed">Speed (mph):</label>
          <input
            id="speed"
            className="formInput"
            type="number"
            placeholder="Enter speed in mph"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </div>

        <div className="formCard colorPicker">
          <span className="formTitle">Color:</span>
          {colors.map((c) => (
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

      <button type="submit" className="formButton submitButton">Create Crewmate</button>
    </form>
  )
}

export default CreateForm
